import { BlockProperties, Editor, grapesjs } from 'grapesjs'
import { PluginOptions } from './index'

export default function(editor: Editor, opts: Required<PluginOptions>) {
    const bm = editor.BlockManager
    const { category, blocks } = opts

    const toAdd = (name: string) => blocks.indexOf(name) >= 0
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }

    toAdd('text') &&
    bm.add('text', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelText,
        media: `<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-text-size' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M3 7v-2h13v2'></path>
            <path d='M10 5v14'></path>
            <path d='M12 19h-4'></path>
            <path d='M15 13v-1h6v1'></path>
            <path d='M18 12v7'></path>
            <path d='M17 19h2'></path>
         </svg>`,
        content: {
            type: 'text',
            content: 'Insert your text here',
            style: { padding: '10px' },
        },
    })


    editor.DomComponents.addType('heading', {

        model: {
            defaults: {
                tagName: 'h1',
                content: 'Heading',
                traits: [
                    {
                        type: 'select',
                        label: 'Heading Type',
                        name: 'tagName', // Use 'tagName' to change the component's tag
                        options: [
                            { value: 'h1', name: 'H1 - Heading One' },
                            { value: 'h2', name: 'H2 - Heading Two' },
                            { value: 'h3', name: 'H3 - Heading Three' },
                            { value: 'h4', name: 'H4 - Heading Four' },
                            { value: 'h5', name: 'H5 - Heading Five' },
                            { value: 'h6', name: 'H6 - Heading Six' },
                            // Add more options as needed
                        ],
                    },
                ],
                droppable: false,
            },

            init() {
                this.on('change:attributes', this.handleAttrChange)
            },

            handleAttrChange() {
                // Get the new tagName value from the attributes
                const newTag = this.getAttributes().tagName

                if (newTag) {
                    // Update the model's tagName property
                    this.set('tagName', newTag)
                }
            },

        },
    })


    toAdd('heading') &&
    bm.add('heading', {
        ...commonBlockProps,
        label: opts.labelHeading,

        media: `<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-heading' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
   <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
   <path d='M7 12h10'></path>
   <path d='M7 5v14'></path>    
   <path d='M17 5v14'></path>
   <path d='M15 19h4'></path>
   <path d='M15 5h4'></path>
   <path d='M5 19h4'></path>
   <path d='M5 5h4'></path>
</svg>`,
        content: { type: 'heading' },
    })

    editor.DomComponents.addType('link', {
        model: {
            defaults: {
                extend: 'link',
                traits: [
                    // The href trait, for the URL
                    {
                        type: 'text',
                        label: 'target URL',
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
    })

    toAdd('link') &&
    bm.add('link', {
        ...commonBlockProps,
        label: 'Link',
        media: `<svg viewBox='0 0 24 24'>
      <path fill='currentColor' d='M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z'></path>
    </svg>`,
        content: {
            type: 'link',
            content: 'Link',
            style: { color: '#3b97e3' },
        },
    })

//     editor.DomComponents.addType('link-box', {
//         model: {
//             defaults: {
//                 // Define the HTML structure with a surrounding container
//                 components: `
//                     <a>Link</a>
//             `,
//                 // Add custom styles
//                 styles: `
//                 .link-box-css {
//                     color:inherit;
// display:inline-block;
// vertical-align:top;
// padding:10px;
// max-width:100%;
// text-decoration:none;
//                 }
//             `,
//                 traits: [
//                     // Traits for the link-box
//                     // ...
//                 ],
//                 // Container settings
//                 draggable: true,
//                 droppable: true,
//                 selectable: true,
//                 hoverable: true,
//                 highlightable: true,
//                 layerable:true,
//                 editable: true, // Set false to prevent editing the container directly
//             },
//             init() {
//                 this.on('component:add', model => {
//                     if (model.is('link-box') && !model.get('droppable')) {
//                         // Make sure only the container is droppable, not the link itself
//                         model.set('droppable', false);
//                     }
//                 });
//             },
//         },
//     });

    toAdd('link-box') &&
    bm.add('link-box', {
        ...commonBlockProps,
        label: 'Link Box',
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transfer-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 18v3h16v-14l-8 -4l-8 4v3" /><path d="M4 14h9" /><path d="M10 11l3 3l-3 3" /></svg>`,
        content: {
            type: 'link',
            name: 'Link box',
            editable: false,
            droppable: true,
            style: {
                display: 'inline-block',
                'min-height': '50px',
                'min-width': '100px',
                'background': '#F5F5F5',
            },
        },
    })

    toAdd('button') &&
    bm.add('button', {
        ...commonBlockProps,
        label: opts.labelButton,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-air-conditioning-disabled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 8m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" /></svg>`,
        content: `
            <button class='button-1' role='button'>Call to action</button>`,
    })

    toAdd('icon') &&
    bm.add('icon', {
        ...commonBlockProps,
        label: opts.labelIcon,
        media: `<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-diamond' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5'></path>
            <path d='M10 12l-2 -2.2l.6 -1'></path>
         </svg>`,
        content: { type: 'svg', style: { height: '30px', width: '30px' } },
    })

    toAdd('iconsvg') &&
    bm.add('iconsvg', {
        ...commonBlockProps,
        label: opts.labelIconSvg,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><path d="M2.5 21h8l-4 -7z" /><path d="M14 3l7 7" /><path d="M14 10l7 -7" /><path d="M14 14h7v7h-7z" /></svg>`,
        content: { type: 'svg', style: { height: '30px', width: '30px' } },
    })
}
