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
    labelWaitlist?: string

    /**
     * 2 Columns label
     * @default '2 Columns'
     */
    labelStripePayment?: string

    /**
     * 2 Columns label
     * @default '2 Columns'
     */
    labelContactForm?: string

    /**
     * Initial row height
     * @default 75
     */
    rowHeight?: number
}

const IntegrationsBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
    const config: Required<PluginOptions> = {
        blocks: ['waitlist', 'contactform','stripepayment'],
        flexGrid: false,
        stylePrefix: 'lyt-',
        addBasicStyle: true,
        category: 'Integrations',
        labelWaitlist: 'Waitlist',
        labelContactForm: 'Contact Form',
        labelStripePayment: 'Stripe Payment',
        rowHeight: 75,
        ...opts,
    }

    loadBlocks(editor, config)
}

export default IntegrationsBlocks
