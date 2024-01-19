import { BlockProperties, Editor } from 'grapesjs'
import { PluginOptions } from './index'
export default function (editor: Editor, opts: Required<PluginOptions>) {
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

    toAdd('video') &&
        bm.add('video', {
            ...commonBlockProps,
            label: opts.labelVideo,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
            <path d="M10 9l5 3l-5 3z"></path>
         </svg>`,
            content: {
                type: 'video',
                src: 'img/video2.webm',
                style: {
                    height: '350px',
                    width: '615px',
                },
            },
        })


    toAdd('image') &&
        bm.add('image', {
            ...commonBlockProps,
            label: opts.labelImage,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 8h.01"></path>
            <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
            <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54"></path>
            <path d="M16 19h6"></path>
            <path d="M19 16v6"></path>
         </svg>`,
            content: {
                style: { color: 'black' },
                type: 'image',
            },
        })

    toAdd('youtube') &&
    bm.add('youtube', {
        ...commonBlockProps,
        label: opts.labelVideo,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
            <path d="M10 9l5 3l-5 3z"></path>
         </svg>`,
        content:`<iframe width="1463" height="669" src="https://www.youtube.com/embed/2w5IvDyPlZQ" title="Should Transit Run 24 Hours?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    })

    toAdd('twitter') &&
    bm.add('twitter', {
        ...commonBlockProps,
        label: opts.labelVideo,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
            <path d="M10 9l5 3l-5 3z"></path>
         </svg>`,
        content: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">spsFeed new improved landing page is here!<br>🎉Find out how spsFeed will help you validate your ideas twice as fast🚀 with half the effort✂️!<a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> <a href="https://t.co/Qd6FiDaDJw">https://t.co/Qd6FiDaDJw</a></p>&mdash; Edmilson Gomes (@TecEdSocial) <a href="https://twitter.com/TecEdSocial/status/1701210737593446433?ref_src=twsrc%5Etfw">September 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
    })
}
