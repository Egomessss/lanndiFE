'use client';

import CreateSiteModal from '@/components/dashboard/CreateSiteModal';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';

import ColorPicker from 'react-best-gradient-color-picker';
import { useState } from 'react';
import Loading from '@/app/(sites)/Loading';
import ErrorMessage from '@/app/(sites)/Error';
import { Alert, Badge, Button } from '@mantine/core';
import useUser from '@/hooks/use-user';
import { IconInfoCircle } from '@tabler/icons-react';
import { User } from '@/lib/types';

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

function VerifyEmail({ user }: { user: User }) {
  const [status, setStatus] = useState(null);

  const resendEmailVerification = () => {
    axios
      .post('/email/verification-notification')
      .then(response => setStatus(response.data.status));
  };

  return (
    <>
      {user?.email_verified_at === null && user.subscription === 'free' &&
        <Alert variant="light" color="red" title="Alert title" icon={<IconInfoCircle size="1rem" />}>
          <div className="flex items-center gap-4 flex-col">
            <p>Verify your email to be able to publish your website!</p>
            <p>Check your spam folder if you don&apos;t see the email right away!</p>
            {status === 'verification-link-sent' && (
              <p>
                A new verification link has been sent to the email address
                address you provided during registration.
              </p>
            )}
            <Button onClick={resendEmailVerification}>
              Resend Verification Email
            </Button>
          </div>
        </Alert>
      }
    </>
  )
    ;
}

const Dashboard = () => {

  const { user } = useUser();

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
      {user && <VerifyEmail user={user} />}
      <div className="w-full flex justify-between items-center">
        <h1>Sites</h1>
        {data && <CreateSiteModal isOverMaxSitesAllowed={data?.isOverMaxSitesAllowed} />}
      </div>
      <Badge variant="light">{data?.subscriptionPlan} Plan </Badge>
      {data?.sites.length === 0 ? <div>You have no sites yet!</div> :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {data?.sites.map((site) => (
            // Assuming your data has an id and other properties you need to pass to DashboardCard
            <DashboardCard key={site.slug} {...site} />
          ))}
        </div>}

    </div>
  );
};

export default Dashboard;
