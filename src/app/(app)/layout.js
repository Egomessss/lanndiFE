'use client'


import { useAuth } from '../../hooks/auth'
import Loading from './Loading'
import Navigation from './Navigation'
import { useDisclosure } from '@mantine/hooks'
import { AppShell, Burger, Group, NavLink, Skeleton, Menu, Avatar, Button, rem } from '@mantine/core'
import {
    IconArrowsLeftRight,
    IconCreditCard,
    IconHome2,
    IconMessageCircle,
    IconPhoto,
    IconSearch,
    IconSettings,
    IconTrash,
} from '@tabler/icons-react'
import Link from 'next/link'

const AppLayout = ({ children, header }) => {
    const [opened, { toggle }] = useDisclosure()
    // const { user } = useAuth({ middleware: 'auth' })
    //
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
                {/*<Navigation user={undefined} />*/}
                <div className="w-full flex justify-between items-center h-full px-6"><Link href="/dashboard">
                    lanndi
                </Link>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <Avatar color="cyan" radius="xl">MK</Avatar>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                Settings
                            </Menu.Item>
                            <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                                Messages
                            </Menu.Item>
                            <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                                Gallery
                            </Menu.Item>
                            <Menu.Item
                                leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
                                rightSection={
                                    <Text size="xs" c="dimmed">
                                        ⌘K
                                    </Text>
                                }
                            >
                                Search
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item
                                leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Transfer my data
                            </Menu.Item>
                            <Menu.Item
                                color="red"
                                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Delete my account
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu></div>

            </AppShell.Header>
            <AppShell.Navbar p="md">
                <NavLink
                    href="#required-for-focus"
                    label="Sites"
                    leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                />

                <NavLink
                    href="#required-for-focus"
                    label="Billing"
                    leftSection={<IconCreditCard size="1rem" stroke={1.5} />}
                />
                <NavLink
                    href="#required-for-focus"
                    label="Account Settings"
                    leftSection={<IconSettings size="1rem" stroke={1.5} />}
                />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default AppLayout
