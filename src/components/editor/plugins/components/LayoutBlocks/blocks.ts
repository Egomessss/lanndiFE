import { BlockProperties, Editor } from 'grapesjs'


export default function(editor: Editor, opts) {
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


    editor.DomComponents.addType('container', {
        isComponent: el => {
            // This will treat every 'div' element as a 'container' component
            if (el.tagName === 'DIV') {
                return { type: 'container' }
            }
        },
        model: {
            tagName: 'div',
            defaults: {
                // Define default properties for your container component
                attributes: { class: 'container' },
                // Avoid defining 'components' here to prevent recursive nesting of containers
                styles: `.container { width: 100%; height: 200px; }`,
            },
        },
    })

// When adding a 'container' block
    toAdd('container') &&
    bm.add('container', {
        ...commonBlockProps,
        label: opts.labelContainer,
        media: `<svg ></svg>`, // Your SVG icon
        content: {
            type: 'container',
            // Content for the container, avoid nesting containers inside each other
        },
    })


    toAdd('rows') &&
    bm.add('rows', {
        ...commonBlockProps,
        label: opts.labelRows,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-section" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h.01" /><path d="M4 20h.01" /><path d="M8 20h.01" /><path d="M12 20h.01" /><path d="M16 20h.01" /><path d="M20 4h.01" /><path d="M4 4h.01" /><path d="M8 4h.01" /><path d="M12 4h.01" /><path d="M16 4l0 .01" /><path d="M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" /></svg>`,
        content: { type: 'rows' },
    })


    editor.DomComponents.addType('rows', {
        model: {
            defaults: {
                attributes: { class: 'rows' },
                components: [{ type: 'container' }, { type: 'container' }, { type: 'container' }],
                styles: `
        .rows {display:flex; flex-direction:row; width: 100%; height:100%; gap:8px; padding: 10px;}
      @media (max-width: 768px) {
      .rows{
        flex-wrap: wrap;
      }
    }
      `,
            },
        },
    })


    toAdd('columns') &&
    bm.add('columns', {
        ...commonBlockProps,
        label: opts.labelColumns,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-section" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h.01" /><path d="M4 20h.01" /><path d="M8 20h.01" /><path d="M12 20h.01" /><path d="M16 20h.01" /><path d="M20 4h.01" /><path d="M4 4h.01" /><path d="M8 4h.01" /><path d="M12 4h.01" /><path d="M16 4l0 .01" /><path d="M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" /></svg>`,
        content: { type: 'columns' },
    })


    editor.DomComponents.addType('columns', {
        model: {
            defaults: {
                attributes: { class: 'columns' },
                components: [{ type: 'container' }, { type: 'container' }, { type: 'container' }],
                styles: `
        .columns {display:flex; flex-direction:column; width: 100%; height:100%; gap:8px; padding: 10px;}
    
    
      `,
            },
        },
    })
    toAdd('grid') &&
    bm.add('grid', {
        ...commonBlockProps,
        label: opts.labelGrid,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>`,
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

    toAdd('table') &&
    bm.add('table', {
        ...commonBlockProps,
        label: opts.labelTable,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg>`,
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
}
