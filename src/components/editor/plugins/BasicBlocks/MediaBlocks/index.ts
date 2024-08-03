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
     * Image label
     * @default 'Icon'
     */
    labelIcon?: string

    /**
     * Image label
     * @default 'Icon'
     */
    labelIconSvg?: string

}

const MediaBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: [
            "image",
            'iconsvg',
            "video",
            // 'icon',
        ],
        flexGrid: false,
        stylePrefix: "lnd-",
        addBasicStyle: true,
        category: "Media",
        labelImage: "Image",
        labelVideo: "Youtube Video",
        labelIcon: 'Icon',
        labelIconSvg: 'SVG',
        ...opts,
    }

    loadBlocks(editor, config)
}

export default MediaBlocks
