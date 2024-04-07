import { ActionIcon, Anchor, AppShell, Button, Modal, Popover, ScrollArea, Tabs, Tooltip } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import {
  IconArrowLeft,
  IconCheck,
  IconChevronDown,
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
import RegisterUserModal from '@/app/demo/_components/RegisterUserModal';
import { useDisclosure, useIdle } from '@mantine/hooks';
import SiteSettingsForm from '@/app/(sites)/sites/_components/SiteSettingsForm';
import DomainSettingsForm from '@/app/(sites)/sites/_components/DomainSettingsForm';
import DomainConfiguration from '@/app/(sites)/sites/_components/DomainConfiguration';
import { SiteSettings } from '@/app/(sites)/sites/[slug]/page';
import useUser from '@/hooks/use-user';
import { DarkModeButton } from '@/components/common/DarkModeButton/DarkModeButton';


function SaveButton() {
  const editor = useEditorMaybe();
  const params = useParams();
  const siteSlug = params.slug;
  const slug = usePathname();

  const user = slug === '/demo' ? null : true;
  const [showSuccess, setShowSuccess] = useState(false);
  const { data: isNotFirstTimeSaving } = useEditorData();
  const idle = useIdle(1200000);

  const getEditorData = () => {
    const data = editor?.getProjectData();
    const pagesData = editor?.Pages.getAll().map(page => {
      const component = page.getMainComponent();
      const pageData = page.attributes;
      return {
        pageId: pageData.id,
        name: pageData.name,
        slug: pageData.slug,
        title: pageData.title,
        description: pageData.description,
        html: editor.getHtml({ component }),
        css: editor.getCss({ component }),
        js: editor.getJs({ component }),
      };
    });
    return { data, pagesData };
  };

  const showNotification = (color: string, title: string, message: string) => {
    notifications.show({
      color,
      title,
      message,
    });
  };


  const { mutate, isError, isPending } = useMutation({
    // @ts-ignore
    mutationFn: async ({ data, pagesData }) => {
      const endpoint = `api/v1/editor/${siteSlug}/`;
      const url = isNotFirstTimeSaving?.data ? `${endpoint}update` : `${endpoint}store`;
      const method = isNotFirstTimeSaving?.data ? 'patch' : 'post';
      const payload = {
        projectId: siteSlug,
        data,
        pagesData,
      };
      await axios({
        method: method,
        url: url,
        data: payload,
      });
    },
    onError: () => {
      showNotification('red', 'Error', 'Something went wrong... Please try again!');
    },
    onSuccess: () => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 30000);
    },
  });

  useEffect(() => {
    if (isNotFirstTimeSaving?.data !== null) {
      const { data, pagesData } = getEditorData();
      const saveIntervalId = setInterval(() => {
        if (!idle) {
          // @ts-ignore
          mutate({ data, pagesData });
        }
      }, 600000);
      return () => clearInterval(saveIntervalId);
    }
  }, [mutate, idle, isNotFirstTimeSaving?.data]);

  const handleSave = () => {
    const { data, pagesData } = getEditorData();
    if (!editor) {
      showNotification('red', 'Error', 'Editor is not available.');
      return;
    }
    if (!data || !pagesData) {
      showNotification('red', 'Error', 'Data is not available.');
      return;
    }
    // @ts-ignore
    mutate({ data, pagesData });
  };

  const color = isError ? 'red' : showSuccess ? 'green' : 'blue';

  return (
    <>
      {user ? (
        <Tooltip color="gray" label="Save changes - Saved automatically every 10 minutes">
          <ActionIcon
            disabled={showSuccess}
            loading={isPending}
            className={!showSuccess ? 'animate-pulse' : ''}
            color={color}
            onClick={handleSave}
            variant="subtle"
          >
            {isError && <IconFaceIdError size="1rem" />}
            {!isPending && !isError && showSuccess ? <IconCheck size="1rem" /> : <IconDeviceFloppy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      ) : (
        <Tooltip label="Register before you can save your site data">
          <RegisterUserModal />
        </Tooltip>
      )}
    </>
  );
}

function PublishButton({ siteData }: any) {

  const { user } = useUser();

  const params = useParams();
  const siteSlug = params.slug;

  const editor = useEditorMaybe();

  const data = editor?.getProjectData();

  const pagesData = editor?.Pages.getAll().map(page => {
    const component = page.getMainComponent();
    const pageData = page.attributes;
    return {
      pageId: pageData.id,
      name: pageData.name,
      slug: pageData.slug,
      title: pageData.title,
      description: pageData.description,
      html: editor.getHtml({ component }),
      css: editor.getCss({ component }),
      js: editor.getJs({ component }),
    };
  });

  console.log("pageData",pagesData);


  const { mutate, isPending } = useMutation({
      mutationFn:
        async () => await axios.post(`api/v1/sites/${siteSlug}/publish`, { projectId: siteSlug, data, pagesData }),
      onError: (error) => {
        let errorMessage = 'Something went wrong... Please try again!';
        // @ts-ignore
        const status = error.response?.status;

        if (status === 422) {
          // Validation error handling
          // @ts-ignore
          const errorData = error.response.data;
          const missingFieldsMessage = errorData.missingFields ? ` Missing fields: ${errorData.missingFields.join(', ')}.` : '';
          errorMessage = `${errorData.message || 'Validation error occurred'}${missingFieldsMessage}`;
        } else if (status >= 500) {
          // Server error handling
          errorMessage = 'A server error occurred. Please try again later.';
        } else if (status === 403) {
          notifications.show({
            title: 'Error',
            message: 'You have reached the maximum number of live sites allowed for your subscription plan.',
            color: 'red',
          });
        }

        notifications.show({
          title: 'Error',
          message: errorMessage,
          color: 'red',
        });
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

  const { user } = useUser();
  const plan = user?.subscription || 'free';

  return <Modal
    opened={opened}
    onClose={onClose}
    title="Site settings"
    // scrollAreaComponent={ScrollArea.Autosize}
    size="xl"
  >
    <Tabs keepMounted={false} defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">General</Tabs.Tab>
        <Tabs.Tab value="second">Domain</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="first">
        <SiteSettingsForm plan={plan} data={data} />
      </Tabs.Panel>
      <Tabs.Panel value="second">
        <DomainSettingsForm plan={plan} data={data} />
        <DomainConfiguration plan={plan} domainData={data} />
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
          <DarkModeButton />
          {isDemo && <Button color="red" component="a" target="_blank"
                             href="https://lanndi.lemonsqueezy.com/checkout/buy/2ddb7d73-91f4-4121-8413-c24ec6a3335c"
                             size="xs">Get
            lifetime deal</Button>}
        </div>
        <div className="flex items-center gap-4">
          <DeviceButtons />
          <WithEditor>
            <CommandButtons />
          </WithEditor>
        </div>

        <div className="flex w-full items-center justify-end gap-4">

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