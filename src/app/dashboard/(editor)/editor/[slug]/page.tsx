'use client';
import grapesjs, { Editor } from 'grapesjs';
import { AppShell } from '@mantine/core';
import React from 'react';
import GjsEditor, { Canvas, ModalProvider } from '@/components/editor/wrappers';
import LeftSideBar from '@/components/editor/components/LeftSideBar';
import RightSideBar from '@/components/editor/components/RightSideBar';
import EditorHeader from '@/components/editor/components/EditorHeader';
import Loading from '@/app/dashboard/(sites)/Loading';
import ErrorMessage from '@/app/dashboard/(sites)/Error';
import { useParams } from 'next/navigation';
import CustomModal from '@/components/editor/components/CustomModal';
import { editorConfigOptions } from '@/components/editor/utils/options';
import useEditorData from '@/hooks/use-editor-data';
import { EditorLoading } from '@/components/common/EditorLoading';


export default function CustomEditor() {

    const params = useParams()
    const siteSlug = params.slug

    const { data, isLoading, isError } = useEditorData();

    if (isLoading) return <Loading/>
    if (isError) return <ErrorMessage/>


    const onEditor = (editor: Editor) => {
        (window as any).editor = editor
    }

    if (isLoading) {
        return <EditorLoading />; // Replace this with your loading component
    }

    const isDemo = false

    return (
        <GjsEditor
            grapesjs={grapesjs}
            grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
            onEditor={onEditor}
            // @ts-ignore
            options={editorConfigOptions(data!, siteSlug, isDemo)}
        >
            <div className="absolute h-full w-full overflow-y-hidden">
                <AppShell
                    header={{height: 50}}
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
                    <EditorHeader/>
                    <LeftSideBar/>
                    <RightSideBar/>
                    <Canvas/>
                </AppShell>
                <ModalProvider>
                    {({open, title, content, close}) => (
                        <CustomModal
                            open={open}
                            title={title}
                            children={content}
                            close={close}
                        />
                    )}
                </ModalProvider>
                {/*<AssetsProvider>*/}
                {/*    {({assets, select, close, Container, open}) => (*/}
                {/*        <CustomAssetManager*/}
                {/*            assets={assets}*/}
                {/*            select={select}*/}
                {/*            close={close}*/}
                {/*            open={open}*/}
                {/*        />*/}

                {/*    )}*/}
                {/*</AssetsProvider>*/}
            </div>
        </GjsEditor>

    )
}

