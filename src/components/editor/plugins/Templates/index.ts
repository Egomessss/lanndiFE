import type { Plugin } from 'grapesjs';

import loadTemplates from './templates';

const SectionBlocks: Plugin = (editor) => {


    loadTemplates(editor);
};

export default SectionBlocks;