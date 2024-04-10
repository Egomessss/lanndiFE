import { Button, Modal, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import useUser from '@/hooks/use-user';
import { useRouter } from 'next/navigation';

const DeleteUser = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const router = useRouter();
  const { user } = useUser();
  const [name, setName] = useState('');

  const { mutate: deleteUser, isPending } = useMutation({
      mutationFn:
        async () => await axios.delete(`/api/v1/user/profile/delete`),
      onSuccess:
        (data) => {
          const responseData = data?.data; // Assuming your data is nested under a 'data' key
          if (responseData) {
            notifications.show({
              title: 'Success!',
              message: 'Account deleted successfully',
              color: 'green',
            });
            // delete cookie
            document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=lax';
            router.push('/login');
          }
        }
      ,
      onError:
        (error) => {
          console.log('error', error);
          notifications.show({
            title: 'Error',
            message: error.message,
            color: 'red',
          });

        },
    },
  );

  const handleDelete = () => {
    if (name.length === user?.name.length) {
      deleteUser();
    } else {
      notifications.show({
        title: 'Error',
        message: 'Site name does not match. Please try again!',
        color: 'red',
      });
    }
    setName(''); // Reset the input field on confirm
  };

  return (
    <div>
      <Modal centered opened={opened} onClose={close} title="Delete Account">
        <div className="flex flex-col gap-4">
          <Text size="sm">
            Are you sure you want to delete your account? This action is destructive and irreversible!.
          </Text>
          <TextInput
            label={<p>Write <span className="font-bold text-red-500">{user?.name}</span> to delete your account</p>}
            placeholder="Enter user name to confirm"
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <div className="flex gap-4 w-full justify-end">
            <Button variant="subtle" color="red" onClick={close}>Cancel</Button>
            <Button color="red" loading={isPending} onClick={handleDelete}>Delete Account</Button>
          </div>
        </div>

      </Modal>

      <Button rightSection={<IconTrash size="1rem" />} color="red" onClick={open}>Delete Account</Button>
    </div>
  );
};

export default DeleteUser;