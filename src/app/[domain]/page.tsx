import React from 'react';
import { headers } from 'next/headers';
import Script from 'next/script';
import { Navbar } from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import Benefits from '@/components/landing/Benefits';
import Features from '@/components/landing/Features';
import { Roadmap } from '@/components/landing/Roadmap';
import { Pricing } from '@/components/landing/Pricing';
import Footer from '@/components/landing/Footer';
import Head from 'next/head';
import Plans from '@/components/common/Plans';


interface SiteMetadata {
  title: string;
  description: string;
  ogImage: string | null; // Assuming it could be null if not set
  favIcon: string | null; // Assuming it could be null if not set
  language: string;
  headCode: string | null; // Assuming it could be null if not set
  bodyCode: string | null; // Assuming it could be null if not set
}

interface PageContent {
  html: string;
  css: string;
}

interface DomainPageResponse {
  siteMetadata: SiteMetadata;
  pageContent: PageContent;
}

// export const metadata: Metadata = {
//   title,
//   description,
//   icons: ["https://vercel.pub/favicon.ico"],
//   openGraph: {
//     title,
//     description,
//     images: [image],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title,
//     description,
//     images: [image],
//     creator: "@vercel",
//   },
//   metadataBase: new URL("https://vercel.pub"),
// };


const getSiteHomepageData = async (domain: string): Promise<DomainPageResponse | undefined> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/domain/${domain}`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
    }

    const data: DomainPageResponse = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('There was an error fetching the data:', error);
    return undefined; // or handle the error as appropriate for your app
  }
};


const Homepage = async (
//   {
//                     params,
//                   }: {
//   params: { domain: string };
// }
) => {


  // const headerDomain = headers().has('apx-incoming-host')
  //   ? headers().get('apx-incoming-host')
  //   : headers().get('host');

  // const subdomain = 'random.lanndi.com';
  // const previewDomain = 'preview-random.lanndi.com';
  // const mainDomain = 'lanndi.com';

  const domain = 'preview-random.lanndi.com';
  // { metadata, css, html }
  const data = await getSiteHomepageData(domain);


  return (
    <>
      <Head>
        <title>Create your dream website in minutes</title>
        <meta
          name="description"
          content="Create, launch and share your fast, beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Create your dream website in minutes"
        />
        <meta
          name="twitter:description"
          content="Create, launch and share your fast, beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills"
        />
        <meta
          name="twitter:site"
          content="https://lanndi.com"
        />
        <meta
          name="twitter:image"
          content="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/metaimage.webp"
        />
        <meta
          property="og:title"
          content="Create your dream website in minutes"
        />
        <meta
          property="og:description"
          content="Create, launch and share your fast, beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills"
        />
        <meta
          property="og:url"
          content="https://lanndi.com"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:image"
          content="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/metaimage.webp"
        />
      </Head>
      <>
        {data?.pageContent.html}
      </>
      {/*{domain === 'lanndi.com' && <div className="px-4 md:px-8">*/}
      {/*  {process.env.NODE_ENV === 'production' && (*/}
      {/*    <Script defer src="https://eu.umami.is/script.js"*/}
      {/*            data-website-id="926180c0-ced2-44d6-94a2-70149d477560"></Script>*/}
      {/*  )}*/}
      {/*  <Navbar />*/}
      {/*  <Hero />*/}
      {/*  /!*<PainPoints />*!/*/}
      {/*  <HowItWorks />*/}
      {/*  <Benefits />*/}
      {/*  /!*<WaitlistBanner />*!/*/}
      {/*  <Features />*/}
      {/*  <Roadmap />*/}
      {/*  <Plans />*/}
      {/*  <Pricing />*/}
      {/*  /!*<WaitlistBanner />*!/*/}
      {/*  <Footer />*/}
      {/*</div>}*/}
    </>
  );
};

export default Homepage;