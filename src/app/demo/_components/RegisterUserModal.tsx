'use client';

import React, { useState } from 'react';
import { ActionIcon, Anchor, Button, Modal, PasswordInput, TextInput, Tooltip } from '@mantine/core';
import { IconAt, IconDeviceFloppy, IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { z } from 'zod';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';


const CreateSiteModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const validSubdomainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{2,61}[a-zA-Z0-9])?$/;
  const formSchema = z.object({
    subdomain: z.string()
      .optional()
      .refine((value) => !value || value.length > 3, {
        message: 'Subdomains must have at least 4 letters',
      })
      .refine((value) => !value || value.length < 63, {
        message: 'Subdomains must have less than 63 letters',
      })
      .refine((value) => !value || validSubdomainRegex.test(value), {
        message: 'Invalid subdomain format',
      })
      .refine((value) => !value || !value.includes('lanndi'), {
        message: 'Cannot use lanndi as your custom subdomain',
      }),
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
      subdomain: '',
      email: '',
      password: '',
    },
    validate: zodResolver(formSchema),
  });

  const { mutate: register, isPending } = useMutation({
      mutationFn:
        async () => await axios.post('/register', form.values),
      onSuccess:
        () => {
          notifications.show({
            title: 'Success!',
            message: 'Redirecting...',
            color: 'green',
          });
          router.push(`/editor/${form.values.subdomain}`);

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

  const validateBeforeSubmit = () => {
    form.validate();
    const isValid = form.isValid();
    if (isValid) {
      register();
    }
  };


  return (
    <>
      <Tooltip label="Register before you can save your data">
        <ActionIcon loading={isPending} onClick={open} className="animate-pulse"
                    variant="subtle">
          <IconDeviceFloppy size="1rem" />
        </ActionIcon>
      </Tooltip>

      <Modal centered opened={opened} onClose={close} title="User & Site Creation">
        <form onSubmit={validateBeforeSubmit} className="flex flex-col gap-4 ">
          <TextInput
            label="Site subdomain - will appear before .lanndi.com, e.g lanndisawesome.lanndi.com"
            placeholder="subdomain"
            {...form.getInputProps('subdomain')}
          />
          {/* Password */}
          <TextInput
            type="email"
            leftSection={<IconAt size="1rem" />}
            label="Email"
            placeholder="user@example.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            placeholder="SecurePassword121231@#!"
            label="Password"
            {...form.getInputProps('password')}
          />
          <Button loading={isPending} type="submit">Register</Button>
        </form>
      </Modal>
    </>
  );
};

export default CreateSiteModal;