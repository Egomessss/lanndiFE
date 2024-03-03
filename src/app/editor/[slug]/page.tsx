'use client'
import grapesjs, {Editor, EditorConfig} from 'grapesjs'
import {useDisclosure} from '@mantine/hooks'
import {AppShell, ScrollArea} from '@mantine/core'
import React, {useState} from 'react'
import GjsEditor, {AssetsProvider, Canvas, ModalProvider, TraitsProvider} from '@/components/editor/wrappers'
import LayersLeftSideBar from '@/components/editor/components/LayersLeftSideBar'
import BlockSideBar from '@/components/editor/components/BlockSideBar'
import PagesLeftSideBar from '@/components/editor/components/PagesLeftSideBar'
import SelectorsProvider from '../../../components/editor/wrappers/SelectorsProvider'
import CustomSelectorManager from '@/components/editor/components/CustomSelectorManager'
import StylesProvider from '../../../components/editor/wrappers/StylesProvider'
import CustomStyleManager from '@/components/editor/components/CustomStyleManager'
import CustomTraitManager from '@/components/editor/components/CustomTraitManager'

import EditorNavbar from "@/components/editor/components/EditorNavbar";
import EditorAside from "@/components/editor/components/EditorAside";
import EditorHeader from "@/components/editor/components/EditorHeader";
import zoomPlugin from "@/components/editor/plugins/utils/ZoomPlugin/zoomPlugin";
import LayoutBlocks from "@/components/editor/plugins/components/LayoutBlocks";
import TypographyBlocks from "@/components/editor/plugins/components/TypographyBlocks";
import CoreBlocks from "@/components/editor/plugins/components/InteractiveBlocks";
import MediaBlocks from "@/components/editor/plugins/components/MediaBlocks";
import ListBlocks from "@/components/editor/plugins/components/ListBlocks";
import CustomCode from "@/components/editor/plugins/utils/CustomCode";
import BorderStyle from "@/components/editor/plugins/utils/BorderStyle";
import axios from "@/lib/axios";
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/(app)/Loading";
import ErrorMessage from "@/app/(app)/Error";
import {useParams} from "next/navigation";
import {starterTemplate, styleStarterTemplate} from "@/components/editor/templates/Starter";
import CustomAssetManager from '@/components/editor/components/CustomAssetManager'
import CustomModal from "@/components/editor/components/CustomModal";
import {editorConfigOptions} from "@/components/editor/utils/options";


export type EditorData = {
    projectId: string
    data: object
}

export default function CustomEditor() {

    const [selected, setSelected] = useState('Blocks')
    const [selectedRightBar, setSelectedRightBar] = useState('Styles')
    // const [width, setWidth] = useState(0)


    const handleRightBarSegmentChange = (value: string) => {
        setSelectedRightBar(value)
    }

    const params = useParams()
    const siteSlug = params.slug

    const {data, isLoading, isError} = useQuery({
        queryKey: ['editorData', siteSlug],
        queryFn: async () => {
            const {data} = await axios.get(`/api/v1/sites/editor/${siteSlug}`)
            return data as EditorData
        },
    })

    if (isLoading) return <Loading/>
    if (isError) return <ErrorMessage/>


    const onEditor = (editor: Editor) => {
        (window as any).editor = editor
    }


    // Render different components based on the selected value
    const renderSelectedComponent = () => {
        switch (selected) {
            case 'Blocks':
                return <BlockSideBar/>
            // case 'Integrations':
            //     return <BlockSideBar/>
            case 'Layers':
                return <LayersLeftSideBar/>
            case 'Pages':
                return <PagesLeftSideBar/>
            default:
                return null
        }
    }

    const renderSelectedRightBarComponent = () => {
        switch (selectedRightBar) {
            case 'Styles':
                return <ScrollArea
                    offsetScrollbars
                    pl={4}
                >
                    <SelectorsProvider>
                        {(props) => <CustomSelectorManager {...props} />}
                    </SelectorsProvider>
                    <StylesProvider>
                        {(props) => <CustomStyleManager {...props} />}
                    </StylesProvider>
                </ScrollArea>
            case 'Settings':
                return <TraitsProvider>
                    {(props) => <CustomTraitManager {...props} />}
                </TraitsProvider>
            default:
                return null
        }
    }


    return (
        <GjsEditor
            grapesjs={grapesjs}
            grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
            onEditor={onEditor}
            // @ts-ignore
            options={editorConfigOptions(data!)}
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
                    <EditorNavbar  onClick={() => setSelected('Blocks')}
                                  onClick1={() => setSelected('Integrations')} onClick2={() => setSelected('Sections')}
                                  onClick3={() => setSelected("Layers")} onClick4={() => setSelected('Pages')}
                                  renderSelectedComponent={renderSelectedComponent()}/>
                    <EditorAside value={selectedRightBar} onChange={handleRightBarSegmentChange}
                                 renderSelectedRightBarComponent={renderSelectedRightBarComponent()}/>
                    <EditorHeader />
                    <AppShell.Main component={ScrollArea}>
                        <Canvas/>
                    </AppShell.Main>
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
                <AssetsProvider>
                    {({assets, select, close, Container, open}) => (
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

    )
}

