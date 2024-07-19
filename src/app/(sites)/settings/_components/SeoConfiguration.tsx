'use client';


import { IconAlertCircle, IconExternalLink, IconInfoCircle, IconRefresh } from '@tabler/icons-react';
import { Alert, Anchor, Button, Card, Divider, ThemeIcon } from '@mantine/core';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/(sites)/Loading';
import ErrorMessage from '@/app/(sites)/Error';
import { SiteSettings } from '@/app/(sites)/settings/[slug]/page';
import Link from 'next/link';
import useUser from '@/hooks/use-user';
import { notifications } from '@mantine/notifications';
import SitemapConfiguration from '@/app/(sites)/settings/_components/SitemapConfiguration';


export default function SeoConfiguration(props: { plan: string; domainData: SiteSettings }) {
  const { plan, domainData } = props;
  const { domain, slug } = domainData;



  return (
    <div className="w-full rounded-lg p-4">
      <SitemapConfiguration domain={domain} slug={slug}/>
      <div className="flex justify-start gap-4 w-full flex-col items-start">
        <Divider className="w-full" my="md" />
        <h3>Robots.txt</h3>
        <p>Boost your SEO by automatically updating your sitemap whenever you publish your site. View your sitemap at
          “your-site-main-domain.com/sitemap.xml”. You&apos;ll still need to submit your sitemap to Google. </p>
        <Button >
          Generate Sitemap
        </Button>
      </div>
      {plan !== 'free' ? <>
      </> : <Alert variant="light" color="pink" title="Alert title" icon={<IconInfoCircle />}>
        <p>Subscribe to a plan to be able to access SEO capabilities</p>
        <p className="font-bold text-red-500 my-10">PS: Save your settings/editor data before clicking the link
          button</p>
        <Button fullWidth component={Link} href="/plans">
          Buy a plan
        </Button>
      </Alert>}

    </div>
  );
}