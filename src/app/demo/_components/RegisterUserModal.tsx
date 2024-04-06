'use client';

import React, { FormEventHandler, useEffect, useState } from 'react';
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
import { useEditorMaybe } from '@/components/editor/context/EditorInstance';

// Define interface for form values
interface FormValues {
  email: string;
  password: string;
  subdomain: string;
  editorData: any; // Define a more specific type if possible
}

const CreateSiteModal = () => {
    const editor = useEditorMaybe();
    const [opened, { open, close }] = useDisclosure(false);
    const router = useRouter();

    const validSubdomainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{2,61}[a-zA-Z0-9])?$/;

    const { csrf } = useAuth();


    const formSchema = z.object({
      // editorData: z.array(),
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

    const editorData = editor?.getProjectData();

    const form = useForm({
      initialValues: {
        editorData: editorData,
        subdomain: '',
        email: '',
        password: '',
      },
      validate: zodResolver(formSchema),
    });


    useEffect(() => {
      // This assumes getProjectData is synchronous; if not, adjust accordingly.
      form.setValues({ editorData: editorData });
    }, [open, editor]);

    const { mutate: register, isPending } = useMutation({
      mutationFn: async () => {
        try {
          await csrf(); // Ensure CSRF setup
          const response = await axios.post('/register-demo', form.values);
          return response.data; // Return the Axios response data
        } catch (error) {
          // Handle errors that occur during the request or setup
          // @ts-ignore
          if (!error.response) {
            // Network error, server down, or CORS issue
            throw new Error('Network error, please check your internet connection or try again later.');
          } else {
            // Re-throw error to be caught by onError
            throw error;
          }
        }
      },
      onSuccess: (data) => {
        console.log('response', data);
        const twoWeeksInSeconds = 60 * 60 * 24 * 14;
        document.cookie = `isLoggedIn=true; path=/; max-age=${twoWeeksInSeconds}; secure; samesite=Strict`;
        router.push(`/editor/${data.slug}`);
        notifications.show({
          title: 'Success',
          message: 'Your account has been created. Redirecting to the editor...',
          color: 'green',
        });
      },
      onError: (error) => {
        let errorMessage = 'An unexpected error occurred. Please try again!';
        // @ts-ignore
        if (error.response) {
          // @ts-ignore
          const { status, data } = error.response;
          if (status === 422) {
            form.setErrors(data.errors || {});
            errorMessage = 'Please correct the highlighted errors.';
          } else if (status >= 500) {
            errorMessage = 'Server error, please try again later.';
          }
        }
        notifications.show({
          title: 'Error',
          message: errorMessage,
          color: 'red',
        });
      },
    });

    const validateBeforeSubmit: FormEventHandler = (e) => {
      e.preventDefault();
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
  }
;

export default CreateSiteModal;
;