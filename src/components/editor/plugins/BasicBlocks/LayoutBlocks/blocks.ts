import { BlockProperties, Editor } from 'grapesjs';


const LayoutBlocks = (editor: Editor, opts: any) => {

  const {
    category,
    blocks,
  } = opts;

  const commonBlockProps: Partial<BlockProperties> = {
    category,
    select: true,
  };

  const bm = editor.BlockManager;

  const toAdd = (name: string) => blocks.indexOf(name) >= 0;

  editor.DomComponents.addType('div', {
    isComponent: el => {
      // This will treat every 'div' element as a 'block' component
      if (el.tagName === 'DIV') {
        return { type: 'div' };
      }
    },

    model: {
      defaults: {
        tagName: 'div',
        name: 'Block',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`,
        resizable: true,
        // Define default properties for your container component
      },
    },
  })
  ;

  editor.DomComponents.addType('block', {
    // isComponent: el => {
    //   // This will treat every 'div' element as a 'block' component
    //   if (el.tagName === 'DIV') {
    //     return { type: 'block' };
    //   }
    // },

    model: {
      defaults: {
        tagName: 'div',
        name: 'Block',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>`,
        resizable: true,
        // Define default properties for your container component
        attributes: { class: 'block' },
        // Avoid defining 'components' here to prevent recursive nesting of containers
        styles: `.block {
          height: 80px;
          max-height: 100%;
          width: 100%;
        }`,
      },
    },
  })
  ;

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
  });


  editor.DomComponents.addType('container', {
    // isComponent: el => {
    //     // This will treat every 'div' element as a 'container' component
    //     if (el.tagName === 'DIV') {
    //         return { type: 'container' }
    //     }
    // },
    model: {
      defaults: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-container" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M4 4v.01" /><path d="M4 20v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`,
        resizable: true,
        // Define default properties for your container component
        attributes: { class: 'container' },
        components: [{ type: 'block' }],
        // Avoid defining 'components' here to prevent recursive nesting of containers
        styles: `
                .container{
                  height: 100px;
                  width: 90%;
                  max-width:1200px;
                  margin-right:auto;
                  margin-left:auto;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 10px 10px 10px 10px;
                }`
        ,
      },
    },
  });

// When adding a 'container' block
  toAdd('container') &&
  bm.add('container', {
    ...commonBlockProps,
    label: 'Container',
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-container" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4v.01" /><path d="M20 20v.01" /><path d="M20 16v.01" /><path d="M20 12v.01" /><path d="M20 8v.01" /><path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M4 4v.01" /><path d="M4 20v.01" /><path d="M4 16v.01" /><path d="M4 12v.01" /><path d="M4 8v.01" /></svg>`, // Your SVG icon
    content: {
      type: 'container',
      // Content for the container, avoid nesting containers inside each other
    },
  });


  toAdd('columns') &&
  bm.add('columns', {
    ...commonBlockProps,
    label: 'Rows',
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-rows" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12l16 0" /></svg>`,
    content: { type: 'columns' },
  });


  editor.DomComponents.addType('columns', {
    model: {
      defaults: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-rows" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12l16 0" /></svg>`,
        resizable: true,
        attributes: { class: 'columns' },
        components: [{ type: 'block' }, { type: 'block' }, { type: 'block' }],
        styles: `
        .columns {
        display:flex; 
        flex-direction:row;
         width: 100%;
          height:100px;
           gap:10px 10px;
            padding: 10px 10px 10px 10px;
        }
        
      @media (max-width: 768px) {
      .columns{
      flex-direction:column;
      height:100%;
      }
    }
      `,
      },
    },
  });


  toAdd('rows') &&
  bm.add('rows', {
    ...commonBlockProps,
    label: 'Columns',
    media: ` <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
    content: { type: 'rows' },
  });


  editor.DomComponents.addType('rows', {
    model: {
      defaults: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
        resizable: true,
        attributes: { class: 'rows' },
        components: [{ type: 'block' }, { type: 'block' }, { type: 'block' }],
        styles: `
       .rows {
        display:flex;
        flex-direction:column; 
        width: 100%;
        height:300px;
        gap:8px 8px;
        padding:10px 10px 10px 10px;
       }
       
        .block{
        height:33%;
        width:100%;
        }
      `,
      },
    },
  });


  editor.DomComponents.addType('grid', {
    model: {
      defaults: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
        attributes: { class: 'grid' },
        resizable: true,
        components: [{ type: 'block' }, { type: 'block' }, { type: 'block' }, { type: 'block' }],
        styles: `
                .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr; 
  gap: 10px;
  padding:10px;
  height: 200px;
  width: 100%;
                }
                
                
                
                @media (max-width: 768px) {
                    .grid {
                        grid-template-columns: repeat(1, 1fr); 
                        grid-template-rows: repeat(4, 1fr); 
                    }
                }
            `,
      },
    },
  });

  toAdd('grid') &&
  bm.add('grid', {
    ...commonBlockProps,
    label: 'Grid',
    category: 'Layout',
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
    content: { type: 'grid' },
  });


  editor.DomComponents.addType('table', {
    isComponent: el => {
      if (el.tagName === 'TABLE') {
        return { type: 'table' };
      }
    },
    extend:'table',
    model: {
      defaults: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg>`,
        draggable:false,
        droppable: ['tbody', 'thead', 'tfoot'],
        attributes: {
          class:
            'table',
        }
        ,
        resizable: true,
        components:
          `<div class="table-wrapper"><table class="table">
  <tr>
    <th class="table-th"><p>Company</p></th>
    <th class="table-th"><p>Contact</p></th>
    <th class="table-th"><p>Country</p></th>
  </tr>
  <tr>
    <td class="table-td"><p>Alfreds Futterkiste</p></td>
    <td class="table-td"><p>Maria Anders</p></td>
    <td class="table-td"><p>Germany</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>Berglunds snabbköp</p></td>
    <td class="table-td"><p>Christina Berglund</p></td>
    <td class="table-td"><p>Sweden</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>Centro comercial Moctezuma</p></td>
    <td class="table-td"><p>Francisco Chang</p></td>
    <td class="table-td"><p>Mexico</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>Ernst Handel</p></td>
    <td class="table-td"><p>Roland Mendel</p></td>
    <td class="table-td"><p>Austria</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>Island Trading</p></td>
    <td class="table-td"><p>Helen Bennett</p></td>
    <td class="table-td"><p>UK</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>Königlich Essen</p></td>
    <td class="table-td"><p>Philip Cramer</p></td>
    <td class="table-td"><p>Germany</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>Laughing Bacchus Winecellars</p></td>
    <td class="table-td"><p>Yoshi Tannamuri</p></td>
    <td class="table-td"><p>Canada</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>Magazzini Alimentari Riuniti</p></td>
    <td class="table-td"><p>Giovanni Rovelli</p></td>
    <td class="table-td"><p>Italy</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>North/South</p></td>
    <td class="table-td"><p>Simon Crowther</p></td>
    <td class="table-td"><p>UK</p></td>
  </tr>
  <tr>
    <td class="table-td"><p>Paris spécialités</p></td>
    <td class="table-td"><p>Marie Bertrand</p></td>
    <td class="table-td"><p>France</p></td>
  </tr>
</table> </div>`,
        styles: `
        .table-wrapper {
    width: 100%;
    max-width: 1200px; 
    overflow-x: auto;
  }
        
        .table {
  width: 100%;
}

.table-td{
  border: 1px solid #ddd;
  padding: 8px;
}

.table-th {
  border: 1px solid #ddd;
   padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
`,

      }
      ,
    },
  });

  toAdd('table') &&
  bm.add('table', {
    ...commonBlockProps,
    label: 'Table',
    category: 'Layout',
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
    content: { type: 'table' },
  });



  // Define table component
  // editor.DomComponents.addType('table', {
  //   isComponent: el => {
  //     if (el.tagName === 'TABLE') {
  //       return { type: 'table' };
  //     }
  //   },
  //   model: {
  //     defaults: {
  //       tagName: 'table',
  //       name: 'Table',
  //       icon: '',
  //       resizable: true,
  //       attributes: { class: 'table' },
  //       styles: `.table {
  //       width: 100%;
  //       border-collapse: collapse;
  //     }`,
  //     },
  //   },
  // });

  // toAdd('thead') &&
  // bm.add('thead', {
  //   ...commonBlockProps,
  //   label: 'Table Head',
  //   category: 'Table',
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
  //   content: { type: 'thead' },
  // });

// Define table head component
  editor.DomComponents.addType('thead', {
    isComponent: el => {
      if (el.tagName === 'THEAD') {
        return { type: 'thead' };
      }
    },
    extend:'thead',
    model: {
      defaults: {
        tagName: 'thead',
        name: 'Table Head',
        draggable: 'table',
        icon: '',
        droppable:true,
        resizable: true,
        attributes: { class: 'thead' },
        styles: `.thead {
        background-color: #f3f3f3;
      }`,
      },
    },
  });

  // toAdd('tbody') &&
  // bm.add('tbody', {
  //   ...commonBlockProps,
  //   label: 'Table Body',
  //   category: 'Table',
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
  //   content: { type: 'tbody' },
  // });
// Define table body component
  editor.DomComponents.addType('tbody', {
    isComponent: el => {
      if (el.tagName === 'TBODY') {
        return { type: 'tbody' };
      }
    },
    extend:'tbody',
    model: {
      defaults: {
        tagName: 'tbody',
        name: 'Table Body',
        icon: '',
        droppable: ['tr'],
        draggable: 'table',
        resizable: true,
        attributes: { class: 'tbody' },
        styles: `.tbody {
        background-color: #ffffff;
      }`,
      },
    },
  });

  // toAdd('trow') &&
  // bm.add('trow', {
  //   ...commonBlockProps,
  //   label: 'Table Row',
  //   category: 'Table',
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
  //   content: { type: 'trow' },
  // });

// Define table row component
  editor.DomComponents.addType('trow', {
    isComponent: el => {
      if (el.tagName === 'TR') {
        return { type: 'trow' };
      }
    },
    extend:'row',
    model: {
      defaults: {
        tagName: 'tr',
        name: 'Table Row',
        icon: '',
        selectable:true,
        highlightable:true,
        hoverable:true,
        draggable: ['table,thead,tbody,tfoot'],
        droppable: ['th', 'td'],
        resizable: true,
        attributes: { class: 'trow' },
        styles: `.trow {
          min-height:60px; display: block ;
      }`,
      },
    },
  });

  // toAdd('tcell') &&
  // bm.add('tcell', {
  //   ...commonBlockProps,
  //   label: 'Table Cell',
  //   category: 'Table',
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
  //   content: { type: 'tcell' },
  // });

// Define table tcell component
  editor.DomComponents.addType('tcell', {
    isComponent: el => {
      if (el.tagName === 'TD' || el.tagName === 'TH') {
        return { type: 'tcell' };
      }
    },
    model: {
      defaults: {
        tagName: 'td',
        name: 'Table Cell',
        icon: '',
        resizable: true,
        droppable:true,
        components: [
          {
            type: "paragraph",
            content: "Cell",
          },
        ],
        draggable:['table','tbody','trow'],
        attributes: { class: 'tcell' },
        styles: `.tcell {
        padding: 8px;
        text-align: left;
      }`,
      },
    },
  });

  // toAdd('tfoot') &&
  // bm.add('tfoot', {
  //   ...commonBlockProps,
  //   label: 'Table Footer',
  //   category: 'Table',
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
  //   content: { type: 'tfoot' },
  // });

// Define table footer component
  editor.DomComponents.addType('tfoot', {
    isComponent: el => {
      if (el.tagName === 'TFOOT') {
        return { type: 'tfoot' };
      }
    },
    extend:'tfoot',
    model: {
      defaults: {
        tagName: 'tfoot',
        name: 'Table Footer',
        icon: '',
        resizable: true,
        droppable:true,
        draggable: 'table',
        attributes: { class: 'tfoot' },
        styles: `.tfoot {
        background-color: #f3f3f3;
      }`,
      },
    },
  });

  // editor.DomComponents.addType('body', {
  //   isComponent: el => {
  //     if (el.tagName === 'BODY') {
  //       return { type: 'body' };
  //     }
  //   },
  //   extend:'wrapper',
  //   model: {
  //     defaults: {
  //       tagName: 'body',
  //       name: 'Body',
  //       icon: '',
  //       removable: false,
  //       copyable: false,
  //       draggable: false,
  //       attributes: { class: 'body' },
  //       stylable: [
  //         'height',
  //         'margin',
  //         'margin-top',
  //         'margin-right',
  //         'margin-bottom',
  //         'margin-left',
  //         'padding',
  //         'padding-top',
  //         'padding-right',
  //         'padding-bottom',
  //         'padding-left',
  //         'background',
  //         'background-color',
  //         'background-image',
  //         'background-repeat',
  //         'font',
  //         'font-family',
  //       ],
  //     },
  //   },
  // });




};


export default LayoutBlocks;