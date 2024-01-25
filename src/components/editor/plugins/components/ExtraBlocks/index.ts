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
    labelCustomCode?: string

    /**
     * 1 Column label
     * @default '1 Column'
     */
    labelTabs?: string

    /**
     * 2 Columns label
     * @default '2 Columns'
     */
    labelAccordion?: string

    /**
     * 2 Columns label
     * @default '2 Columns'
     */
    labelSlider?: string

    /**
     * Initial row height
     * @default 75
     */
    rowHeight?: number
}

const ExtraBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: ['custom-code','tabs','slider','accordion'],
        flexGrid: false,
        stylePrefix: 'ext-',
        addBasicStyle: true,
        category: 'Extra',
        labelCustomCode: 'Custom Code',
        labelTabs: 'Tabs',
        labelSlider: 'Slider',
        labelAccordion: 'Accordion',
        rowHeight: 75,
        ...opts,
    }

    loadBlocks(editor, config)
}

export default ExtraBlocks