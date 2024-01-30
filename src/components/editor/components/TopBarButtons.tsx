import {
    ActionIcon,
    Divider,
    NumberInput,
    rem,
    Switch,
    Tooltip,
    useComputedColorScheme,
    useMantineColorScheme,
    useMantineTheme,
} from '@mantine/core'
import React, { useEffect, useState } from 'react'

import { useEditor } from '../wrappers'
import {
    IconArrowBackUp,
    IconArrowForwardUp,
    IconAspectRatio,
    IconBorderAll,
    IconBorderNone,
    IconCode,
    IconHandClick,
    IconHandGrab,
    IconPresentation,
    IconRadar,
    IconScanEye,
    IconTrash,
    IconVector,
    IconZoomIn,
    IconZoomOut,
    IconZoomReset,
} from '@tabler/icons-react'


interface CommandButton {
    id: string
    Icon: IconType
    name: string
    options?: Record<string, any>
    disabled?: () => boolean
}

export default function TopBarButtons({onClick}) {
    const editor = useEditor()

    const [zoomValue, setZoomValue] = useState(100) // Initialize the zoom value

    const options = {
        ...{
            // default options
            zoomInKey: ['ctrl', '='],
            zoomOutKey: ['ctrl', '-'],
            panelCategory: 'Custom Category',
        },
        // ...opts,
    }

    // Function to handle zooming
    function handleZoom(isZoomIn: boolean) {
        const currentZoom = editor.Canvas.getZoom()
        const step = 5 // Define the zoom step
        const newZoom = isZoomIn ? currentZoom + step : currentZoom - step
        console.log(newZoom)
        editor.Canvas.setZoom(newZoom)
        setZoomValue(newZoom)
    }

// Add keymaps for zooming in anCanvas.d out
    editor.Keymaps.add('zoom-in', options.zoomInKey.join('+'), () => handleZoom(true))
    editor.Keymaps.add('zoom-out', options.zoomOutKey.join('+'), () => handleZoom(false))

// Prevent browser default zoom behavior on CTRL + scroll
    editor.on('load', () => {
        // Prevent browser default zoom behavior on CTRL + scroll
        const canvasBody = editor.Canvas.getBody()
        if (canvasBody) {
            canvasBody.addEventListener('wheel', event => {
                if (event.ctrlKey) {
                    event.preventDefault()
                    handleZoom(event.deltaY < 0)
                }
            }, { passive: false })
        }
    })


    let debounceTimeout: ReturnType<typeof setTimeout>

    const handleZoomInput = (value: number) => {
        // Clear any previously scheduled debounce
        clearTimeout(debounceTimeout)

        // Schedule a new debounce with a 1000ms (1 second) delay
        debounceTimeout = setTimeout(() => {
            editor.runCommand('zoomInput', { value: value })

            if (value > 201) {
                editor.Canvas.setZoom(100)
                setZoomValue(100) // Update the zoom value in the state
            } else if (value <= 200) {
                editor.Canvas.setZoom(value)
                setZoomValue(value) // Update the zoom value in the state
            }

            const zoom = editor.Canvas.getZoom()
            setZoomValue(zoom)
        }, 500)
    }


    const handleZoomReset = () => {
        editor.runCommand('zoomReset')
        const zoom = editor.Canvas.getZoom()
        setZoomValue(zoom)
    }

    const handleZoomIn = () => {
        editor.runCommand('zoomIn')
        const zoom = editor.Canvas.getZoom()
        setZoomValue(zoom)
    }

    const handleZoomOut = () => {
        editor.runCommand('zoomOut')
        const zoom = editor.Canvas.getZoom()
        setZoomValue(zoom)
    }

    const [, setUpdateCounter] = useState(0)

    const { UndoManager, Commands } = editor


    // editor.on('load', () => {
    //     editor.runCommand('core:component-outline')
    // })




    editor.Commands.add('designer-mode', {
        run: () => {
            editor.setDragMode('absolute')
            // console.log(editor.el)
        },
        stop: () => {
            editor.setDragMode('')
            // console.log('translate')
        },
    })

    editor.Commands.extend('preview', {
        run: () => {
            onClick()
            editor.runCommand('core:preview');
            // Adding a specific class to hide elements
            editor.refresh()

        },
        stop: () => {
            onClick()
            editor.stopCommand('core:preview');
            editor.refresh()
        },
    });

    // editor.select(undefined);


    const cmdButtons: CommandButton[] = [
        // TODO fix these 2 commands
        {
            id: 'core:canvas-clear',
            Icon: IconTrash,
            name: 'Clear Canvas',

        },
        {
            id: 'core:open-code',
            Icon: IconCode,
            name: 'Code',

        },

        {
            id: 'core:component-outline',
            Icon: IconBorderNone,
            name: 'Outline',

        },
        {
            id: 'preview',
            Icon: IconScanEye,
            name: 'Preview',

        },
        {
            id: 'designer-mode',
            Icon: IconVector,
            name: 'Designer Mode',
        },
        {
            id: 'core:fullscreen',
            Icon: IconAspectRatio,
            name: 'Fullscreen',
        },
        {
            id: 'core:undo',
            Icon: IconArrowBackUp,
            disabled: () => !UndoManager.hasUndo(),
            name: 'Undo',
        },
        {
            id: 'core:redo',
            Icon: IconArrowForwardUp,
            disabled: () => !UndoManager.hasRedo(),
            name: 'Redo',
        },
    ]

    useEffect(() => {
        const cmdEvent = 'run stop'
        const updateEvent = 'update'
        const updateCounter = () => setUpdateCounter((value) => value + 1)
        const onCommand = (id: string) => {
            cmdButtons.find((btn) => btn.id === id) && updateCounter()
        }
        editor.on(cmdEvent, onCommand)
        editor.on(updateEvent, updateCounter)

        return () => {
            editor.off(cmdEvent, onCommand)
            editor.off(updateEvent, updateCounter)
        }
    }, [cmdButtons, editor])


    return (
        <div className="flex  w-full gap-2 items-center">
            <Divider orientation="vertical" />
            <div className="flex items-center justify-center gap-2  w-full">
                <Tooltip label="Zoom out/ Shift -">
                    <ActionIcon
                        color="blue"

                        variant="subtle"
                        disabled={zoomValue < 51}
                        onClick={handleZoomOut}
                    >
                        <IconZoomOut  size="1rem"/>
                    </ActionIcon>
                </Tooltip>

                <NumberInput
                    hideControls
                    value={editor.Canvas.getZoom()}
                    onChange={handleZoomInput}
                    max={200}
                    size="xs"
                    min={50}
                    styles={{ input: { width: rem(54), textAlign: 'center' } }}
                />
                <Tooltip label="Zoom in / Shift + ">
                    <ActionIcon
                        color="blue"

                        disabled={zoomValue > 199}
                        onClick={handleZoomIn}
                        variant="subtle"
                    >
                        <IconZoomIn  size="1rem"/>
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="Reset zoom & position">
                    <ActionIcon
                        color="blue"

                        variant="subtle"
                        onClick={handleZoomReset}
                    >
                        <IconZoomReset size="1rem" />
                    </ActionIcon>
                </Tooltip>


                {/*<Tooltip label="Move - Space+LMB+Drag">*/}
                {/*    <ActionIcon*/}
                {/*        color="blue"*/}
                {/*        variant="outline"*/}
                {/*        onClick={handleZoomReset}*/}
                {/*    >*/}
                {/*        <IconHandGrab />*/}
                {/*    </ActionIcon>*/}
                {/*</Tooltip>*/}
                {/*<Tooltip label="Select - Space+LMB+Drag">*/}
                {/*    <ActionIcon*/}
                {/*        color="blue"*/}
                {/*        variant="outline"*/}
                {/*        onClick={handleZoomReset}*/}
                {/*    >*/}
                {/*        <IconHandClick />*/}
                {/*    </ActionIcon>*/}
                {/*</Tooltip>*/}
            </div>
            <Divider orientation="vertical" />
            {cmdButtons.map(({ id, Icon, disabled, options, name }) => (
                <div
                    key={id}
                    className="item flex items-center gap-2 whitespace-nowrap "
                >
                    <Tooltip label={name}>
                        <ActionIcon
                            key={id}
                            color="blue"

                            variant={
                                Commands.isActive(id) ? 'filled' : 'subtle'
                            }
                            onClick={() =>
                                Commands.isActive(id)
                                    ? Commands.stop(id)
                                    : Commands.run(id, options)
                            }
                            disabled={disabled?.()}
                        >
                            <Icon size="1rem" />
                        </ActionIcon>
                    </Tooltip>
                </div>
            ))}


        </div>
    )
}
