'use client';


import Loading from './Loading';
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, AppShell, Avatar, Burger, Loader, Menu, NavLink, rem } from '@mantine/core';
import { IconAdjustmentsDollar, IconCreditCard, IconHome2, IconLogout, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import useUser from '../../../hooks/use-user';


const layout = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const { user, logout } = useUser();

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
          <Link className="no-underline text-white font-bold text-xl" href="/public">
            lanndi
          </Link>
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
          </Menu>}
        </div>

      </AppShell.Header>
      <AppShell.Navbar>
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
        <NavLink
          component={Link}
          href="/billing"
          label="Billing Portal"
          leftSection={<IconCreditCard size="1rem" stroke={1.5} />}
        />
        {/*<NavLink*/}
        {/*    href="/account-settings"*/}
        {/*    label="Account Settings"*/}
        {/*    leftSection={<IconSettings size="1rem" stroke={1.5} />}*/}
        {/*/>*/}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default layout;
