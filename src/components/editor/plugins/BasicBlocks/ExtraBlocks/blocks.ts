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
        'data-gjs-name': 'Column',
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
            // @ts-ignore TODO fix later!!!
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
    toAdd('custom-code') &&
    bm.add('custom-code', {
        ...commonBlockProps,
        label: opts.labelCustomCode,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-app-window" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M6 8h.01" /><path d="M9 8h.01" /></svg>`,
        content: { type: 'container' },
    })

    toAdd('tabs') &&
    bm.add('tabs', {
        ...commonBlockProps,
        label: opts.labelTabs,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-app-window" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M6 8h.01" /><path d="M9 8h.01" /></svg>`,
        content: { type: 'container' },
    })

    toAdd('accordion') &&
    bm.add('accordion', {
        ...commonBlockProps,
        label: opts.labelAccordion,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2-question" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M14.5 18.5l-2.5 2.5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" /><path d="M19 22v.01" /><path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg>`,
        content: { type: 'container' },
    })


    toAdd('slider') &&
    bm.add('slider', {
        ...commonBlockProps,
        label: opts.labelSlider,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-slideshow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l.01 0" /><path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" /><path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" /><path d="M8 21l.01 0" /><path d="M12 21l.01 0" /><path d="M16 21l.01 0" /></svg>`,
        content: { type: 'container' },
    })


}
