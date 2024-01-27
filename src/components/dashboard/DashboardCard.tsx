"use client"
import React from 'react'
import Image from 'next/image'
import { ActionIcon, Menu } from '@mantine/core'
import { IconArrowsLeftRight, IconDots, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconTrash } from '@tabler/icons-react'

const DashboardCard = () => {
    return (
        <div className="flex flex-col col-span-1 ">
            <Image
                src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={380}
                height={300}
                // fill={true}
                alt="Picture of the author"
                className="rounded-lg"
            />
            <div>
                <div className="flex w-full justify-between items-center">
                    <h2>Site</h2>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <ActionIcon variant="subtle">
                                <IconDots size="1rem"/>
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item leftSection={<IconSettings size="1rem" />}>
                               Site Settings
                            </Menu.Item>
                            <Menu.Item leftSection={<IconMessageCircle size="1rem" />}>
                                Duplicate
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

                <p>Not published</p>
            </div>

        </div>
    )
}

export default DashboardCard