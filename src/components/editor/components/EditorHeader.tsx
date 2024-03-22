import { ActionIcon, Anchor, AppShell, Button, Modal, Popover, ScrollArea, Tabs, Tooltip } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import {
  IconArrowLeft,
  IconCheck, IconChevronDown,
  IconDeviceFloppy,
  IconExternalLink,
  IconFaceIdError,
  IconSettings,
} from '@tabler/icons-react';
import { useParams, usePathname } from 'next/navigation';
import { useEditorMaybe } from '@/components/editor/context/EditorInstance';
import useEditorData from '@/hooks/use-editor-data';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import Link from 'next/link';
import { WithEditor } from '@/components/editor/wrappers';
import CommandButtons from '@/components/editor/components/TopBarButtons';
import DeviceButtons from '@/components/editor/components/DeviceButtons';
import { useAuth } from '@/hooks/auth';
import RegisterUserModal from '@/app/demo/_components/RegisterUserModal';
import { useDisclosure } from '@mantine/hooks';
import SiteSettingsForm from '@/app/dashboard/(sites)/sites/_components/SiteSettingsForm';
import DomainSettingsForm from '@/app/dashboard/(sites)/sites/_components/DomainSettingsForm';
import DomainConfiguration from '@/app/dashboard/(sites)/sites/_components/DomainConfiguration';
import Loading from '@/app/dashboard/(sites)/Loading';
import ErrorMessage from '@/app/dashboard/(sites)/Error';
import { SiteSettings } from '@/app/dashboard/(sites)/sites/[slug]/page';
import useUser from '@/hooks/use-user';


function SaveButton() {

  const params = useParams();
  const siteSlug = params.slug;

  const slug = usePathname();

  const user = slug === '/demo' ? null : true;

  const [showSuccess, setShowSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  // Additional state to store interval and timeout IDs
  const [notificationIntervalId, setNotificationIntervalId] = useState<NodeJS.Timeout | number | null>(null);
  const [redIconTimeoutId, setRedIconTimeoutId] = useState<NodeJS.Timeout | number | null>(null);

  const editor = useEditorMaybe();

  const data = editor?.getProjectData();
  // console.log("data",data)

  const { data: isNotFirstTimeSaving } = useEditorData();

  const resetTimers = () => {
    // Clear existing timers
    if (notificationIntervalId !== null) clearInterval(notificationIntervalId as number);
    if (redIconTimeoutId !== null) clearTimeout(redIconTimeoutId as number);

    // Set new timers
    const newIntervalId = setInterval(() => {
      // Notification logic
    }, 300000); // 5 minutes

    const newTimeoutId = setTimeout(() => {
      setShowNotification(true);
    }, 180000); // 3 minutes

    // Save the IDs of the new timers
    setNotificationIntervalId(newIntervalId);
    setRedIconTimeoutId(newTimeoutId);
  };


  const { mutate, isError, isPending } = useMutation({
      mutationFn: async () => {
        const endpoint = `api/v1/editor/${siteSlug}/`;
        const url = isNotFirstTimeSaving ? `${endpoint}update` : `${endpoint}store`; // Adjust 'update' and 'store' as per your API endpoints
        const method = isNotFirstTimeSaving ? 'patch' : 'post';

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
            color: 'red',
            title: 'Error',
            message: 'Something went wrong... Please try again!',
          });

        },
      onSuccess: () => {
        // On success, show the check icon
        setShowSuccess(true);
        // And hide it after 2 seconds
        setTimeout(() => setShowSuccess(false), 2000);
        // Reset timers on success
        resetTimers();
      },
    },
  );

  useEffect(() => {
    resetTimers(); // Initialize timers

    // Cleanup function to clear the interval and timeout
    return () => {
      if (notificationIntervalId !== null) clearInterval(notificationIntervalId);
      if (redIconTimeoutId !== null) clearTimeout(redIconTimeoutId);
    };
  }, []); // Ensures this effect runs only once after the initial render
  // Determine the color based on the mutation's state
  const color = isError ? 'red' : showSuccess ? 'green' : showNotification ? 'red' : 'blue';

  return (
    <>
      {user ? <Tooltip label="Save changes">
          <ActionIcon loading={isPending} className={!showSuccess ? 'animate-pulse' : ''}
                      color={color}
                      onClick={() => mutate()}
                      variant="subtle">
            {isError && <IconFaceIdError size="1rem" />}
            {!isPending && !isError && showSuccess ? <IconCheck size="1rem" /> : <IconDeviceFloppy size="1rem" />}
          </ActionIcon>
        </Tooltip> :
        <Tooltip label="Register before you can save your site data">
          <RegisterUserModal />
        </Tooltip>
      }
    </>
  );
};

function PublishButton({ siteData }: any) {

  const { user } = useUser();

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
        (error) => {
          // @ts-ignore
          if (error.response.status === 422) {
            // Assuming error.response.data contains `message` and `missingFields`
            // @ts-ignore
            const errorMessage = error.response.data.message || 'Validation error occurred';
            // @ts-ignore
            const missingFieldsMessage = error.response.data.missingFields ? ` Missing fields: ${error.response.data.missingFields.join(', ')}.` : '';
            notifications.show({
              title: 'Error',
              message: `${errorMessage}${missingFieldsMessage}`,
              color: 'red',
            });
          } else {
            notifications.show({
              title: 'Error',
              message: 'Something went wrong... Please try again!',
              color: 'red',
            });
          }
        },
      onSuccess: () => {
        notifications.show({
          title: 'Success',
          message: 'Your website has been successfully published',
          color: 'green',
        });
      },
    },
  );

  return (
    <Popover position="left-start"
             offset={6} width={400} withArrow shadow="md">
      <Popover.Target>
        <Button
          disabled={!user}
          size="xs" rightSection={<IconChevronDown size="1rem" />}>Publish</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <div className="flex items-start gap-4 flex-col justify-start">
          {siteData ?
            <div>
              <p className="text-sm">lanndi subdomain</p>
              <Anchor href="https://mantine.dev/" target="_blank">
                {siteData.subdomain !== null ? siteData.subdomain : 'No subdomain yet'}
              </Anchor>
              <p className="text-sm">Custom domain</p>
              <Anchor href="https://mantine.dev/" target="_blank">
                {siteData.domain !== null ? siteData.domain : 'No domain assigned yet'}
              </Anchor>
            </div> : 'No domain or subdomain assigned yet'}
          {siteData && <>
            {!siteData.title && !siteData.description &&
              <p className="text-xs text-red-500">Add a title and description to your site settings before you can
                publish
                your website</p>}
            <Button
              fullWidth
              disabled={!user || !siteData.title && !siteData.description}
              loading={isPending} size="xs" onClick={() => mutate()}>Publish</Button>
          </>}

        </div>

      </Popover.Dropdown>
    </Popover>

  );
}

function SiteSettingsModal(props: {
  opened: boolean,
  onClose: () => void
  data: SiteSettings
}) {

  const { opened, onClose, data } = props; // Destructuring for easier access


  return <Modal
    opened={opened}
    onClose={onClose}
    title="Site settings"
    scrollAreaComponent={ScrollArea.Autosize}
    size="xl"
  >

    <Tabs keepMounted={false} defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">General</Tabs.Tab>
        <Tabs.Tab value="second">Domain</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="first">
        <SiteSettingsForm {...data} />
      </Tabs.Panel>
      <Tabs.Panel value="second">
        <DomainSettingsForm {...data} />
        <DomainConfiguration {...data} />
      </Tabs.Panel>
    </Tabs>
  </Modal>;
}

function SiteSettingsButton({ data }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const { user } = useUser();
  return (
    <>
      <Tooltip label="Site settings">
        <ActionIcon disabled={!user} onClick={open} variant="subtle">
          <IconSettings size="1rem" />
        </ActionIcon>
      </Tooltip>
      {data && <SiteSettingsModal data={data} opened={opened} onClose={close} />}
    </>
  );
}

function EditorHeader() {
  const slug = usePathname();

  const isDemo = slug === '/demo';
  const { user } = useUser();

  const params = useParams();
  const siteSlug = params.slug;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['siteSettings', siteSlug],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/sites/settings/${siteSlug}`);
      return data as SiteSettings;
    },
    enabled: !isDemo,
  });

  return (
    <AppShell.Header>
      <div className="gjs-top-sidebar flex h-full w-full items-center justify-between px-2">
        <div className="flex w-full items-center justify-start gap-2 py-2 ">
          <Button
            disabled={!user}
            component={Link}
            href={isDemo ? 'https://lanndi.com' : '/'}
            variant="subtle"
            size="xs"
            leftSection={<IconArrowLeft size="1rem" />}
          >
            {isDemo ? 'Homepage' : 'Dashboard'}
          </Button>

        </div>
        <div className="flex items-center gap-4">
          <DeviceButtons />
          <WithEditor>
            <CommandButtons />
          </WithEditor>
        </div>

        <div className="flex w-full items-center justify-end gap-4">
          {isDemo && <Button color="red" component="a" target="_blank"
                             href="https://lanndi.lemonsqueezy.com/checkout/buy/2ddb7d73-91f4-4121-8413-c24ec6a3335c"
                             size="xs">Get
            Lifetime deal 33% off</Button>}
          <Tooltip color="gray" label="Open latest save preview">
            <Button component="a" href={`https://preview.${data?.subdomain}.lanndi.com`} target="_blank"
                    disabled={!user} size="xs" variant="subtle"
                    leftSection={<IconExternalLink size="1rem" />}>Preview</Button>
          </Tooltip>
          <SiteSettingsButton data={data} />
          <SaveButton />
          <PublishButton siteData={data} />
        </div>
      </div>
    </AppShell.Header>);
}

export default EditorHeader;