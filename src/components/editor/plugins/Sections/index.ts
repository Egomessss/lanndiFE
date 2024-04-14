import type { Plugin } from 'grapesjs';
import loadFooters from './footers';
import loadFaqs from './faq';
import loadNavbars from './navbars';
import loadPricings from './pricings';


const SectionBlocks: Plugin = (editor) => {
    loadNavbars(editor);
    loadFaqs(editor);
    loadFooters(editor);
    loadPricings(editor);
};

export default SectionBlocks;