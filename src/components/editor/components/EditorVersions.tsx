import React, { useState } from 'react';
import { ActionIcon, Button, Modal, ScrollArea, Text, TextInput, Tooltip } from '@mantine/core';
import { IconCheck, IconDeviceFloppy, IconEdit, IconGitCompare, IconHistory, IconTrash } from '@tabler/icons-react';
import { useEditorMaybe } from '@/components/editor/context/EditorInstance';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import { useParams } from 'next/navigation';
import Loading from '@/app/(sites)/Loading';

// Example type for site versions
type SiteVersion = {
  id: number;
  type: 'user' | 'autosaved' | 'publish';
  projectData: {};
  created_at: string;
  name: string;
};

function DeleteEditorVersion({ id, siteSlug, queryClient, editor }: {
  id: number;
  siteSlug: string | string[];
  queryClient: any;
  editor: any
}) {

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const endpoint = `api/v1/sites/${id}/versions/delete`;

      await axios({
        method: 'delete',
        url: endpoint,
      });
    },
    onError: (error) => {
      notifications.show({
        title: 'Error',
        message: error.message,
        color: 'red',
      });
    },
    onSuccess: () => {
      notifications.show({
        title: 'Success',
        message: 'User Version deleted successfully',
        color: 'green',
      });
      queryClient.invalidateQueries({ queryKey: ['siteVersions', siteSlug] });
    },
  });

  const handleDelete = () => {
    // Confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this version?');
    if (isConfirmed) {
      mutate();
    }
  };

  return <ActionIcon loading={isPending} onClick={handleDelete} color="red"><IconTrash
    size="0.8rem" /></ActionIcon>;
}

function UpdateEditorVersion({ id, siteSlug, queryClient, editor, name, isEditingName, setIsEditingName }: {
  id: number;
  siteSlug: string | string[];
  queryClient: any;
  editor: any;
  name: string;
  isEditingName: boolean;
  setIsEditingName: (id: number | null) => void;
}) {
  const [newVersionName, setVersionName] = useState(name);
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const endpoint = `api/v1/sites/${id}/versions/update`;

      await axios({
        method: 'patch',
        url: endpoint,
        data: {
          name: newVersionName,
        },
      });

    },
    onError: (error) => {
      // @ts-ignore
      if (error.response && error.response.status === 422) {
        // Assuming the server response contains an array of errors under 'errors' key
        // @ts-ignore
        const validationErrors = Object.values(error.response.data.errors).flat().join(', ');
        notifications.show({
          title: 'Validation Error',
          message: validationErrors,
          color: 'red',
        });
      } else {
        notifications.show({
          title: 'Error',
          message: error.message,
          color: 'red',
        });
      }
      setVersionName('');
      setIsEditingName(null);
    },
    onSuccess: () => {
      notifications.show({
        title: 'Success',
        message: 'User Version saved successfully',
        color: 'green',
      });
      setVersionName('');
      setIsEditingName(null);
      queryClient.invalidateQueries({ queryKey: ['siteVersions', siteSlug] });
    },
  });


  return (
    <>
      {isEditingName ? (
        <div className="flex gap-2 items-center">
          <TextInput
            value={newVersionName}
            onChange={(event) => setVersionName(event.currentTarget.value)}
            placeholder="Version Name"
            size="xs"
          />
          <ActionIcon loading={isPending} onClick={() => mutate()}><IconCheck size="0.8rem" /></ActionIcon>
        </div>
      ) : (
        <ActionIcon loading={isPending} onClick={() => setIsEditingName(id)}><IconEdit size="0.8rem" /></ActionIcon>
      )}
    </>
  )
    ;
}

const EditorVersions = ({ loadVersionData,setCanAutosaveLoadedData }: { loadVersionData: any,setCanAutosaveLoadedData:any }) => {
  const editor = useEditorMaybe();
  const [opened, setOpened] = useState(false);
  const [editingVersionId, setEditingVersionId] = useState<number | null>(null);
  const params = useParams();
  const siteSlug = params.slug;
  const queryClient = useQueryClient();
  const isDemo = siteSlug === '/demo';
  const [storeName, setStoreName] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['siteVersions', siteSlug],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/sites/${siteSlug}/versions`);
      return data as SiteVersion[];
    },
    refetchOnWindowFocus: false,
    enabled: !isDemo,
  });


  const { mutate: StoreVersion, isPending } = useMutation({
    mutationFn: async () => {
      const endpoint = `api/v1/sites/${siteSlug}/versions/store`;

      const payload = {
        slug: siteSlug,
        data: editor?.getProjectData(),
        name: storeName,
      };

      await axios({
        method: 'post',
        url: endpoint,
        data: payload,
      });
    },
    onError: (error) => {
      // @ts-ignore
      if (error.response && error.response.status === 422) {
        // Assuming the server response contains an array of errors under 'errors' key
        // @ts-ignore
        const validationErrors = Object.values(error.response.data.errors).flat().join(', ');
        notifications.show({
          title: 'Validation Error',
          message: validationErrors,
          color: 'red',
        });
      } else {
        notifications.show({
          title: 'Error',
          message: error.message,
          color: 'red',
        });
      }
      setStoreName('');
    },
    onSuccess: () => {
      notifications.show({
        title: 'Success',
        message: 'User Version saved successfully',
        color: 'green',
      });
      queryClient.invalidateQueries({ queryKey: ['siteVersions', siteSlug] });
    },
  });


  return (
    <>
      <Modal  scrollAreaComponent={ScrollArea.Autosize} centered opened={opened} onClose={() => setOpened(false)}
             title="Site Versions" size="80%">
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center gap-2 w-full">
          <TextInput
            placeholder="Version Name"
            className="w-1/2"
            value={storeName}
            onChange={(event) => setStoreName(event.currentTarget.value)}
          />
          <Button loading={isPending} onClick={() => StoreVersion()} >
            Save Current Version
          </Button>
          </div>
          <Button w="250"  onClick={() => setCanAutosaveLoadedData(true)} leftSection={<IconDeviceFloppy size="1rem" />}>
            Re-enable AutoSave
          </Button>
        </div>

        <div className="text-xs flex flex-col gap-2"><p className="text-xs text-red-500 py-2">Loading a version
          won&apos;t save on top of the current data, it
          will just load it into the editor you will
          need to manually save it.</p>
          <p className="text-xs text-red-500 py-2">Loading a version
           will also disable autosaving but you can enable it again here.</p>
          <p>User saved are your saved versions - max 10</p>
          <p>Autosaved versions will save every hour while using the editor - max 10</p>
          <p>Published versions will save every time your publish your website - max 10</p></div>
        {isError && <p className="w-full h-full text-red-500 font-bold">Error loading versions</p>}
        {isLoading ? <Loading /> :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['user', 'autosaved', 'publish'].map((status) => (
              <div className="col-span-1" key={status}>
                <p
                  className="pt-4 w-full text-center font-bold">{status.charAt(0).toUpperCase() + status.slice(1)} Versions</p>
                {data?.filter(version => version.type === status).map((version, index) => (
                  <div key={version.id} className="flex flex-col gap-2 p-4 rounded-lg my-4">
                    <div className="flex w-full justify-between items-start">
                      {editingVersionId !== version.id &&
                        <p className="font-bold pr-2 text-sm">{version.name === 'Version' ? <><span
                          className="capitalize">{status}</span>{` Version ${10 - index}`}</> : version.name}</p>}
                      <div className="flex gap-2 items-center">
                        <UpdateEditorVersion isEditingName={editingVersionId === version.id}
                                             name={version.name} id={version.id} siteSlug={siteSlug} editor={editor}
                                             queryClient={queryClient} setIsEditingName={setEditingVersionId} />
                        <DeleteEditorVersion id={version.id} siteSlug={siteSlug} editor={editor}
                                             queryClient={queryClient} />
                      </div>
                    </div>
                    <Text size="sm" className="text-xs">Saved:{version.created_at}</Text>
                    <Button onClick={() => {
                      const isConfirmed = window.confirm('Are you sure you want to load this version? This will replace the current editor content, make sure to save your previous work before loading another.');
                      if (isConfirmed) {
                        loadVersionData(version.projectData);
                        setOpened(false)
                      }
                    }} size="xs">Load Version</Button>
                  </div>

                ))}
              </div>
            ))}
          </div>
        }
      </Modal>

      <Tooltip color="dark" label="Site Versions">
        <ActionIcon variant="subtle" onClick={() => setOpened(true)}>
          <IconHistory size="1rem" />
        </ActionIcon>
      </Tooltip>
    </>
  );
};

export default EditorVersions;