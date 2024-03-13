import useSWR from 'swr';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';


export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();

  const { data: user, error, mutate } = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409) throw error;
        router.push('/verify-email');
      }),
  );

  const [isLoading, setIsLoading] = useState(false);
  // Add similar state variables for other actions...


  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const register = async ({ setErrors, ...props }) => {
    setIsLoading(true);
    await csrf();

    setErrors([]);

    axios
      .post('/register', props)
      .then(() => {
        mutate();
        setIsLoading(false);
      })
      .catch(error => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
        setIsLoading(false)
      });
  };

  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);
    setIsLoading(true)

    axios
      .post('/login', props)
      .then(() => {
        mutate();
        const twoWeeksInSeconds = 60 * 60 * 24 * 14;
        // On successful login, set a cookie to last for 2 weeks
        document.cookie = `isLoggedIn=true; path=/; max-age=${twoWeeksInSeconds}; secure; samesite=Strict`;
        // router.push('/');
      })
      .catch(error => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
        setIsLoading(false);
      });
  };

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/forgot-password', { email })
      .then(response => setStatus(response.data.status))
      .catch(error => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/reset-password', { token: params.token, ...props })
      .then(response =>
        router.push('/login?reset=' + btoa(response.data.status)),
      )
      .catch(error => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post('/email/verification-notification')
      .then(response => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => {
        document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=Strict';
        mutate();
      });
    }

    window.location.pathname = '/login';
  };


  return {
    isLoading,
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};