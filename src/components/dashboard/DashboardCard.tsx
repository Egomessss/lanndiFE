'use client'
import React from 'react'
import Image from 'next/image'
import { ActionIcon, Badge, Menu } from '@mantine/core'
import {
    IconArrowsLeftRight,
    IconCopy,
    IconDots,
    IconMessageCircle,
    IconPhoto,
    IconSearch,
    IconSettings,
    IconTrash,
} from '@tabler/icons-react'
import Link from 'next/link'

type Site = {
    name: string;
    slug: string;
    isLive: boolean;
    ogImage: string | null; // Assuming ogImage could be null if not set
};
const DashboardCard = ({ data }) => {

    return (
        <div className="flex flex-col col-span-1 w-full">

            <img
                src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-44 rounded-lg"

                alt="Picture of the author"

            />

            <div>
                <div className="flex w-full justify-between items-center">
                    <h2 className="text-lg">{data.name}</h2>
                    <Menu position="bottom-end" shadow="md" width={200}>
                        <Menu.Target>
                            <ActionIcon variant="subtle">
                                <IconDots size="1rem" />
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item component={Link} href={`/sites/${data.slug}/settings`}
                                       leftSection={<IconSettings size="1rem" />}>
                                Site Settings
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item
                                color="red"
                                leftSection={<IconTrash size="1rem" />}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
                {data.isLive ? <Badge variant="light" color="green">Live</Badge> : <Badge variant="light" color="green">Unpublished</Badge>}
            </div>

        </div>
    )
}

export default DashboardCard