export const styles = {
  custom: true,
  sectors: [
    {
      id: 'layout',
      name: 'Layout',
      open: true,
      visible: true,
      properties: [
        {
          label: 'Display',
          property: 'display',
          type: 'radio',
          default: 'inline',
          options: [
            {
              id: 'block',
              label: 'Block - Element appears on a new line and takes full available width',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-distribute-vertical" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l0 16" /><path d="M20 4l0 16" /><path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            },
            {
              id: 'flex',
              label: 'Flex - Flexible Row/Column.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M12 4l0 16" /></svg>`,
            },
            {
              id: 'grid',
              label: 'Grid - Rows & Columns Grid.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>`,
            },
            // {
            //     id: 'inline-block',
            //     label: 'Inline Block - Elements sit on the same line but can have width and height set.',
            //     icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-distribute-horizontal" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M4 20l16 0" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
            // },
            {
              id: 'inline',
              label: 'Inline - Does not start on a new line and only occupies as much width as necessary.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-resize" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 7v10" /><path d="M7 5h10" /><path d="M7 19h10" /><path d="M19 7v10" /><path d="M10 10h4" /><path d="M12 14v-4" /></svg>`,
            },
            {
              id: 'none',
              label: 'Hide - Hide element',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>`,
            },
          ],
        },
      ],
    },
    {
      id: 'flexProperties',
      name: 'Flex',
      open: false,
      visible: false,
      properties: [
        {
          label: 'Direction',
          property: 'flex-direction',
          type: 'radio',
          default: 'horizontal',
          options: [
            {
              id: 'row',
              label: 'Horizontal',
              icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M3 12l18 0" /></svg>`,
            },
            {
              id: 'row-reverse',
              label: 'Horizontal reverse',
              icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-switch-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 3l4 4l-4 4" /><path d="M10 7l10 0" /><path d="M8 13l-4 4l4 4" /><path d="M4 17l9 0" /></svg>`,
            },
            {
              id: 'column',
              label: 'Vertical',
              icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4" /><path d="M8 17l4 4l4 -4" /><path d="M12 3l0 18" /></svg>`
              ,
            },
            {
              id: 'column-reverse',
              label: 'Vertical reverse',
              icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-switch-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 8l4 -4l4 4" /><path d="M7 4l0 9" /><path d="M13 16l4 4l4 -4" /><path d="M17 10l0 10" /></svg>`,
            },
          ],
        },
        {
          label: 'Justify',
          property: 'justify-content',
          type: 'radio',
          default: 'start',
          options: [
            {
              id: 'start',
              label: 'Start',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-left" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" /><path d="M15.002 20.003h-.01" /><path d="M20.003 20.003h-.011" /><path d="M20.003 15.002h-.011" /><path d="M20.003 9.002h-.011" /><path d="M20.003 4.002h-.011" /><path d="M15.002 4.002h-.01" /></svg>`,
            }, {
              id: 'center',
              label: 'Center',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-middle" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12l5 0" /><path d="M15 12l5 0" /><path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'end',
              label: 'End',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-right" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" /><path d="M8.998 20.003h.01" /><path d="M3.997 20.003h.011" /><path d="M3.997 15.002h.011" /><path d="M3.997 9.002h.011" /><path d="M3.997 4.002h.011" /><path d="M8.998 4.002h.01" /></svg>`,
            }, {
              id: 'space-between',
              label: 'Space between',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-horizontal" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2" /><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M12 8v8" /></svg>`,
            },

          ],
        },
        {
          label: 'Align',
          property: 'align-items',
          type: 'radio',
          default: 'start',
          options: [
            {
              id: 'start',
              label: 'Top',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'center',
              label: 'Center',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'end',
              label: 'Bottom',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            },
          ],
        },
        {
          label: 'Wrap Content',
          property: 'flex-wrap',
          type: 'radio',
          default: 'nowrap',
          options: [
            {
              id: 'nowrap',
              label: 'Don\'t Wrap',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-wrap-disabled" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l10 0" /><path d="M4 18l10 0" /><path d="M4 12h17l-3 -3m0 6l3 -3" /></svg>`,
            }, {
              id: 'wrap',
              label: 'Wrap',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-wrap" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 18l5 0" /><path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" /></svg>`,
            },
          ],
        },
        {
          type: 'composite',
          label: 'Spacing', // Label for the property
          property: 'gap', // CSS property to change
          detached: true,
          properties: [
            {
              label: 'Column',
              property: 'column-gap',
              type: 'base',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              label: 'Row',
              property: 'row-gap',
              type: 'base',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            }],
        },


      ],
    },
    {
      id: 'flexItem',
      name: 'Flex Child',
      open: false,
      visible: false,
      properties: [
        {
          label: 'Order',
          property: 'order',
          type: 'base',
          tooltip: 'Controls the order in which this item appears in the flex container',
        },
        {
          label: 'Flex Grow',
          property: 'flex-grow',
          type: 'base',
          tooltip: 'Defines the ability for a flex item to grow if necessary',
        },
        {
          label: 'Flex Shrink',
          property: 'flex-shrink',
          type: 'base',
          tooltip: 'Defines the ability for a flex item to shrink if necessary',
        },
        {
          label: 'Flex Basis',
          property: 'flex-basis',
          type: 'base',
          tooltip: 'Defines the default size of an element before the remaining space is distributed',
        },
        {
          label: 'Align Self',
          property: 'align-self',
          type: 'radio',
          default: 'auto',
          options: [
            {
              id: 'auto',
              label: 'Auto',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-center" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'start',
              label: 'Start',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-top" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'end',
              label: 'End',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-bottom" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'center',
              label: 'Center',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-center" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'stretch',
              label: 'Stretch',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-stretch" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l0 16" /><path d="M20 4l0 16" /><path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            },
          ],
        },
      ],
    },

    {
      id: 'gridProperties',
      name: 'Grid',
      open: false,
      visible: false,
      properties: [
        {
          label: 'Columns',
          property: 'grid-template-columns',
          type: 'base',
          tooltip: 'Adds columns by adding 1fr without commas, e.g. 1. 1fr 1fr 1fr parts the width into 3 equal columns, 2. 100px 200px 500px parts the grid into 3 different sized columns',
        },
        {
          label: 'Rows',
          property: 'grid-template-rows',
          type: 'base',
          tooltip: 'Adds rows by adding 1fr without commas,  e.g. 1. 1fr 1fr 1fr parts the width into 3 equal rows, 2. 100px 200px 500px parts the grid into 3 different sized rows',

        },
        {
          label: 'Justify content',
          property: 'justify-content',
          type: 'select',
          default: 'start',
          options: [
            { id: 'start', label: 'Align Start' }, // Aligns to the start edge
            { id: 'end', label: 'Align End' }, // Aligns to the end edge
            { id: 'center', label: 'Center' }, // Centers in the container
            { id: 'stretch', label: 'Stretch to Fill' }, // Stretches to fill the container width
            { id: 'space-around', label: 'Space Around' }, // Even space with half-size at ends
            { id: 'space-between', label: 'Space Between' }, // Even space, no space at ends
            { id: 'space-evenly', label: 'Space Evenly' }, // Even space, including ends
          ],
        },
        {
          label: 'Align content',
          property: 'align-content',
          type: 'select',
          default: 'start',
          options: [
            { id: 'start', label: 'Align Start' }, // Aligns to the start edge
            { id: 'end', label: 'Align End' }, // Aligns to the end edge
            { id: 'center', label: 'Center' }, // Centers in the container
            { id: 'stretch', label: 'Stretch to Fill' }, // Stretches to fill the container width
            { id: 'space-around', label: 'Space Around' }, // Even space with half-size at ends
            { id: 'space-between', label: 'Space Between' }, // Even space, no space at ends
            { id: 'space-evenly', label: 'Space Evenly' }, // Even space, including ends
          ],
        },
        {
          label: 'Justify items',
          property: 'justify-items',
          type: 'radio',
          default: 'start',
          options: [
            {
              id: 'start',
              label: 'Start',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-left" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" /><path d="M15.002 20.003h-.01" /><path d="M20.003 20.003h-.011" /><path d="M20.003 15.002h-.011" /><path d="M20.003 9.002h-.011" /><path d="M20.003 4.002h-.011" /><path d="M15.002 4.002h-.01" /></svg>`,
            }, {
              id: 'center',
              label: 'Center',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-middle" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12l5 0" /><path d="M15 12l5 0" /><path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'end',
              label: 'End',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-right" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" /><path d="M8.998 20.003h.01" /><path d="M3.997 20.003h.011" /><path d="M3.997 15.002h.011" /><path d="M3.997 9.002h.011" /><path d="M3.997 4.002h.011" /><path d="M8.998 4.002h.01" /></svg>`,
            }, {
              id: 'space-between',
              label: 'Space between',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-horizontal" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2" /><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M12 8v8" /></svg>`,
            },

          ],
        },
        {
          label: 'Align items',
          property: 'align-items',
          type: 'radio',
          default: 'start',
          options: [
            {
              id: 'start',
              label: 'Top',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'center',
              label: 'Center',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'end',
              label: 'Bottom',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            },
          ],
        },
        {
          type: 'composite',
          label: 'Spacing', // Label for the property
          property: 'gap', // CSS property to change
          detached: true,
          properties: [{
            label: 'Row',
            property: 'row-gap',
            type: 'base',
            default: '0',
            tooltip: 'Units available: px, %, em, rem',
          },
            {
              label: 'Column',
              property: 'column-gap',
              type: 'base',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            }],
        },
      ],
    },
    {
      id: 'gridItem',
      name: 'Grid Child',
      open: false,
      visible: false,
      properties: [
        {
          label: 'Column span',
          property: 'grid-column',
          type: 'base',
          tooltip: 'Starts/spans - e.g.1: span 2 - span 2 columns  e.g.2: 2/span 2 - starts in row 2 and spans 2 rows',
        },
        {
          label: 'Row span',
          property: 'grid-row',
          type: 'base',
          tooltip: 'Starts/spans - e.g.1: span 2 - span 2 rows  e.g.2: 2/span 2 - starts in column 2 and spans 2 columns',
        },
        {
          label: 'Justify',
          property: 'justify-self',
          type: 'radio',
          default: 'start',
          options: [
            {
              id: 'start',
              label: 'Start',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-left" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" /><path d="M15.002 20.003h-.01" /><path d="M20.003 20.003h-.011" /><path d="M20.003 15.002h-.011" /><path d="M20.003 9.002h-.011" /><path d="M20.003 4.002h-.011" /><path d="M15.002 4.002h-.01" /></svg>`,
            }, {
              id: 'center',
              label: 'Center',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-middle" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12l5 0" /><path d="M15 12l5 0" /><path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'end',
              label: 'End',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-right" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" /><path d="M8.998 20.003h.01" /><path d="M3.997 20.003h.011" /><path d="M3.997 15.002h.011" /><path d="M3.997 9.002h.011" /><path d="M3.997 4.002h.011" /><path d="M8.998 4.002h.01" /></svg>`,
            },
          ],
        },
        {
          label: 'Align',
          property: 'align-self',
          type: 'radio',
          default: 'start',
          options: [
            {
              id: 'start',
              label: 'Top',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l16 0" /><path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'center',
              label: 'Center',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 4l0 5" /><path d="M12 15l0 5" /><path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`,
            }, {
              id: 'end',
              label: 'Bottom',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 0" /><path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>`,
            },
          ],
        },
      ],
    },
    {
      name: 'Sizing',
      open: true,
      visible: true,
      properties: [
        {
          type: 'base',
          label: 'Width', // Label for the property
          property: 'width', // CSS property to change
          tooltip: 'Units available: px, %, em, rem, fit-content',
          default: 'auto',
        },
        {
          type: 'base',
          label: 'height', // Label for the property
          property: 'height', // CSS property to change
          tooltip: 'Units available: px, %, em, rem, fit-content',
          default: 'auto',
        },
        {
          type: 'base',
          label: 'Max Width', // Label for the property
          property: 'max-width', // CSS property to change
          tooltip: 'Units available: px, %, em, rem, fit-content',
          default: 'auto',
        },
        {
          type: 'base',
          label: 'Max Height', // Label for the property
          property: 'max-height', // CSS property to change
          tooltip: 'Units available: px, %, em, rem, fit-content',
          default: 'auto',
        },
        {
          type: 'base',
          label: 'Min Width', // Label for the property
          property: 'min-width', // CSS property to change
          tooltip: 'Units available: px, %, em, rem, fit-content',
          default: 'auto',
        },
        {
          type: 'base',
          label: 'Min Height', // Label for the property
          property: 'min-height', // CSS property to change
          tooltip: 'Units available: px, %, em, rem, fit-content',
          default: 'auto',
        },

      ],
    },
    {
      name: 'Spacing',
      open: true,
      visible: true,
      properties: [
        {
          type: 'composite',
          label: 'Margin', // Label for the property
          property: 'margin', // CSS property to change
          detached: true,
          properties: [
            {
              type: 'base',
              property: 'margin-top',
              label: 'Top',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'margin-right',
              label: 'Right',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'margin-bottom',
              label: 'Bottom',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'margin-left',
              label: 'Left',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
          ],
        },
        {
          type: 'composite',
          label: 'Padding', // Label for the property
          property: 'padding', // CSS property to change
          detached: true,
          properties: [
            {
              type: 'base',
              property: 'padding-top',
              label: 'Top',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'padding-right',
              label: 'Right',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'padding-bottom',
              label: 'Bottom',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'padding-left',
              label: 'Left',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
          ],
        },
        {
          label: 'Overflow', // Label for the property
          property: 'overflow', // CSS property to change
          default: 'none', // Default value to display
          type: 'radio',
          options: [
            {
              id: 'visible',
              label: 'Show all',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>`,
            }, {
              id: 'hidden',
              label: 'Clip.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>`,
            }, {
              id: 'scroll',
              label: 'Scrollable.',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mouse" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" /><path d="M12 7l0 4" /></svg>`,
            },
            {
              id: 'clip',
              label: 'Clip and hide overflow',
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cut" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M9.15 14.85l8.85 -10.85" /><path d="M6 4l8.85 10.85" /></svg>`,
            },
            {
              id: 'auto',
              label: 'Adds scrollbars only when necessary.',
              icon: 'Auto',
            },
          ],
        },
      ],
    },
    {
      name: 'Position',
      open: true,
      visible: true,
      properties: [
        {
          type: 'select',
          property: 'position',
          label: 'Element Position',
          options: [
            { id: 'static', label: 'Default' },
            { id: 'relative', label: 'Relative to current position' },
            { id: 'absolute', label: 'Relative to container' },
            { id: 'fixed', label: 'Fixed on viewport' },
            { id: 'sticky', label: 'Sticks while scrolling' },
          ],
        },
        {
          label: 'Position',
          property: 'inset',
          type: 'composite',
          detached: true,
          properties: [
            {
              type: 'base',
              property: 'top',
              label: 'Top',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'bottom',
              label: 'Bottom',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'left',
              label: 'Left',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              property: 'right',
              label: 'Right',
              default: '0',
              tooltip: 'Units available: px, %, em, rem',
            },
          ],
        },
        {
          type: 'select',
          property: 'z-index',
          label: 'Stack order control',
          default: 'auto',
          options: [
            { id: 'auto', label: 'Automatic' }, // More precise than "Default"
            { id: '-1', label: 'Send Backward' }, // Clarifies action
            { id: '1', label: 'Move Back' }, // Simplifies "Send backward" to ensure clarity within four words
            { id: '10', label: 'Bring Forward' }, // Direct and clear
            { id: '100', label: 'Move Front' }, // Simplified for clarity
          ],
        },
      ],
    },
    {
      name: 'Background',
      open: true,
      visible: true,
      properties: [
        {
          type: 'color',
          label: 'Fill Colour', // Label for the property
          property: 'background', // CSS property to change
        },
        {
          type: 'slider',
          label: 'Opacity', // Label for the property
          property: 'opacity', // CSS property to change
          min: 0, // Min value (available only for the 'number' type)
          max: 1, // Min value (available only for the 'number' type)
          default: 0,
          // step: 0.1,
        },
        {
          'type': 'select',
          'label': 'Background Repeat', // Updated label for clarity
          'property': 'background-repeat', // CSS property to change
          'default': 'repeat', // Default behavior is to repeat the background image
          'options': [
            { 'id': 'repeat', 'label': 'Repeat' }, // Image is repeated in both directions
            { 'id': 'repeat-x', 'label': 'Repeat X' }, // Image is repeated horizontally
            { 'id': 'space', 'label': 'Space' }, // Image is repeated and spaced evenly
            { 'id': 'round', 'label': 'Round' }, // Image is repeated and sized to fit without clipping
            { 'id': 'no-repeat', 'label': 'No Repeat' }, // Image is not repeated
            { 'id': 'space repeat', 'label': 'Space repeat' }, // Image is repeated vertically
          ],
        },
        {
          label: 'Box Shadow',
          property: 'box-shadow',
          type: 'composite',
          detached: false,
          properties: [
            {
              type: 'base',
              property: 'box-shadow-offset-x',
              label: 'Offset X',
            },
            {
              type: 'base',
              property: 'box-shadow-offset-y',
              label: 'Offset Y',
            },
            {
              type: 'base',
              property: 'box-shadow-blur',
              label: 'Blur',
            },
            {
              type: 'color',
              property: 'box-shadow-color',
              label: 'Colour',
            },

            // {
            //   type: 'base',
            //   property: 'box-shadow-spread',
            //   label: 'Spread',
            // },
            // {
            //   type: 'select',
            //   property: 'inset',
            //   label: 'Inset',
            //   options: [
            //     { id: '', label: 'Default' },
            //     { id: 'inset', label: 'Shadow Inside Element' },
            //   ]
            // },

          ],
        }
        ,
      ],

    },
    {
      name: 'Border',
      open: true,
      visible: true,
      properties: [
        {
          type: 'select',
          label: 'Style', // Label for the property
          property: 'border-style', // CSS property to change
          default: 'none', // Default value to display
          options: [
            { id: 'none', label: 'None' },
            { id: 'hidden', label: 'Hidden' },
            { id: 'solid', label: 'Solid' },
            { id: 'dotted', label: 'Dotted' },
            { id: 'double', label: 'Double' },
            { id: 'groove', label: 'Groove' },
            { id: 'ridge', label: 'Ridge' },
            { id: 'inset', label: 'Inset' },
            { id: 'outset', label: 'Outset' },
          ],
        },
        {
          'type': 'composite',
          'label': 'Border Width', // Label for the property
          'property': 'border-width', // CSS property to change
          detached: true,
          'properties': [
            {
              'type': 'base',
              // Typically, border widths are defined in pixels; add more units if necessary
              'default': '0',
              'property': 'border-top-width',
              'label': 'Top',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              'type': 'base',
              // Units for the property
              'default': '0',
              'property': 'border-right-width',
              'label': 'Right',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              'type': 'base',
              // Units for the property
              'default': '0',
              'property': 'border-bottom-width',
              'label': 'Bottom',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              'type': 'base',
              // Units for the property
              'default': '0',
              'property': 'border-left-width',
              'label': 'Left',
              tooltip: 'Units available: px, %, em, rem',
            },
          ],
        },

        {
          type: 'color',
          label: 'Colour', // Label for the property
          property: 'border-color', // CSS property to change

        },

        {
          type: 'composite',
          label: 'Radius', // Label for the property
          property: 'border-radius', // CSS property to change
          detached: true,
          properties: [
            {
              type: 'base',
              units: ['px', '%', 'em', 'rem'],
              default: '0',
              property: 'border-top-left-radius',
              label: 'Top left',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              units: ['px', '%', 'em', 'rem'],
              default: '0',
              property: 'border-top-right-radius',
              label: 'Top right',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              units: ['px', '%', 'em', 'rem'],
              default: '0',
              property: 'border-bottom-left-radius',
              label: 'Bottom left',
              tooltip: 'Units available: px, %, em, rem',
            },
            {
              type: 'base',
              units: ['px', '%', 'em', 'rem'],
              default: '0',
              property: 'border-bottom-right-radius',
              label: 'Bottom right',
              tooltip: 'Units available: px, %, em, rem',
            },
          ],
        },
      ],
    },
    {
      name: 'Typography',
      open: true,
      visible: true,
      properties: [
        {
          type: 'composite',
          property: 'font',
          label: 'Font',
          detached: true,
          // Additional props
          properties: [
            {
              type: 'select',
              label: 'Style', // Label for the property
              property: 'font-style', // CSS property to change
              default: 'normal', // CSS property to change
              options: [
                { id: 'normal', label: 'Normal' }, // Inherits the font-family from its parent
                { id: 'italic', label: 'Italic' }, // Generic font family
              ],
            },
            {
              type: 'select',
              label: 'Weight', // Label for the property
              property: 'font-weight', // CSS property to change
              default: '400', // '400' corresponds to Normal weight, a common default
              options: [
                { id: '100', label: '100 – Thin' },
                { id: '200', label: '200 – Extra Light' },
                { id: '300', label: '300 – Light' },
                { id: '400', label: '400 – Normal' },
                { id: '500', label: '500 – Medium' },
                { id: '600', label: '600 – Semi Bold' },
                { id: '700', label: '700 – Bold' },
                { id: '800', label: '800 – Extra Bold' },
                { id: '900', label: '900 – Black (Heavy)' },
              ],
            },
            {
              type: 'base',
              label: 'Size', // Label for the property
              property: 'font-size', // CSS property to change
              tooltip: 'Units available: px, %, em, rem',
            },

            {
              type: 'select',
              label: 'Family', // Updated label for clarity
              property: 'font-family', // CSS property to change
              default: 'inherit', // 'inherit' is more appropriate for font-family defaults
              options: [
                { id: 'inherit', label: 'Inherit' }, // Inherits the font-family from its parent
                { id: 'serif', label: 'Serif' }, // Generic font family
                { id: 'sans-serif', label: 'Sans-serif' }, // Generic font family
                { id: 'monospace', label: 'Monospace' }, // Generic font family
                { id: 'cursive', label: 'Cursive' }, // Generic font family
                { id: 'fantasy', label: 'Fantasy' }, // Generic font family
                { id: 'Times New Roman', label: 'Times New Roman' }, // Web-safe font
                { id: 'Arial', label: 'Arial' }, // Web-safe font
                { id: 'Verdana', label: 'Verdana' }, // Web-safe font
                { id: 'Georgia', label: 'Georgia' }, // Web-safe font
                { id: 'Courier New', label: 'Courier New' }, // Web-safe font
                { id: 'Comic Sans MS', label: 'Comic Sans MS' }, // Web-safe font, though often debated in design choice
              ],
            },


          ],
        },
        {
          type: 'color',
          label: 'Colour', // Label for the property
          property: 'color', // CSS property to change
        },
        {
          label: 'Align',
          property: 'text-align',
          type: 'radio',
          default: 'start',
          options: [
            {
              id: 'left',
              label: 'Left',
              icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l10 0" /><path d="M4 18l14 0" /></svg>`,
            }, {
              id: 'center',
              label: 'Center',
              icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-center"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M8 12l8 0" /><path d="M6 18l12 0" /></svg>`,
            }, {
              id: 'right',
              label: 'Right',
              icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M10 12l10 0" /><path d="M6 18l14 0" /></svg>`,
            },
            {
              id: 'justify',
              label: 'Justify',
              icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-justified"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l12 0" /></svg>`,
            },
          ],
        },
        {
          type: 'base',
          label: 'Line spacing', // Label for the property
          property: 'line-height', // CSS property to change
          units: ['px', '%', 'em', 'rem'], // Units (available only for the 'number' type)
          min: 0, // Min value (available only for the 'number' type)
        },
        {
          type: 'base',
          label: 'Letter spacing', // Label for the property
          property: 'letter-spacing', // CSS property to change
          units: ['px', '%', 'em', 'rem'], // Units (available only for the 'number' type)
          min: 0, // Min value (available only for the 'number' type)
        },

        {
          type: 'select',
          label: 'White space', // Label for the property
          property: 'white-space', // CSS property to change
          options: [
            { id: 'normal', label: 'Normal' },
            { id: 'no-wrap', label: 'No wrap' },
            { id: 'pre', label: 'Keep Spaces' },
            { id: 'pre-wrap', label: 'Wrap & Keep Spaces' },
            { id: 'pre-line', label: 'Wrap & Trim Spaces' },
            { id: 'break-space', label: 'Spaces & Breaks' },
          ],
        },

        {
          type: 'select',
          label: 'Decoration', // Label for the property
          property: 'text-decoration', // CSS property to change
          options: [
            { id: 'none', label: 'None' },
            { id: 'underline', label: 'Underline' },
            { id: 'overline', label: 'Overline' },
            { id: 'line-through', label: 'Line through' },
          ],
        },
        {
          type: 'color',
          label: 'Decoration Colour', // Label for the property
          property: 'text-decoration-color', // CSS property to change
        },
        {
          type: 'select',
          label: 'Transform', // Label for the property
          property: 'text-transform', // CSS property to change
          options: [
            { id: 'none', label: 'None' },
            { id: 'capitalize', label: 'None' },
            { id: 'uppercase', label: 'Underline' },
            { id: 'lowercase', label: 'Overline' },
            { id: 'line-through', label: 'Line through' },
          ],
        },
        {
          label: 'Text Shadow',
          property: 'text-shadow',
          type: 'composite',
          detached: false,
          properties: [
            {
              type: 'color',
              property: 'text-shadow-color',
              label: 'Colour',
            },
            {
              type: 'base',
              property: 'text-shadow-offset-x',
              label: 'Offset X',
            },
            {
              type: 'base',
              property: 'text-shadow-offset-y',
              label: 'Offset Y',
            },
            {
              type: 'base',
              property: 'text-shadow-blur',
              label: 'Blur',
            },
          ],
        },
      ],
    },
    {
      name: 'Extra',
      open: true,
      visible: true,
      properties: [
        {
          label: 'Image fit mode', // Label for the property
          property: 'object-fit', // CSS property to change
          default: 'none', // Default value to display
          type: 'select',
          options: [
            { id: 'contain', label: 'Contain Within' }, // Enhanced clarity
            { id: 'cover', label: 'Cover Entire Space' }, // Explicit description
            { id: 'fill', label: 'Fill Available Space' }, // Descriptive
            { id: 'scale-down', label: 'Scale Down Only' }, // Clear action
            { id: 'none', label: 'None' }, // Explicit no action
          ],
        },
        {
          label: 'Aspect Ratio', // Label for the property
          property: 'aspect-ratio', // CSS property to change
          default: 'auto', // Default value to display
          type: 'base',
        },
        {
          type: 'select',
          label: 'Cursor type', // Label for the property
          property: 'cursor', // CSS property to change
          default: 'default', // Default value to display
          options: [
            { id: 'default', label: 'Default' },
            { id: 'pointer', label: 'pointer' },
            { id: 'wait', label: 'Wait' },
            { id: 'not-allowed', label: 'Not allowed' },
            { id: 'zoom-in', label: 'Zoom in' },
            { id: 'grab', label: 'Grab' },
            { id: 'move', label: 'Move' },
          ],
        },
        {
          type: 'select',
          label: 'List style', // Label for the property
          property: 'list-style', // CSS property to change
          options: [
            { id: 'none', label: 'None' },
            { id: 'square', label: 'Square' },
            { id: 'circle', label: 'Circle' },
            { id: 'upper-roman', label: 'Roman' },
            { id: 'lower-alpha', label: 'Alpha' },
          ],
        },
        {
          type: 'composite',
          property: 'transition',
          label: 'Transition',
          detached: true,
          // Additional props
          properties: [
            {
              type: 'base',
              label: 'Property', // Label for the property
              property: 'transition-property', // CSS property to change
            },
            {
              type: 'base',
              label: 'Duration', // Label for the property
              property: 'transition-duration', // CSS property to change
            },
            {
              type: 'base',
              label: 'Delay', // Label for the property
              property: 'transition-delay', // CSS property to change
            },
            {
              type: 'select',
              label: 'Timing function', // Label for the property
              property: 'transition-timing-function', // CSS property to change
              options: [
                { id: 'linear', label: 'Linear' },
                { id: 'ease', label: 'Ease' },
                { id: 'ease-in', label: 'Ease in' },
                { id: 'ease-out', label: 'Ease out' },
                { id: 'ease-in-out', label: 'Ease in out' },
              ],
            },
          ],
        },
        {
          label: 'Transform', // Label for the property
          property: 'transform', // CSS property to change
          default: 'auto', // Default value to display
          tooltip: 'Use to rotate, scale, skew, etc., e.g., rotate(90deg), scale(2)',
          type: 'base',
        },
        {
          label: 'Clip Path', // Label for the property
          property: 'clip-path', // CSS property to change
          default: 'none', // Default value to display
          tooltip: 'Use to create complex shapes, e.g., circle(90%), ellipse(30px 140px at 10% 20%)',
          type: 'base',
        },


      ],
    },
  ],
};