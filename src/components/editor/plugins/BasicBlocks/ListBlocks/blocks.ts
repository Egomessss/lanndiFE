import { BlockProperties, Editor } from 'grapesjs'
import { PluginOptions } from './index'

const ListBlocks =(editor: Editor, opts: Required<PluginOptions>)=> {
    const bm = editor.BlockManager
    const { category, blocks } = opts

    const toAdd = (name: string) => blocks.indexOf(name) >= 0
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }
    editor.DomComponents.addType('ordered-list', {
        isComponent: el => {
            // This will treat every 'div' element as a 'container' component
            if (el.tagName === 'OL') {
                return { type: 'ordered-list' }
            }
        },
        model: {
            defaults: {
                attributes: { class: 'ordered-list' },
                tagName: 'ol',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M12 18h8" /><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /><path d="M6 10v-6l-2 2" /></svg>`,
                components:`<ol><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ol>`,
            },
        },
    })


    // Ordered List Block
    toAdd('ordered-list') &&
    bm.add('ordered-list', {
        ...commonBlockProps,
        label: opts.labelOrderedList,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M12 18h8" /><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /><path d="M6 10v-6l-2 2" /></svg>`,
        content:{type:'ordered-list'} ,
    })

    editor.DomComponents.addType('unordered-list', {
        isComponent: el => {
            // This will treat every 'div' element as a 'container' component
            if (el.tagName === 'UL') {
                return { type: 'unordered-list' }
            }
        },
        model: {
            defaults: {
                attributes: { class: 'unordered-list' },
                tagName: 'ul',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>`,
                components:`<ul><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul>`,
            },
        },
    })

    // Unordered List Block
    toAdd('unordered-list') &&
    bm.add('unordered-list', {
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>`,
        ...commonBlockProps,
        label: opts.labelUnorderedList,
        content:{type:'unordered-list'}
    })

}


export default ListBlocks