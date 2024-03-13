import { Button } from '@mantine/core';
import React from 'react';

const WaitlistBanner = () => {
  return (
    <div
      className=" flex w-full flex-col items-center justify-center gap-2 border-solid border-blue-500 p-4 rounded-xl"
    >
      <div className="flex gap-2 items-center">
        <Button
          target="_blank"
          component="a" href="https://lanndi.lemonsqueezy.com/checkout/buy/2ddb7d73-91f4-4121-8413-c24ec6a3335c"
        >
          Buy lifetime deal
        </Button>
      </div>
      <span className="text-xs font-bold text-red-500">33% off for first 50 customers</span>
      {/*<div className="flex w-full flex-col items-center gap-1 md:justify-center lg:flex-row">*/}
      {/*  <span className="font-bold">Join 11 already waiting</span>*/}
      {/*</div>*/}

    </div>
  );
};

export default WaitlistBanner;