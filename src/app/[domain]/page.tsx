import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/dashboard/Loading';
import ErrorMessage from '@/app/dashboard/Error';
import React from 'react';
import { SiteSettings } from '@/app/dashboard/sites/[slug]/page';
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
      {params.domain === 'lanndi.com' && <div className="px-4 md:px-8">
        {process.env.NODE_ENV === 'production' && (
          <Script defer src="https://eu.umami.is/script.js"
                  data-website-id="926180c0-ced2-44d6-94a2-70149d477560"></Script>
        )}
        <Navbar />
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Benefits />
        {/*<WaitlistBanner />*/}
        <Features />
        <Roadmap />
        <Pricing />
        {/*<WaitlistBanner />*/}
        <Footer />
      </div>}
    </div>
  );
};

export default Homepage;