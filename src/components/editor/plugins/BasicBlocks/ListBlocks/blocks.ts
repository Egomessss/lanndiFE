import { BlockProperties, Editor } from 'grapesjs';
import { PluginOptions } from './index';

const ListBlocks = (editor: Editor, opts: Required<PluginOptions>) => {
  const bm = editor.BlockManager;
  const { category, blocks } = opts;

  const toAdd = (name: string) => blocks.indexOf(name) >= 0;
  const commonBlockProps: Partial<BlockProperties> = {
    category,
    select: true,
  };
  editor.DomComponents.addType('ordered-list', {
    isComponent: el => {
      // This will treat every 'div' element as a 'container' component
      if (el.tagName === 'OL') {
        return { type: 'ordered-list' };
      }
    },
    model: {
      defaults: {
        attributes: { class: 'ordered-list' },
        tagName: 'ol',
        baseClass: 'ordered-list',
        resizable: true,
        name: 'Ordered List',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M12 18h8" /><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /><path d="M6 10v-6l-2 2" /></svg>`,
        components: `<li><p>List Item 1</p></li><li><p>List Item 2</p></li><li><p>List Item 3</p></li>`,
      },
    },
  });


  // Ordered List Block
  toAdd('ordered-list') &&
  bm.add('ordered-list', {
    ...commonBlockProps,
    label: 'Ordered List',
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M12 18h8" /><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /><path d="M6 10v-6l-2 2" /></svg>`,
    content: { type: 'ordered-list' },
  });

  editor.DomComponents.addType('unordered-list', {
    isComponent: el => {
      // This will treat every 'div' element as a 'container' component
      if (el.tagName === 'UL') {
        return { type: 'unordered-list' };
      }
    },
    model: {
      defaults: {
        attributes: { class: 'unordered-list' },
        tagName: 'ul',
        baseClass: 'unordered-list',
        resizable: true,
        name: 'Unordered List',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>`,
        components: `<li><p>List Item 1</p></li><li><p>List Item 2</p></li><li><p>List Item 3</p></li>`,
      },
    },
  });

  // Unordered List Block
  toAdd('unordered-list') &&
  bm.add('unordered-list', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>`,
    ...commonBlockProps,
    label: 'Unordered List',
    content: { type: 'unordered-list' },
  });

  editor.DomComponents.addType('list-item', {
    isComponent: el => {
      // This will treat every 'div' element as a 'container' component
      if (el.tagName === 'LI') {
        return { type: 'list-item' };
      }
    },
    model: {
      defaults: {
        attributes: { class: 'list-item' },
        tagName: 'li',
        resizable: true,
        name: 'List Item',
        baseClass: 'list-item',
        draggable: 'ul, ol',
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-list-tree"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6h11" /><path d="M12 12h8" /><path d="M15 18h5" /><path d="M5 6v.01" /><path d="M8 12v.01" /><path d="M11 18v.01" /></svg>`,
        components: `<li><p>List Item 1</p></li>`,
        styles:`
        .list-item{
          padding-top: 10px;
          padding-bottom: 10px;
       
        }
        `
      },
    },
  });

  // Unordered List Block
  toAdd('list-item') &&
  bm.add('list-item', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>`,
    ...commonBlockProps,
    label: 'List Item',
    content: { type: 'list-item' },
  });


};


export default ListBlocks;