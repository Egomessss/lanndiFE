import type { BlockProperties, Plugin } from 'grapesjs';
import loadFooters from './footers';
import loadFaqs from './faq';
import loadNavbars from './navbars';


export type PluginOptions = {
    /**
     * The ID used to create the block and component
     * @default 'navbar'
     */
    id?: string;

    /**
     * The label used for the block and the component.
     * @default 'Navbar'
     */
    label?: string,

    /**
     * Object to extend the default block. Pass a falsy value to avoid adding the block.
     * @example
     * { category: 'Extra', ... }
     */
    block?: Partial<BlockProperties>;

    /**
     * Custom CSS styles for the component. This will replace the default one.
     * @default ''
     */
    style?: string,

    /**
     * Additional CSS styles for the component. These will be appended to the default one.
     * @default ''
     */
    styleAdditional?: string,

    /**
     * Component class prefix.
     * @default 'navbar'
     */
    classPrefix?: string,
};

export type RequiredPluginOptions = Required<PluginOptions>;

const SectionBlocks: Plugin<PluginOptions> = (editor) => {


    loadNavbars(editor);
    loadFaqs(editor);
    loadFooters(editor);
};

export default SectionBlocks;