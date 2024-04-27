import { BlockProperties, Editor } from 'grapesjs';
import { PluginOptions } from './index';

const MediaBlocks = (editor: Editor, opts: Required<PluginOptions>) => {
  const bm = editor.BlockManager;
  const {
    category,
    blocks,
  } = opts;


  const toAdd = (name: string) => blocks.indexOf(name) >= 0;

  const commonBlockProps: Partial<BlockProperties> = {
    category,
    select: true,
  };


  toAdd('image') &&
  bm.add('image', {
    ...commonBlockProps,
    label: opts.labelImage,
    activate:true,
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>`,
    content: {
      type: 'image',

      name: 'Image', // Default component name
      tagName: 'img',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>`,
      content: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>`,
      droppable: false,
      traits: [
        {
          // lazy load
          name: 'loading', // Name of the trait
          type: 'checkbox',
          label: 'Lazy Load',
          valueTrue: 'lazy', // Value to assign when is checked, default: `true`
          valueFalse: '',
        },
        {
          type: 'button',
          label: 'Open Asset Manager',
          full: true, // Full width button
          // or you can just specify the Command ID
          command: editor => editor.Assets.open(),
        },
      ],
    },
  });

  // editor.DomComponents.addType('image', {
  //   // isComponent: el => {
  //   //   if (el.tagName === 'img') {
  //   //     return { type: 'image' };
  //   //   }
  //   // },
  //   extend: 'image',
  //   model: {
  //     defaults: {
  //       name: 'Image', // Default component name
  //       tagName: 'img',
  //       icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>`,
  //       content: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>`,
  //       droppable: false,
  //       traits: [
  //         {
  //           // lazy load
  //           name: 'loading', // Name of the trait
  //           type: 'checkbox',
  //           label: 'Lazy Load',
  //           valueTrue: 'lazy', // Value to assign when is checked, default: `true`
  //           valueFalse: '',
  //         },
  //         {
  //           type: 'button',
  //           label: 'Open Asset Manager',
  //           full: true, // Full width button
  //           // or you can just specify the Command ID
  //           command: editor => editor.Assets.open(),
  //         },
  //       ],
  //     },
  //
  //   },
  // });

  // toAdd('icon') &&
  // bm.add('icon', {
  //     ...commonBlockProps,
  //     label: opts.labelIcon,
  //     media: `<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-diamond' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
  //         <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
  //         <path d='M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5'></path>
  //         <path d='M10 12l-2 -2.2l.6 -1'></path>
  //      </svg>`,
  //     content: { type: 'svg', style: { height: '30px', width: '30px' } },
  // })

  toAdd('iconsvg') &&
  bm.add('iconsvg', {
    ...commonBlockProps,
    label: opts.labelIconSvg,
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" /><path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" /><path d="M10 8l1.5 8h1l1.5 -8" /></svg>`,
    content: { type: 'svg', style: { height: '30px', width: '30px' } },
  });

  editor.DomComponents.addType('svg', {
    isComponent: el => {
      if (el.tagName === 'SVG') { // Corrected the condition to check for H1 tag
        return { type: 'svg' };
      }
    },
    extend: 'svg',
    model: {
      defaults: {
        attributes: { class: 'svg' },
        name: 'SVG', // Default component name
        tagName: 'svg',
        content: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-6" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" /><path d="M21 12a2 2 0 1 0 -4 0v4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-svg" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" /><path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" /><path d="M10 8l1.5 8h1l1.5 -8" /></svg>`,
        droppable: false,
      },

    },
  });

  toAdd('youtube') &&
  bm.add('youtube', {
    ...commonBlockProps,
    label: 'Youtube Video',
    attributes: { class: 'ytb-video' },
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
            <path d="M10 9l5 3l-5 3z"></path>
         </svg>`,
    content: `<iframe width="1463" height="669" src="https://www.youtube.com/embed/2w5IvDyPlZQ" title="Should Transit Run 24 Hours?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  });


};

export default MediaBlocks;
