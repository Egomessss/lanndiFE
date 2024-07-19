'use client';
import React from 'react';
import { Tabs } from '@mantine/core';
import SiteSettingsForm from '@/app/(sites)/settings/_components/SiteSettingsForm';
import Loading from '@/app/(sites)/Loading';
import ErrorMessage from '@/app/(sites)/Error';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { useParams } from 'next/navigation';
import DomainSettingsForm from '@/app/(sites)/settings/_components/DomainSettingsForm';
import DomainConfiguration from '@/app/(sites)/settings/_components/DomainConfiguration';
import useUser from '@/hooks/use-user';
import SeoConfiguration from '@/app/(sites)/settings/_components/SeoConfiguration';

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

  const { user } = useUser();

  const plan = user?.subscription || 'free';

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;




  return (
    <div>
      <Tabs keepMounted={false} defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">General</Tabs.Tab>
          <Tabs.Tab value="second">Domain</Tabs.Tab>
          <Tabs.Tab value="third">SEO</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first">
          {data && <SiteSettingsForm plan={plan} data={data}/>}
        </Tabs.Panel>
        <Tabs.Panel value="second">
          {data && <DomainSettingsForm plan={plan} data={data} />}
          {data && <DomainConfiguration plan={plan} domainData={data}/>}
        </Tabs.Panel>
        <Tabs.Panel value="third">
          {data && <SeoConfiguration plan={plan} domainData={data} />}
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Page;