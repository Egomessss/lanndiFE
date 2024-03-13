import Link from 'next/link';
import { Button, ThemeIcon } from '@mantine/core';
import { IconFileStack } from '@tabler/icons-react';
import React from 'react';


export const Navbar = () => {


  return (
    <nav className="py-4 flex justify-between w-full items-center">
      <Link href="/" className="no-underline text-inherit flex items-center gap-2">
        <IconFileStack className="text-blue-500 " size="1.2rem" />
        <span className="font-bold">lanndi</span>
      </Link>
      <div className="flex gap-2 items-center">
        <Button
          target="_blank"
          component="a" href="https://lanndi.lemonsqueezy.com/checkout/buy/2ddb7d73-91f4-4121-8413-c24ec6a3335c"
        >
          Buy lifetime deal
        </Button>
      </div>

    </nav>

  );
};