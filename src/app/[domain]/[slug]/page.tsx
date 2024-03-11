

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/(app)/Loading';
import ErrorMessage from '@/app/(app)/Error';
import React from 'react';
import { SiteSettings } from '@/app/(app)/sites/[slug]/settings/page';
import { headers } from 'next/headers';


type Page = {
  slug: string,
  html: string,
  css: string
};


const Page = ({
                params,
              }: {
  params: { domain: string };
}) => {
  const headerDomain = headers().has('apx-incoming-host')
    ? headers().get('apx-incoming-host')
    : headers().get('host');

  // const domain = headers().has('apx-incoming-host')
  //   ? headers().get('apx-incoming-host')
  //   : headers().get('host');
  //
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['siteSettings', domain],
  //   queryFn: async () => {
  //     const { data } = await axios.get(`/api/v1/site/${domain}/${params.slug}`);
  //     return data as Page;
  //   },
  // });
  // console.log(data);

  // if (isLoading) return <Loading />
  // if (isError) return <ErrorMessage />


  return (
    <div>
      <h1>{params.domain === process.env.NEXT_PUBLIC_APP_PRIMARY_DOMAIN ? 'Welcome to the primary domain' : `Welcome to the subdomain ${params.domain} or ${headerDomain}`}</h1>
    </div>
  );
};

export default Page;