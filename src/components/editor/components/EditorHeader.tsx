import { ActionIcon, Anchor, AppShell, Button, Modal, Popover, ScrollArea, Tabs, Tooltip } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import {
  IconArrowLeft,
  IconCheck,
  IconChevronDown,
  IconDeviceFloppy,
  IconExternalLink, IconEye,
  IconFaceIdError, IconQuestionMark,
  IconSettings,
} from '@tabler/icons-react';
import { useParams, usePathname } from 'next/navigation';
import { useEditor, useEditorMaybe } from '@/components/editor/context/EditorInstance';
import useEditorData from '@/hooks/use-editor-data';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import Link from 'next/link';
import { WithEditor } from '@/components/editor/wrappers';
import CommandButtons from '@/components/editor/components/TopBarButtons';
import DeviceButtons from '@/components/editor/components/DeviceButtons';
import RegisterUserModal from '@/app/demo/_components/RegisterUserModal';
import { useDisclosure, useIdle } from '@mantine/hooks';
import SiteSettingsForm from '@/app/(sites)/settings/_components/SiteSettingsForm';
import DomainSettingsForm from '@/app/(sites)/settings/_components/DomainSettingsForm';
import DomainConfiguration from '@/app/(sites)/settings/_components/DomainConfiguration';
import { SiteSettings } from '@/app/(sites)/settings/[slug]/page';
import useUser from '@/hooks/use-user';
import { DarkModeButton } from '@/components/common/DarkModeButton/DarkModeButton';
import { timeSince } from '@/lib/utils';
import { useSidePanel } from '@/contexts/SidePanelPreviewContext';


function SaveButton() {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const editor = useEditorMaybe();
  const params = useParams();
  const siteSlug = params.slug;
  const slug = usePathname();
  const queryClient = useQueryClient();
  const user = slug === '/demo' ? null : true;
  const [showSuccess, setShowSuccess] = useState(false);
  const { data: isNotFirstTimeSaving } = useEditorData();
  const idle = useIdle(1200000);

  const getEditorData = () => {
    // console.log('editor data fetched');
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
    console.log('pageData', pagesData);
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
    onError: (error) => {
      // @ts-ignore
      const status = error.response?.status;
      let errorMessage = 'Something went wrong... Please try again!';
      if (status === 422) {
        // Validation error handling
        // @ts-ignore
        const errorData = error.response.data;
        const missingFieldsMessage = errorData.missingFields ? ` Missing fields: ${errorData.missingFields.join(', ')}.` : '';
        errorMessage = `${errorData.message || 'Validation error occurred'}${missingFieldsMessage}`;
      } else if (status >= 500) {
        // Server error handling
        errorMessage = 'A server error occurred. Please try again later.';
      } else if (status === 401 || status === 419) {
        errorMessage = 'Log in before you can save your data.';
      } else if (status === 403) {
        errorMessage = 'You do not have the necessary permissions.';
      } else if (status === 404) {
        // Handle 404 error
        errorMessage = 'The requested resource could not be found.';
      }
      showNotification('red', 'Error', errorMessage);
    },
    onSuccess: () => {
      setShowSuccess(true);
      setLastSaved(new Date());
      setTimeout(() => setShowSuccess(false), 5000);
      queryClient.invalidateQueries({ queryKey: ['editorData', siteSlug] });
    },
  });

  useEffect(() => {
    if (isNotFirstTimeSaving?.data !== null) {
      const saveIntervalId = setInterval(() => {
        if (!idle) {
         handleSave()
        }
      }, 120000); // 2 minutes
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
        <Tooltip color="dark"
                 label={<div className="flex flex-col gap-4"><p>Save changes - Saved automatically every 2 minutes.</p><p></p>Last saved: {lastSaved ? timeSince(lastSaved) : 'Not yet saved'}</div>}>
          <ActionIcon
            disabled={isPending}
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
  const queryClient = useQueryClient();
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
            message: error.message,
            color: 'red',
          });
        } else if (status === 404) {
          // Handle 404 error
          errorMessage = 'The requested resource could not be found.';
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
        queryClient.invalidateQueries({ queryKey: ['editorData', siteSlug] });
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
            <div className="flex flex-col gap-2 w-full justify-start items-start">
              <p className="text-sm">lanndi subdomain</p>
              <Anchor href={`https://${siteData.subdomain}.lanndi.com`} target="_blank">
                {siteData.subdomain !== null ? siteData.subdomain : 'No subdomain yet'}
              </Anchor>
              <p className="text-sm">Custom domain</p>
              <Anchor href="https://mantine.dev/" target="_blank">
                {siteData.domain !== null ? siteData.domain : 'No domain assigned yet'}
              </Anchor>
              {user?.subscription === 'free' && <>
                <Button fullWidth component="a" href="/plans">Upgrade Your Plan</Button>
                <ul className="flex gap-2 list-none text-xs justify-center w-full">
                  <li className="flex items-center gap-1">
                    <IconCheck size="1rem" />
                    More Websites
                  </li>
                  <li className="flex items-center gap-1">
                    <IconCheck size="1rem" />Custom Domains
                  </li>
                  <li className="flex items-center gap-1">
                    <IconCheck size="1rem" />Custom Code
                  </li>

                </ul>
              </>}
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
  const editor = useEditorMaybe();
  const { openSidePanel, closeSidePanel } = useSidePanel();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
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

  const isDisabled = !data?.title && !data?.description && user && user.subscription !== 'free' || !user || user.subscription === 'free';
  const tooltipColor = isDisabled ? 'red' : 'gray';
  const tooltipLabel = user?.subscription === 'free' ? 'Free users are not allowed preview domains' : (!data?.title && !data?.description ? 'Add a title and description to your site settings before you can preview your website(paid feature)' : 'Open latest saved preview');
  const buttonHref = isDisabled ? '' : `https://preview.${data?.subdomain}.lanndi.com`;


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
          <Tooltip
            color="dark"
            label={<div className="flex gap-2 flex-col"><p>Click to help us improve our editor by providing feedback,
              report bugs
              and ask for features</p><p>If
              you need help you can contact us at help@lanndi.com - we respond in less than 24h</p>
              <p>If you have any issues where blocks or interactions are not working properly try saving and refreshing the page.</p>
            </div>}>
            <ActionIcon
              variant="light"
              color="red"
              component="a"
              target="_blank"
              href="https://lanndi.featurebase.app"
            >
              <IconQuestionMark size="1rem" />
            </ActionIcon>
          </Tooltip>
        </div>
        <div className="flex items-center gap-4">
          <WithEditor>
            <DeviceButtons />
            <CommandButtons />
          </WithEditor>
        </div>

        <div className="flex w-full items-center justify-end gap-2">
          <Tooltip color="dark" label={<div className="flex flex-col gap-2">
            <p>Preview Interactions e.g. button clicks</p>
          <p>If by any chance some interactions don&apos;t work try refreshing the page</p>
          </div>}>
            <ActionIcon
              color="blue"
              variant={
                isPreviewOpen ? 'filled' : 'subtle'
              }
              onClick={() => {
                if (isPreviewOpen) {
                  editor?.stopCommand('core:preview');
                  setIsPreviewOpen(false);
                  openSidePanel();
                } else {
                  editor?.runCommand('core:preview');
                  setIsPreviewOpen(true);
                  closeSidePanel();
                }
              }}
            >
              <IconEye size="1rem" />
            </ActionIcon>
          </Tooltip>
          {/*<Tooltip color={!data?.title && !data?.description ? 'red' : 'gray'}*/}
          {/*         label={!data?.title && !data?.description ? 'Add a title and description to your site settings before you can publish your website' : 'Open latest saved preview'}>*/}
          {/*  <Button disabled={!data?.title && !data?.description || !user} component="a"*/}
          {/*          href={!data?.title && !data?.description || !user ? '' : `https://preview.${data?.subdomain}.lanndi.com`}*/}
          {/*          target="_blank"*/}
          {/*          size="xs" variant="subtle"*/}
          {/*          leftSection={<IconExternalLink size="1rem" />}>Preview</Button>*/}
          {/*</Tooltip>*/}
          <Tooltip color={tooltipColor} label={tooltipLabel}>
            <Button disabled={isDisabled} component="a" href={buttonHref} target="_blank" size="xs" variant="subtle"
                    leftSection={<IconExternalLink size="1rem" />}>
              Preview
            </Button>
          </Tooltip>
          <SiteSettingsButton data={data} />
          <SaveButton />
          <PublishButton siteData={data} />
        </div>
      </div>
    </AppShell.Header>);
}

export default EditorHeader;