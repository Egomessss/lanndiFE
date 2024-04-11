'use client';
import { Button } from '@mantine/core';
import React from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/(sites)/Loading';
import ErrorMessage from '@/app/(sites)/Error';
import CreateSiteModal from '@/components/dashboard/CreateSiteModal';
import Plans from '@/app/(sites)/plans/_components/Plans';


export type PlansData = {
  currentPlan: string
  sitesLimit: number
  isUserSubscribed: boolean
  userHasLifetimeDeal: boolean
  latestSavedSiteSlug: string | null
  gracePeriod: boolean,
  userCanceledPlan: boolean
}


const PricingTable = () => {


  const { data, isLoading, isError } = useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/plans`);
      return data as PlansData;
    },
    refetchOnWindowFocus: true,
  });

  console.log(data);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  return (
    <div>
      {data?.latestSavedSiteSlug ?
        <Button href={`editor/${data?.latestSavedSiteSlug}`} component={Link}
                leftSection={<IconArrowLeft size="1rem" />}>Back to
          editor</Button> : <CreateSiteModal isOverMaxSitesAllowed={false} />}
      {data && <Plans {...data} />}
    </div>
  );
};

export default PricingTable;
