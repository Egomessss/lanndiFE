import {
    ActionIcon,
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
    IconBorderAll,
    IconBorderNone, IconHandClick, IconHandGrab,
    IconZoomIn,
    IconZoomOut, IconZoomReset,
} from '@tabler/icons-react'


interface CommandButton {
    id: string
    Icon: IconType
    name: string
    options?: Record<string, any>
    disabled?: () => boolean
}

export default function TopBarButtons({}: React.HTMLAttributes<HTMLDivElement>) {
    const editor = useEditor()

    const [zoomValue, setZoomValue] = useState(100) // Initialize the zoom value

    const [, setUpdateCounter] = useState(0)

    const { UndoManager, Commands } = editor

    const handleZoomInput = (value: number | '') => {
        editor.runCommand('zoomInput', { value: value })
        if (value !== '' && value > 201) {
            editor.Canvas.setZoom(100)
            setZoomValue(100) // Update the zoom value in the state
        } else if (value !== '' && value <= 200) {
            editor.Canvas.setZoom(value)
            setZoomValue(value) // Update the zoom value in the state
        }
        const zoom = editor.Canvas.getZoom()
        setZoomValue(zoom)
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

    editor.on('load', () => {
        editor.runCommand('core:component-outline');
    });


    editor.Commands.add('core:designer-mode', {

    });

    editor.Commands.add('core:designer-mode', {
        run: () => {
            editor.setDragMode('absolute')
            console.log('absolute')
        },
        stop:()=>{
            editor.setDragMode('')
            console.log('translate')
        }
    })

    const cmdButtons: CommandButton[] = [
        // TODO fix these 2 commands
        {
            id: 'core:component-outline',
            Icon: IconBorderNone,
            name: 'Outline',

        },
        // {
        //     id: 'core:designer-mode',
        //     Icon: RiDragDropLine,
        //     name: 'Designer Mode',
        // },
        {
            id: 'core:component-offset',
            Icon: IconBorderAll,
            name: 'Borders offset',
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
    }, [])




    return (
        <div className="flex  w-full gap-2 items-center">

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
                            <Icon />
                        </ActionIcon>
                    </Tooltip>
                </div>
            ))}
            <div className="flex items-center justify-center gap-2 px-6">
                <Tooltip label="Zoom out/ Shift -">
                    <ActionIcon
                        color="blue"
                        variant='outline'
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
                        size='xs'
                        min={50}
                        styles={{ input: { width: rem(54), textAlign: 'center' } }}
                    />
                <Tooltip label="Zoom in / Shift + ">
                    <ActionIcon
                        color="blue"
                        disabled={zoomValue > 199}
                        onClick={handleZoomIn}
                        variant='outline'
                    >
                        <IconZoomIn />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="Reset zoom & position">
                    <ActionIcon
                        color="blue"
                        variant='outline'
                        onClick={handleZoomReset}
                    >
                        <IconZoomReset />
                    </ActionIcon>
                </Tooltip>

            </div>
            <div className='flex items-center gap-2'>
                <Tooltip label="Move - Space+LMB+Drag">
                    <ActionIcon
                        color="blue"
                        variant='outline'
                        onClick={handleZoomReset}
                    >
                        <IconHandGrab />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="Select - Space+LMB+Drag">
                    <ActionIcon
                        color="blue"
                        variant='outline'
                        onClick={handleZoomReset}
                    >
                        <IconHandClick />
                    </ActionIcon>
                </Tooltip>
            </div>

        </div>
    )
}
