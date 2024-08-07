import React, { FormEventHandler, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import Loading from '@/app/(sites)/Loading';
import ErrorMessage from '@/app/(sites)/Error';
import { Badge, Button, Divider, Switch } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { notifications } from '@mantine/notifications';
import { PlansData } from '@/app/(sites)/plans/page';


const Plans: React.FC<PlansData> = ({
                                      currentPlan,
                                      isUserSubscribed,
                                      latestSavedSiteSlug,
                                      sitesLimit,
                                      userCanceledPlan,
                                      gracePeriod,
                                    }) => {
  const includedFeatures = [
    'Unlimited websites',
    'Priority support',
    'Lifetime access to all future features and updates',
  ];
  const plans = [
    {
    name: 'Starter',
    priceMonthly: 7,
    priceAnnual: 70,
    features: ['3 websites', '3 pages max', 'custom domain', 'custom code', 'SSL Certificate','Preview domain','Custom code','FavIcons','lanndi branding'],
    variantMonthly: 'basic-monthly',
    variantAnnual: 'basic-annually',
  },
    {
      name: 'Business',
      priceMonthly: 10,
      priceAnnual: 10,
      features: ['1 website', '10 page max', 'custom domain', 'custom code', 'SSL Certificate','Preview domain','Custom code','FavIcons','No lanndi branding'],
      variantMonthly: 'indie-monthly',
      variantAnnual: 'indie-annually',
    },
    {
      name: 'Freelancer',
      priceMonthly: 35,
      priceAnnual: 350,
      features: ['10 websites', '10 pages max', 'custom domain', 'custom code', 'SSL Certificate','Preview domain','Custom code','FavIcons','No lanndi branding'],
      variantMonthly: 'freelancer-monthly',
      variantAnnual: 'freelancer-annually',
    },
    // {
    //   name: 'Freelancer',
    //   priceMonthly: 39,
    //   priceAnnual: 390,
    //   features: ['15 sites', '10 pages max', 'custom domain', 'custom code'],
    //   variantMonthly: 'freelancer-monthly',
    //   variantAnnual: 'freelancer-annually',
    // },
    // {
    //   name: 'Freelancer',
    //   priceMonthly: 49,
    //   priceAnnual: 490,
    //   features: ['15 sites', '10 pages max', 'custom domain'],
    //   url: '/checkout/freelancer',
    // },
  ];

  const [isAnnual, setIsAnnual] = useState(false);

  const { mutate: getCheckoutUrl, isPending, isError } = useMutation({
    mutationFn: async (variant) => {
      const response = await axios.post(`/api/v1/checkout`, { variant: variant });
      return response.data; // Assuming the checkout URL is in the response data
    },
    onSuccess: (data) => {
      // data is the response from your POST request
      window.location.href = data.checkoutUrl; // Redirect user to checkout URL
    },
    // Optionally, you can handle errors here as well
    onError: (error) => {
      console.error('Error subscribing to plan:', error);
      // Handle error (e.g., show an error message)
    },
  });

  const handleSubscribe = (variant: string) => {
    // @ts-ignore
    getCheckoutUrl(variant);
  };
  console.log(currentPlan);

  // if (isPending) return <Loading />;
  // if (isError) return <ErrorMessage />;

  return (
    <>
      <div className="flex justify-center flex-col items-center w-full gap-8 my-4">
        <h1>Plans that fit your needs</h1>
        <div className="flex items-center gap-2 flex-col">
          {userCanceledPlan && <Badge color="red" variant="light"
                                      size="lg">Cancelled</Badge>}
          {userCanceledPlan && <p className="text-xs">Available until end of billing data</p>}
          {currentPlan === 'lifetime' ? <div className="flex flex-col gap-2 justify-center items-center">
              <Badge variant="light"
                     size="lg">Lifetime Deal</Badge>
              <Badge
                variant="light" size="lg">Unlimited Websites</Badge>
            </div> :

            <div className="flex flex-col gap-2 justify-center items-center">
              <Badge color={isUserSubscribed ? 'blue' : 'red'} variant="light"
                     size="lg">{isUserSubscribed ? 'Status - Subscribed' : 'Status - Not subscribed yet'}</Badge>
              <Badge color={isUserSubscribed ? 'blue' : 'red'} variant="light" size="lg">Current plan - {currentPlan} -
                Max {sitesLimit} {sitesLimit > 1 ? 'sites' : 'site'} </Badge>
              <p className="text-xs">You can change or cancel your plan in your customer portal</p>
            </div>
          }

        </div>
        <
          div className
                =
                "flex items-center gap-2">
          <p>Monthly</p>
          <Switch
            size="md"
            checked={isAnnual}
            onChange={(event) => setIsAnnual(event.currentTarget.checked)}
          />
          <p>Annual</p>
          <Badge color="green"> 2 months free</Badge>
        </div>
      </div>
      {isError && <p className="text-red-500">There was an error with your request please try again</p>}
      <div className="flex flex-col lg:flex-row gap-4 px-5 justify-center items-center">
        {plans.map((plan) => (
          <div key={plan.name}
               className="border rounded-lg md:p-8 w-full flex flex-col items-center border-solid border-blue-500 ">
            <h2 className="text-lg font-bold">{plan.name}</h2>
            <p className="my-2">
              €{isAnnual ? plan.priceAnnual : plan.priceMonthly}
              <span className="text-sm font-normal">/{isAnnual ? 'yr' : 'mo'}</span>
            </p>
            <Divider className="w-full" my="md" />
            <ul className="list-none text-left pl-5 mb-4 h-full">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <IconCheck size="1rem" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <Divider className="w-full" mt="md" />
            <div className="p-4"> {isAnnual ? <Button loading={isPending}
                                                       disabled={plan.name === 'Free' || isUserSubscribed || currentPlan === 'lifetime'}
                                                       onClick={() => handleSubscribe(plan.variantAnnual)}>
              {isUserSubscribed ? 'Subscribed' : 'Subscribe To a Plan'}
            </Button> : <Button loading={isPending}
                                disabled={plan.name === 'Free' || isUserSubscribed || currentPlan === 'lifetime'}
                                onClick={() => handleSubscribe(plan.variantMonthly)}>
              {isUserSubscribed ? 'Subscribed' : 'Subscribe To a Plan'}
            </Button>}</div>

          </div>
        ))}
      </div>

      <p className="text-3xl w-full my-8 text-center font-bold">Or</p>
      <div className="w-full flex items-center justify-center">
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div
            className="rounded-2xl border-solid py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-xl font-semibold ">Pay once, own it forever</p>
              <p className="text-base font-semibold text-red-500">Only 20 deals left</p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-blue-500">€299</span>
                <span className="text-sm font-semibold leading-6 tracking-wide ">EUR</span>
              </p>
              <Divider className="w-full" my="md" />
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
              <Divider className="w-full" my="md" />
              <Button disabled={isUserSubscribed || currentPlan === 'lifetime'} loading={isPending} component="a"
                      onClick={() => handleSubscribe('lifetime')}
              >
                Buy Lifetime Deal
              </Button>
            </div>
          </div>
          <div className="flex gap-2 text-xs w-full justify-center mt-2 ">
            <Link className="text-inherit no-underline hover:underline" target="_blank" href="https://lanndi.com/privacy-policy">Privacy Policy</Link>{' '}
            <Link className="text-inherit no-underline hover:underline" target="_blank" href="https://lanndi.com/terms-and-conditions">Terms</Link>
            <Link className="text-inherit no-underline hover:underline" target="_blank" href="https://lanndi.com/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </>
  );

};

export default Plans;