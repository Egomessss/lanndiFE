'use client';

import Link from 'next/link';

import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Anchor, Button, Checkbox, Divider, PasswordInput, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import { SocialButtons } from '@/components/auth/SocialButtons/SocialButtons';
import { useAuth } from '@/hooks/auth';

interface FormErrors {
  email?: string;
  password?: string;
}


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  // const form = useForm({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //     shouldRemember: '',
  //   },
  // });

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  });


  const submitForm = async (event: any) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  const validateBeforeSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    login();
  };


  // const { mutate: login, isPending } = useMutation({
  //     mutationFn: async () => {
  //       // Assuming crsf() is an async function that sets up CSRF tokens
  //       await csrf();
  //       // Now, make your Axios POST request
  //       await axios.post('/login', form.values);
  //
  //     },
  //     onSuccess:
  //       () => {
  //         const twoWeeksInSeconds = 60 * 60 * 24 * 14;
  //         // On successful login, set a cookie to last for 2 weeks
  //         document.cookie = `isLoggedIn=true; path=/; max-age=${twoWeeksInSeconds}; secure; samesite=Strict`;
  //         // router.push('/');
  //       }
  //     ,
  //     onError:
  //       (error) => {
  //         console.log('error', error);
  //         // @ts-ignore
  //         if (error.response.status === 422) {
  //           // Handle Laravel validation errors
  //           // @ts-ignore
  //           form.setErrors(error.response.data.errors || {});
  //         } else {
  //           notifications.show({
  //             title: 'Error',
  //             message: error.toString(),
  //             // message: 'Something went wrong... Please try again!',
  //             color: 'red',
  //           });
  //         }
  //       },
  //   },
  // );
  //
  // const validateBeforeSubmit: FormEventHandler = (e) => {
  //   e.preventDefault();
  //   login();
  // };

  return (
    <>
      <form onSubmit={submitForm} className="flex flex-col gap-4 min-w-96">
        {/* Email Address */}
        <TextInput
          type="email"
          leftSection={<IconAt size="1rem" />}
          label="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          // error={errors?.email}
        />
        {/* Password */}

        <PasswordInput
          label="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          // error={errors?.password}
        />
        {/* Remember Me */}
        <Checkbox
          label="Remember me"
          checked={shouldRemember}
          onChange={(event) => setShouldRemember(event.currentTarget.checked)}
        />

        <div className="flex items-center justify-between ">
          <Anchor component={Link} size="sm" href="/forgot-password">
            Forgot your password?
          </Anchor>
          <Anchor component={Link} size="sm" href="/register">
            Register here
          </Anchor>

          <Button
            // loading={isLoading}
            type="submit">Login</Button>
        </div>
      </form>
    </>
  );
};

export default Login;
