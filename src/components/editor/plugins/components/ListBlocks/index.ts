import type { Plugin } from 'grapesjs'
import loadBlocks from './blocks'

export type PluginOptions = {
    /**
     * Which blocks to add.
     * @default ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map']
     */
    blocks?: string[]

    /**
     * Blocks category name
     * @default 'Basic'
     */
    category?: string

    /**
     * Map label
     * @default 'Heading'
     */
    labelNoDecorationList?: string

    /**
     * Map label
     * @default 'Heading'
     */
    labelOrderedList?: string

    /**
     * Map label
     * @default 'Heading'
     */
    labelUnorderedList?: string

    /**
     * Map label
     * @default 'Heading'
     */
    labelIconList?: string

    /**
     * Map label
     * @default 'Heading'
     */
    labelListItem?: string
}

const ListBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: [
            'no-decoration-list',
            'ordered-list',
            'unordered-list',
            'icon-list',
            'list-item',
        ],
        category: 'Lists',
        labelNoDecorationList: 'List',
        labelOrderedList: 'Ordered List',
        labelUnorderedList: 'Unordered List',
        labelIconList: 'Icon List',
        labelListItem: 'List item',
        ...opts,
    }

    loadBlocks(editor, config)
}

export default ListBlocks
