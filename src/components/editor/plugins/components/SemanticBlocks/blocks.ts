import { BlockProperties, Editor, grapesjs } from 'grapesjs'


export default function(editor: Editor, opts:any) {
    const bm = editor.BlockManager
    const { category, blocks } = opts

    const toAdd = (name: string) => blocks.indexOf(name) >= 0
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }

    editor.DomComponents.addType('section', {
        isComponent: el => {
            // This will treat every 'div' element as a 'container' component
            if (el.tagName === 'SECTION') {
                return { type: 'section' }
            }
        },
        model: {
            defaults: {
                tagName: 'section',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-section" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h.01" /><path d="M4 20h.01" /><path d="M8 20h.01" /><path d="M12 20h.01" /><path d="M16 20h.01" /><path d="M20 4h.01" /><path d="M4 4h.01" /><path d="M8 4h.01" /><path d="M12 4h.01" /><path d="M16 4l0 .01" /><path d="M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" /></svg>`,
                components:`<ul><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul>`,
            },
        },
    })

    toAdd('section') &&
    bm.add('section', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelSection,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-section" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h.01" /><path d="M4 20h.01" /><path d="M8 20h.01" /><path d="M12 20h.01" /><path d="M16 20h.01" /><path d="M20 4h.01" /><path d="M4 4h.01" /><path d="M8 4h.01" /><path d="M12 4h.01" /><path d="M16 4l0 .01" /><path d="M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" /></svg>`,
        content: {
            type: 'section',
        },
    })

    toAdd('main') &&
    bm.add('main', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelMain,
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

    toAdd('header') &&
    bm.add('header', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelHeader,
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

    toAdd('nav') &&
    bm.add('nav', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelNav,
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



    toAdd('footer') &&
    bm.add('footer', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelFooter,
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

    editor.DomComponents.addType('span', {
        isComponent: el => {
            if (el.tagName === 'span') { // Corrected the condition to check for H1 tag
                return { type: 'span' };
            }
        },
        model: {
            defaults: {
                name: 'Span', // Default component name
                tagName: 'p',
                content: 'Paragraph',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-6" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" /><path d="M21 12a2 2 0 1 0 -4 0v4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
                droppable: false,
            },

        },
    })

    toAdd('span') &&
    bm.add('span', {
        ...commonBlockProps,
        activate: true,
        label: '<Span>',
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-t" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4l12 0" /><path d="M12 4l0 16" /></svg>`,
        content: {
            type: 'text',
            content: 'Insert your content here',
            style: { padding: '10px' },
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-size" width="10" height="10" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7v-2h13v2" /><path d="M10 5v14" /><path d="M12 19h-4" /><path d="M15 13v-1h6v1" /><path d="M18 12v7" /><path d="M17 19h2" /></svg>`,
        },
    })
}
