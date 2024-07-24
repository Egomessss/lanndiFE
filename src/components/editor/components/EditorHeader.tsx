import { ActionIcon, Anchor, AppShell, Button, Loader, Modal, Popover, Tabs, Tooltip } from '@mantine/core';
import React, { useState } from 'react';
import {
  IconArrowLeft,
  IconCheck,
  IconChevronDown,
  IconExternalLink,
  IconEye,
  IconQuestionMark,
  IconSettings,
} from '@tabler/icons-react';
import { useParams, usePathname } from 'next/navigation';
import { useEditorMaybe } from '@/components/editor/context/EditorInstance';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { notifications } from '@mantine/notifications';
import Link from 'next/link';
import { WithEditor } from '@/components/editor/wrappers';
import CommandButtons from '@/components/editor/components/TopBarButtons';
import DeviceButtons from '@/components/editor/components/DeviceButtons';
import RegisterUserModal from '@/app/demo/_components/RegisterUserModal';
import { useDisclosure } from '@mantine/hooks';
import SiteSettingsForm from '@/app/(sites)/settings/_components/SiteSettingsForm';
import DomainSettingsForm from '@/app/(sites)/settings/_components/DomainSettingsForm';
import DomainConfiguration from '@/app/(sites)/settings/_components/DomainConfiguration';
import { SiteSettings } from '@/app/(sites)/settings/[slug]/page';
import useUser from '@/hooks/use-user';
import { DarkModeButton } from '@/components/common/DarkModeButton/DarkModeButton';
import { useSidePanel } from '@/contexts/SidePanelPreviewContext';
import SeoConfiguration from '@/app/(sites)/settings/_components/SeoConfiguration';
import { SaveButton } from '@/components/editor/components/SaveButton';
import EditorVersions from '@/components/editor/components/EditorVersions';


function PublishButton({ siteData }: any) {

  const { user } = useUser();

  const params = useParams();
  const siteSlug = params.slug;
  const queryClient = useQueryClient();
  const editor = useEditorMaybe();


  const { mutate, isPending } = useMutation({
      mutationFn:

        async () => {
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
              html: editor.getHtml({ component, cleanId: true }),
              css: editor.getCss({ component, onlyMatched: true, keepUnusedStyles: false }),
              js: editor.getJs({ component }),
            };
          });
          await axios.post(`api/v1/sites/${siteSlug}/publish`, { projectId: siteSlug, data, pagesData });
        },
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
          message: 'Your website has been successfully published and your editor data automatically saved.',
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
        <Tabs.Tab value="third">SEO</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="first">
        {data && <SiteSettingsForm plan={plan} data={data} />}
      </Tabs.Panel>
      <Tabs.Panel value="second">
        {data && <DomainSettingsForm plan={plan} data={data} />}
        {data && <DomainConfiguration plan={plan} domainData={data} />}
      </Tabs.Panel>
      <Tabs.Panel value="third">
        {data && <SeoConfiguration plan={plan} domainData={data} />}
      </Tabs.Panel>
    </Tabs>
  </Modal>;
}

function SiteSettingsButton({ data }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const { user } = useUser();
  return (
    <>
      <Tooltip color="dark" label="Site settings">
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
  const [canAutosaveLoadedData, setCanAutosaveLoadedData] = useState(true);
  console.log(canAutosaveLoadedData);
  const params = useParams();
  const siteSlug = params.slug;

  const { data } = useQuery({
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

  const loadVersionData = (data:any) => {
    editor?.loadProjectData(data);
    setCanAutosaveLoadedData(false)
  };


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
              <p>If you have any issues where blocks or interactions are not working properly try saving and refreshing
                the page.</p>
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
          <Tooltip color={tooltipColor}
                   label={tooltipLabel}>
            <Button disabled={isDisabled} component="a" href={buttonHref} target="_blank" size="xs" variant="subtle"
                    leftSection={<IconExternalLink size="1rem" />}>
              Preview
            </Button>
          </Tooltip>
          <EditorVersions setCanAutosaveLoadedData={setCanAutosaveLoadedData} loadVersionData={loadVersionData} />
          <SiteSettingsButton data={data} />
          {user ? <SaveButton canAutosaveLoadedData={canAutosaveLoadedData} /> :
            <Tooltip label="Register before you can save your site data">
              <RegisterUserModal />
            </Tooltip>}
          <PublishButton siteData={data} />

        </div>
      </div>
    </AppShell.Header>);
}

export default EditorHeader;