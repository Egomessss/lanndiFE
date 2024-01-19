import type { Plugin } from "grapesjs"
import loadBlocks from "./blocks"

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
    labelColumn1?: string

    /**
     * 2 Columns label
     * @default '2 Columns'
     */
    labelColumn2?: string

    /**
     * 3 Columns label
     * @default '3 Columns'
     */
    labelColumn3?: string

    /**
     * 3 Columns label
     * @default '4 Columns'
     */
    labelColumn4?: string

    /**
     * 3/7 Columns label
     * @default '2 Columns 3/7'
     */
    labelColumn37?: string

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
     * Image label
     * @default 'Image'
     */
    labelImage?: string

    /**
     * Video label
     * @default 'Video'
     */
    labelVideo?: string

    /**
     * Map label
     * @default 'Map'
     */
    labelMap?: string

    /**
     * Image label
     * @default 'Icon'
     */
    labelIcon?: string

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

    /**
     * Map label
     * @default 'Heading2'
     */
    labelHeading2?: string

    /**
     * Map label
     * @default 'Heading3'
     */
    labelHeading3?: string
    /**
     * Map label
     * @default 'Heading4'
     */
    labelHeading4?: string
    /**
     * Map label
     * @default 'Heading5'
     */
    labelHeading5?: string

    /**
     * Initial row height
     * @default 75
     */
    rowHeight?: number
}

const BasicBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: [
            "column1",
            "column2",
            "column3",
            "column4",
            "column3-7",
            "text",
            "link",
            "image",
            "video",
            "map",
            "heading",
            "heading2",
            "heading3",
            "heading4",
            "heading5",
            "icon",
            "button",
        ],
        flexGrid: false,
        stylePrefix: "gjs-",
        addBasicStyle: true,
        category: "Basic Blocks",
        labelColumn1: "1 Column",
        labelColumn2: "2 Columns",
        labelColumn3: "3 Columns",
        labelColumn4: "4 Columns",
        labelColumn37: "2 Columns 3/7",
        labelText: "Text",
        labelLink: "Link",
        labelImage: "Image",
        labelVideo: "Video",
        labelMap: "Map",
        labelIcon: "Icon",
        labelHeading: "Heading",
        labelHeading2: "Heading2",
        labelHeading3: "Heading3",
        labelHeading4: "Heading4",
        labelHeading5: "Heading5",
        labelButton: "Button",
        rowHeight: 75,
        ...opts,
    }

    loadBlocks(editor, config)
}

export default BasicBlocks
