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
     * Link label
     * @default 'Link'
     */
    labelLink?: string

    /**
     * Link box label
     * @default 'Link Box'
     */
    labelLinkBox?: string

    /**
     * Image label
     * @default 'Icon'
     */
    labelIcon?: string

    /**
     * Image label
     * @default 'Icon'
     */
    labelIconSvg?: string

    /**
     * Video label
     * @default 'Button'
     */
    labelButton?: string

    /**
     * Map label
     * @default 'Heading'
     */
    labelHeading?: string
}

const CoreBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: ['text', 'link', 'link-box', 'heading', 'icon', 'button', 'iconsvg'],
        flexGrid: false,
        stylePrefix: 'gjs-',
        addBasicStyle: true,
        category: 'Core',
        labelText: 'Text',
        labelLink: 'Link',
        labelLinkBox:'Link box',
        labelIcon: 'Icon',
        labelIconSvg: 'Icon SVG',
        labelButton: 'Button',
        labelHeading: 'Heading',
        ...opts,
    }

    loadBlocks(editor, config)
}

export default CoreBlocks
