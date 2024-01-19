import { BlockProperties, Editor } from 'grapesjs'
import { PluginOptions } from './index'
export default function (editor: Editor, opts: Required<PluginOptions>) {
    const bm = editor.BlockManager
    const {
        category,
        blocks,
        stylePrefix,
        flexGrid,
        rowHeight,
        addBasicStyle,
    } = opts
    const clsRow = `${stylePrefix}row`
    const clsCell = `${stylePrefix}cell`
    const styleRow = flexGrid
        ? `
    .${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }`
        : `
    .${clsRow} {
      display: table;
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 768px) {
      .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
        width: 100%;
        display: block;
      }
    }`
    const styleClm = flexGrid
        ? `
    .${clsCell} {
      min-height: ${rowHeight}px;
      flex-grow: 1;
      flex-basis: 100%;
    }`
        : `
    .${clsCell} {
      width: 8%;
      display: table-cell;
      height: ${rowHeight}px;
    }`
    const styleClm30 = `
  .${stylePrefix}cell30 {
    width: 30%;
  }`
    const styleClm70 = `
  .${stylePrefix}cell70 {
    width: 70%;
  }`

    const step = 0.2
    const minDim = 1
    const currentUnit = 1
    const resizerBtm: Record<string, any> = {
        tl: 0,
        tc: 0,
        tr: 0,
        cl: 0,
        cr: 0,
        bl: 0,
        br: 0,
        minDim,
    }
    const resizerRight: Record<string, any> = {
        ...resizerBtm,
        cr: 1,
        bc: 0,
        currentUnit,
        minDim,
        step,
    }

    // Flex elements do not react on width style change therefore I use
    // 'flex-basis' as keyWidth for the resizer on columns
    if (flexGrid) {
        resizerRight.keyWidth = 'flex-basis'
    }

    const rowAttr = {
        class: clsRow,
        'data-gjs-droppable': `.${clsCell}`,
        'data-gjs-resizable': resizerBtm,
        'data-gjs-name': 'Row',
    }

    const colAttr: Record<string, any> = {
        class: clsCell,
        'data-gjs-draggable': `.${clsRow}`,
        'data-gjs-resizable': resizerRight,
        'data-gjs-name': 'Cell',
    }

    if (flexGrid) {
        colAttr['data-gjs-unstylable'] = ['width']
        colAttr['data-gjs-stylable-require'] = ['flex-basis']
    }

    // Make row and column classes private
    const privateCls = [`.${clsRow}`, `.${clsCell}`]
    editor.on(
        'selector:add',
        (selector) =>
            privateCls.indexOf(selector.getFullName()) >= 0 &&
            selector.set('private', 1),
    )

    const attrsToString = (attrs: Record<string, any>) => {
        const result = []

        for (let key in attrs) {
            let value = attrs[key]
            const toParse = value instanceof Array || value instanceof Object
            value = toParse ? JSON.stringify(value) : value
            result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`)
        }

        return result.length ? ` ${result.join(' ')}` : ''
    }

    const toAdd = (name: string) => blocks.indexOf(name) >= 0
    const attrsRow = attrsToString(rowAttr)
    const attrsCell = attrsToString(colAttr)
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }

    toAdd('column1') &&
        bm.add('column1', {
            ...commonBlockProps,
            label: opts.labelColumn1,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-columns-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 3m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path>
         </svg>`,
            content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
      </div>
      ${
          addBasicStyle
              ? `<style>
          ${styleRow}
          ${styleClm}
        </style>`
              : ''
      }`,
        })

    toAdd('column2') &&
        bm.add('column2', {
            ...commonBlockProps,
            label: opts.labelColumn2,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-columns-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1zm9 -1v18"></path>
         </svg>`,
            content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>
      ${
          addBasicStyle
              ? `<style>
          ${styleRow}
          ${styleClm}
        </style>`
              : ''
      }`,
        })

    toAdd('column3') &&
        bm.add('column3', {
            ...commonBlockProps,
            label: opts.labelColumn3,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-columns-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1zm6 -1v18m6 -18v18"></path>
         </svg>`,
            content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>
      ${
          addBasicStyle
              ? `<style>
          ${styleRow}
          ${styleClm}
        </style>`
              : ''
      }`,
        })

    toAdd('column3-7') &&
        bm.add('column3-7', {
            ...commonBlockProps,
            label: opts.labelColumn37,
            media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"/>
      </svg>`,
            content: `<div ${attrsRow}>
        <div ${attrsCell} style='${
            flexGrid ? 'flex-basis' : 'width'
        }: 30%;'></div>
        <div ${attrsCell} style='${
            flexGrid ? 'flex-basis' : 'width'
        }: 70%;'></div>
      </div>
      ${
          addBasicStyle
              ? `<style>
          ${styleRow}
          ${styleClm}
          ${styleClm30}
          ${styleClm70}
        </style>`
              : ''
      }`,
        })

    toAdd('text') &&
        bm.add('text', {
            ...commonBlockProps,
            activate: true,
            label: opts.labelText,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-size" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7v-2h13v2"></path>
            <path d="M10 5v14"></path>
            <path d="M12 19h-4"></path>
            <path d="M15 13v-1h6v1"></path>
            <path d="M18 12v7"></path>
            <path d="M17 19h2"></path>
         </svg>`,
            content: {
                type: 'text',
                content: 'Insert your text here',
                style: { padding: '10px' },
            },
        })

    toAdd('link') &&
        bm.add('link', {
            ...commonBlockProps,
            label: opts.labelLink,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 15l6 -6"></path>
            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
         </svg>`,
            content: {
                type: 'link',
                content: 'Link',
                style: { color: '#d983a6' },
            },
        })

    toAdd('image') &&
        bm.add('image', {
            ...commonBlockProps,
            activate: true,
            label: opts.labelImage,
            media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
      </svg>`,
            content: {
                style: { color: 'black' },
                type: 'image',
            },
        })

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

    // toAdd("map") &&
    //     bm.add("map", {
    //         ...commonBlockProps,
    //         label: opts.labelMap,
    //         media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z" />
    //   </svg>`,
    //         content: {
    //             type: "map",
    //             style: { height: "350px" },
    //         },
    //     });

    toAdd('heading') &&
        bm.add('heading', {
            ...commonBlockProps,
            label: opts.labelHeading,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19 18v-8l-2 2"></path>
            <path d="M4 6v12"></path>
            <path d="M12 6v12"></path>
            <path d="M11 18h2"></path>
            <path d="M3 18h2"></path>
            <path d="M4 12h8"></path>
            <path d="M3 6h2"></path>
            <path d="M11 6h2"></path>
         </svg>`,
            content: `<div data-gjs-type="text">
        <h1>${opts.labelHeading}</h1>
      </div>`,
        })

    toAdd('heading2') &&
        bm.add('heading2', {
            ...commonBlockProps,
            label: opts.labelHeading2,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"></path>
            <path d="M4 6v12"></path>
            <path d="M12 6v12"></path>
            <path d="M11 18h2"></path>
            <path d="M3 18h2"></path>
            <path d="M4 12h8"></path>
            <path d="M3 6h2"></path>
            <path d="M11 6h2"></path>
         </svg>`,
            content: `<div data-gjs-type="text">
        <h2>${opts.labelHeading2}</h2>
      </div>`,
        })
    toAdd('heading3') &&
        bm.add('heading3', {
            ...commonBlockProps,
            label: opts.labelHeading3,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19 14a2 2 0 1 0 -2 -2"></path>
            <path d="M17 16a2 2 0 1 0 2 -2"></path>
            <path d="M4 6v12"></path>
            <path d="M12 6v12"></path>
            <path d="M11 18h2"></path>
            <path d="M3 18h2"></path>
            <path d="M4 12h8"></path>
            <path d="M3 6h2"></path>
            <path d="M11 6h2"></path>
         </svg>`,
            content: `<div data-gjs-type="text">
        <h3>${opts.labelHeading3}</h3>
      </div>`,
        })
    toAdd('heading4') &&
        bm.add('heading4', {
            ...commonBlockProps,
            label: opts.labelHeading4,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 18v-8l-4 6h5"></path>
            <path d="M4 6v12"></path>
            <path d="M12 6v12"></path>
            <path d="M11 18h2"></path>
            <path d="M3 18h2"></path>
            <path d="M4 12h8"></path>
            <path d="M3 6h2"></path>
            <path d="M11 6h2"></path>
         </svg>`,
            content: `<div data-gjs-type="text">
        <h4>${opts.labelHeading4}</h4>
      </div>`,
        })
    toAdd('heading5') &&
        bm.add('heading5', {
            ...commonBlockProps,
            label: opts.labelHeading5,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4"></path>
            <path d="M4 6v12"></path>
            <path d="M12 6v12"></path>
            <path d="M11 18h2"></path>
            <path d="M3 18h2"></path>
            <path d="M4 12h8"></path>
            <path d="M3 6h2"></path>
            <path d="M11 6h2"></path>
         </svg>`,
            content: `<div data-gjs-type="text">
        <h5>${opts.labelHeading5}</h5>
      </div>`,
        })

    // Add Button Block

    toAdd('button') &&
        bm.add('button', {
            ...commonBlockProps,
            label: opts.labelButton,
            media: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.5 17h-17A2.502 2.502 0 0 1 1 14.5v-4A2.502 2.502 0 0 1 3.5 8h17a2.502 2.502 0 0 1 2.5 2.5v4a2.502 2.502 0 0 1-2.5 2.5zm-17-8A1.502 1.502 0 0 0 2 10.5v4A1.502 1.502 0 0 0 3.5 16h17a1.502 1.502 0 0 0 1.5-1.5v-4A1.502 1.502 0 0 0 20.5 9zM17 12H7v1h10z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>`,
            content: `
            <button class="button-1" role="button">Button 1</button>`,
        })

    // Add Icon Block

    toAdd('icon') &&
        bm.add('icon', {
            ...commonBlockProps,
            label: opts.labelIcon,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-diamond" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"></path>
            <path d="M10 12l-2 -2.2l.6 -1"></path>
         </svg>`,
            content: `<div class="gjs-icon" data-type-icon id="iytb8l">
        <svg viewBox="0 0 24 24">
          <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
          </path>
        </svg>
      </div>`,
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
            content: `<div class="gjs-image" data-type-image id="iytb8l">
        <svg viewBox="0 0 24 24">
          <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
          </path>
        </svg>
      </div>`,
        })
}
