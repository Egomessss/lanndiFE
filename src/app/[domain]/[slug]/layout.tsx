import './globals.css';
import '@mantine/core/styles.css';

import React from 'react';


export async function generateMetadata({
                                         params,
                                       }: {
  params: { domain: string; slug: string };
}) {


  return {
    title: 'Create your dream website in minutes',
    description: 'reate, launch and share your fast, beautiful and responsive websites effortlessly, with a super easy-to-use website editor without needing code or design skills',
    openGraph: {
      title: 'Create your dream website in minutes',
      description: 'reate, launch and share your fast, beautiful and responsive websites effortlessly, with a super easy-to-use website editor without needing code or design skills',
      image: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/main.png',
    },
    twitter: {
      card: 'summary_large_image',
      image: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/main.png',
      title: 'Create your dream website in minutes',
      description: 'reate, launch and share your fast, beautiful and responsive websites effortlessly, with a super easy-to-use website editor without needing code or design skills',
      creator: '@tecedsocial',
    },
    // Optional: Set canonical URL to custom domain if it exists
    // ...(params.domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) &&
    //   siteData.customDomain && {
    //     alternates: {
    //       canonical: `https://${siteData.customDomain}/${params.slug}`,
    //     },
    //   }),
  };
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div>{children}</div>
  );
}