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
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-t" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4l12 0" /><path d="M12 4l0 16" /></svg>`,
        content: {
            type: 'text',
            content: 'Insert your text here',
            style: { padding: '10px' },
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-size" width="10" height="10" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7v-2h13v2" /><path d="M10 5v14" /><path d="M12 19h-4" /><path d="M15 13v-1h6v1" /><path d="M18 12v7" /><path d="M17 19h2" /></svg>`,
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

}
