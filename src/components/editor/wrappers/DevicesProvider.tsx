import type { Device } from 'grapesjs'
import React, { memo, useEffect, useState } from 'react'
import { isFunction, noop } from '../utils'
import { useEditorInstance } from '../context/EditorInstance'

export type DevicesState = {
    /**
     * Array of devices.
     */
    devices: Device[]

    /**
     * Selected device id.
     */
    selected: string

    /**
     * Select new device by id.
     */
    select: (deviceId: string) => void
}

export type DevicesResultProps = DevicesState

export interface DevicesProviderProps {
    children: (props: DevicesResultProps) => React.JSX.Element
}

const DevicesProvider = memo(function ({ children }: DevicesProviderProps) {
    const { editor } = useEditorInstance()
    const [propState, setPropState] = useState<DevicesState>(() => ({
        devices: [],
        selected: '',
        select: noop,
    }))

    useEffect(() => {
        if (!editor) return
        const { Devices } = editor
        const event = Devices.events.all

        // Remove existing devices
        Devices.remove('desktop')
        Devices.remove('tablet')
        Devices.remove('mobileLandscape')
        Devices.remove('mobilePortrait')

        // Add new devices
        Devices.add({ id: 'fit', name: 'Fit To Screen', width: '' })
        Devices.add({ id: 'desktop', name: 'Desktop', width: '1536px' })
        Devices.add({
            id: 'laptop',
            name: 'Laptop',
            width: '1280px',
            widthMedia: '1290px',
        })
        Devices.add({
            id: 'tablet',
            name: 'Tablet',
            width: '800px',
            widthMedia: '810px',
        })
        Devices.add({
            id: 'mobile',
            name: 'Mobile',
            width: '400px',
            widthMedia: '410px',
        })
        Devices.select('fit')
        const up = () => {
            setPropState({
                devices: Devices.getDevices(),
                selected: Devices.getSelected()?.id as string,
                select: (id) => Devices.select(id),

            })
        }

        editor.on(event, up)
        up()

        return () => {
            editor.off(event, up)
        }
    }, [editor])

    return editor ? (isFunction(children) ? children(propState) : null) : null
})

export default DevicesProvider
