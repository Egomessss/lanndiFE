import * as React from 'react'
import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react'

import type { Component } from 'grapesjs'


import { ActionIcon } from '@mantine/core'
import { useEditor } from '../wrappers'
import {
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
    IconEye,
    IconEyeCancel,
    IconLock,
    IconLockX,
} from '@tabler/icons-react'


export declare interface LayerItemProps
    extends React.HTMLProps<HTMLDivElement> {
    component: Component
    level: number
    draggingCmp?: Component
    dragParent?: Component
}

const itemStyle = { maxWidth: `100%` }

export default function LayerItem({
                                      component,
                                      draggingCmp,
                                      dragParent,
                                      ...props
                                  }: LayerItemProps) {
    const editor = useEditor()
    const { Layers } = editor
    const layerRef = useRef<HTMLDivElement>(null)
    const [layerData, setLayerData] = useState(Layers.getLayerData(component))

    const {  open, selected, hovered, components, visible, name, locked } =
        layerData
    const componentsIds = components.map((cmp) => cmp.getId())
    const isDragging = draggingCmp === component
    const cmpHash = componentsIds.join('-')
    const level = props.level + 1
    const isHovered = hovered || dragParent === component
    console.log(components)

    useEffect(() => {
        level === 0 && setLayerData(Layers.getLayerData(component))
        if (layerRef.current) {
            ;(layerRef.current as any).__cmp = component
        }
    }, [Layers, component, level])

    useEffect(() => {
        const up = (cmp: Component) => {
            cmp === component && setLayerData(Layers.getLayerData(cmp))
        }
        const ev = Layers.events.component
        editor.on(ev, up)

        return () => {
            editor.off(ev, up)
        }
    }, [editor, Layers, component])

    const cmpToRender = useMemo(() => {
        return components.map((cmp) => (
            <LayerItem
                // className={
                //     `flex items-center gap-1 p-1 pr-2 ${level === 0 ? '' : ''} ${isHovered ? 'bg-[#228BE6] bg-opacity-60' : ''} ${selected ? 'bg-[#228BE6] ' : ''}`
                // }
                key={cmp.getId()}
                component={cmp}
                level={level}
                draggingCmp={draggingCmp}
                dragParent={dragParent}
            />
        ))
    }, [cmpHash, draggingCmp, dragParent])

    const toggleOpen = (ev: MouseEvent) => {
        ev.stopPropagation()
        Layers.setLayerData(component, { open: !open })
    }

    const toggleVisibility = (ev: MouseEvent) => {
        ev.stopPropagation()
        Layers.setLayerData(component, { visible: !visible })
    }

    const select = (event: MouseEvent) => {
        event.stopPropagation()
        Layers.setLayerData(component, { selected: true }, { event })
    }

    const hover = (hovered: boolean) => {
        if (!hovered || !draggingCmp) {
            Layers.setLayerData(component, { hovered })
        }
    }

    const lockLayer = (ev: MouseEvent) => {
        ev.stopPropagation()
        Layers.setLocked(component, !locked)
    }


    const wrapperCls = `layer-item flex flex-col rounded-lg  ${selected ? 'bg-[#228BE6]/20  ' : ''} ${(!visible || isDragging) ? 'opacity-50' : ''}`

    const icon = component.get('icon');
    return (
        <div className={wrapperCls}>
            <div
                onClick={select}
                onMouseEnter={() => hover(true)}
                onMouseLeave={() => hover(false)}
                className="group max-w-full overflow-hidden"
                data-layer-item=""
                ref={layerRef}
            >
                <div
                    className={
                        `flex items-center gap-1   ${level === 0 ? '' : ''} ${isHovered ? 'cursor-pointer bg-[#228BE6]/20 rounded-lg' : ''} ${selected ? 'rounded-lg bg-[#339AF0] ' : ''}`
                    }

                >
                    <ActionIcon
                        variant="transparent"
                        style={{ marginLeft: `${level * 6}px` }}
                        onClick={toggleOpen}
                    >
                        {open ? (
                            <IconChevronDown size="0.8rem" className="text-black" />
                        ) : (
                            <IconChevronRight size="0.8rem" className="text-black"  />
                        )}
                    </ActionIcon>
                    {icon && (
                        <span dangerouslySetInnerHTML={{ __html: icon }} />
                    )}
                    <p
                        className="flex-grow truncate"
                        style={itemStyle}
                    >
                        {name}
                    </p>
                    <ActionIcon
                        autoContrast
                        variant="transparent"
                        onClick={lockLayer}
                    >
                        {locked ? (
                            <IconLock size="0.8rem" className="text-black" />
                        ) : (
                            <IconLockX size="0.8rem" className="text-black" />
                        )}
                    </ActionIcon>
                    <ActionIcon
                        autoContrast
                        variant="transparent"
                        onClick={toggleVisibility}
                    >
                        {visible ? (
                            <IconEye size="0.8rem" className="text-black" />
                        ) : (
                            <IconEyeCancel size="0.8rem" className="text-black" />
                        )}
                    </ActionIcon>
                </div>
            </div>
            {!!(open && components.length) && (
                <div className={`'max-w-full ' ${!open && 'hidden'}`}>
                    {cmpToRender}
                </div>
            )}
        </div>
    )
}
