import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/dashboard/(sites)/Loading';
import ErrorMessage from '@/app/dashboard/(sites)/Error';
import React from 'react';
import { SiteSettings } from '@/app/dashboard/(sites)/sites/[slug]/page';
import { headers } from 'next/headers';
import Script from 'next/script';
import { Navbar } from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import HowItWorks from '@/components/landing/HowItWorks';
import Benefits from '@/components/landing/Benefits';
import WaitlistBanner from '@/components/landing/WaitlistBanner';
import Features from '@/components/landing/Features';
import { Roadmap } from '@/components/landing/Roadmap';
import { Pricing } from '@/components/landing/Pricing';
import Footer from '@/components/landing/Footer';
import Head from 'next/head';
import Plans from '@/components/common/Plans';


type Page = {
  slug: string,
  html: string,
  css: string
};

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


const Homepage = ({
                    params,
                  }: {
  params: { domain: string };
}) => {

  const headerDomain = headers().has('apx-incoming-host')
    ? headers().get('apx-incoming-host')
    : headers().get('host');

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['siteSettings', domain],
  //   queryFn: async () => {
  //     const { data } = await axios.get(`/api/v1/site/${domain}`);
  //     return data as Page;
  //   },
  // });
  // console.log(data);

  // if (isLoading) return <Loading />
  // if (isError) return <ErrorMessage />


  return (
    <div>
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
      {params.domain === 'lanndi.com' && <div className="px-4 md:px-8">
        {process.env.NODE_ENV === 'production' && (
          <Script defer src="https://eu.umami.is/script.js"
                  data-website-id="926180c0-ced2-44d6-94a2-70149d477560"></Script>
        )}
        <Navbar />
        <Hero />
        {/*<PainPoints />*/}
        <HowItWorks />
        <Benefits />
        {/*<WaitlistBanner />*/}
        <Features />
        <Roadmap />
        <Plans/>
        <Pricing />
        {/*<WaitlistBanner />*/}
        <Footer />
      </div>}
    </div>
  );
};

export default Homepage;