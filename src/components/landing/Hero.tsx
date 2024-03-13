import React from 'react';

import { Button } from '@mantine/core';

const Hero = () => {


  return (
    <div>
      <div className="flex flex-col items-center gap-4 md:py-8">
        <div className="flex  flex-col items-center justify-center  gap-4 py-4 text-center">
          <h1 className=" max-w-3xl leading-9 md:text-6xl md:leading-none">
            Create your dream website in<span
            className="underline decoration-blue-500 text-blue-500 ml-2">minutes</span> not
            <span
              className="underline decoration-red-500 text-red-500"> weeks</span>
          </h1>
          <p className="max-w-3xl font-medium">
            Create, launch and share your fast, beautiful and responsive websites effortlessly, with a super easy-to-use
            website editor without needing code or design experience
          </p>
          <div className="flex gap-2 items-center">
            <Button
              target="_blank"
              component="a" href="https://lanndi.lemonsqueezy.com/checkout/buy/2ddb7d73-91f4-4121-8413-c24ec6a3335c"
            >
              Buy lifetime deal
            </Button>

          </div>
          <span className="text-xs font-bold text-red-500">33% off for first 50 customers</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className=" w-full md:max-w-4xl md:h-96 rounded-lg object-contain"
             src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/main.png" alt="" /></div>

      {/*<div className="mb-4 flex w-full justify-center gap-2 no-underline">*/}
      {/*    <Button variant="subtle">How it works</Button>*/}
      {/*    <Link href="/register">*/}
      {/*        <Button >*/}
      {/*            Create a post for free*/}
      {/*        </Button>*/}
      {/*    </Link>*/}
      {/*</div>*/}
    </div>
  );
};

export default Hero;
