'use client';


import { IconAlertCircle, IconCheck, IconExternalLink, IconRefresh } from '@tabler/icons-react';
import { Alert, Badge, Button, Card, ThemeIcon } from '@mantine/core';
import React from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/app/Loading';
import ErrorMessage from '@/app/app/Error';
import { SiteSettings } from '@/app/app/sites/[slug]/settings/page';


interface StatusResponse {
  success: boolean;
  data?: {
    dns_pointed_at: string;
    has_ssl: boolean;
    last_monitored_humanized: string;
    status_message: string;
  };
  message?: string;
}


export default function DomainConfiguration({ domain, subdomain, slug }: SiteSettings) {


  const { data, isLoading, isError } = useQuery({
    queryKey: ['siteDomain', slug],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/site/${slug}/domain-status`);
      return data as StatusResponse;
    },
    staleTime: 2 * 60 * 1000, // Cache for 2 minutes
  });


  console.log(data);

  if (isLoading) return <Loading />;
  if (!data) return <Loading />;
  if (isError) return <ErrorMessage />;


  return (
    <div className="border-solid w-full h-fit rounded-lg p-4">
      <div className="flex items-center gap-4 w-ful">
        {domain && <a href={`https://www.${domain}`}
                      className="no-underline text-white font-semibold text-xl flex items-center gap-2"
                      target="_blank">
          <p>{domain}</p>
          <ThemeIcon color="blue" variant="subtle">
            <IconExternalLink size="1.4rem" />
          </ThemeIcon>
        </a>}
        {/*{subdomain && <a href={`https://www.${subdomain}`}*/}
        {/*                 className="no-underline text-white font-semibold text-xl flex items-center gap-2"*/}
        {/*                 target="_blank">*/}
        {/*  <p>{subdomain}</p>*/}
        {/*  <ThemeIcon color="blue" variant="subtle">*/}
        {/*    <IconExternalLink size="1.4rem" />*/}
        {/*  </ThemeIcon>*/}
        {/*</a>}*/}

      </div>
      {data.success ? <Card my="5" shadow="sm" padding="lg">
          {data.data?.dns_pointed_at && <div className="flex items-center gap-2"><p>DNS: Verified</p></div>}
          {data.data?.has_ssl && <div className="flex items-center gap-2"><p>SSL: Active</p></div>}
          <p>Last Checked: {data.data?.last_monitored_humanized}</p>
          <p>Status: {data.data?.status_message}</p>
        </Card> :
        <Alert my="5" icon={<IconAlertCircle size={16} />} title="Error!" color="red">{data?.message}</Alert>}

      <div className="flex flex-col items-start w-full justify-start gap-2">
        <p>
          To configure your domains
          set the following A records on your DNS provider to
          continue:
        </p>
        <h3>A record for your domain:</h3>
        <div
          className="flex items-center justify-start space-x-10 rounded-md  bg-stone-800 p-2 dark:text-white">
          <div>
            <p className="text-sm font-bold">Type</p>
            <p className="mt-2 font-mono text-sm">A</p>
          </div>
          <div>
            <p className="text-sm font-bold">Hostname/Name</p>
            <p className="mt-2 font-mono text-sm">
              @
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Address/Content/Value</p>
            <p className="mt-2 font-mono text-sm">
              137.66.32.37
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">TTL</p>
            <p className="mt-2 font-mono text-sm">3600</p>
          </div>
        </div>
        {/*<h3>Example A record with a subdomain:</h3>*/}
        {/*<div*/}
        {/*  className="flex items-center justify-start space-x-10 rounded-md bg-stone-800 p-2  dark:text-white">*/}
        {/*  <div>*/}
        {/*    <p className="text-sm font-bold">Type</p>*/}
        {/*    <p className="mt-2 font-mono text-sm">A</p>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <p className="text-sm font-bold">Hostname/Name</p>*/}
        {/*    <p className="mt-2 font-mono text-sm">*/}
        {/*      mysubdomain*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <p className="text-sm font-bold">Address/Content/Value</p>*/}
        {/*    <p className="mt-2 font-mono text-sm">*/}
        {/*      137.66.32.37*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <p className="text-sm font-bold">TTL</p>*/}
        {/*    <p className="mt-2 font-mono text-sm">3600</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <p>
          Once you add your records your DNS provider, wait a few minutes checking your domain, we refresh this data
          every
          2 minutes.
        </p>
        <p>
          If you already have an A record for that address, please change it to point at 137.66.32.37 and remove any
          other
          A, AAAA, or CNAME records for that exact address. It may take a few minutes for your SSL certificate to take
          effect once you've pointed your DNS A record.
        </p>
        <p>
          Sometimes DNS providers want the entire hostname written in the hostname field.
          For example: mysubdomain.example.com instead of mysubdomain
        </p>
        <p>
          Tip: Remove any conflicting A or CNAME records for that exact hostname, or you may get unexpected behavior.
        </p>
      </div>
    </div>
  );
}