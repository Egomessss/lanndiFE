import { Anchor, Button } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';

const SitemapConfiguration = ({ domain, slug }: { domain: string; slug: string }) => {
  const { isRefetching, isError, refetch, isFetched } = useQuery({
    queryKey: ['siteSitemap', slug],
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
                  href={domain}>{domain}/sitemap.xml</Anchor>
        </div>
        <Button loading={isRefetching} leftSection={<IconRefresh size="1rem" />} onClick={refetchSitemap}>
          Update Sitemap
        </Button>
        {isFetched && <p className="text-green-500">Your sitemap has been updated successfully.</p>}
        {isError && <p className="text-red-500">Somethings went wrong while updating your site sitemap</p>}
      </> : <p>Domain not set - please set your domain to access your sitemap</p>
      }
    </div>
  );
};

export default SitemapConfiguration;