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


    const sectorsToAdd = [
        {
            name: 'Layout',
            open: true,
            properties: [
                {
                    label: 'Display',
                    property: 'display',
                    type: 'radio',
                    default: 'block',
                    options: [
                        {
                            id: 'block',
                            label: 'Block - Element appear on a new line and takes full available width',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rectangle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`,
                        }, {
                            id: 'flex',
                            label: 'Flex - Arranges elements horizontally, or vertically.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
                        }, {
                            id: 'grid',
                            label: 'Grid - Enables complex layouts with rows and columns',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
                        }, {
                            id: 'inline',
                            label: 'Inline - Default for text elements, font size and line height determine its size',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-resize" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 7v10" /><path d="M7 5h10" /><path d="M7 19h10" /><path d="M19 7v10" /><path d="M10 10h4" /><path d="M12 14v-4" /></svg>`,
                        }, {
                            id: 'inline-block',
                            label: 'Inline Block - Elements sit on the same line but can have width and height set.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-container" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M4 4v.01" /><path d="M4 20v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`,
                        }, {
                            id: 'none',
                            label: 'Hide - Hide the element',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>`,
                        },
                    ],
                },
                {
                    label: 'Position',
                    property: 'position',
                    type: 'select',
                    default: 'static',
                    options: [
                        { id: 'static', label: 'Static' },
                        { id: 'relative', label: 'Relative' },
                        { id: 'absolute', label: 'Absolute' },
                        { id: 'fixed', label: 'Fixed' },
                        { id: 'sticky', label: 'Sticky' },
                    ],
                },
                {
                    label: 'Direction',
                    property: 'flex-direction',
                    type: 'radio',
                    default: 'horizontal',
                    options: [
                        {
                            id: 'row',
                            label: 'Horizontal',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>`,
                        }, {
                            id: 'row-reverse',
                            label: 'Horizontal reversed',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>`,
                        }, {
                            id: 'column',
                            label: 'Vertical',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 13l-6 6" /><path d="M6 13l6 6" /></svg>`,
                        }, {
                            id: 'column-reverse',
                            label: 'Vertical reversed',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 11l-6 -6" /><path d="M6 11l6 -6" /></svg>`,
                        },
                    ],
                },
                {
                    label: 'Justify',
                    property: 'justify-content',
                    type: 'radio',
                    default: 'start',
                    options: [
                        {
                            id: 'start',
                            label: 'Start',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" /><path d="M15.002 20.003h-.01" /><path d="M20.003 20.003h-.011" /><path d="M20.003 15.002h-.011" /><path d="M20.003 9.002h-.011" /><path d="M20.003 4.002h-.011" /><path d="M15.002 4.002h-.01" /></svg>`,
                        }, {
                            id: 'center',
                            label: 'Center',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-middle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12l5 0" /><path d="M15 12l5 0" /><path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
                        }, {
                            id: 'end',
                            label: 'End',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" /><path d="M8.998 20.003h.01" /><path d="M3.997 20.003h.011" /><path d="M3.997 15.002h.011" /><path d="M3.997 9.002h.011" /><path d="M3.997 4.002h.011" /><path d="M8.998 4.002h.01" /></svg>`,
                        }, {
                            id: 'justify-between',
                            label: 'Space between',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-horizontal" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2" /><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M12 8v8" /></svg>`,
                        },
                        {
                            id: 'justify-around',
                            label: 'Space around',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-container" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M4 4v.01" /><path d="M4 20v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`,
                        },
                        {
                            id: 'justify-evenly',
                            label: 'Space evenly',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-margin" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8h8v8h-8z" /><path d="M4 4v.01" /><path d="M8 4v.01" /><path d="M12 4v.01" /><path d="M16 4v.01" /><path d="M20 4v.01" /><path d="M4 20v.01" /><path d="M8 20v.01" /><path d="M12 20v.01" /><path d="M16 20v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`,
                        },
                    ],
                },
                {
                    label: 'Align',
                    property: 'align-items',
                    type: 'radio',
                    default: 'start',
                    options: [
                        {
                            id: 'start',
                            label: 'Start',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
                        }, {
                            id: 'center',
                            label: 'Center',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
                        }, {
                            id: 'end',
                            label: 'End',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
                        },
                        {
                            id: 'stretch',
                            label: 'Stretch',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-vertical" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4" /><path d="M8 17l4 4l4 -4" /><path d="M12 3l0 18" /></svg>`,
                        },
                        {
                            id: 'baseline',
                            label: 'Baseline',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyframe-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20v2" /><path d="M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748z" /><path d="M12 2v2" /><path d="M3 12h2" /><path d="M19 12h2" /></svg>`,
                        },
                    ],
                },
                {
                    label: 'Wrap',
                    property: 'flex-wrap',
                    type: 'radio',
                    default: 'start',
                    options: [
                        {
                            id: 'start',
                            label: 'Start',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
                        }, {
                            id: 'center',
                            label: 'Center',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
                        }, {
                            id: 'end',
                            label: 'End',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
                        },
                        {
                            id: 'stretch',
                            label: 'Stretch',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-vertical" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4" /><path d="M8 17l4 4l4 -4" /><path d="M12 3l0 18" /></svg>`,
                        },
                        {
                            id: 'baseline',
                            label: 'Baseline',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyframe-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20v2" /><path d="M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748z" /><path d="M12 2v2" /><path d="M3 12h2" /><path d="M19 12h2" /></svg>`,
                        },
                    ],
                },
                {
                    label: 'Gap row',
                    property: 'gap',
                    type: 'number',
                    default: 0,
                    min: 0,
                },
                {
                    label: 'Gap column',
                    property: 'gap',
                    type: 'number',
                    default: 0,
                    min: 0,
                },
            ],
        },
        // add built in
        {
            name: 'Spacing',
            open: true,
            properties: [
                {
                    type: 'number',
                    label: 'Margin', // Label for the property
                    property: 'margin', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Padding', // Label for the property
                    property: 'padding', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
            ],
        },
        {
            name: 'Size',
            open: true,
            properties: [
                {
                    type: 'number',
                    label: 'Width', // Label for the property
                    property: 'width', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Height', // Label for the property
                    property: 'height', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Min width', // Label for the property
                    property: 'min-width', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Min height', // Label for the property
                    property: 'min-height', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Max width', // Label for the property
                    property: 'max-width', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Max height', // Label for the property
                    property: 'max-height', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
            ],
        },
        {
            name: 'Background',
            open: true,
            properties: [
                {
                    type: 'color',
                    label: 'Colour', // Label for the property
                    property: 'min-height', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
            ],
        },
        {
            name: 'Border',
            open: true,
            properties: [
                {
                    type: 'number',
                    label: 'Radius', // Label for the property
                    property: 'width', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Width', // Label for the property
                    property: 'height', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'select',
                    label: 'Style', // Label for the property
                    property: 'min-width', // CSS property to change
                    default: '0', // Default value to display
                    options: [
                        { id: 'none', label: 'None' },
                        { id: 'hidden', label: 'Hidden' },
                        { id: 'solid', label: 'Solid' },
                        { id: 'dotted', label: 'Dotted' },
                        { id: 'dashed', label: 'Dashed' },
                        { id: 'double', label: 'Double' },
                        { id: 'groove', label: 'Groove' },
                        { id: 'ridge', label: 'Ridge' },
                        { id: 'inset', label: 'Inset' },
                        { id: 'outset', label: 'Outset' },
                    ],
                },
                {
                    type: 'color',
                    label: 'Colour', // Label for the property
                    property: 'min-height', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
            ],
        },
        {
            name: 'Typography',
            open: true,
            properties: [
                {
                    type: 'select',
                    label: 'Font', // Label for the property
                    property: 'width', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'color',
                    label: 'Colour', // Label for the property
                    property: 'height', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Size', // Label for the property
                    property: 'min-width', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'select',
                    label: 'Weight', // Label for the property
                    property: 'min-height', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Line height', // Label for the property
                    property: 'max-width', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'number',
                    label: 'Spacing', // Label for the property
                    property: 'max-width', // CSS property to change
                    default: '0', // Default value to display
                    units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
                    min: 0, // Min value (available only for the 'number' type)
                },
                {
                    type: 'select',
                    label: 'Align', // Label for the property
                    property: 'max-height', // CSS property to change
                    default: '0', // Default value to display
                    options: [
                        { id: 'left', label: 'Left' },
                        { id: 'center', label: 'Center' },
                        { id: 'right', label: 'Right' },
                        { id: 'justify', label: 'Justify' },
                    ],
                },
                {
                    type: 'select',
                    label: 'Align', // Label for the property
                    property: 'max-height', // CSS property to change
                    default: '0', // Default value to display
                    options: [
                        { id: 'none', label: 'None' },
                        { id: 'underline', label: 'Underline' },
                        { id: 'overline', label: 'Overline' },
                        { id: 'line-through', label: 'Line through' },
                    ],
                },
                {
                    type: 'select',
                    label: 'Align', // Label for the property
                    property: 'max-height', // CSS property to change
                    default: '0', // Default value to display
                    options: [
                        { id: 'normal', label: 'Normal' },
                        { id: 'no-wrap', label: 'No wrap' },
                        { id: 'pre', label: 'Pre' },
                        { id: 'pre-wrap', label: 'Pre wrap' },
                        { id: 'pre-line', label: 'Pre line' },
                        { id: 'break-space', label: 'Break space' },
                    ],
                },
            ],
        },

    ]


    const addSectors = () => {

        sectorsToAdd.forEach((sector) => {
            // Add sector
            sm?.addSector(sector.name, {
                name: sector.name,
                open: sector.open,
                buildProps: sector.properties.map(prop => prop.property),
                properties: sector.properties,
            })
        })
    }

// Example usage
    addSectors()

    // sm?.addType('display', {
    //     // Create UI
    //
    //     // Propagate UI changes up to the targets
    //     emit({ props, updateStyle }, { event, partial }) {
    //         const { value } = event.target;
    //         updateStyle(`${value}px`, { partial });
    //     },
    //     // Update UI (eg. when the target is changed)
    //     update({ value, el }) {
    //         el.querySelector('.my-input').value = parseInt(value, 10);
    //     },
    //     // Clean the memory from side effects if necessary (eg. global event listeners, etc.)
    //     destroy() {
    //     },
    // });


    // editor?.on('style:update', (component, property, value) => {
    //
    //     if (property === 'display' && value === 'flex') {
    //         // Add or update the 'flex-direction' property of the component's style
    //         const sectorsToAdd = [
    //             {
    //                 label: 'Direction',
    //                 property: 'flex-direction',
    //                 type: 'radio',
    //                 default: 'horizontal',
    //                 options: [
    //                     {
    //                         id: 'row',
    //                         label: 'Horizontal',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>`,
    //                     }, {
    //                         id: 'row-reverse',
    //                         label: 'Horizontal reversed',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>`,
    //                     }, {
    //                         id: 'column',
    //                         label: 'Vertical',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 13l-6 6" /><path d="M6 13l6 6" /></svg>`,
    //                     }, {
    //                         id: 'column-reverse',
    //                         label: 'Vertical reversed',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 11l-6 -6" /><path d="M6 11l6 -6" /></svg>`,
    //                     },
    //                 ],
    //             },
    //             {
    //                 label: 'Justify',
    //                 property: 'justify-content',
    //                 type: 'radio',
    //                 default: 'start',
    //                 options: [
    //                     {
    //                         id: 'start',
    //                         label: 'Start',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" /><path d="M15.002 20.003h-.01" /><path d="M20.003 20.003h-.011" /><path d="M20.003 15.002h-.011" /><path d="M20.003 9.002h-.011" /><path d="M20.003 4.002h-.011" /><path d="M15.002 4.002h-.01" /></svg>`,
    //                     }, {
    //                         id: 'center',
    //                         label: 'Center',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-middle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12l5 0" /><path d="M15 12l5 0" /><path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
    //                     }, {
    //                         id: 'end',
    //                         label: 'End',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" /><path d="M8.998 20.003h.01" /><path d="M3.997 20.003h.011" /><path d="M3.997 15.002h.011" /><path d="M3.997 9.002h.011" /><path d="M3.997 4.002h.011" /><path d="M8.998 4.002h.01" /></svg>`,
    //                     }, {
    //                         id: 'justify-between',
    //                         label: 'Space between',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-horizontal" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2" /><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M12 8v8" /></svg>`,
    //                     },
    //                     {
    //                         id: 'justify-around',
    //                         label: 'Space around',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-container" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M4 4v.01" /><path d="M4 20v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`,
    //                     },
    //                     {
    //                         id: 'justify-evenly',
    //                         label: 'Space evenly',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-margin" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8h8v8h-8z" /><path d="M4 4v.01" /><path d="M8 4v.01" /><path d="M12 4v.01" /><path d="M16 4v.01" /><path d="M20 4v.01" /><path d="M4 20v.01" /><path d="M8 20v.01" /><path d="M12 20v.01" /><path d="M16 20v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`,
    //                     },
    //                 ],
    //             },
    //             {
    //                 label: 'Align',
    //                 property: 'align-items',
    //                 type: 'radio',
    //                 default: 'start',
    //                 options: [
    //                     {
    //                         id: 'start',
    //                         label: 'Start',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
    //                     }, {
    //                         id: 'center',
    //                         label: 'Center',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
    //                     }, {
    //                         id: 'end',
    //                         label: 'End',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
    //                     },
    //                     {
    //                         id: 'stretch',
    //                         label: 'Stretch',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-vertical" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4" /><path d="M8 17l4 4l4 -4" /><path d="M12 3l0 18" /></svg>`,
    //                     },
    //                     {
    //                         id: 'baseline',
    //                         label: 'Baseline',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyframe-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20v2" /><path d="M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748z" /><path d="M12 2v2" /><path d="M3 12h2" /><path d="M19 12h2" /></svg>`,
    //                     },
    //                 ],
    //             },
    //             {
    //                 label: 'Gap Column',
    //                 property: 'align-items',
    //                 type: 'radio',
    //                 default: 'start',
    //                 options: [
    //                     {
    //                         id: 'start',
    //                         label: 'Start',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
    //                     }, {
    //                         id: 'center',
    //                         label: 'Center',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
    //                     }, {
    //                         id: 'end',
    //                         label: 'End',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
    //                     },
    //                     {
    //                         id: 'stretch',
    //                         label: 'Stretch',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-vertical" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4" /><path d="M8 17l4 4l4 -4" /><path d="M12 3l0 18" /></svg>`,
    //                     },
    //                     {
    //                         id: 'baseline',
    //                         label: 'Baseline',
    //                         icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyframe-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20v2" /><path d="M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748z" /><path d="M12 2v2" /><path d="M3 12h2" /><path d="M19 12h2" /></svg>`,
    //                     },
    //                 ],
    //             }]
    //
    //         const addSectors = () => {
    //             sectorsToAdd.forEach((sector) => {
    //                 // Add sector
    //                 sm?.addSector(sector.name, {
    //                     name: sector.name,
    //                     open: sector.open,
    //                     buildProps: sector.properties.map(prop => prop.property),
    //                     properties: sector.properties,
    //                 })
    //             })
    //         }
    //         addSectors()
    //     }


// Example usage

    // })

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
