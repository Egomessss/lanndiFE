'use client';
import React from 'react';
import { ActionIcon, Badge, Button, Menu, Text } from '@mantine/core';
import {IconDots, IconPencil, IconSettings, IconTrash} from '@tabler/icons-react';
import Link from 'next/link';
import { modals } from '@mantine/modals';
import { Site } from '@/app/dashboard/page';


const DashboardCard = ({ name, slug, ogImage, isLive }: Site) => {

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your site',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your site? This action is destructive and irreversible!.
        </Text>
      ),
      labels: { confirm: 'Delete site', cancel: 'No don\'t delete it' },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return (
    <div className="flex flex-col col-span-1 w-full">
      <img
        src="https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="w-full h-44 rounded-lg mb-2"
        alt={name}
      />
      <div>
        <div className="flex w-full justify-between items-center">
          <h2 className="text-lg">{name}</h2>
          <Menu position="bottom-end" shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon variant="subtle">
                <IconDots size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item component={Link} href={`/editor/${slug}`}
                           leftSection={<IconPencil size="1rem" />}>
                    Edit site
                </Menu.Item>
              <Menu.Item component={Link} href={`/sites/${slug}/settings`}
                         leftSection={<IconSettings size="1rem" />}>
                Site Settings
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                onClick={openDeleteModal}
                color="red"
                leftSection={<IconTrash size="1rem" />}
              >
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        {isLive ? <Badge variant="light" color="green">Live</Badge> :
          <Badge variant="light" color="orange">Draft</Badge>}

      </div>

    </div>
  );
};

export default DashboardCard;