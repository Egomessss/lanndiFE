'use client';

import Link from 'next/link';

import { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';

import { Anchor, Button, Checkbox, Divider, PasswordInput, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import { SocialButtons } from '@/components/auth/SocialButtons/SocialButtons';
import { useAuth } from '@/hooks/auth';
import useUser from '@/hooks/use-user';

interface FormErrors {
  email?: string;
  password?: string;
}


const Login = () => {


  const router = useRouter();

  const { refetch } = useUser();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      shouldRemember: '',
    },
  });

  const { mutate: login, isPending } = useMutation({
      mutationFn: async () => {
        // Assuming crsf() is an async function that sets up CSRF tokens
        await axios.get('/sanctum/csrf-cookie');
        // Now, make your Axios POST request
        await axios.post('/login', form.values);
        refetch();
      },
      onSuccess:
        () => {
          const thirtyDaysInSeconds = 60 * 60 * 24 * 30;
          // On successful login, set a cookie to last for 30 days
          document.cookie = `isLoggedIn=true; path=/; max-age=${thirtyDaysInSeconds}; secure; samesite=lax`;
          router.push('/');
        }
      ,
      onError:
        (error) => {
          console.log('error', error);
          // @ts-ignore
          if (error.response) {
            // @ts-ignore
            const status = error.response.status;
            if (status === 422) {
              // Handle Laravel validation errors
              // @ts-ignore
              form.setErrors(error.response.data.errors || {});
            } else if (status === 405 || status === 419) {
              notifications.show({
                title: 'Error',
                message: 'An error occurred. Please try again or clear your browser cookies.',
                color: 'red',
              });
            } else {
              notifications.show({
                title: 'Error',
                message: error.toString(),
                color: 'red',
              });
            }
          }
        },
    },
  );

  const validateBeforeSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <form onSubmit={validateBeforeSubmit} className="flex flex-col gap-4 min-w-96">
        {/*<SocialButtons/>*/}
        {/*<Divider  label="or" labelPosition="center"/>*/}
        {/* Email Address */}
        <TextInput
          type="email"
          leftSection={<IconAt size="1rem" />}
          label="Email"
          {...form.getInputProps('email')}
        />
        {/* Password */}
        <PasswordInput
          label="Password"
          {...form.getInputProps('password')}
        />
        {/*<Anchor component={Link} size="sm" href="/login">*/}
        {/*  Already registered?*/}
        {/*</Anchor>*/}

        {/* Remember Me */}
        <Checkbox
          label="Remember me"
          {...form.getInputProps('shouldRemember')}
        />

        <div className="flex items-center justify-between ">
          <Anchor component={Link} size="sm" href="/forgot-password">
            Forgot your password?
          </Anchor>
          <Anchor component={Link} size="sm" href="/register">
            Register here
          </Anchor>

          <Button loading={isPending} type="submit">Login</Button>
        </div>
      </form>
    </>
  );
};

export default Login;
