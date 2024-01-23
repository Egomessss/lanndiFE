'use client'
import grapesjs, { Editor, EditorConfig } from 'grapesjs'

import { useDisclosure } from '@mantine/hooks'

import { ActionIcon, AppShell, Box, Burger, Button, Divider, Tabs, Tooltip } from '@mantine/core'

import React, { useState } from 'react'

import zoomPlugin from '@/components/editor/plugins/utils/ZoomPlugin/zoomPlugin'

import GjsEditor, { Canvas, WithEditor } from '@/components/editor/wrappers'
import CoreBlocks from '@/components/editor/plugins/components/CoreBlocks'
import MediaBlocks from '@/components/editor/plugins/components/MediaBlocks'
import LayoutBlocks from '@/components/editor/plugins/components/LayoutBlocks'
import ListBlocks from '@/components/editor/plugins/components/ListBlocks'
import FormBlocks from '@/components/editor/plugins/components/FormsBlocks'
import IntegrationsBlocks from '@/components/editor/plugins/components/IntegrationBlocks'
import LayersLeftSideBar from '@/components/editor/components/LayersLeftSideBar'
import BlockSideBar from '@/components/editor/components/BlockSideBar'
import RightBar from '@/components/editor/components/RightBar'
import TopBar from '@/components/editor/components/TopBar'
import { starterTemplate, styleStarterTemplate } from '../../components/editor/templates/Starter'
import FloatingBar from '@/components/editor/components/FloatingBar'
import {
    IconArrowLeft,
    IconGrid4x4,
    IconLayersIntersect,
    IconLayoutGrid,
    IconPageBreak,
    IconSquarePlus,
    IconX,
} from '@tabler/icons-react'
import PagesLeftSideBar from '@/components/editor/components/PagesLeftSideBar'


export default function CustomEditor() {

    const onEditor = (editor: Editor) => {
        console.log('Editor loaded', { editor })
        const panelManager = editor.Panels;
        console.log(panelManager)
        editor.on("component:selected", (component) => {
            const newTool = {
                icon: 'fa-regular fa-square',
                title: 'Add a wrapper',
                commandName: 'wrapper',
                id: 'wrapper',
            };

            const defaultToolbar = component.get("toolbar");
            const checkAlreadyExist = defaultToolbar.find(
                (toolbar) => toolbar.command === newTool.commandName
            );
            if (!checkAlreadyExist) {
                defaultToolbar.unshift({
                    id: newTool.id,
                    attributes: { class: newTool.icon, title: newTool.title },
                    command: newTool.commandName,
                });
                component.set("toolbar", defaultToolbar);
            }
        });
    }
    const [opened, { toggle }] = useDisclosure()

    const [openBlockSideBar, setOpenBlockSideBar] = useState(false)

    const onClick = () => {
        setOpenBlockSideBar((value) => !value)
    }





    const gjsOptions: EditorConfig = {
        height: '100vh',
        storageManager: false,
        undoManager: { trackSelection: false },

        // selectorManager: { componentFirst: true },
        projectData: {
            assets: [
                'https://via.placeholder.com/350x250/78c5d6/fff',
                'https://via.placeholder.com/350x250/459ba8/fff',
                'https://via.placeholder.com/350x250/79c267/fff',
                'https://via.placeholder.com/350x250/c5d647/fff',
                'https://via.placeholder.com/350x250/f28c33/fff',
            ],
            pages: [
                {
                    name: 'Main Page',
                    component: starterTemplate,
                    styles: styleStarterTemplate,
                },
                {
                    name: 'Test Page',
                    component:
                        `<h1>Start Building Your Landing Page</h1>`,
                }
                ,
                {
                    name: 'Theme playground',
                    component:
                        `<h1>Start Building Your Landing Page</h1>`,
                }
                ,
            ],
        },
        plugins: [
            zoomPlugin,
            CoreBlocks,
            MediaBlocks,
            LayoutBlocks,
            ListBlocks,
            FormBlocks,
            IntegrationsBlocks,
        ],
    }

    return (
        <GjsEditor
            grapesjs={grapesjs}
            grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
            onEditor={onEditor}
            options={gjsOptions}

        >
            <div className="absolute h-full w-full">
                <AppShell
                    layout="alt"
                    header={{ height: 50 }}
                    navbar={{
                        width: 250,
                        breakpoint: 'sm',
                        collapsed: { mobile: !opened },
                    }}
                    aside={{
                        width: 250,
                        breakpoint: 'sm',
                        collapsed: { mobile: !opened },
                    }}
                    padding={0}
                >
                    <AppShell.Navbar hidden={!opened}>
                        <div className="flex w-full items-center justify-start gap-2 py-2 px-4">
                            <Button
                                size="xs"
                                leftSection={<IconArrowLeft />}
                            >
                                Posts
                            </Button>
                        </div>
                        <Tabs defaultValue="blocks" >
                            <Tabs.List grow>
                                <Tabs.Tab value="blocks" leftSection={<IconLayoutGrid size="1rem" />}>
                                    Blocks
                                </Tabs.Tab>
                                <Tabs.Tab value="layers" leftSection={<IconLayersIntersect size="1rem" />}>
                                    Layers
                                </Tabs.Tab>
                                <Tabs.Tab value="pages" leftSection={<IconPageBreak size="1rem"/>}>
                                    Pages
                                </Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="blocks">
                              <BlockSideBar/>
                            </Tabs.Panel>

                            <Tabs.Panel value="layers">
                                <LayersLeftSideBar />
                            </Tabs.Panel>

                            <Tabs.Panel value="pages">
                                <PagesLeftSideBar/>
                            </Tabs.Panel>
                        </Tabs>
                    </AppShell.Navbar>
                    <AppShell.Aside>
                        <RightBar />
                    </AppShell.Aside>
                    <AppShell.Header>
                        <TopBar onClick={onClick} openBlockSideBar={openBlockSideBar} />
                    </AppShell.Header>
                    <AppShell.Main className="grow flex">
                        <Canvas />
                    </AppShell.Main>
                </AppShell>
                <WithEditor>
                    <FloatingBar />
                </WithEditor>
            </div>
        </GjsEditor>

    )
}

