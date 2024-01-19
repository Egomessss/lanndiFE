import type { Plugin } from 'grapesjs'
import loadBlocks from './blocks'

export type PluginOptions = {
    /**
     * Which blocks to add.
     * @default ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map']
     */
    blocks?: string[]

    /**
     * Make use of flexbox for the grid
     * @default false
     */
    flexGrid?: boolean

    /**
     * Classes prefix
     * @default 'gjs-'
     */
    stylePrefix?: string

    /**
     * Use basic CSS for blocks
     * @default true
     */
    addBasicStyle?: boolean

    /**
     * Blocks category name
     * @default 'Basic'
     */
    category?: string

    /**
     * 1 Column label
     * @default '1 Column'
     */
    labelContainer?: string

    /**
     * 2 Columns label
     * @default '2 Columns'
     */
    labelSection?: string

    /**
     * 2 Columns label
     * @default '2 Columns'
     */
    labelRows?: string

    /**
     * 3 Columns label
     * @default '3 Columns'
     */
    labelColumns?: string

    /**
     * 3 Columns label
     * @default '4 Columns'
     */
    labelGrid?: string

    /**
     * 3 Columns label
     * @default '4 Columns'
     */
    labelTable?: string

    /**
     * Initial row height
     * @default 75
     */
    rowHeight?: number
}

const LayoutBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: ['container', 'section','rows', 'columns', 'grid', 'table'],
        flexGrid: false,
        stylePrefix: 'lyt-',
        addBasicStyle: true,
        category: 'Layout',
        labelContainer: 'Container',
        labelSection:'Section',
        labelRows: 'Rows',
        labelColumns: 'Columns',
        labelGrid: 'Grid',
        labelTable: 'Table',
        rowHeight: 75,
        ...opts,
    }

    loadBlocks(editor, config)
}

export default LayoutBlocks
