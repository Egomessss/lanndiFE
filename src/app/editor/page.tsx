'use client'
import grapesjs, { Editor, EditorConfig } from 'grapesjs'

import { useDisclosure } from '@mantine/hooks'

import { ActionIcon, AppShell, Box, Divider, ScrollArea, SegmentedControl, Tabs, Tooltip } from '@mantine/core'

import React, { useState } from 'react'

import zoomPlugin from '@/components/editor/plugins/utils/ZoomPlugin/zoomPlugin'

import GjsEditor, { Canvas, TraitsProvider, WithEditor } from '@/components/editor/wrappers'
import CoreBlocks from '../../components/editor/plugins/components/InteractiveBlocks'
import MediaBlocks from '@/components/editor/plugins/components/MediaBlocks'
import LayoutBlocks from '@/components/editor/plugins/components/LayoutBlocks'
import ListBlocks from '@/components/editor/plugins/components/ListBlocks'
import FormBlocks from '@/components/editor/plugins/components/FormsBlocks'
import IntegrationsBlocks from '@/components/editor/plugins/components/IntegrationBlocks'
import LayersLeftSideBar from '@/components/editor/components/LayersLeftSideBar'
import BlockSideBar from '@/components/editor/components/BlockSideBar'
import TopBar from '@/components/editor/components/TopBar'
import { starterTemplate, styleStarterTemplate } from '../../components/editor/templates/Starter'
import FloatingBar from '@/components/editor/components/FloatingBar'
import PagesLeftSideBar from '@/components/editor/components/PagesLeftSideBar'
import SemanticBlocks from '@/components/editor/plugins/components/SemanticBlocks'
import SelectorsProvider from '../../components/editor/wrappers/SelectorsProvider'
import CustomSelectorManager from '@/components/editor/components/CustomSelectorManager'
import StylesProvider from '../../components/editor/wrappers/StylesProvider'
import CustomStyleManager from '@/components/editor/components/CustomStyleManager'
import CustomTraitManager from '@/components/editor/components/CustomTraitManager'
import {
    IconFile, IconLayersLinked, IconLayoutGridAdd, IconPhoto, IconPlus, IconSection, IconSettings, IconStack2,
    IconTemplate, IconUserBolt,
} from '@tabler/icons-react'
import styles from '@/app/page.module.css'
import TypographyBlocks from '@/components/editor/plugins/components/TypographyBlocks'
import ExtraBlocks from '@/components/editor/plugins/components/ExtraBlocks'

export default function CustomEditor() {
    const [selected, setSelected] = useState('Blocks')
    const [selectedRightBar, setSelectedRightBar] = useState('Styles')


    const onEditor = (editor: Editor) => {
        console.log('Editor loaded', { editor })

        // Function to add a tool to the component's toolbar
        const addToToolbar = (component, tool) => {
            const toolbar = component.get('toolbar')
            const toolExists = toolbar.some(item => item.command === tool.commandName)

            if (!toolExists) {
                toolbar.unshift({
                    id: tool.id,
                    attributes: { class: tool.icon, title: tool.title },
                    command: tool.commandName,
                })
                component.set('toolbar', toolbar)
            }
        }

        // Event handler for component selection
        editor.on('component:selected', (component) => {
            // Define tools to be added
            const wrapperTool = {
                icon: 'fa fa-plus',
                title: 'Add a wrapper',
                commandName: 'wrapper',
                id: 'wrapper',
            }
            const settingsTool = {
                icon: 'fa fa-cog',
                title: 'Open component settings',
                commandName: 'open-traits-manager',
                id: 'open-traits-manager',
            }

            // Add tools to the toolbar
            addToToolbar(component, wrapperTool)
            addToToolbar(component, settingsTool)
        })

        // Command to open the Traits Manager
        editor.Commands.add('open-traits-manager', {
            run: () => {
                setSelectedRightBar('Settings')
            },
        })

        // Command for deselecting components
        editor.Commands.add('deselect-components', {
            run: () => {
                editor.select(undefined)
                console.log('Components deselected')
            },
        })

        // Keymap for the 'Esc' key to trigger the deselect command
        editor.Keymaps.add('deselect-components', 'esc', 'deselect-components')
    }


    const [opened, { toggle }] = useDisclosure()

    const [openBlockSideBar, setOpenBlockSideBar] = useState(false)


    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
    const handleSegmentChange = (value: string) => {
        setSelected(value)
    }

    const handleRightBarSegmentChange = (value: string) => {
        setSelectedRightBar(value)
    }


    const gjsOptions: EditorConfig = {
        height: '100svh',
        // width:'100%',
        undoManager: { trackSelection: false },
        storageManager: {
            type: 'local', // Type of the storage, available: 'local' | 'remote'
            autosave: true, // Store data automatically
            autoload: true, // Autoload stored data on init
            stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
            options: {
                local: { // Options for the `local` type
                    key: 'lanndiProject', // The key for the local storage
                },
            },
        },
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
            LayoutBlocks,
            TypographyBlocks,
            CoreBlocks,
            MediaBlocks,
            ListBlocks,
            FormBlocks,
            ExtraBlocks,
            // IntegrationsBlocks,
            SemanticBlocks,
        ],

    }
    // Render different components based on the selected value
    const renderSelectedComponent = () => {
        switch (selected) {
            case 'Blocks':
                return <BlockSideBar />
            case 'Layers':
                return <LayersLeftSideBar />
            case 'Pages':
                return <PagesLeftSideBar />
            default:
                return null
        }
    }
    const renderSelectedRightBarComponent = () => {
        switch (selectedRightBar) {
            case 'Styles':
                return <>
                    <SelectorsProvider>
                        {(props) => <CustomSelectorManager {...props} />}
                    </SelectorsProvider>
                    <StylesProvider>
                        {(props) => <CustomStyleManager {...props} />}
                    </StylesProvider>
                </>
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
            options={gjsOptions}

        >
            <div className="absolute h-full w-full overflow-y-hidden">
                <AppShell
                    header={{ height: 50 }}
                    navbar={{
                        width: 250,
                        breakpoint: 'sm',
                        collapsed: { mobile: !opened, desktop: !desktopOpened },
                    }}
                    aside={{
                        width: 250,
                        breakpoint: 'sm',
                        collapsed: { mobile: !opened, desktop: !desktopOpened },
                    }}
                    transitionDuration={1000}

                >
                    <AppShell.Navbar hidden={!opened} classNames={styles}>
                        {/*<Tabs classNames={styles}  defaultValue="first" orientation="vertical">*/}
                        {/*    <Tabs.List >*/}
                        {/*        <Tabs.Tab value="first"><IconPlus size="1rem" /></Tabs.Tab>*/}
                        {/*        <Tabs.Tab value="second"><IconFile size="1rem" /></Tabs.Tab>*/}
                        {/*        <Tabs.Tab value="third"><IconStack2 size="1rem" /></Tabs.Tab>*/}
                        {/*        <Tabs.Tab value="forth"><IconPhoto size="1rem" /></Tabs.Tab>*/}
                        {/*        <Tabs.Tab value="fifth"><IconSettings size="1rem" /></Tabs.Tab>*/}
                        {/*    </Tabs.List>*/}

                        {/*    /!*<Tabs.Panel value="first">First panel</Tabs.Panel>*!/*/}
                        {/*    <Tabs.Panel value="second">Second panel</Tabs.Panel>*/}
                        {/*</Tabs>*/}
                        <div className="h-full flex ">
                            <div className=" flex flex-col gap-2 h-full border-r-[1px] border-blue-500 p-1">
                                <Tooltip label="Show/Hide Siderbar">
                                    <ActionIcon variant="subtle">
                                        <IconPlus size="1rem" />
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Blocks">
                                    <ActionIcon variant="subtle">
                                        <IconLayoutGridAdd size="1rem" />
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Sections">
                                    <ActionIcon variant="subtle">
                                        <IconSection size="1rem" />
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Templates">
                                    <ActionIcon variant="subtle">
                                        <IconTemplate size="1rem" />
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Custom Components">
                                    <ActionIcon variant="subtle">
                                        <IconUserBolt size="1rem" />
                                    </ActionIcon>
                                </Tooltip>
                                <Divider my="xs" variant="dashed" />
                                <Tooltip label="Layers">
                                    <ActionIcon variant="subtle">
                                        <IconStack2 size="1rem" />
                                    </ActionIcon>
                                </Tooltip>

                                <Tooltip label="Pages">
                                    <ActionIcon variant="subtle">
                                        <IconFile size="1rem" />
                                    </ActionIcon>
                                </Tooltip>


                                <Tooltip label="Settings">
                                    <ActionIcon variant="subtle">
                                        <IconSettings size="1rem" />
                                    </ActionIcon>
                                </Tooltip>


                            </div>
                            <Box component={ScrollArea} className="p-2 w-full"> {renderSelectedComponent()}</Box>
                        </div>

                    </AppShell.Navbar>
                    {/*<AppShell.Aside>*/}
                    {/*    <AppShell.Section>*/}
                    {/*        <SegmentedControl fullWidth m="4" size="xs" color="blue" value={selectedRightBar}*/}
                    {/*                          onChange={handleRightBarSegmentChange} data={['Styles', 'Settings']} />*/}

                    {/*    </AppShell.Section>*/}
                    {/*    <AppShell.Section offsetScrollbars grow my="md" component={ScrollArea}>*/}
                    {/*        {renderSelectedRightBarComponent()}*/}
                    {/*    </AppShell.Section>*/}
                    {/*</AppShell.Aside>*/}
                    {/*<AppShell.Header>*/}
                    {/*    <TopBar onClick={toggleDesktop} openBlockSideBar={openBlockSideBar} />*/}
                    {/*</AppShell.Header>*/}
                    <AppShell.Main>
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

