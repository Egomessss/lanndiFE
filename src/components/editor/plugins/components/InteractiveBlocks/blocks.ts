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
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>`,
        content: {
            type: 'link',
            content: 'Link',
            style: { color: '#3b97e3' },
        },
    })

    toAdd('link-box') &&
    bm.add('link-box', {
        ...commonBlockProps,
        label: 'Link Box',
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>`,
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
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transition-bottom" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" /><path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M12 9v8" /><path d="M9 14l3 3l3 -3" /></svg>`,
        content: `
            <button class='button-1' role='button'>Call to action</button>`,
    })


}
