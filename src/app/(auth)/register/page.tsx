'use client';

import { Anchor, Button, PasswordInput, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import axios from '../../../lib/axios';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FormEventHandler } from 'react';
import useUser from '@/hooks/use-user';
import { useAuth } from '@/hooks/auth';

const Page = () => {
  const router = useRouter();
  const { csrf } = useAuth();
  const formSchema = z.object({
    email: z.string()
      .email({ message: 'Invalid email address' }) // Ensure the string is a valid email
      .min(4, 'Email must have at least 4 characters') // Minimum length check
      .max(100, { message: 'Email must be 100 or fewer characters long' }), // Maximum length check
    password: z.string()
      .min(8, 'Password must have at least 8 characters') // Minimum length check
      .max(63, { message: 'Password must be 63 or fewer characters long' }), // Maximum length check
  });

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(formSchema),
  });


  const { mutate: register, isPending } = useMutation({
      mutationFn: async () => {
        // Assuming crsf() is an async function that sets up CSRF tokens
        await csrf();
        // Now, make your Axios POST request
        const response = await axios.post('/register', form.values);
        return response.data;
      },
      onSuccess:
        () => {
          const twoWeeksInSeconds = 60 * 60 * 24 * 14;
          // On successful login, set a cookie to last for 2 weeks
          document.cookie = `isLoggedIn=true; path=/; max-age=${twoWeeksInSeconds}; secure; samesite=Strict`;
          router.push('/plans');
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
              message: 'Something went wrong... Please try again!',
              color: 'red',
            });
          }
        },
    },
  );

  const validateBeforeSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    form.validate();
    const isValid = form.isValid();
    if (isValid) {
      register();
    }
  };


  return (
    <form onSubmit={validateBeforeSubmit} className="flex flex-col gap-4 md:w-96">
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
      <Button loading={isPending} type="submit">Register</Button>
    </form>
  );
};

export default Page;
