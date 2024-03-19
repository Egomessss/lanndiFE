import * as React from 'react';

import type { Asset } from 'grapesjs';
import { useEditor } from '@/components/editor/context/EditorInstance';
import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Button, FileInput, Modal, ScrollArea, TextInput, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { z } from 'zod';
import { useParams, usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/auth';

// export type CustomAssetManagerProps = Pick<
//     AssetsResultProps,
//     'assets' | 'close' | 'select',
// >;

function SubmitAsset() {

  const slug = usePathname()

  const user = slug === '/demo' ? null : true

  const editor = useEditor();
  const params = useParams();
  const siteSlug = params.slug;

  // console.log(assets)
  const formSchema = z.object({
    value: z.string().url().or(z.string().length(0)).optional(),
    fileValue: z.instanceof(File).refine((file) => {
      return file.size <= 1024 * 1024; // Adjusting to 1MB in bytes
    }, `File size should be less than 1mb.`).nullable().optional(),
  }).refine((data) => {
    // Check that only one of value or fileValue is provided
    return (data.value === null || data.value === '') !== (data.fileValue === null);
  }, {
    message: 'Only one of \'value\' or \'fileValue\' can be provided, not both.',
    path: ['value'], // This path is arbitrary; adjust based on which field you want to highlight in case of an error
  });

  const form = useForm({
    initialValues: {
      value: '',
      fileValue: null,
    },
    validate: zodResolver(formSchema), // Here you integrate Zod's validation with useForm
  });
  console.log(typeof form.values);

  const { mutate: submitSite, isPending } = useMutation({
      mutationFn: async () => {
        const formData = new FormData();
        // Append text fields
        formData.append('value', form.values.value);

        // Append file fields if they exist
        if (form.values.fileValue) {
          formData.append('fileValue', form.values.fileValue);
        }

        // Use Axios to send formData
        return await axios.post(`/api/v1/sites/assets/${siteSlug}/store`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // This is important
          },
        });
      },
      onSuccess:
        (data) => {
          const responseData = data?.data;
          console.log(responseData);

          if (responseData) {
            editor.Assets.add(responseData.url);
            notifications.show({
              title: 'Success!',
              message: 'Success',
              color: 'green',
            });
          }

        }
      ,
      onError:
        (error) => {
          console.log('error', error);
          // @ts-ignore
          if (error.response.status === 422) {
            // Handle Laravel validation errors
            // @ts-ignore
            form.setErrors(error.response.data.errors || {});
          } else {
            notifications.show({
              title: 'Error',
              message: 'Something went wrong... Please try again!',
              color: 'red',
            });
          }
        },
    },
  );

  const validateBeforeSubmit = () => {

    form.validate();
    const isValid = form.isValid();

    // Immediately return if the form is not valid, reducing one level of nesting
    if (!isValid) return;

    // Handling when the user is logged in
    if (user) {
      submitSite();
      return; // Stop further execution
    }

    // At this point, the form is valid, and user exists
    // Simplify conditions by directly using the valid field values for adding to AssetManager
    const { value, fileValue } = form.values;

    if (value !== '' && fileValue === null) {
      editor.AssetManager.add(value);
    }
  };


  return <div className="flex justify-between  items-start">
    <div className="flex items-start gap-2 mb-8 ">
      <TextInput size="xs"
                 placeholder="Add url"
                 {...form.getInputProps('value')}
        // rightSection={<ActionIcon><IconPlus size="1rem"/> </ActionIcon>}
      />
      <p>or</p>
      <Tooltip color="gray" label="Must be logged in to upload files">
        <FileInput disabled={!user} size="xs" clearable placeholder="Add file"   {...form.getInputProps('fileValue')} />
      </Tooltip>
      {/*<Button size="xs">Log in</Button>*/}
    </div>

    <Button
      size="xs"
      onClick={validateBeforeSubmit}
      loading={isPending}
    >
      Upload
    </Button>
  </div>;
}

export default function CustomAssetManager({
                                             assets,
                                             select,
                                             open,
                                             close,
                                           }: any) {


  // const remove = (asset: Asset) => {
  //   editor.Assets.remove(asset);
  // };

  return (
    <Modal scrollAreaComponent={ScrollArea.Autosize} size="xl" opened={open} onClose={close} title="Assets" centered
    >
      <div className="flex flex-col gap-4">
        <SubmitAsset />

        <div className="grid grid-cols-4 gap-2 pr-2">
          {assets.map((asset: Asset) => (
            <div
              key={asset.getSrc()}
              className=" rounded col-span-1 border-solid p-2"
            >
              <img className="h-24 object-fill w-full rounded-sm" src={asset.getSrc()} />

              <div
                className="flex gap-2 items-center justify-between">
                <Button
                  fullWidth
                  size="xs"
                  onClick={() => select(asset, true)}
                >
                  Select
                </Button>
                {/*<ActionIcon*/}
                {/*  variant="subtle"*/}
                {/*  color="red"*/}
                {/*  loading={isPending}*/}
                {/*  onClick={() => deleteAsset(asset.getSrc())}*/}
                {/*>*/}
                {/*  <IconTrash size="1rem" />*/}
                {/*</ActionIcon>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
