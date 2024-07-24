'use client';


import { IconAlertCircle, IconExternalLink, IconFile, IconInfoCircle, IconRefresh } from '@tabler/icons-react';
import { Alert, Anchor, Button, Card, Divider, FileInput, Textarea, TextInput, ThemeIcon } from '@mantine/core';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/(sites)/Loading';
import ErrorMessage from '@/app/(sites)/Error';
import { SiteSettings } from '@/app/(sites)/settings/[slug]/page';
import Link from 'next/link';
import useUser from '@/hooks/use-user';
import { notifications } from '@mantine/notifications';
import SitemapConfiguration from '@/app/(sites)/settings/_components/SitemapConfiguration';
import RobotsSettingsForm from '@/app/(sites)/settings/_components/RobotsSettingsForm';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import TextLength from '@/components/common/TextLength';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import SiteRobotsSettingsForm from '@/app/(sites)/settings/_components/RobotsSettingsForm';


function SiteCanonicalUrlConfiguration(props: { plan: string; data: SiteSettings }) {
  const { data } = props;
  const {
    name,
    title,
    description,
    language,
    headCode,
    bodyCode,
    slug,
    canonicalUrl,
  } = data;
  const queryClient = useQueryClient();

  const formSchema = z.object({
    canonicalUrl: z.string().url().optional(), // Optional since it can be empty
  });


// Usage with useForm
  const form = useForm({
    initialValues: {
      name: name || '', // Shorthand for title: title
      title: title || '', // Shorthand for title: title
      description: description || '', // Defaults to what's passed in, or you can provide a fallback
      favIcon: null, // Defaults to null if favIco is not provided
      ogImage: null, // Defaults to null if ogImage is not provided
      language: language || 'en', // Default to 'en' if language is not provided
      headCode: headCode || '', // Shorthand for headCode: headCode
      bodyCode: bodyCode || '', // Shorthand for bodyCode: bodyCode
      canonicalUrl: canonicalUrl || '', // Shorthand for canonicalUrl: canonicalUrl
    },
    validate: zodResolver(formSchema), // Here you integrate Zod's validation with useForm
  });

  const { mutate: submitSite, isPending } = useMutation({
      mutationFn: async () => {
        // Use Axios to send formData
        return await axios.post(`/api/v1/sites/settings/${slug}/update`, form.values);
      },
      onSuccess:
        (data) => {
          const responseData = data?.data; // Assuming your data is nested under a 'data' key
          if (responseData) {
            notifications.show({
              title: 'Success!',
              message: responseData.message,
              color: 'green',
            });
            queryClient.invalidateQueries({ queryKey: ['siteSettings', slug] });
          }
        }
      ,
      onError:
        (error) => {
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


  return (
    <div className="flex items-start gap-8 flex-col my-4 w-full">
      <h3>Canonical URL</h3>
      <p>
        Set a global URL for the site’s canonical tag. This tells search engines which URL to index, and avoids duplicate
        content.
      </p>
      <TextInput className="w-full"
                 label="Canonical URL"
                 placeholder="https://example.com"
                 {...form.getInputProps('canonicalUrl')}
      />
      <div className="flex items-end justify-end w-full">
        <Button onClick={validateBeforeSubmit} loading={isPending}>Save Changes</Button>
      </div>
    </div>
  );
}

export default function SeoConfiguration(props: { plan: string; domainData: SiteSettings }) {
  const { plan, domainData } = props;
  const { domain, slug } = domainData;


  return (
    <div className="w-full rounded-lg p-4">
      {domain !== null ? <>
        <SitemapConfiguration domain={domain} slug={slug} />
        <div className="flex justify-start gap-4 w-full flex-col items-start">
          <Divider className="w-full" my="md" />
          <SiteRobotsSettingsForm plan={plan} data={domainData} />
          <Divider className="w-full" my="md" />
          <SiteCanonicalUrlConfiguration plan={plan} data={domainData} />
        </div>
      </> : <Alert variant="light" color="pink" title="Assign a custom domain" icon={<IconInfoCircle />}>
        <p>Before you can take advantage of lanndi&apos;s SEO capability you must assign your website a custom domain</p>
      </Alert>}

    </div>
  );
}