import type { Plugin } from 'grapesjs';
import loadFooters from './footers';
import loadFaqs from './faq';
import loadNavbars from './navbars';
import loadPricings from './pricings';
import loadHeros from './heros';
import loadTestimonials from './testimonials';
import loadFeatures from './features';
import loadCtas from './ctas';
import loadHowItWorks from './how-it-works';



const SectionBlocks: Plugin = (editor) => {

    loadNavbars(editor);
    loadHeros(editor);
    loadHowItWorks(editor);
    loadFeatures(editor);
    loadTestimonials(editor);
    loadCtas(editor);
    loadPricings(editor);
    // loadFaqs(editor);
    loadFooters(editor);
};

export default SectionBlocks;