import { ActionIcon, AppShell, Button, Tooltip } from '@mantine/core';
import React, { useState } from 'react';
import { IconArrowLeft, IconCheck, IconDeviceFloppy, IconExternalLink, IconFaceIdError } from '@tabler/icons-react';
import { useParams } from 'next/navigation';
import { useEditorMaybe } from '@/components/editor/context/EditorInstance';
import useEditorData from '@/hooks/use-editor-data';
import { useMutation } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import Link from 'next/link';
import { WithEditor } from '@/components/editor/wrappers';
import CommandButtons from '@/components/editor/components/TopBarButtons';
import DeviceButtons from '@/components/editor/components/DeviceButtons';
import { useAuth } from '@/hooks/auth';


function SaveButton() {
  const [showSuccess, setShowSuccess] = useState(false);
  const params = useParams();
  const siteSlug = params.slug;

  const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: '/' });

  const editor = useEditorMaybe();

  const data = editor?.getProjectData();
  // console.log("data",data)

  const { data: isFirstTimeSaving } = useEditorData();

  const { mutate, isError, isPending } = useMutation({
      mutationFn: async () => {
        const endpoint = `api/v1/sites/editor/${siteSlug}/`;
        const url = isFirstTimeSaving ? `${endpoint}update` : `${endpoint}store`; // Adjust 'update' and 'store' as per your API endpoints
        const method = isFirstTimeSaving ? 'patch' : 'post';

        // Perform the request with the appropriate method and URL
        await axios({
          method: method,
          url: url,
          data: { projectId: siteSlug, data: data }, // Assuming you want to send the same data for both requests
        });
      },
      onError:
        () => {
          notifications.show({
            title: 'Error',
            message: 'Something went wrong... Please try again!',
            color: 'red',
          });

        },
      onSuccess: () => {
        // On success, show the check icon
        setShowSuccess(true);
        // And hide it after 2 seconds
        setTimeout(() => setShowSuccess(false), 2000);
      },
    },
  );
  // Determine the color based on the mutation's state
  const color = isError ? 'red' : showSuccess ? 'green' : 'blue';
  console.log(isError);
  return (<>
    {user ? <Tooltip label="Save changes">
        {/*<CreateUserAndPageModal />*/}
        <ActionIcon disabled={!user} loading={isPending} className={!showSuccess ? 'animate-pulse' : ''}
                    color={color}
                    onClick={() => mutate()}
                    variant="subtle">
          {isError && <IconFaceIdError size="1rem" />}
          {!isPending && !isError && showSuccess ? <IconCheck size="1rem" /> : <IconDeviceFloppy size="1rem" />}
        </ActionIcon>

      </Tooltip> :
      <div>
        <Tooltip  label="Save changes">
          {/*<CreateUserAndPageModal />*/}
          <ActionIcon disabled={!user} loading={isPending} className={!showSuccess ? 'animate-pulse' : ''}
                      color={color}
                      onClick={() => mutate()}
                      variant="subtle">
            {isError && <IconFaceIdError size="1rem" />}
            {!isPending && !isError && showSuccess ? <IconCheck size="1rem" /> : <IconDeviceFloppy size="1rem" />}
          </ActionIcon>

        </Tooltip>
      </div>}


  </>);
}

function PublishButton() {
  const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: '/' });
  const [showSuccess, setShowSuccess] = useState(false);
  const params = useParams();
  const siteSlug = params.slug;

  const editor = useEditorMaybe();

  const data = editor?.getProjectData();

  const pagesData = editor?.Pages.getAll().map(page => {
    const component = page.getMainComponent();
    const slug = page.getName();
    return {
      slug: slug,
      html: editor.getHtml({ component }),
      css: editor.getCss({ component }),
    };
  });

  // console.log("pageData",pagesData)

  const { mutate, isPending } = useMutation({
      mutationFn:
        async () => await axios.post(`api/v1/sites/${siteSlug}/publish`, { projectId: siteSlug, data, pagesData }),
      onError:
        () => {
          notifications.show({
            title: 'Error',
            message: 'Something went wrong... Please try again!',
            color: 'red',
          });

        },
      onSuccess: () => {
        // On success, show the check icon
        setShowSuccess(true);
        // And hide it after 2 seconds
        setTimeout(() => setShowSuccess(false), 2000);
      },
    },
  );

  return <Tooltip label="Publish Site">
    <Button disabled={!user} loading={isPending} size="xs" onClick={() => mutate()}>Publish</Button>
  </Tooltip>;

}

function EditorHeader() {
  const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: '/' });
  console.log(user);
  return (
    <AppShell.Header>
      <div className="gjs-top-sidebar flex h-full w-full items-center justify-between px-2">
        <div className="flex w-full items-center justify-start gap-2 py-2 ">
          <Button
            disabled={user === undefined}
            component={Link}
            href="/"
            variant="subtle"
            size="xs"
            leftSection={<IconArrowLeft size="1rem" />}
          >
            Dashboard
          </Button>

        </div>
        <div className="flex items-center gap-4">
          <DeviceButtons />
          <WithEditor>
            <CommandButtons />
          </WithEditor>
        </div>

        <div className="flex w-full items-center justify-end gap-4">
          <Button color="red" component="a" target="_blank"  href="https://lanndi.lemonsqueezy.com/checkout/buy/2ddb7d73-91f4-4121-8413-c24ec6a3335c" size="xs">Get LTD 33% off</Button>
          <Button disabled={!user} size="xs" variant="subtle"
                  leftSection={<IconExternalLink size="1rem" />}>Preview</Button>
          <SaveButton />
          <PublishButton />
        </div>
      </div>
    </AppShell.Header>);
}

export default EditorHeader;