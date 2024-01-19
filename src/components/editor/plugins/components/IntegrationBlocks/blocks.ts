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


    toAdd('waitlist') &&
        bm.add('waitlist', {
            ...commonBlockProps,
            label: opts.labelWaitlist,
            media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>`,
            content: { type: 'container' },
        })

    toAdd('contactform') &&
    bm.add('contactform', {
        ...commonBlockProps,
        label: opts.labelContactForm,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-address-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" /><path d="M10 16h6" /><path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 8h3" /><path d="M4 12h3" /><path d="M4 16h3" /></svg>`,
        content: { type: 'container' },
    })


    toAdd('stripepayment') &&
    bm.add('stripepayment', {
        ...commonBlockProps,
        label: opts.labelStripePayment,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-stripe" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.453 8.056c0 -.623 .518 -.979 1.442 -.979c1.69 0 3.41 .343 4.605 .923l.5 -4c-.948 -.449 -2.82 -1 -5.5 -1c-1.895 0 -3.373 .087 -4.5 1c-1.172 .956 -2 2.33 -2 4c0 3.03 1.958 4.906 5 6c1.961 .69 3 .743 3 1.5c0 .735 -.851 1.5 -2 1.5c-1.423 0 -3.963 -.609 -5.5 -1.5l-.5 4c1.321 .734 3.474 1.5 6 1.5c2 0 3.957 -.468 5.084 -1.36c1.263 -.979 1.916 -2.268 1.916 -4.14c0 -3.096 -1.915 -4.547 -5 -5.637c-1.646 -.605 -2.544 -1.07 -2.544 -1.807z" /></svg>`,
        content: { type: 'container' },
    })


}
