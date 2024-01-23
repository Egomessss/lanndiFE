import { BlockProperties, Editor, grapesjs } from 'grapesjs'


export default function(editor: Editor, opts:any) {
    const bm = editor.BlockManager
    const { category, blocks } = opts

    const toAdd = (name: string) => blocks.indexOf(name) >= 0
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }

    toAdd('span') &&
    bm.add('span', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelSpan,
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
    toAdd('seciton') &&
    bm.add('seciton', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelSection,
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
}
