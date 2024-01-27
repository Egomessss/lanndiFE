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
    IconArrowForwardUp, IconAspectRatio,
    IconBorderAll,
    IconBorderNone, IconCode, IconHandClick, IconHandGrab, IconPresentation, IconRadar, IconScanEye, IconVector,
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

export default function TopBarButtons({onClick}) {
    const editor = useEditor()


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
