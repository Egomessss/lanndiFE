import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import { Button, TextInput } from '@mantine/core';
import React from 'react';
import { SiteSettings } from '@/app/(app)/sites/[slug]/settings/page';

const validDomainRegex = new RegExp(
  /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
);

const validSubdomainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{2,61}[a-zA-Z0-9])?$/;

function DomainSettingsForm({ domain, subdomain, slug }: SiteSettings) {

  const queryClient = useQueryClient();

  const formSchema = z.object({
    subdomain: z.string()
      .min(4, 'Subdomain must have at least 4 letters')
      .max(63, 'Must be 63 or fewer characters long')
      .refine((value) => validSubdomainRegex.test(value), {
        message: 'Invalid subdomain format',
      }),
    domain: z.string()
      .min(3, 'Domains must have at least 4 letters')
      .max(63, 'Must be 63 or fewer characters long')
      .refine((value) => validDomainRegex.test(value), {
        message: 'Invalid domain format',
      })
      .refine((value) => !value.includes('lanndi.com'), {
        message: 'Cannot use lanndi.com as your custom domain',
      }),
  });

  const form = useForm({
    initialValues: {
      subdomain: subdomain || '',
      domain: domain || '',
    },
    validate: zodResolver(formSchema),
  });

  const { mutate: submitSiteDomains, isPending } = useMutation({
      mutationFn:
        async () => await axios.patch(`/api/v1/site/${slug}/domain`, form.values),
      onSuccess:
        (data) => {
          const response = data?.data;
          notifications.show({
            title: 'Success!',
            message: response.message,
            color: 'green',
          });
          queryClient.invalidateQueries({ queryKey: ['siteSettings', slug] });
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
    console.log(isValid);
    if (isValid) {
      submitSiteDomains();
    }
  };


  return <div className="w-full flex flex-col gap-4 my-10">

    <h2>Domain settings</h2>

    <div className="gap-4 flex flex-col w-full">
      <TextInput
        label="Subdomain"
        placeholder="Insert site subdomain here..."
        {...form.getInputProps('subdomain')}
        rightSectionWidth={120}
        rightSection={<div>lanndi.com</div>}
      />
      <TextInput
        label="Domain"
        placeholder="Insert site domain here..."
        {...form.getInputProps('domain')}
      />
      <Button onClick={validateBeforeSubmit} loading={isPending}>Save Changes</Button>
    </div>
  </div>;
}

export default DomainSettingsForm;