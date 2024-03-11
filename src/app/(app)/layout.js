'use client'


import { useAuth } from '../../hooks/auth'
import Loading from './Loading'
import Navigation from './Navigation'
import { useDisclosure } from '@mantine/hooks'
import { AppShell, Burger, Group, NavLink, Skeleton, Menu, Avatar, Button, rem, Text } from '@mantine/core'
import {
    IconArrowsLeftRight,
    IconCreditCard,
    IconHome2, IconLogout,
    IconMessageCircle,
    IconPhoto,
    IconSearch,
    IconSettings,
    IconTrash,
} from '@tabler/icons-react'
import Link from 'next/link'


const AppLayout = ({ children, header }) => {
    const [opened, { toggle }] = useDisclosure()
    // const { user, logout } = useAuth({ middleware: 'auth' })


    // if (!user) {
    //     return <Loading />
    // }

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
                    <Link className="no-underline text-white font-bold text-xl" href="/">
                        lanndi
                    </Link>
                    {/*<p>{user?.name}</p>*/}
                    {/*<Menu shadow="md" width={200}>*/}
                    {/*    <Menu.Target>*/}
                    {/*       <Button>{user?.name}</Button>*/}
                    {/*        /!*<Avatar color="green" radius="xl"></Avatar>*!/*/}
                    {/*    </Menu.Target>*/}
                    {/*    <Menu.Dropdown>*/}
                    {/*        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>*/}
                    {/*            Account Settings*/}
                    {/*        </Menu.Item>*/}
                    {/*        <Menu.Divider />*/}
                    {/*        <Menu.Item onClick={logout}*/}
                    {/*            color="red"*/}
                    {/*            leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}*/}
                    {/*        >*/}
                    {/*            Logout*/}
                    {/*        </Menu.Item>*/}
                    {/*    </Menu.Dropdown>*/}
                    {/*</Menu>*/}
                </div>

            </AppShell.Header>
            <AppShell.Navbar>
                <NavLink
                    href="/"
                    label="Dashboard"
                    leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                />

                <NavLink
                    href="/billing"
                    label="Billing"
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
    )
}

export default AppLayout
