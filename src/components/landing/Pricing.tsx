import { Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const includedFeatures = [
  '5 websites',
  'Priority support',
  'Priority feature requests',
  'Lifetime access to all future features and updates',
];

export const Pricing = () => {
  return (
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
                      <IconCheck size='1rem' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button component="a" href="https://lanndi.lemonsqueezy.com/checkout/buy/2ddb7d73-91f4-4121-8413-c24ec6a3335c">Buy lifetime deal</Button>
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
  );
};
