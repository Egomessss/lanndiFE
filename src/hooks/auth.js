'use client'

import axios from '@/lib/axios';
import { useParams, useRouter } from 'next/navigation';


export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();


  const csrf = () => axios.get('/sanctum/csrf-cookie')

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



  return {
    csrf,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
  };
};