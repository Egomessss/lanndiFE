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
     * Video label
     * @default 'Button'
     */
    labelButton?: string


}

const InteractiveBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: [ 'link', 'link-box',  'button','nav-link' ],
        flexGrid: false,
        stylePrefix: 'gjs-',
        addBasicStyle: true,
        category: 'Interactive',
        labelLink: 'Link',
        labelLinkBox:'Link box',
        labelButton: 'Button',
        ...opts,
    }

    loadBlocks(editor, config)
}

export default InteractiveBlocks
