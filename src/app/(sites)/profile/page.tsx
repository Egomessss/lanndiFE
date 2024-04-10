'use client';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import useUser from '@/hooks/use-user';
import Loading from '@/app/(sites)/Loading';
import ErrorMessage from '@/app/(sites)/Error';
import { Button, FileInput, PasswordInput, TextInput } from '@mantine/core';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconAt } from '@tabler/icons-react';
import DeleteUser from '@/app/(sites)/profile/_components/DeleteUser';
import { User } from '@/lib/types';

const Page = () => {

  const { user } = useUser();

  const queryClient = useQueryClient();
  //
  const formSchema = z.object({
    name: z.string().max(60, 'Name must be at most 60 characters'),
    new_password: z.string(),
    previous_password: z.string(),
    email: z.string().email(),
  });

  const form = useForm({
    initialValues: {
      name: user?.name || '',
      email: user?.email || '',
      previous_password: '',
      new_password: '',
    },
    validate: zodResolver(formSchema),
  });

  const { mutate: updateUser, isPending } = useMutation({
      mutationFn: async () => {
        await axios.patch(`/api/v1/user/profile/update`, form.values);
      },
      onSuccess:
        () => {
          notifications.show({
            title: 'Success!',
            message: 'Profile successfully updated',
            color: 'green',
          });
          queryClient.invalidateQueries({ queryKey: ['user'] });

        }
      ,
      onError:
        (error) => {
          console.log(error);
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

  const validateBeforeSubmit = () => {
    form.validate();
    const isValid = form.isValid();
    if (isValid) {
      updateUser();
    }
  };


  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-between">
        <h2>Account Settings</h2>  <DeleteUser /></div>

      <TextInput
        label="Name"
        placeholder="Enter your name"
        {...form.getInputProps('name')}
      />
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<IconAt size="1rem" />}
        label="Email"
        placeholder="Enter your email"
        {...form.getInputProps('email')}
      />
      <PasswordInput
        label="Previous Password"
        placeholder="Enter your previous password"
        type="password"
        {...form.getInputProps('previous_password')}
      />
      <PasswordInput
        label="New Password"
        placeholder="Enter your new password"
        type="password"
        {...form.getInputProps('new_password')}
      />
      <Button onClick={validateBeforeSubmit} loading={isPending} disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </Button>
    </div>
  );
};

export default Page;