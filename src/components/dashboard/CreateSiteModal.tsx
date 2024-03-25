'use client';

import React from 'react';
import { Button, Modal, TextInput, Tooltip } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { z } from 'zod';

type props = {
  isOverMaxSitesAllowed: boolean
}

const CreateSiteModal = (isOverMaxSitesAllowed: props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const validSubdomainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{2,61}[a-zA-Z0-9])?$/;

  const formSchema = z.object({
    name: z.string().min(4, 'Name must have at least 4 letters').max(100, { message: 'Must be 100 or fewer characters long' }),
    subdomain: z.string()
      .optional()
      .refine((value) => !value || value.length > 3, {
        message: 'Subdomains must have at least 4 letters',
      })
      .refine((value) => !value || value.length < 63, {
        message: 'Subdomains must have at least 4 letters',
      })
      .refine((value) => !value || validSubdomainRegex.test(value), {
        message: 'Invalid subdomain format',
      })
      .refine((value) => !value || !value.includes('lanndi.com'), {
        message: 'Cannot use lanndi.com as your custom domain',
      }),
  });

  const form = useForm({
    initialValues: {
      name: '',
      subdomain: '',
    },
    validate: zodResolver(formSchema),
  });

  const { mutate: submitSite, isPending } = useMutation({
      mutationFn:
        async () => await axios.post('/api/v1/sites/settings/store', form.values),
      onSuccess:
        (data) => {
          const responseData = data?.data; // Assuming your data is nested under a 'data' key
          if (responseData) {
            notifications.show({
              title: 'Success!',
              message: responseData.message,
              color: 'green',
            });
            console.log(`/editor/${responseData.slug}`);
            form.reset();
            close();
            queryClient.invalidateQueries({ queryKey: ['userSites'] });
            router.push(`/editor/${responseData.slug}`);
          }
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
      submitSite();
    }
  };
  console.log(isOverMaxSitesAllowed);

  return (
    <>
      {!isOverMaxSitesAllowed ? <Tooltip label="Upgrade your plan so you can host more websites">
          <Button onClick={open} disabled={!!isOverMaxSitesAllowed} rightSection={<IconPlus size="1rem" />}>
            New Site</Button>
        </Tooltip> :
        <Button onClick={open} rightSection={<IconPlus size="1rem" />}>New Site</Button>}
      <Modal centered opened={opened} onClose={close} title="Create your site">
        <div className="gap-4 flex flex-col ">
          <TextInput
            withAsterisk
            label="Site name"
            placeholder="Insert site name here..."
            {...form.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            description="The domain that will appear before *.lanndi.com* eg. example.lanndi.com"
            label="Site subdomain"
            placeholder="Insert site subdomain here..."
            {...form.getInputProps('subdomain')}
          />
          <Button onClick={validateBeforeSubmit} loading={isPending}>Create Site</Button>
        </div>
      </Modal>
    </>
  );
};

export default CreateSiteModal;