import type { Sector } from 'grapesjs'
import React, { memo, useEffect, useState } from 'react'
import { useEditorInstance } from '../context/EditorInstance'
import { useEditorOptions } from '../context/EditorOptions'
import { isFunction } from '../utils'
import { PortalContainerResult, portalContainer } from '../utils/react'

export type StylesState = {
    /**
     * Array of visible sectors.
     */
    sectors: Sector[]

    /**
     * Default Styles container.
     */
    Container: PortalContainerResult
}

export type StylesResultProps = StylesState

export interface StylesProviderProps {
    children: (props: StylesResultProps) => React.JSX.Element
}

const StylesProvider = memo(function({ children }: StylesProviderProps) {
    const { editor } = useEditorInstance()
    const options = useEditorOptions()
    const [propState, setPropState] = useState<StylesState>(() => ({
        sectors: [],
        Container: () => null,
    }))

    const sm = editor?.StyleManager

    // Function to remove all sectors
    const removeAllSectors = () => {
        const sectors = sm?.getSectors()

        sectors?.each((sector: any) => {
           sm?.removeSector(sector.get('id'))
        })
    }

    const sectorsToAdd = [
        {
            name: 'Layout',
            open: true,
            properties: [{
                label: 'Display',
                property: 'display',
                type: 'radio',
                default: 'block',
                options: [
                    {
                        id: 'block', label: 'Block - Element appear on a new line and takes full available width', icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rectangle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`
                    },  {
                        id: 'flex', label: 'Flex - Arranges elements horizontally, or vertically.',icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
                    }, {
                        id: 'grid', label: 'Grid - Enables complex layouts with rows and columns',icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
                    },{
                        id: 'inline', label: 'Inline - Default for text elements, font size and line height determine its size',icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-size" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7v-2h13v2" /><path d="M10 5v14" /><path d="M12 19h-4" /><path d="M15 13v-1h6v1" /><path d="M18 12v7" /><path d="M17 19h2" /></svg>`,
                    }, {
                        id: 'inline-block', label: 'Inline Block - Elements sit on the same line but can have width and height set.',icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-resize" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 7v10" /><path d="M7 5h10" /><path d="M7 19h10" /><path d="M19 7v10" /><path d="M10 10h4" /><path d="M12 14v-4" /></svg>`,
                    }, {
                        id: 'none', label: 'Hide - Hide the element',icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>`,
                    },
                ],
            }],
        },
        // {
        //     name: 'Flex',
        //     open: false,
        //     properties: [
        //         'flex-direction',
        //         'flex-wrap',
        //         'justify-content',
        //         'align-items',
        //         'align-content',
        //         'order',
        //         'flex-basis',
        //         'flex-grow',
        //         'flex-shrink',
        //         'align-self',
        //     ],
        // },
    ]

// Example usage
    removeAllSectors()

    const addSectors = () => {


        sectorsToAdd.forEach((sector) => {
            // Add sector
            sm?.addSector(sector.name, {
                name: sector.name,
                open: sector.open,
                buildProps: sector.properties.map(prop => prop.property),
                properties: sector.properties,
            });
        });
    };

// Example usage
    addSectors();

    useEffect(() => {
        if (!editor) return
        const { Styles } = editor
        const event = Styles.events.custom


        const up = ({ container }: { container: HTMLElement }) => {
            setPropState({
                sectors: Styles.getSectors({ visible: true }),
                Container: portalContainer(container),
            })
        }

        editor.on(event, up)

        return () => {
            editor.off(event, up)
        }
    }, [editor])

    useEffect(() => options.setCustomStyles(true), [])

    return editor ? (isFunction(children) ? children(propState) : null) : null
})

export default StylesProvider
