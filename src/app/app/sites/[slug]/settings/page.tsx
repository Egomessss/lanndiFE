'use client';
import React from 'react';
import { Tabs } from '@mantine/core';
import SiteSettingsForm from '@/app/app/sites/[slug]/settings/_components/SiteSettingsForm';
import Loading from '@/app/app/Loading';
import ErrorMessage from '@/app/app/Error';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { useParams } from 'next/navigation';
import DomainSettingsForm from '@/app/app/sites/[slug]/settings/_components/DomainSettingsForm';
import DomainConfiguration from '@/app/app/sites/[slug]/settings/_components/DomainConfiguration';

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
      <Tabs keepMounted={false} defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">General</Tabs.Tab>
          <Tabs.Tab value="second">Domain</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first">
          {data && <SiteSettingsForm {...data} />}
        </Tabs.Panel>
        <Tabs.Panel value="second">
          {data && <DomainSettingsForm {...data} />}
          {data && <DomainConfiguration {...data} />}
        </Tabs.Panel>

      </Tabs>

    </div>
  );
};

export default Page;