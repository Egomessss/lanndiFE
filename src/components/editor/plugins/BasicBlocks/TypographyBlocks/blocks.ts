import { BlockProperties, Editor, grapesjs } from 'grapesjs';
import { PluginOptions } from './index';

const TypographyBlocks = (editor: Editor, opts: Required<PluginOptions>) => {
  const bm = editor.BlockManager;
  const { category, blocks } = opts;

  const toAdd = (name: string) => blocks.indexOf(name) >= 0;
  const commonBlockProps: Partial<BlockProperties> = {
    category,
    select: true,
  };

  editor.DomComponents.addType('heading-one', {
    isComponent: el => {
      if (el.tagName === 'H1') { // Corrected the condition to check for H1 tag
        return { type: 'heading-one' };
      }
    },
    extend: 'text',
    model: {
      defaults: {
        resizable: true,
        attributes: { class: 'heading-one' },
        name: 'Heading',
        tagName: 'h1',
        components: 'Heading',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        droppable: false,
        styles: `
        .heading-one{
        margin-top:0 ;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 0;
        }
        `,
      },

    },
  });


  toAdd('heading-one') &&
  bm.add('heading-one', {
    ...commonBlockProps,
    label: 'Heading',
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heading" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12h10" /><path d="M7 5v14" /><path d="M17 5v14" /><path d="M15 19h4" /><path d="M15 5h4" /><path d="M5 19h4" /><path d="M5 5h4" /></svg>`,
    content: { type: 'heading-one' },

  });

  editor.DomComponents.addType('heading-two', {
    isComponent: el => {
      if (el.tagName === 'H2') { // Corrected the condition to check for H1 tag
        return { type: 'heading-two' };
      }
    },
    extend: 'text',
    model: {
      defaults: {
        resizable: true,
        attributes: { class: 'heading-two' },
        name: 'Heading Two', // Default component name
        tagName: 'h2',
        components: 'Heading',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-2" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        droppable: false,
        styles: `
        .heading-two{
        margin-top:0 ;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 0;
        }
        `,
      },


    },
  });


  // toAdd('heading-two') &&
  // bm.add('heading-two', {
  //     ...commonBlockProps,
  //     label: 'Heading Two',
  //
  //     media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
  //     content: { type: 'heading-two' },
  // })

  editor.DomComponents.addType('heading-three', {
    isComponent: el => {
      if (el.tagName === 'H3') { // Corrected the condition to check for H1 tag
        return { type: 'heading-three' };
      }
    },
    extend: 'text',
    model: {
      defaults: {
        resizable: true,
        attributes: { class: 'heading-three' },
        name: 'Heading Three', // Default component name
        tagName: 'h3',
        components: 'Heading',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-3" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 -2 -2" /><path d="M17 16a2 2 0 1 0 2 -2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        droppable: false,
        styles: `
        .heading-three{
        margin-top:0 ;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 0;
        }
        `,
      },


    },
  });


  // toAdd('heading-three') &&
  // bm.add('heading-three', {
  //     ...commonBlockProps,
  //     label: 'Heading Three',
  //
  //     media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 -2 -2" /><path d="M17 16a2 2 0 1 0 2 -2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
  //     content: { type: 'heading-three' },
  // })


  editor.DomComponents.addType('heading-four', {
    isComponent: el => {
      if (el.tagName === 'H4') { // Corrected the condition to check for H1 tag
        return { type: 'heading-four' };
      }
    },
    extend: 'text',
    model: {
      defaults: {
        attributes: { class: 'heading-four' },
        resizable: true,
        name: 'Heading Four', // Default component name
        tagName: 'h4',
        components: 'Heading',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-4" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 18v-8l-4 6h5" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        droppable: false,
        styles: `
        .heading-four{
        margin-top:0 ;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 0;
        }
        `,
      },


    },
  });


  // toAdd('heading-four') &&
  // bm.add('heading-four', {
  //     ...commonBlockProps,
  //     label: 'Heading Four',
  //     media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 18v-8l-4 6h5" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
  //     content: { type: 'heading-four' },
  // })


  editor.DomComponents.addType('heading-five', {
    isComponent: el => {
      if (el.tagName === 'H5') { // Corrected the condition to check for H1 tag
        return { type: 'heading-five' };
      }
    },
    extend: 'text',
    model: {
      defaults: {
        attributes: { class: 'heading-five' },
        resizable: true,
        name: 'Heading Five', // Default component name
        tagName: 'h5',
        components: 'Heading',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-5" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        droppable: false,
        styles: `
        .heading-five{
        margin-top:0 ;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 0;
        }
        `,
      },


    },
  });


  // toAdd('heading-five') &&
  // bm.add('heading-five', {
  //     ...commonBlockProps,
  //     label: 'Heading Five',
  //
  //     media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
  //     content: { type: 'heading-five' },
  // })

  editor.DomComponents.addType('heading-six', {
    isComponent: el => {
      if (el.tagName === 'H6') { // Corrected the condition to check for H1 tag
        return { type: 'heading-six' };
      }
    },
    extend: 'text',
    model: {
      defaults: {
        attributes: { class: 'heading-six' },
        resizable: true,
        name: 'Heading Six', // Default component name
        tagName: 'h6',
        components: 'Heading',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-6" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" /><path d="M21 12a2 2 0 1 0 -4 0v4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,

        droppable: false,
        styles: `
        .heading-six{
        margin-top:0 ;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 0;
        }
        `,
      },


    },
  });


  // toAdd('heading-six') &&
  // bm.add('heading-six', {
  //     ...commonBlockProps,
  //     label: 'Heading Six',
  //     media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" /><path d="M21 12a2 2 0 1 0 -4 0v4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
  //     content: { type: 'heading-six' },
  // })

  editor.DomComponents.addType('paragraph', {
    isComponent: el => {
      if (el.tagName === 'P') { // Corrected the condition to check for H1 tag
        return { type: 'paragraph' };
      }
    },
    extend: 'text',
    model: {
      defaults: {
        attributes: { class: 'paragraph' },
        resizable: true,
        name: 'Paragraph', // Default component name
        tagName: 'p',
        components: 'Insert your text here' ,
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-letter-p"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" /></svg>`,
        styles: `
        .paragraph{
        margin-top:0 ;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 0;
        width:fit-content;
        }
        `,
      },

    },
  });


  toAdd('paragraph') &&
  bm.add('paragraph', {
    ...commonBlockProps,
    activate: true,
    label: opts.labelParagraph,
    media: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-letter-p"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" /></svg>`,
    content: {
      type: 'paragraph',
    },
  });

  editor.DomComponents.addType('rich-text', {
    isComponent: el => {
      if (el.classList && el.classList.contains('rich-text')) {
        return { type: 'rich-text' };
      }
    },
    model: {
      defaults: {
        attributes: { class: 'rich-text' },
        resizable: true,
        name: 'Rich Text', // Default component name
        tagName: 'div',
        components: '' ,
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-text-grammar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M4 12v-5a3 3 0 1 1 6 0v5" /><path d="M4 9h6" /><path d="M20 6v6" /><path d="M4 16h12" /><path d="M4 20h6" /><path d="M14 20l2 2l5 -5" /></svg>`,
        styles: `
        .rich-text:empty:before  {
      background-color: #ddd;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 10px;
    opacity: 0.3;
    border-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    content: "Go to Settings To Edit Rich Text";
    }
        `,
      },

    },
  });


  toAdd('rich-text') &&
  bm.add('rich-text', {
    ...commonBlockProps,
    label: 'Rich Text',
    media: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-text-grammar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M4 12v-5a3 3 0 1 1 6 0v5" /><path d="M4 9h6" /><path d="M20 6v6" /><path d="M4 16h12" /><path d="M4 20h6" /><path d="M14 20l2 2l5 -5" /></svg>`,
    content: {
      type: 'rich-text',
    },
  });


};

export default TypographyBlocks;