import React, { useEffect, useState } from 'react'
import { ActionIcon, NumberInput, Paper, rem, Tooltip } from '@mantine/core'
import {
    IconArrowBackUp, IconArrowForwardUp,
    IconBorderAll,
    IconBorderNone, IconCode,
    IconHandClick,
    IconHandGrab, IconPresentation,
    IconZoomIn,
    IconZoomOut,
    IconZoomReset,
} from '@tabler/icons-react'
import { useEditor } from '@/components/editor/context/EditorInstance'

interface CommandButton {
    id: string
    Icon: IconType
    name: string
    options?: Record<string, any>
    disabled?: () => boolean
}

type EditorType = {
    runCommand: (command: string, options: { value: number | '' }) => void;
    Canvas: {
        setZoom: (value: number) => void;
        getZoom: () => number;
    };
};

type Props = {
    editor: EditorType;
};


const FloatingBar = () => {
    const editor = useEditor()
    const options = {
        ...{
            // default options
            zoomInKey: ['ctrl', '='],
            zoomOutKey: ['ctrl', '-'],
            panelCategory: 'Custom Category',
        },
        // ...opts,
    }

    const [zoomValue, setZoomValue] = useState(100) // Initialize the zoom value

    // Function to handle zooming
    function handleZoom(isZoomIn: boolean) {
        const currentZoom = editor.Canvas.getZoom();
        const step = 5; // Define the zoom step
        const newZoom = isZoomIn ? currentZoom + step : currentZoom - step;
        console.log(newZoom)
        editor.Canvas.setZoom(newZoom);
        setZoomValue(newZoom)
    }

// Add keymaps for zooming in anCanvas.d out
    editor.Keymaps.add('zoom-in', options.zoomInKey.join('+'), () => handleZoom(true));
    editor.Keymaps.add('zoom-out', options.zoomOutKey.join('+'), () => handleZoom(false));

// Prevent browser default zoom behavior on CTRL + scroll
    editor.on('load', () => {
        // Prevent browser default zoom behavior on CTRL + scroll
        const canvasBody = editor.Canvas.getBody();
        if (canvasBody) {
            canvasBody.addEventListener('wheel', event => {
                if (event.ctrlKey) {
                    event.preventDefault();
                    handleZoom(event.deltaY < 0);
                }
            }, { passive: false });
        }
    });




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

    // editor.on('load', () => {
    //     editor.runCommand('core:component-outline')
    // })


    editor.Commands.add('core:designer-mode', {})

    editor.Commands.add('core:designer-mode', {
        run: () => {
            editor.setDragMode('absolute')
            console.log('absolute')
        },
        stop: () => {
            editor.setDragMode('')
            console.log('translate')
        },
    })


    return (
        <Paper
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/4  z-50 bg-white p-1 rounded-lg">
            <div className="flex items-center justify-center gap-2  w-full">
                <Tooltip label="Zoom out/ Shift -">
                    <ActionIcon
                        color="blue"
                        variant="outline"
                        disabled={zoomValue < 51}
                        onClick={handleZoomOut}
                    >
                        <IconZoomOut />
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
                        variant="outline"
                    >
                        <IconZoomIn />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="Reset zoom & position">
                    <ActionIcon
                        color="blue"
                        variant="outline"
                        onClick={handleZoomReset}
                    >
                        <IconZoomReset />
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
        </Paper>
    )
}

export default FloatingBar