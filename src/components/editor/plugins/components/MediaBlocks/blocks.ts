import { BlockProperties, Editor } from 'grapesjs'
import { PluginOptions } from './index'

export default function(editor: Editor, opts: Required<PluginOptions>) {
    const bm = editor.BlockManager
    const {
        category,
        blocks,
    } = opts


    const toAdd = (name: string) => blocks.indexOf(name) >= 0

    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }




    toAdd('image') &&
    bm.add('image', {
        ...commonBlockProps,
        label: opts.labelImage,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>`,
        content: {
            style: { color: 'black' },
            type: 'image',
        },
    })

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

    // toAdd('iconsvg') &&
    // bm.add('iconsvg', {
    //     ...commonBlockProps,
    //     label: opts.labelIconSvg,
    //     media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><path d="M2.5 21h8l-4 -7z" /><path d="M14 3l7 7" /><path d="M14 10l7 -7" /><path d="M14 14h7v7h-7z" /></svg>`,
    //     content: { type: 'svg', style: { height: '30px', width: '30px' } },
    // })

    toAdd('youtube') &&
    bm.add('youtube', {
        ...commonBlockProps,
        label: 'Youtube Video',
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
            <path d="M10 9l5 3l-5 3z"></path>
         </svg>`,
        content: `<iframe width="1463" height="669" src="https://www.youtube.com/embed/2w5IvDyPlZQ" title="Should Transit Run 24 Hours?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    })


}
