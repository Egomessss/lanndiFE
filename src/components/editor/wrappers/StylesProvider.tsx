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
//     const sectorsToAdd = [
//         {
//             id: 'layout',
//             name: 'Layout',
//             open: true,
//             visible: false,
//             properties: [
//                 {
//                     label: 'Layout',
//                     property: 'display',
//                     type: 'radio',
//                     default: 'block',
//                     options: [
//                         {
//                             id: 'block',
//                             label: 'Block - Element appears on a new line and takes full available width',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rectangle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`,
//                         }, {
//                             id: 'flex',
//                             label: 'Flex - Arranges elements horizontally, or vertically.',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
//                         }, {
//                             id: 'grid',
//                             label: 'Grid - Enables complex layouts with rows and columns',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
//                         }, {
//                             id: 'none',
//                             label: 'Hide - Hide the element',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>`,
//                         },
//                     ],
//                 },
//             ],
//         },
//
//         {
//             id: 'flexProperties',
//             name: 'Flex Properties',
//             open: false,
//             visible: false,
//             properties: [
//                 {
//                     label: 'Direction',
//                     property: 'flex-direction',
//                     type: 'radio',
//                     default: 'horizontal',
//                     options: [
//                         {
//                             id: 'row',
//                             label: 'Horizontal',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-right-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7l-18 0" /><path d="M18 10l3 -3l-3 -3" /><path d="M6 20l-3 -3l3 -3" /><path d="M3 17l18 0" /></svg>`,
//                         }, {
//                             id: 'column',
//                             label: 'Vertical',
//                             icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-up-down"
//                              width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
//                              fill="none" stroke-linecap="round" stroke-linejoin="round">
//                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                             <path d="M7 3l0 18" />
//                             <path d="M10 6l-3 -3l-3 3" />
//                             <path d="M20 18l-3 3l-3 -3" />
//                             <path d="M17 21l0 -18" />
//                         </svg>`
//                             ,
//                         },
//                     ],
//                 },
//                 {
//                     label: 'Justify',
//                     property: 'justify-content',
//                     type: 'radio',
//                     default: 'start',
//                     options: [
//                         {
//                             id: 'start',
//                             label: 'Start',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" /><path d="M15.002 20.003h-.01" /><path d="M20.003 20.003h-.011" /><path d="M20.003 15.002h-.011" /><path d="M20.003 9.002h-.011" /><path d="M20.003 4.002h-.011" /><path d="M15.002 4.002h-.01" /></svg>`,
//                         }, {
//                             id: 'center',
//                             label: 'Center',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-middle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12l5 0" /><path d="M15 12l5 0" /><path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
//                         }, {
//                             id: 'end',
//                             label: 'End',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" /><path d="M8.998 20.003h.01" /><path d="M3.997 20.003h.011" /><path d="M3.997 15.002h.011" /><path d="M3.997 9.002h.011" /><path d="M3.997 4.002h.011" /><path d="M8.998 4.002h.01" /></svg>`,
//                         }, {
//                             id: 'justify-between',
//                             label: 'Space between',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-horizontal" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2" /><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M12 8v8" /></svg>`,
//                         },
//                     ],
//                 },
//                 {
//                     label: 'Align',
//                     property: 'align-items',
//                     type: 'radio',
//                     default: 'start',
//                     options: [
//                         {
//                             id: 'start',
//                             label: 'Start',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
//                         }, {
//                             id: 'center',
//                             label: 'Center',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
//                         }, {
//                             id: 'end',
//                             label: 'End',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
//                         },
//                     ],
//                 },
//                 {
//                     label: 'Wrap',
//                     property: 'flex-wrap',
//                     type: 'radio',
//                     default: 'nowrap',
//                     options: [
//                         {
//                             id: 'nowrap',
//                             label: 'Don\'t Wrap',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-wrap-disabled" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l10 0" /><path d="M4 18l10 0" /><path d="M4 12h17l-3 -3m0 6l3 -3" /></svg>`,
//                         }, {
//                             id: 'wrap',
//                             label: 'Wrap',
//                             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-wrap" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 18l5 0" /><path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" /></svg>`,
//                         },
//                     ],
//                 },
//                 {
//                     type: 'composite',
//                     label: 'Spacing', // Label for the property
//                     property: 'gap', // CSS property to change
//                     properties: [{
//                         label: 'Spacing Row',
//                         property: 'gap-row',
//                         type: 'number',
//                         default: 0,
//                         min: 0,
//                         units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                     },
//                         {
//                             label: 'Spacing column',
//                             property: 'gap-column',
//                             type: 'number',
//                             default: 0,
//                             min: 0,
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                         }],
//                 },
//
//
//             ],
//         },
//         {
//             id: 'gridProperties',
//             name: 'Grid Properties',
//             open: false,
//             visible: false,
//             properties: [
//                 {
//                     type: 'composite',
//                     label: 'Grid span', // Label for the property
//                     property: 'grid', // CSS property to change
//                     properties: [
//                         {
//                             label: 'Columns',
//                             property: 'grid-template-columns',
//                             type: 'number',
//                             default: '2',
//                             min: 0,
//                             max: 20,
//                         },
//                         {
//                             label: 'Rows',
//                             property: 'grid-template-rows',
//                             type: 'number',
//                             default: '2',
//                             min: 0,
//                             max: 20,
//                         }],
//                 },
//                 {
//                     type: 'composite',
//                     label: 'Spacing', // Label for the property
//                     property: 'gap', // CSS property to change
//                     properties: [{
//                         label: 'Row',
//                         property: 'gap-row',
//                         type: 'number',
//                         default: 0,
//                         min: 0,
//                         units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                     },
//                         {
//                             label: 'Column',
//                             property: 'gap-column',
//                             type: 'number',
//                             default: 0,
//                             min: 0,
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                         }],
//                 },
//
//
//             ],
//         },
//         {
//             id: 'gridItem',
//             name: 'Grid Item Properties',
//             open: false,
//             visible: false,
//             properties: [
//                 {
//                     type: 'composite',
//                     label: 'Grid item span', // Label for the property
//                     property: 'grid', // CSS property to change
//                     properties: [
//                         {
//                             label: 'Row start',
//                             property: 'grid-row-start',
//                             type: 'number',
//                             default: '1',
//                             min: 0,
//                             max: 20,
//                         },
//                         {
//                             label: 'Row end',
//                             property: 'grid-row-end',
//                             type: 'number',
//                             default: '1',
//                             min: 0,
//                             max: 20,
//                         },
//                         {
//                             label: 'Column start',
//                             property: 'grid-column-start',
//                             type: 'number',
//                             default: '1',
//                             min: 0,
//                             max: 20,
//                         },
//                         {
//                             label: 'Column end',
//                             property: 'grid-column-end',
//                             type: 'number',
//                             default: '1',
//                             min: 0,
//                             max: 20,
//                         }],
//                 },
//
//                 {
//                     type: 'composite',
//                     label: 'Spacing', // Label for the property
//                     property: 'gap', // CSS property to change
//                     properties: [{
//                         label: 'Row',
//                         property: 'gap-row',
//                         type: 'number',
//                         default: 0,
//                         min: 0,
//                         units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                     },
//                         {
//                             label: 'Column',
//                             property: 'gap-column',
//                             type: 'number',
//                             default: 0,
//                             min: 0,
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                         }],
//                 },
//
//
//             ],
//         },
//         {
//             name: 'Spacing',
//             open: false,
//             visible: true,
//             properties: [
//                 {
//                     type: 'composite',
//                     label: 'Margin', // Label for the property
//                     property: 'margin', // CSS property to change
//                     properties: [
//
//                         {
//                             type: 'number',
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                             default: '0',
//                             property: 'margin-top',
//                         },
//                         {
//                             type: 'number',
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                             default: '0',
//                             property: 'margin-right',
//                         },
//                         {
//                             type: 'number',
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                             default: '0',
//                             property: 'margin-bottom',
//                         },
//                         {
//                             type: 'number',
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                             default: '0',
//                             property: 'margin-left',
//                         },
//                     ],
//                 },
//                 {
//                     type: 'composite',
//                     label: 'Padding', // Label for the property
//                     property: 'padding', // CSS property to change
//                     properties: [
//                         {
//                             type: 'number',
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                             default: '0',
//                             property: 'padding-top',
//                         },
//                         {
//                             type: 'number',
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                             default: '0',
//                             property: 'padding-right',
//                         },
//                         {
//                             type: 'number',
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                             default: '0',
//                             property: 'padding-bottom',
//                         },
//                         {
//                             type: 'number',
//                             units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//                             default: '0',
//                             property: 'padding-left',
//                         },
//                     ],
//                 },
//             ],
//         },
//         // {
//         //     name: 'Position',
//         //     open: false,
//         //     properties: [
//         //         {
//         //             type: 'select',
//         //             property: 'position',
//         //             label: 'Position',
//         //             options: [
//         //                 { id: 'static', label: 'Default' },
//         //                 { id: 'relative', label: 'Relative' },
//         //                 { id: 'absolute', label: 'Absolute' },
//         //                 { id: 'fixed', label: 'Fixed' },
//         //                 { id: 'sticky', label: 'Sticky' },
//         //             ],
//         //         },
//         //         {
//         //             label: 'Position',
//         //             property: 'inset',
//         //             type: 'composite',
//         //             properties: [
//         //
//         //                 { type: 'number', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], default: '0', property: 'top' },
//         //                 {
//         //                     type: 'number',
//         //                     units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//         //                     default: '0',
//         //                     property: 'right',
//         //                 },
//         //                 {
//         //                     type: 'number',
//         //                     units: ['px', 'em', 'rem', '%', 'vh', 'vw'],
//         //                     default: '0',
//         //                     property: 'bottom',
//         //                 },
//         //                 { type: 'number', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], default: '0', property: 'left' },
//         //             ],
//         //         },
//         //         {
//         //             type: 'select',
//         //             property: 'z-index',
//         //             label: 'Layer',
//         //             default: 'auto',
//         //             options: [
//         //                 { id: 'auto', label: 'Default' },
//         //                 { id: '-1', label: 'Send to back' },
//         //                 { id: '1', label: 'Send backward' },
//         //                 { id: '10', label: 'Bring to front' },
//         //                 { id: '1000', label: 'Bring forward' },
//         //             ],
//         //         },
//         //     ],
//         // },
//         // {
//         //     name: 'Sizing',
//         //     open: false,
//         //     properties: [
//         //         {
//         //             type: 'number',
//         //             default: 0,
//         //             label: 'Width', // Label for the property
//         //             property: 'width', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             type: 'number',
//         //             default: 0,
//         //             label: 'Max width', // Label for the property
//         //             property: 'max-width', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             type: 'number',
//         //             default: 0,
//         //             label: 'Min width', // Label for the property
//         //             property: 'min-width', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             type: 'number',
//         //             default: 0,
//         //             label: 'Height', // Label for the property
//         //             property: 'height', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'svh', 'dvh', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //
//         //         {
//         //             type: 'number',
//         //             default: 0,
//         //             label: 'Max height', // Label for the property
//         //             property: 'max-height', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //
//         //         {
//         //             type: 'number',
//         //             default: 0,
//         //             label: 'Min height', // Label for the property
//         //             property: 'min-height', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             label: 'Overflow', // Label for the property
//         //             property: 'overflow', // CSS property to change
//         //             default: 'none', // Default value to display
//         //             type: 'radio',
//         //             options: [
//         //                 {
//         //                     id: 'visible',
//         //                     label: 'Block - Element appears on a new line and takes full available width',
//         //                     icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>`,
//         //                 }, {
//         //                     id: 'hidden',
//         //                     label: 'Flex - Arranges elements horizontally, or vertically.',
//         //                     icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>`,
//         //                 }, {
//         //                     id: 'scroll',
//         //                     label: 'Hide - Hide the element',
//         //                     icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mouse" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" /><path d="M12 7l0 4" /></svg>`,
//         //                 },
//         //                 {
//         //                     id: 'auto',
//         //                     label: 'Hide - Hide the element',
//         //                     icon: 'Auto',
//         //                 },
//         //             ],
//         //         },
//         //
//         //     ],
//         // },
//         // {
//         //     name: 'Background',
//         //     open: false,
//         //     properties: [
//         //         {
//         //             type: 'color',
//         //             label: 'Colour', // Label for the property
//         //             property: 'min-height', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //     ],
//         // },
//         // {
//         //     name: 'Border',
//         //     open: false,
//         //     properties: [
//         //         {
//         //             type: 'composite',
//         //             label: 'Spacing', // Label for the property
//         //             property: 'gap', // CSS property to change
//         //             properties: [{
//         //                 type: 'number',
//         //                 default: 0,
//         //                 label: 'Roundness', // Label for the property
//         //                 property: 'width', // CSS property to change
//         //                 units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //                 min: 0, // Min value (available only for the 'number' type)
//         //
//         //             },
//         //                 {
//         //                     type: 'number',
//         //                     default: 0,
//         //                     label: 'Thickness', // Label for the property
//         //                     property: 'height', // CSS property to change
//         //                     units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //                     min: 0, // Min value (available only for the 'number' type)
//         //                 },
//         //             ],
//         //         },
//         //
//         //         {
//         //             type: 'select',
//         //             label: 'Style', // Label for the property
//         //             property: 'border-style', // CSS property to change
//         //             default: 'none', // Default value to display
//         //             options: [
//         //                 { id: 'none', label: 'None' },
//         //                 { id: 'hidden', label: 'Hidden' },
//         //                 { id: 'solid', label: 'Solid' },
//         //                 { id: 'dotted', label: 'Dotted' },
//         //                 { id: 'dashed', label: 'Dashed' },
//         //             ],
//         //         },
//         //         {
//         //             type: 'color',
//         //             label: 'Colour', // Label for the property
//         //             property: 'min-height', // CSS property to change
//         //
//         //         },
//         //     ],
//         // },
//         // {
//         //     name: 'Typography',
//         //     open: false,
//         //     properties: [
//         //         {
//         //             type: 'select',
//         //             label: 'Font', // Label for the property
//         //             property: 'font-family', // CSS property to change
//         //         },
//         //
//         //         {
//         //             type: 'number',
//         //             label: 'Font size', // Label for the property
//         //             property: 'font-size', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             type: 'select',
//         //             label: 'Font Weight', // Label for the property
//         //             property: 'font-weight', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             type: 'number',
//         //             label: 'Line spacing', // Label for the property
//         //             property: 'line-height', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             type: 'number',
//         //             label: 'Letter spacing', // Label for the property
//         //             property: 'letter-spacing', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             type: 'select',
//         //             label: 'Align', // Label for the property
//         //             property: 'text-align', // CSS property to change
//         //             options: [
//         //                 { id: 'left', label: 'Left' },
//         //                 { id: 'center', label: 'Center' },
//         //                 { id: 'right', label: 'Right' },
//         //                 { id: 'justify', label: 'Justify' },
//         //             ],
//         //         },
//         //         {
//         //             type: 'select',
//         //             label: 'White space', // Label for the property
//         //             property: 'white-space', // CSS property to change
//         //             options: [
//         //                 { id: 'normal', label: 'Normal' },
//         //                 { id: 'no-wrap', label: 'No wrap' },
//         //                 { id: 'pre', label: 'Keep Spaces' },
//         //                 { id: 'pre-wrap', label: 'Wrap & Keep Spaces' },
//         //                 { id: 'pre-line', label: 'Wrap & Trim Spaces' },
//         //                 { id: 'break-space', label: 'Spaces & Breaks' },
//         //             ],
//         //         },
//         //         {
//         //             type: 'color',
//         //             label: 'Colour', // Label for the property
//         //             property: 'color', // CSS property to change
//         //             units: ['px', 'em', 'rem', '%', 'vh', 'vw'], // Units (available only for the 'number' type)
//         //             min: 0, // Min value (available only for the 'number' type)
//         //         },
//         //         {
//         //             type: 'select',
//         //             label: 'Decoration', // Label for the property
//         //             property: 'text-decoration', // CSS property to change
//         //             options: [
//         //                 { id: 'none', label: 'None' },
//         //                 { id: 'underline', label: 'Underline' },
//         //                 { id: 'overline', label: 'Overline' },
//         //                 { id: 'line-through', label: 'Line through' },
//         //             ],
//         //         },
//         //
//         //
//         //     ],
//         // },
//         // {
//         //     name: 'Extra',
//         //     open: false,
//         //     properties: [
//         //         {
//         //             type: 'select',
//         //             label: 'Cursor type', // Label for the property
//         //             property: 'cursor', // CSS property to change
//         //             default: 'default', // Default value to display
//         //             options: [
//         //                 { id: 'default', label: 'Default' },
//         //                 { id: 'pointer', label: 'pointer' },
//         //                 { id: 'wait', label: 'Wait' },
//         //                 { id: 'not-allowed', label: 'Not allowed' },
//         //                 { id: 'zoom-in', label: 'Zoom in' },
//         //                 { id: 'grab', label: 'grab' },
//         //                 { id: 'move', label: 'Move' },
//         //             ],
//         //         },
//         //         {
//         //             type: 'select',
//         //             label: 'List style', // Label for the property
//         //             property: 'list-style', // CSS property to change
//         //             options: [
//         //                 { id: 'none', label: 'None' },
//         //                 { id: 'square', label: 'Square' },
//         //                 { id: 'circle', label: 'Circle' },
//         //                 { id: 'upper-roman', label: 'Roman' },
//         //                 { id: 'lower-alpha', label: 'Alpha' },
//         //             ],
//         //         },
//         //
//         //     ],
//         // },
//
//     ]
//
//
//     const addSectors = () => {
//
//         sectorsToAdd.forEach((sector) => {
//             // Add sector
//             sm?.addSector(sector.name, {
//                 name: sector.name,
//                 open: sector.open,
//                 buildProps: sector.properties.map(prop => prop.property),
//                 properties: sector.properties,
//             })
//         })
//     }
//
// // Example usage
//     addSectors()


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
