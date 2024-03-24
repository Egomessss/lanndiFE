'use client';
import { Badge, Button, Divider, Switch } from '@mantine/core';
import React, { useState } from 'react';
import { IconArrowLeft, IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import Script from 'next/script';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/dashboard/(sites)/Loading';
import ErrorMessage from '@/app/dashboard/(sites)/Error';
import { SiteSettings } from '@/app/dashboard/(sites)/sites/[slug]/page';
import Plans from '@/app/dashboard/(sites)/plans/_components/Plans';

type Plans = {
  currentPlan: string
  latestSavedSiteSlug: string | null
}


const PricingTable = () => {


  const { data, isLoading, isError } = useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/plans`);
      return data as Plans;
    },
  });


  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  return (
    <div>
      {data?.latestSavedSiteSlug && <Button href={`editor/${data?.latestSavedSiteSlug}`} component={Link}
                                            leftSection={<IconArrowLeft size="1rem" />}>Back to
        editor</Button>}
      {data && <Plans currentPlan={data.currentPlan} />}
    </div>
  );
};

export default PricingTable;
