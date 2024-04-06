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

interface FormErrors {
  email?: string;
  password?: string;
}


const Login = () => {


  const router = useRouter();


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
        await axios.get('/sanctum/csrf-cookie/');
        // Now, make your Axios POST request
        await axios.post('/login/', form.values);

      },
      onSuccess:
        () => {
          const twoWeeksInSeconds = 60 * 60 * 24 * 14;
          // On successful login, set a cookie to last for 2 weeks
          document.cookie = `isLoggedIn=true; path=/; max-age=${twoWeeksInSeconds}; secure; samesite=Strict`;
          // router.push('/');
        }
      ,
      onError:
        (error) => {
          console.log('error', error);
          // @ts-ignore
          if (error.response.status === 422) {
            // Handle Laravel validation errors
            // @ts-ignore
            form.setErrors(error.response.data.errors || {});
          } else {
            notifications.show({
              title: 'Error',
              message: error.toString(),
              // message: 'Something went wrong... Please try again!',
              color: 'red',
            });
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
        <Anchor component={Link} size="sm" href="/login">
          Already registered?
        </Anchor>

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
