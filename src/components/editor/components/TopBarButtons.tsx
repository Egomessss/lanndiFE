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
    IconBorderNone, IconCode, IconHandClick, IconHandGrab, IconPresentation,
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

export default function TopBarButtons() {
    const editor = useEditor()


    const [, setUpdateCounter] = useState(0)

    const { UndoManager, Commands } = editor


    editor.on('load', () => {
        editor.runCommand('core:component-outline')
    })


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

    editor.Commands.extend('core:preview', {
        run: () => {
            // opened()
            editor.runCommand('core:preview')

        },
        stop: () => {
            editor.setDragMode('')
            console.log('translate')
        },
    })


    const cmdButtons: CommandButton[] = [
        // TODO fix these 2 commands
        {
            id: 'core:component-outline',
            Icon: IconBorderNone,
            name: 'Outline',

        },
        {
            id: 'core:preview',
            Icon: IconPresentation,
            name: 'Preview',

        },
        {
            id: 'core:open-code',
            Icon: IconCode,
            name: 'Code Editor',
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
                            <Icon />
                        </ActionIcon>
                    </Tooltip>
                </div>
            ))}


        </div>
    )
}
