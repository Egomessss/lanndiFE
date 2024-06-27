'use client';


import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, AppShell, Avatar, Burger, Button, Loader, Menu, NavLink, rem, ScrollArea } from '@mantine/core';
import {
  IconAdjustmentsDollar, IconAt,
  IconCreditCard,
  IconHome2,
  IconLogout,
  IconMessage,
  IconUser,
} from '@tabler/icons-react';
import Link from 'next/link';
import useUser from '../../hooks/use-user';
import { useMutation } from '@tanstack/react-query';
import axios from '../../lib/axios';
import { notifications } from '@mantine/notifications';
import { DarkModeButton } from '../../components/common/DarkModeButton/DarkModeButton';
import React from 'react';
import Loading from './Loading';


const SiteLayout = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const { user, logout } = useUser();


  const { mutate: getCustomerPortalUrl, isPending } = useMutation({
    mutationFn: async () => {
      const response = await axios.post('/api/v1/customer-portal');
      return response.data; // Assuming the checkout URL is in the response data
    },
    onSuccess: (data) => {
      // If the customPortalUrl is null, handle it appropriately, e.g., show an error
      if (!data.customPortalUrl) {
        notifications.show({
          title: 'Unavailable',
          message: 'The customer portal is not available for your account.',
          color: 'red',
        });
        return;
      }

      // Open the customPortalUrl in a new tab
      window.open(data.customPortalUrl, '_blank').focus();
    },
    // Optionally, you can handle errors here as well
    onError: (error) => {
      let message = 'Something went wrong... Please try again!';
      if (error.response && error.response.status === 404) {
        message = error.response.data.message || 'No purchase or subscription found.';
      }
      console.log(error);
      notifications.show({
        title: 'Error',
        message,
        color: 'red',
      });
    },
  });

  const handleGetCustomerPortal = () => {
    // @ts-ignore
    getCustomerPortalUrl();
  };

  if (!user) {
    return <Loading />;
  }


  return (
    <AppShell
      header={{ height: { base: 60 } }}
      navbar={{
        width: { base: 200 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div className="w-full flex justify-between items-center h-full px-4">
          <Link className="no-underline text-inherit font-bold text-xl"
                href="/">
            lanndi
          </Link>

          <div className="flex items-center gap-6">
            <DarkModeButton />
            {!user ? <Loader size="xs" /> : <Menu trigger="hover" openDelay={100} closeDelay={400}>
              <Menu.Target>
                <Avatar color="blue" radius="xl">
                  <ActionIcon variant="transparent">
                    <IconUser size="1.5rem" />
                  </ActionIcon>
                </Avatar>
              </Menu.Target>
              <Menu.Dropdown>
                {/*<Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>*/}
                {/*    Account Settings*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Divider />*/}
                <Menu.Item
                  onClick={logout}
                  color="red"
                  leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>}</div>
        </div>

      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section grow my="md" component={ScrollArea}>
          <NavLink
            component={Link}
            href="/"
            label="Sites"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
          <NavLink
            component={Link}
            href="/plans"
            label="Plans"
            leftSection={<IconAdjustmentsDollar size="1rem" stroke={1.5} />}
          />
        </AppShell.Section>
        <NavLink
          color="green"
          active
          component="a"
          href="mailto:help@gmail.com"
          label={<div className="flex flex-col gap-2"><p>
            Contact Us
          </p>
            <p>help@lanndi.com</p>
          </div>}
          childrenOffset={28}
          leftSection={<IconAt size="1rem" stroke={1.5} />}
        />
        <NavLink
          color="blue"
          active
          component="a"
          href="/profile"
          label="Provide Feedback"
          leftSection={<IconMessage size="1rem" stroke={1.5} />}
        />
        <AppShell.Section> <NavLink
          component={Link}
          href="/profile"
          label="Profile Settings"
          leftSection={<IconUser size="1rem" stroke={1.5} />}
        />
          <NavLink
            component={Button}
            loading={isPending}
            onClick={handleGetCustomerPortal}
            label="Customer Portal"
            leftSection={<IconCreditCard size="1rem" stroke={1.5} />}
          />
        </AppShell.Section>

      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default SiteLayout;
