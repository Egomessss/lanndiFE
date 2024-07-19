import { Anchor, Button } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';

const RobotsConfiguration = ({ domain, slug }: { domain: string; slug: string }) => {
  const { isLoading, isError, refetch } = useQuery({
    queryKey: ['siteDomain', slug],
    queryFn: async () => {
      if (!domain) {
        return null;
      }
      const { data } = await axios.get(`/api/domains/${domain}/sitemap`);
      return data;
    },
    staleTime: 7 * 24 * 60 * 60 * 1000, // Cache for a week
    enabled: false,
    refetchOnWindowFocus: false,
  });

  if (isError) return notifications.show({
    title: 'Somethings went wrong',
    message: 'Please try again later or contact support team.',
  });

  const refetchSitemap = () => {
    refetch();
  };
  return (
    <div className="flex justify-start gap-4 w-full flex-col items-start">
      <h3>Sitemap</h3>
      <p>Boost your SEO by automatically updating your sitemap whenever you publish your site. You&apos;ll still need
        to submit your sitemap to Google. </p>
      {domain ? <>
        <div className="flex gap-2 items-center">
          <p>View your sitemap at</p>
          <Anchor target="blank"
                  href={domain ? domain : ''}>{domain ? domain : 'your-site-main-domain.com/sitemap.xml'}/sitemap.xml</Anchor>
        </div>
        <Button loading={isLoading} leftSection={<IconRefresh size="1rem" />} onClick={refetchSitemap}>
          Update Sitemap
        </Button></> : <p>Domain not set - please set your domain to access your sitemap</p>
      }
    </div>
  );
};

export default SitemapConfiguration;