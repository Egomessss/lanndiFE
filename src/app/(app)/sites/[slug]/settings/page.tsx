'use client';

import React from 'react';
import { Button, Tabs, TextInput } from '@mantine/core';
import SiteSettingsForm from '@/app/editor/[slug]/_components/SiteSettingsForm';
import Loading from '@/app/(app)/Loading';
import ErrorMessage from '@/app/(app)/Error';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { useParams, useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import DomainSettingsForm from '@/app/(app)/sites/[slug]/settings/_components/DomainSettingsForm';

export type SiteSettings = {
  name: string,
  title: string,
  description: string,
  favIcon: File | string,
  ogImage: File | string,
  domain: string,
  subdomain: string
  language: string,
  headCode: string,
  bodyCode: string,
  slug: string
}


const Page = () => {
  const params = useParams();
  const siteSlug = params.slug;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['siteSettings', siteSlug],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/sites/settings/${siteSlug}`);
      return data as SiteSettings;
    },
  });
  console.log(data);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  return (
    <div>
      <Tabs defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">General</Tabs.Tab>
          <Tabs.Tab value="second">Domain</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first">
          {data && <SiteSettingsForm {...data} />}
        </Tabs.Panel>
        <Tabs.Panel value="second">
          {data && <DomainSettingsForm {...data} />}
        </Tabs.Panel>

      </Tabs>

    </div>
  );
};

export default Page;