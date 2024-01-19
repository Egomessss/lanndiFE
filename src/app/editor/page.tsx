'use client'
import grapesjs, { Editor, EditorConfig } from 'grapesjs'

import { useDisclosure } from '@mantine/hooks'

import { AppShell, Burger } from '@mantine/core'

import { useState } from 'react'

import zoomPlugin from '@/components/editor/plugins/utils/ZoomPlugin/zoomPlugin'

import GjsEditor, { Canvas } from '@/components/editor/wrappers'
import CoreBlocks from '@/components/editor/plugins/components/CoreBlocks'
import MediaBlocks from '@/components/editor/plugins/components/MediaBlocks'
import LayoutBlocks from '@/components/editor/plugins/components/LayoutBlocks'
import ListBlocks from '@/components/editor/plugins/components/ListBlocks'
import FormBlocks from '@/components/editor/plugins/components/FormsBlocks'
import IntegrationsBlocks from '@/components/editor/plugins/components/IntegrationBlocks'
import LayersAndPagesLeftSideBar from '@/components/editor/components/LayersAndPagesLeftSideBar'
import BlockSideBar from '@/components/editor/components/BlockSideBar'
import RightBar from '@/components/editor/components/RightBar'
import TopBar from '@/components/editor/components/TopBar'

export default function CustomEditor() {
    const onEditor = (editor: Editor) => {
        console.log('Editor loaded', { editor })
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
                    component: `<h1 id='random2'>Start Building Your Landing Page</h1><h2 class='random'>Start Building Your Landing Page</h2><h2 class='random3'>Start Building Your Landing Page</h2>`,
                },
                {
                    name: 'Test Page',
                    component: `<h1>Start Building Your Landing Page</h1>`,
                },
                {
                    name: 'Theme playground',
                    component: `<h1>Start Building Your Landing Page</h1>`,
                },
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
            <AppShell
                // layout="alt"
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
                    {openBlockSideBar ? (
                        <LayersAndPagesLeftSideBar />
                    ) : (
                        <BlockSideBar />
                    )}
                </AppShell.Navbar>

                <AppShell.Aside>
                    <RightBar />
                </AppShell.Aside>
                <AppShell.Header>
                    <TopBar onClick={onClick} openBlockSideBar={openBlockSideBar} />
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                </AppShell.Header>
                <AppShell.Main>
                    <Canvas />
                </AppShell.Main>
            </AppShell>
        </GjsEditor>
    )
}

