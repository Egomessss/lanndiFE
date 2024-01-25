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
        media: `<svg viewBox='0 0 24 24'>
      <path fill='currentColor' d='M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z'></path>
    </svg>`,
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


}
