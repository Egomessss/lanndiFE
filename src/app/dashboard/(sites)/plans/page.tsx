'use client';
import { Badge, Button, Divider, Switch } from '@mantine/core';
import React, { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import Script from 'next/script';
import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/dashboard/(sites)/Loading';
import ErrorMessage from '@/app/dashboard/(sites)/Error';
import { SiteSettings } from '@/app/dashboard/(sites)/sites/[slug]/page';


const includedFeatures = [
  '5 websites',
  'Priority support',
  'Priority feature requests',
  'Lifetime access to all future features and updates',
];
const plans = [
  {
    name: 'Free',
    priceMonthly: 0,
    priceAnnual: 0,
    features: ['1 site', '1 page max', 'lanndi badge', 'lanndi subdomain'],
    url: '/checkout/free',
  },
  {
    name: 'Basic',
    priceMonthly: 9,
    priceAnnual: 99,
    features: ['1 site', '10 pages max', 'custom domain'],
    url: '/checkout/basic',
  },
  {
    name: 'Indie',
    priceMonthly: 19,
    priceAnnual: 190,
    features: ['5 sites', '10 pages max', 'custom domain'],
    url: '/checkout/indie',
  },
  {
    name: 'Freelancer',
    priceMonthly: 49,
    priceAnnual: 490,
    features: ['15 sites', '10 pages max', 'custom domain'],
    url: '/checkout/freelancer',
  },

];

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['checkout'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/checkout`);
      return data;
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
  console.log(data);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  const plan = 'free'

  return (
    <div>
      <div className="flex justify-center flex-col items-center w-full gap-8 my-4">
        <h1>Plans that fit your needs</h1>
        <Badge variant="light" size="lg">Current plan - {plan}</Badge>
        <div className="flex items-center gap-2">
          <p>Monthly</p>
          <Switch
            size="md"
            checked={isAnnual}
            onChange={(event) => setIsAnnual(event.currentTarget.checked)}
          />
          <p>Annual</p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 px-5">
        {plans.map((plan) => (
          <div key={plan.name}
               className="border rounded-lg p-4 flex flex-col items-center border-solid border-blue-500 ">
            <h2 className="text-lg font-bold">{plan.name}</h2>
            <p className="my-2">
              ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
              <span className="text-sm font-normal">/{isAnnual ? 'yr' : 'mo'}</span>
            </p>
            <Divider className="w-full" my="md" />
            <ul className="list-none text-left pl-5 mb-4">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Divider className="w-full" my="md" />
            <Button component="a">
              Choose
            </Button>
          </div>
        ))}
      </div>
      <div className=" py-20 sm:py-32 flex justify-center items-center w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Simple no-tricks lifetime deal</h2>
          </div>
          <div
            className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div
                className="rounded-2xl border-solid py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-xl font-semibold ">Pay once, own it forever</p>
                  <p className="text-base font-semibold text-red-500">First 50 customers get 33% off</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className=" font-bold tracking-tight text-red-500 line-through">€299</span>
                    <span className="text-5xl font-bold tracking-tight ">€199</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide ">EUR</span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 flex flex-col w-full text-sm leading-6  gap-4"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-2 items-center text-start">
                        <IconCheck size="1rem" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button component="a"
                    // disabled
                          target="_blank"
                          href={data.checkoutUrl}
                  >
                    Buy lifetime deal
                  </Button>
                  {/*<Button component="a"*/}
                  {/*  // target="_blank"*/}
                  {/*        href={data?.subs}>*/}
                  {/*  Buy lifetime deal*/}
                  {/*</Button>*/}

                </div>
              </div>
              <div className="flex gap-2 text-xs w-full justify-center mt-2">
                <Link href="/privacy-policy">Privacy Policy</Link>{' '}
                <Link href="/terms-and-conditions">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
