import { BlockProperties, Editor, grapesjs } from 'grapesjs';
import { PluginOptions } from './index';

const InteractiveBlocks =(editor: Editor, opts: Required<PluginOptions>)=> {
  const bm = editor.BlockManager;
  const { category, blocks } = opts;

  const toAdd = (name: string) => blocks.indexOf(name) >= 0;
  const commonBlockProps: Partial<BlockProperties> = {
    category,
    select: true,
  };


  editor.DomComponents.addType('link', {
    extend: 'text',
    model: {
      defaults: {
        label: 'Link',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>`,
        attributes: { class: 'link' },
        components:`<a href="#">link</a>`,
        extend: 'link',
        name: 'Link',
        traits: [
          // The href trait, for the URL
          {
            type: 'text',
            label: 'Target URL',
            name: 'href',
          },
          // A select trait for additional IDs
          {
            type: 'text',
            label: 'Select target ID',
            name: 'select-id',
          },
          // A checkbox trait for opening the link in a new tab
          {
            type: 'checkbox',
            label: 'Open in new tab',
            name: 'target',
            valueTrue: '_blank',
            valueFalse: '_self',
          },
        ],
      },
    },
  });

  toAdd('link') &&
  bm.add('link', {
    ...commonBlockProps,
    label: 'Link',
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>`,
    content: {
      type: 'link',
      content: 'Link',
    },
  });

  editor.DomComponents.addType('nav-link', {

    model: {
      defaults: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-symlink" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-4a3 3 0 0 1 3 -3h5" /><path d="M9 17l3 -3l-3 -3" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" /></svg>`,
        attributes: { class: 'nav-link' },
        traits: [
          // The href trait, for the URL
          {
            type: 'text',
            label: 'Target Page',
            name: 'href',
          },
        ],
      },
    },
  });

//     toAdd('nav-link') &&
//     bm.add('nav-link', {
//         ...commonBlockProps,
//         label: 'NavLink',
//         media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-symlink" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-4a3 3 0 0 1 3 -3h5" /><path d="M9 17l3 -3l-3 -3" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" /></svg>`,
//         content: {
//             type: 'link',
//             content: 'NavLink',
//         },
//     })
//
  editor.DomComponents.addType('link-box', {

    model: {
      defaults: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>`,
        extend: 'link',
        droppable: true,
        attributes: { class: 'link-box' },
        styles: `
                .gjs-link-box {
    color: inherit;
    display: inline-block;
    vertical-align: top;
    padding: 10px;
    max-width: 100%;
    text-decoration: none;
    cursor: pointer;
}
                .link-box:empty {
    text-decoration: none;
    padding: 5px;
}

                .link-box:empty:before {
      background-color: #ddd;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30px;
    padding: 0 10px;
    opacity: 0.3;
    border-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    content: "Link Box";
    }
                `,
        traits: [
          // The href trait, for the URL
          {
            type: 'text',
            label: 'Target URL',
            name: 'href',
          },
          // A select trait for additional IDs
          {
            type: 'text',
            label: 'Select target ID',
            name: 'select-id',
          },
          // A checkbox trait for opening the link in a new tab
          {
            type: 'checkbox',
            label: 'Open in new tab',
            name: 'target',
            valueTrue: '_blank',
            valueFalse: '_self',
          },
        ],
      },
    },
  });


  toAdd('link-box') &&
  bm.add('link-box', {
    ...commonBlockProps,
    label: 'Link Box',
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>`,
    content: {
      type: 'link-box',
    },
  });

  editor.DomComponents.addType('button', {
    isComponent: el => {
      // This will treat every 'div' element as a 'container' component
      if (el.tagName === 'button') {
        return { type: 'button' };
      }
    },
    extend: 'text',
    model: {

      defaults: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transition-bottom" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" /><path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M12 9v8" /><path d="M9 14l3 3l3 -3" /></svg>`,
        droppable: true,
        resizable:true,
        attributes: { class: 'button' },
        styles: `
                   .button{
  width:fit-content;
  cursor:pointer;
  outline:0;
  color:#fff;
  background-color:#0d6efd;
  border-color:#0d6efd;
  display:inline-block;
  font-weight:400;
  line-height:1.5;
  text-align:center;
  border:1px solid transparent;
  padding:4px 12px 4px 12px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
}
.button:hover{
  color:#fff;
  background-color:darken(#0d6efd, 10%);
  border-color:#0a58ca;
}
                `,
      },
      init() {
        this.on('change:attributes:text', this.onTextChange);
      },
      onTextChange() {
        this.components(this.getAttributes().text);
      },
    },

  });


  toAdd('button') &&
  bm.add('button', {
    ...commonBlockProps,
    label: opts.labelButton,
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transition-bottom" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" /><path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M12 9v8" /><path d="M9 14l3 3l3 -3" /></svg>`,
    content: { type: 'button', content: 'Button' },
  });


}


export default InteractiveBlocks;