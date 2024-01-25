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
     * Text label
     * @default 'Text'
     */
    labelText?: string
    /**
     * Map label
     * @default 'Heading'
     */
    labelHeading?: string
}

const TypographyBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: ['heading', 'text'],
        flexGrid: false,
        stylePrefix: 'gjs-',
        addBasicStyle: true,
        category: 'Typography',
        labelText: 'Paragraph',
        labelHeading: 'Heading',
        ...opts,
    }

    loadBlocks(editor, config)
}

export default TypographyBlocks
