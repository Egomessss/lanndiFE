'use client';

import CreateSiteModal from '@/components/dashboard/CreateSiteModal';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';

import ColorPicker from 'react-best-gradient-color-picker';
import { useState } from 'react';
import Loading from '@/app/dashboard/(sites)/Loading';
import ErrorMessage from '@/app/dashboard/(sites)/Error';
import { Badge } from '@mantine/core';

export type Site = {
  id: number;
  name: string;
  slug: string;
  isLive: boolean;
  ogImage: string | null; // Assuming ogImage could be null if not set
};

export type DashboardData = {
  sites: Site[];
  subscriptionPlan: string;
  sitesLimit: number;
  isOverMaxSitesAllowed: boolean;
};

const Dashboard = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userSites'],
    queryFn: async () => {
      const { data } = await axios.get('/api/v1/sites');
      return data as DashboardData;
    },
    staleTime: 0,
  });
  console.log(data);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;


  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <h1>Sites</h1>
        <CreateSiteModal isOverMaxSitesAllowed={data?.isOverMaxSitesAllowed} />
      </div>
      <Badge variant="light">{data?.subscriptionPlan} Plan </Badge>
      {data?.sites.length === 0 ? <div>You have no sites yet!</div> :
        <div className="grid grid-cols-4 gap-4 my-8">
          {data?.sites.map((site) => (
            // Assuming your data has an id and other properties you need to pass to DashboardCard
            <DashboardCard key={site.slug} {...site} />
          ))}
        </div>}

    </div>
  );
};

export default Dashboard;
