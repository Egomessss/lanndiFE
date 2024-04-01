import { notFound, useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/dashboard/(sites)/Loading';
import ErrorMessage from '@/app/dashboard/(sites)/Error';
import React from 'react';
import { SiteSettings } from '@/app/dashboard/(sites)/sites/[slug]/page';
import { headers } from 'next/headers';


interface SiteMetadata {
  title: string;
  description: string;
  ogImage: string | null; // Assuming it could be null if not set
  favIcon: string | null; // Assuming it could be null if not set
  language: string;
  headCode: string | null; // Assuming it could be null if not set
  bodyCode: string | null; // Assuming it could be null if not set
}

interface PageContent {
  html: string;
  css: string;
}

interface DomainSubscriptionPlan {
  subscriptionPlan: string;
}

interface DomainPageResponse {
  siteMetadata: SiteMetadata;
  pageContent: PageContent;
  subscriptionPlan: DomainSubscriptionPlan;
}

const getSitePageData = async (domain: string, path: string): Promise<DomainPageResponse | undefined> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/domain/${domain}/${path}`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
    }

    const data: DomainPageResponse = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('There was an error fetching the data:', error);
    return undefined; // or handle the error as appropriate for your app
  }
};


const Page = async ({
                      params,
                    }: {
  params: { domain: string; slug: string };
}) => {


  // const domain = headers().has('apx-incoming-host')
  //   ? headers().get('apx-incoming-host')
  //   : headers().get('host');

  const domain = 'preview-random.lanndi.com';
  const path = decodeURIComponent(params.slug);
  // const path = 'about';
  console.log(path);

  const data = await getSitePageData(domain, path);
  const htmlContent = data?.pageContent.html;
  const cssContent = data?.pageContent.css;
  if (!data) {
    notFound();
  }

  return (
    <div>

    </div>
  );
};

export default Page;