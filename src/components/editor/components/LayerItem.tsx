import * as React from 'react'
import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react'

import type { Component } from 'grapesjs'


import { ActionIcon } from '@mantine/core'
import { useEditor } from '../wrappers'
import { IconChevronLeft, IconChevronRight, IconEye, IconEyeCancel, IconLock, IconLockX } from '@tabler/icons-react'


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

    const { open, selected, hovered, components, visible, name, locked } =
        layerData
    const componentsIds = components.map((cmp) => cmp.getId())
    const isDragging = draggingCmp === component
    const cmpHash = componentsIds.join('-')
    const level = props.level + 1
    const isHovered = hovered || dragParent === component

    useEffect(() => {
        level === 0 && setLayerData(Layers.getLayerData(component))
        if (layerRef.current) {
            ;(layerRef.current as any).__cmp = component
        }
    }, [component])

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
                className={
                    `flex items-center gap-1 p-1 pr-2 ${level === 0 ? 'border-t' : ''} ${isHovered ? 'bg-[#228BE6] bg-opacity-60' : ''} ${selected ? 'bg-[#228BE6]' : ''}`
                }

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


    const wrapperCls = `layer-item flex flex-col rounded-lg ${selected ? 'bg-[#228BE6]/20 text-white' : ''} ${(!visible || isDragging) ? 'opacity-50' : ''}`


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
                        `flex items-center gap-1 border-b p-1 pr-2 text-black ${level === 0 ? 'border-t' : ''} ${isHovered ? 'cursor-pointer' : ''} ${selected ? 'rounded-lg bg-[#228BE6] text-white' : ''}`
                    }

                >
                    <ActionIcon
                        variant="transparent"
                        style={{ marginLeft: `${level * 10}px` }}
                        className={
                            `cursor-pointer text-black ${!components.length ? 'pointer-events-none opacity-0' : ''}`
                        }
                        onClick={toggleOpen}
                    >
                        {open ? (
                            <IconChevronRight className="text-xl text-black " />
                        ) : (
                            <IconChevronLeft className="text-xl text-black" />
                        )}
                    </ActionIcon>
                    <span
                        className="flex-grow truncate"
                        style={itemStyle}
                    >
                        {name}
                    </span>
                    <ActionIcon
                        variant="transparent"
                        onClick={lockLayer}
                    >
                        {locked ? (
                            <IconLock className="text-white" />
                        ) : (
                            <IconLockX className="text-black" />
                        )}
                    </ActionIcon>
                    <ActionIcon
                        variant="transparent"
                        onClick={toggleVisibility}
                    >
                        {visible ? (
                            <IconEye className="text-black" />
                        ) : (
                            <IconEyeCancel className="text-black" />
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
