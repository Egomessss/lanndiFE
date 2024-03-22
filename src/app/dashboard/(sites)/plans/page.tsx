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


const PricingTable = () => {


  const currentPlan = 'free';
  const lastSiteSaved = 'random';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/plans`);
      return data;
    },
  });


  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  return (
    <div>
      <Button href={data?.latestSavedSiteSlug} component={Link} leftSection={<IconArrowLeft size="1rem" />}>Back to
        editor</Button>
      <Plans currentPlan={currentPlan} />
    </div>
  );
};

export default PricingTable;
