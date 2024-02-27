'use client'
import grapesjs, {Editor} from 'grapesjs'
import {useClickOutside, useDisclosure} from '@mantine/hooks'
import {AppShell, ScrollArea} from '@mantine/core'
import React, {useState} from 'react'
import GjsEditor, {Canvas, TraitsProvider} from '@/components/editor/wrappers'
import LayersLeftSideBar from '@/components/editor/components/LayersLeftSideBar'
import BlockSideBar from '@/components/editor/components/BlockSideBar'
import PagesLeftSideBar from '@/components/editor/components/PagesLeftSideBar'
import SelectorsProvider from '../../../components/editor/wrappers/SelectorsProvider'
import CustomSelectorManager from '@/components/editor/components/CustomSelectorManager'
import StylesProvider from '../../../components/editor/wrappers/StylesProvider'
import CustomStyleManager from '@/components/editor/components/CustomStyleManager'
import CustomTraitManager from '@/components/editor/components/CustomTraitManager'
import {gjsOptions} from "@/components/editor/utils/options";
import EditorNavbar from "@/components/editor/components/EditorNavbar";
import EditorAside from "@/components/editor/components/EditorAside";
import EditorHeader from "@/components/editor/components/EditorHeader";


export default function CustomEditor() {


    const [selected, setSelected] = useState('Blocks')
    const [selectedRightBar, setSelectedRightBar] = useState('Styles')
    // const [width, setWidth] = useState(0)


    const onEditor = (editor: Editor) => {

        // setWidth(editor.Canvas.getElement().clientWidth);

        (window as any).editor = editor
        const sm = editor.StyleManager


        editor.Commands.add('wrapper', {
            run: () => {
                // Get all currently selected components

                const selectedComponents = editor.getSelectedAll()

                // Check if there are selected components
                if (selectedComponents.length === 0) {
                    return // Exit if no components are selected
                }

                // Create a new 'div' component
                const wrapperDiv = editor.DomComponents.addComponent({
                    tagName: 'div',
                    // Additional properties for the 'div', like classes, styles, etc.
                })

                // Get the parent of the first selected component
                const firstComponentParent = selectedComponents[0].parent()

                const selected = editor.getSelected()

                // Insert the wrapper at the position of the first selected component
                if (firstComponentParent) {
                    firstComponentParent.append(wrapperDiv, {at: selected.index()})
                }

                // Append each selected component to the new 'div'
                selectedComponents.forEach(component => {
                    wrapperDiv.append(component)
                })

                // Select the new wrapper 'div' component
                editor.select(wrapperDiv)
            },
            // Optional: Define the 'stop' function if needed
            // stop: () => {
            //     // Your stop logic here
            // },
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


    const [opened, {open, close}] = useDisclosure()

    const [openBlockSideBar, setOpenBlockSideBar] = useState(false)
    const ref = useClickOutside(() => close)

    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(true)
    const handleSegmentChange = (value: string) => {
        setSelected(value)
    }

    const handleRightBarSegmentChange = (value: string) => {
        setSelectedRightBar(value)
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
            options={gjsOptions}

        >
            <div className="absolute h-full w-full overflow-y-hidden">
                <AppShell
                    header={{height: 50}}
                    navbar={{
                        width: 220,
                        breakpoint: 'sm',
                        collapsed: {mobile: !opened, desktop: !desktopOpened},
                    }}
                    aside={{
                        width: 220,
                        breakpoint: 'sm',
                        collapsed: {mobile: !opened, desktop: !desktopOpened},
                    }}
                    transitionDuration={1000}
                >
                    <EditorNavbar opened={opened} onClick={() => setSelected('Blocks')}
                                  onClick1={() => setSelected('Integrations')} onClick2={() => setSelected('Sections')}
                                  onClick3={() => setSelected("Layers")} onClick4={() => setSelected('Pages')}
                                  renderSelectedComponent={renderSelectedComponent()}/>
                    <EditorAside value={selectedRightBar} onChange={handleRightBarSegmentChange}
                                 renderSelectedRightBarComponent={renderSelectedRightBarComponent()}/>
                    <EditorHeader onClick={toggleDesktop} openBlockSideBar={openBlockSideBar}/>
                    <AppShell.Main component={ScrollArea}>
                        <Canvas/>
                    </AppShell.Main>
                </AppShell>

                {/*<ModalProvider>*/}
                {/*    {({ open, title, content, close }) => (*/}
                {/*        <CustomModal*/}
                {/*            open={open}*/}
                {/*            title={title}*/}
                {/*            children={content}*/}
                {/*            close={close}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*</ModalProvider>*/}
                {/*<AssetsProvider>*/}
                {/*    {({ assets, select, close, Container }) => (*/}
                {/*        <Container>*/}
                {/*            <CustomAssetManager*/}
                {/*                assets={assets}*/}
                {/*                select={select}*/}
                {/*                close={close}*/}
                {/*            />*/}
                {/*        </Container>*/}
                {/*    )}*/}
                {/*</AssetsProvider>*/}
            </div>
        </GjsEditor>

    )
}

