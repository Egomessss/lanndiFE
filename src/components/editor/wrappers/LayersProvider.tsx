import type { Component } from "grapesjs"
import React, { memo, useEffect, useState } from "react"
import { useEditorInstance } from "../context/EditorInstance"
import { useEditorOptions } from "../context/EditorOptions"
import { isFunction } from "../utils"
import { PortalContainerResult, portalContainer } from "../utils/react"
import ModalProvider from '@/components/editor/wrappers/ModalProvider';

export type LayersState = {
    /**
     * Root layer component.
     */
    root?: Component

    /**
     * Default Layers Manager container.
     */
    Container: PortalContainerResult
}

export type LayersResultProps = LayersState

export interface LayersProviderProps {
    children: (props: LayersResultProps) => React.JSX.Element
}

const LayersProvider = memo(function ({ children }: LayersProviderProps) {
    const { editor } = useEditorInstance()
    const options = useEditorOptions()
    const [propState, setPropState] = useState<LayersState>(() => ({
        root: undefined,
        Container: () => null,
    }))

    useEffect(() => {
        if (!editor) return
        const { Layers } = editor
        const event = Layers.events.custom

        const up = ({ container }: { container: HTMLElement }) => {
            setPropState({
                root: Layers.getRoot(),
                Container: portalContainer(container),
            })
        }

       // console.log('boefore',propState)
        editor.on(event, up)
        // editor.on('component:update:tagName',()=>console.log('after',propState))
        Layers.__trgCustom({})

        return () => {
            editor.off(event, up)
            // editor.off('component:update:tagName', up)
        }
    }, [editor])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => options.setCustomLayers(true), [])

    return editor ? (isFunction(children) ? children(propState) : null) : null
})

LayersProvider.displayName = 'LayersProvider';

export default LayersProvider
