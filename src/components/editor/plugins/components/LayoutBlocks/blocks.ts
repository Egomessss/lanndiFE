import { BlockProperties, Editor } from 'grapesjs'


export default function(editor: Editor, opts) {

    const {
        category,
        blocks,
        stylePrefix,
        flexGrid,
        rowHeight,
        addBasicStyle,
    } = opts
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }

    const bm = editor.BlockManager
    const clsRow = `${stylePrefix}row`
    const clsCell = `${stylePrefix}cell`
    const labelRow = 'Row'
    const labelCell = 'Column'

    const attrsToString = (attrs: Record<string, any>) => {
        const result = []

        for (let key in attrs) {
            let value = attrs[key]
            const toParse = value instanceof Array || value instanceof Object
            value = toParse ? JSON.stringify(value) : value
            result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`)
        }

        return result.length ? ` ${result.join(' ')}` : ''
    }

    // Flex elements do not react on width style change therefore I use
    // 'flex-basis' as keyWidth for the resizer on columns
    const keyWidth = 'flex-basis'
    const step = 0.2
    const minDim = 1
    const currentUnit = 1
    const resizerBtm = { tl: 0, tc: 0, tr: 0, cl: 0, cr: 0, bl: 0, br: 0, minDim }
    const resizerRight = { ...resizerBtm, cr: 1, bc: 0, keyWidth, currentUnit, minDim, step }
    const rowAttr = {
        class: clsRow,
        'data-gjs-droppable': `.${clsCell}`,
        'data-gjs-resizable': resizerBtm,
        'data-gjs-custom-name': labelRow,
    }

    const colAttr = {
        class: clsCell,
        'data-gjs-draggable': `.${clsRow}`,
        'data-gjs-resizable': resizerRight,
        'data-gjs-custom-name': labelCell,
        // X Flex
        'data-gjs-unstylable': ['width'],
        'data-gjs-stylable-require': ['flex-basis'],
    }

    const privateCls = [`.${clsRow}`, `.${clsCell}`]
    editor.on('selector:add', selector =>
        privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1))

    const label = 'Flexbox'
    const attrsRow = attrsToString(rowAttr)
    const attrsCell = attrsToString(colAttr)
    const styleRow = `
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
    }
    `

    const styleClm = `
    .${clsRow} {
      display: flex;
      flex-direction:column;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }
    `

    const styleGrid = `
    .${clsRow} {
     .grid {
                  display: grid; // Using CSS Grid layout
                    grid-template-columns: repeat(2, 1fr); // Two columns of equal fraction
                    grid-template-rows: repeat(2, 1fr); // Two rows of equal fraction
                    gap: 10px; // Gap between grid items
                    height:400px;
                }
    
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }
    `


    const styleCell = `
    .${clsCell} {
      min-height: 75px;
      flex-grow: 1;
      flex-basis: 100%;
    }`

    const styleGridCell = `
    .${clsCell} {
      height: 100%;
     
    }`


    const toAdd = (name: string) => blocks.indexOf(name) >= 0

    editor.DomComponents.addType('block', {
        // isComponent: el => {
        //     // This will treat every 'div' element as a 'container' component
        //     if (el.tagName === 'DIV') {
        //         return { type: 'container' }
        //     }
        // },
        model: {
            tagName: 'div',
            defaults: {
                icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`,
                resizable:false,
                droppable:true,
                // Define default properties for your container component
                attributes: { class: 'block' },
                // Avoid defining 'components' here to prevent recursive nesting of containers
                styles: `
                .block:empty:before {
    background-color: #ddd;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30px;
    opacity: 0.3;
    border-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    content: "Centered content";
                `,
            },
        },

    })

// When adding a 'container' block
    toAdd('block') &&
    bm.add('block', {
        ...commonBlockProps,
        label: 'Block',
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`, // Your SVG icon
        content: {
            type: 'block',
            // Content for the container, avoid nesting containers inside each other
        },
    })

    editor.DomComponents.addType('container', {
        // isComponent: el => {
        //     // This will treat every 'div' element as a 'container' component
        //     if (el.tagName === 'DIV') {
        //         return { type: 'container' }
        //     }
        // },
        model: {
            tagName: 'div',
            defaults: {
                icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-container" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M4 4v.01" /><path d="M4 20v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`,
                resizable:false,
                droppable:true,
                // Define default properties for your container component
                attributes: { class: 'container' },
                // Avoid defining 'components' here to prevent recursive nesting of containers
                styles: `
                .container:empty:before {
    background-color: #ddd;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    width: 100%;
    min-height: 30px;
    opacity: 0.3;
    border-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    content: "Insert your content here";
                `,
            },
        },
    })

// When adding a 'container' block
    toAdd('container') &&
    bm.add('container', {
        ...commonBlockProps,
        label: opts.labelContainer,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-container" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M4 4v.01" /><path d="M4 20v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`, // Your SVG icon
        content: {
            type: 'container',
            // Content for the container, avoid nesting containers inside each other
        },
    })



    toAdd('columns') &&
    bm.add('columns', {
        ...commonBlockProps,
        label: opts.labelRows,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-rows" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12l16 0" /></svg>`,
        content: { type: 'columns' },
    })


    editor.DomComponents.addType('columns', {
        model: {
            defaults: {
                icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-rows" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12l16 0" /></svg>`,
                attributes: { class: 'columns' },
                components: [{ type: 'container' }, { type: 'container' }, { type: 'container' }],
                styles: `
        .columns {display:flex; flex-direction:row; width: 100%; height:200px; gap:8px; padding: 10px;}
        .container{
       flex-grow: 1;
      flex-basis: 100%;
        height:100%;
        }
      @media (max-width: 768px) {
      .columns{
        flex-wrap: wrap;
      }
       .container{
        width:100%;
        height:100%;
        }
    }
      `,
            },
        },
    })


    toAdd('rows') &&
    bm.add('rows', {
        ...commonBlockProps,
        label: opts.labelColumns,
        media: ` <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
        content: { type: 'rows' },
    })



    editor.DomComponents.addType('rows', {
        model: {
            defaults: {
                icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
                attributes: { class: 'rows' },
                components: [{ type: 'container' }, { type: 'container' }, { type: 'container' }],
                styles: `
       .rows {display:flex; flex-direction:column; width: 100%; height:200px; gap:8px; padding: 10px;}
        .container{
        height:33%;
        width:100%;
        }
   
    
      `,
            },
        },
    })


    editor.DomComponents.addType('grid', {
        model: {
            defaults: {
                icon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
                attributes: { class: 'grid' },
                resizable: true,
                components: `<div class="grid">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>  
</div>`,
                styles: `
        .grid {
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  height:200px;
}
.grid-item:empty:before {
    background-color: #ddd;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.3;
    border-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    content: "Insert content here";
}`,
            },
        },
    })

    toAdd('grid') &&
    bm.add('grid', {
        ...commonBlockProps,
        label: opts.labelGrid,
        category: 'Layout',
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
        content: { type: 'grid' },
    })


    editor.DomComponents.addType('table', {
        model: {
            defaults: {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg>`,
                attributes: {
                    class:
                        'table',
                }
                ,
                resizable: false,
                components:
                    `<table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr>
</table>`,
                styles:`#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}`

            }
            ,
        },
    })


    toAdd('table') &&
    bm.add('table', {
        ...commonBlockProps,
        category: 'Layout',
        label: opts.labelTable,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg>`,
        content: { type: 'table' },
    })


//     editor.DomComponents.addType('container', {
//         isComponent: el => {
//             // This will treat every 'div' element as a 'container' component
//             if (el.tagName === 'DIV') {
//                 return { type: 'container' }
//             }
//         },
//         model: {
//             defaults: {
//                 icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`,
//                 tagName: 'div',
//                 defaults: {
//                     resizable: true,
//                     // Define default properties for your container component
//                     attributes: { class: 'container' },
//                     // Avoid defining 'components' here to prevent recursive nesting of containers
//                     styles: `.container { width: 100%; height: 100%; }`,
//                 },
//             },
//         },
//     })
//
// // When adding a 'container' block
//     toAdd('container') &&
//     bm.add('container', {
//         ...commonBlockProps,
//         label: opts.labelContainer,
//         media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`, // Your SVG icon
//         content: {
//             type: 'container',
//             // Content for the container, avoid nesting containers inside each other
//         },
//     })
//
//
//     editor.DomComponents.addType('rows', {
//         model: {
//             defaults: {
//                 resizable: true,
//                 icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
//                 attributes: { class: 'rows' },
//                 components: ` <div ${attrsRow}>
//           <div ${attrsCell}></div>
//           <div ${attrsCell}></div>
//         </div>`,
//                 styles:
//                     `  ${styleRow}
//           ${styleCell}`,
//             },
//         },
//     })
//
//
//     toAdd('rows') &&
//     bm.add('rows', {
//         ...commonBlockProps,
//         label: opts.labelRows,
//         media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
//         content: { type: 'rows' },
//     })
//
//     toAdd('columns') &&
//     bm.add('columns', {
//         ...commonBlockProps,
//         label: opts.labelColumns,
//         media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-rows" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12l16 0" /></svg>`,
//         content: { type: 'columns' },
//     })


// editor.DomComponents.addType('columns', {
//     model: {
//         defaults: {
//             icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-rows" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12l16 0" /></svg>`,
//             attributes: { class: 'columns' },
//             resizable: true,
//             components: `<div ${attrsRow}>
//       <div ${attrsCell}></div>
//       <div ${attrsCell}></div>
//     </div>`,
//             styles: `${styleClm}
//       ${styleCell}`,
//         },
//     },
// })


}
