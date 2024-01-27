import { BlockProperties, Editor } from 'grapesjs'
import { PluginOptions } from './index'

export default function (editor: Editor, opts: Required<PluginOptions>) {
    const bm = editor.BlockManager
    const { category, blocks } = opts

    const toAdd = (name: string) => blocks.indexOf(name) >= 0
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }

    // Ordered List Block
    toAdd('ordered-list') &&
        bm.add('ordered-list', {
            ...commonBlockProps,
            label: opts.labelOrderedList,
            media:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M12 18h8" /><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /><path d="M6 10v-6l-2 2" /></svg>`,
            content: {
                content:
                    '<ol><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ol>',
                style: {
                    padding: '10px',
                },
            },
        })

    // Unordered List Block
    toAdd('unordered-list') &&
        bm.add('unordered-list', {
            media:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>`,
            ...commonBlockProps,
            label: opts.labelUnorderedList,
            content: {
                content:
                    '<ul><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul>',
                style: {
                    padding: '10px',
                },
            },
        })

    // List Without Decorations Block
    toAdd('no-decoration-list') &&
        bm.add('no-decoration-list', {
            ...commonBlockProps,
            label: opts.labelNoDecorationList,
            media:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>`,
            content: {
                content:
                    '<ul style="list-style-type: none;"><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul>',
                style: {
                    padding: '10px',
                },
            },
        })

    // List Without Decorations Block
    toAdd('icon-list') &&
        bm.add('icon-list', {
            ...commonBlockProps,
            label: opts.labelIconList,
            media:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>`,
            content: {
                content:
                    '<ul style="list-style-type: none;">' +
                    '<li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-anchor" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n' +
                    '   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n' +
                    '   <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2"></path>\n' +
                    '   <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>\n' +
                    '</svg><p>List Item 1</p></li>' +
                    '<li>List Item 2</li><li>List Item 3</li></ul>',
                style: {
                    padding: '10px',
                },
            },
        })


}
