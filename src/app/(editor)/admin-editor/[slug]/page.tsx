'use client';
import grapesjs, { Editor } from 'grapesjs';
import { ActionIcon, AppShell, Box, Button, Divider, NumberInput, rem, Tooltip } from '@mantine/core';
import React, { useState } from 'react';
import GjsEditor, { AssetsProvider, Canvas, ModalProvider, useEditor, WithEditor } from '@/components/editor/wrappers';
import LeftSideBar from '@/components/editor/components/LeftSideBar';
import RightSideBar from '@/components/editor/components/RightSideBar';
import EditorHeader from '@/components/editor/components/EditorHeader';
import Loading from '@/app/(sites)/Loading';
import ErrorMessage from '@/app/(sites)/Error';
import { useParams } from 'next/navigation';
import CustomModal from '@/components/editor/components/CustomModal';
import { editorConfigOptions } from '@/components/editor/utils/admin-options';
import useEditorData from '@/hooks/use-editor-data';
import CustomAssetManager from '@/components/editor/components/CustomAssetManager';
import {
  IconArrowAutofitHeight,
  IconExclamationCircle, IconHandGrab,
  IconZoomIn,
  IconZoomOut,
  IconZoomReset,
} from '@tabler/icons-react';
import { useSidePanel } from '@/contexts/SidePanelPreviewContext';
import FloatingEditorButtons from '@/components/editor/components/FloatingEditorButtons';
import { EditorLoading } from '@/components/common/EditorLoading';


// export const dynamic = 'force-dynamic'
export default function CustomEditor() {
  const { isSidePanelOpen } = useSidePanel();
  const params = useParams();
  const siteSlug = params.slug;

  const { data, isLoading, isError } = useEditorData();

  if (isLoading) {
    return <EditorLoading />; // Replace this with your loading component
  }
  if (isError) return <ErrorMessage />;

  const onEditor = (editor: Editor) => {
    (window as any).editor = editor;
  };

  const isDemo = false;

  return (
    <>
      <GjsEditor
        grapesjs={grapesjs}
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        onEditor={onEditor}
        // @ts-ignore
        options={editorConfigOptions(data!, siteSlug, isDemo)}
        className="hidden md:block w-full h-full overflow-hidden"
      >
        <div className="absolute h-full w-full overflow-y-hidden">
          <AppShell
            header={{ height: 40 }}
            navbar={{
              width: 220,
              breakpoint: 'sm',
              collapsed: { desktop: !isSidePanelOpen, mobile: !isSidePanelOpen },
            }}
            aside={{
              width: 220,
              breakpoint: 'sm',
              collapsed: { desktop: !isSidePanelOpen, mobile: !isSidePanelOpen },
            }}
            transitionDuration={1000}
          >
            <EditorHeader />
            <LeftSideBar />
            <RightSideBar />
            <Canvas />
          </AppShell>
          <ModalProvider>
            {({ open, title, content, close }) => (
              <CustomModal
                open={open}
                title={title}
                close={close}
              >{content}
              </CustomModal>
            )}
          </ModalProvider>
          <AssetsProvider>
            {({ assets, select, close, Container, open }) => (
              <CustomAssetManager
                assets={assets}
                select={select}
                close={close}
                open={open}
              />

            )}
          </AssetsProvider>
          <WithEditor>
            <FloatingEditorButtons />
          </WithEditor>
        </div>
      </GjsEditor>

      <div className="md:hidden h-[100svh] w-full flex justify-center items-center flex-col gap-8 text-xl">
        <IconExclamationCircle size="4rem" className="text-red-500" />
        <p>Editor is not available for mobile devices</p>
        <div className="flex items-center gap-2">
          <Button component="a" href="https://lanndi.com"
                  variant="subtle">Homepage</Button>
          <Button component="a" href="https://app.lanndi.com/login">Signup</Button></div>
      </div>

    </>

  )
    ;
}

