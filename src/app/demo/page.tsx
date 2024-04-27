'use client';
import grapesjs, { Editor } from 'grapesjs';
import { AppShell, Button, useComputedColorScheme } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import GjsEditor, { AssetsProvider, Canvas, ModalProvider } from '@/components/editor/wrappers';
import LeftSideBar from '@/components/editor/components/LeftSideBar';
import RightSideBar from '@/components/editor/components/RightSideBar';
import EditorHeader from '@/components/editor/components/EditorHeader';
import CustomAssetManager from '@/components/editor/components/CustomAssetManager';
import CustomModal from '@/components/editor/components/CustomModal';
import { EditorLoading } from '@/components/common/EditorLoading';
import { demoEditorConfigOptions } from '@/components/editor/utils/demo-options';
import { IconExclamationCircle } from '@tabler/icons-react';
import { SidePanelProvider, useSidePanel } from '@/contexts/SidePanelPreviewContext';


export default function CustomEditor() {

  // if not user they have to pay which also registers them
  // after register they save their project which redirects to the editor with slug

  // let width;


  const onEditor = (editor: Editor) => {
    (window as any).editor = editor;
    // console.log('width', editor.Canvas.getFrame().width);
  };
  const data = null;

  // Step 2: Define state for loading
  const [isLoading, setIsLoading] = useState(true);

  // Step 3: Implement useEffect for timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Wait for 5 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []); // Empty dependency array means this effect runs once on mount

  // Step 4: Conditional rendering
  if (isLoading) {
    return <EditorLoading />; // Replace this with your loading component
  }


  return (
    <>

        <GjsEditor
          grapesjs={grapesjs}
          grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
          onEditor={onEditor}
          // @ts-ignore
          options={demoEditorConfigOptions()} className="hidden md:block w-full h-full overflow-hidden"
        >
          <div className="absolute h-full w-full overflow-y-hidden">
            <AppShell
              header={{ height: 50 }}
              navbar={{
                width: 220,
                breakpoint: 'sm',
              }}
              aside={{
                width: 220,
                breakpoint: 'sm',
              }}
              transitionDuration={1000}
            >
              <EditorHeader />
              {!isSidePanelOpen && <LeftSideBar />}
              {!isSidePanelOpen && <RightSideBar />}
              <Canvas />
            </AppShell>
            <ModalProvider>
              {({ open, title, content, close }) => (
                <CustomModal
                  open={open}
                  title={title}
                  close={close}
                >{content}</CustomModal>
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


  );
}

