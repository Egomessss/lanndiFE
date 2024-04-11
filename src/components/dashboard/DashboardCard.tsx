'use client';
import React, { useState } from 'react';
import { ActionIcon, Badge, Button, Menu, Modal, Text, TextInput } from '@mantine/core';
import { IconDots, IconPencil, IconSettings, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { modals } from '@mantine/modals';
import { Site } from '@/app/(sites)/page';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';


const DashboardCard = ({ name, slug, ogImage, isLive }: Site) => {
  console.log(ogImage);
  const [opened, { open, close }] = useDisclosure(false);
  const [siteName, setSiteName] = useState('');
  const queryClient = useQueryClient();
  const { mutate: deleteSite, isPending } = useMutation({
      mutationFn:
        async () => await axios.post(`/api/v1/sites/settings/${slug}/delete`, { siteName }),
      onSuccess:
        (data) => {
          // Assuming your data is nested under a 'data' key
          console.log(data);
          notifications.show({
            title: 'Success!',
            message: 'Site deletion in progress...',
            color: 'green',
          });
          queryClient.invalidateQueries({ queryKey: ['userSites'] });

        }
      ,
      onError:
        (error) => {
          console.log('error', error);

          notifications.show({
            title: 'Error',
            // @ts-ignore
            message: error.response.data.message,
            color: 'red',
          });

        },
    },
  );


  const handleDelete = () => {
    deleteSite();
    close()
  };


  return (
    <div className="flex flex-col col-span-1 w-full">
      <img
        src={ogImage ? ogImage : 'https://images.pexels.com/photos/14577237/pexels-photo-14577237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
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
              <Menu.Item component={Link} href={`/settings/${slug}`}
                         leftSection={<IconSettings size="1rem" />}>
                Site Settings
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                disabled={isPending}
                onClick={open}
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
      <Modal centered opened={opened} onClose={close} title="Authentication">
        <div className="flex flex-col gap-4">
          <Text size="sm">
            Are you sure you want to delete your site? This action is destructive and irreversible!.
          </Text>
          <TextInput
            label={<p>Write <span className="font-bold text-red-500">{name}</span> to delete your site</p>}
            placeholder="Enter site name to confirm"
            onChange={(event) => setSiteName(event.currentTarget.value)}
          />
        </div>
        <div className="flex gap-4 w-full justify-end mt-4 ">
          <Button variant="subtle" color="red" onClick={close}>Cancel</Button>
          <Button color="red" loading={isPending} onClick={handleDelete}>Delete Site</Button>
        </div>
      </Modal>
    </div>
  );
};

export default DashboardCard;