import zoomPlugin from '@/components/editor/plugins/utils/ZoomPlugin/zoomPlugin';
import LayoutBlocks from '../plugins/BasicBlocks/LayoutBlocks';
import TypographyBlocks from '../plugins/BasicBlocks/TypographyBlocks';
import CoreBlocks from '../plugins/BasicBlocks/InteractiveBlocks';
import MediaBlocks from '../plugins/BasicBlocks/MediaBlocks';
import ListBlocks from '../plugins/BasicBlocks/ListBlocks';
import CustomCode from '@/components/editor/plugins/utils/CustomCode';
import BorderStyle from '@/components/editor/plugins/utils/BorderStyle';
import { starterTemplate, styleStarterTemplate } from '@/components/editor/templates/Starter';
import Sections from '@/components/editor/plugins/Sections';
import { EditorData } from '@/hooks/use-editor-data';
import UtilsPlugin from '@/components/editor/plugins/utils/UtilsPlugin/utilsPlugin';
import GoogleIcons from '@/components/editor/plugins/utils/GoogleIcons';
import ScriptEditor from '@/components/editor/plugins/utils/ScriptEditor';
import PostCss from '../plugins/utils/PostCss';
import Grid from '@/components/editor/plugins/BasicBlocks/Grid';


export const editorConfigOptions = (data: EditorData) => ({
  height: '100vh',
  undoManager: { trackSelection: false },

  deviceManager: {
    default: 'fit',
    devices: [
      {
        id: 'desktop', name: 'Desktop', width: '1536px', widthMedia: '1536px',
      },
      {
        id: 'laptop',
        name: 'Laptop',
        width: '1280px',
        widthMedia: '1280px',
      },
      {
        id: 'tablet',
        name: 'Tablet',
        width: '800px',
        widthMedia: '800px',
      },
      {
        id: 'mobile',
        name: 'Mobile',
        width: '380px',
        widthMedia: '380px',
      },
      { id: 'fit', name: 'Fit To Screen', width: '' },
    ],
  },
  storageManager: {
    type: 'local', // Type of the storage, available: 'local' | 'remote'
    autosave: true, // Store data automatically
    autoload: true, // Autoload stored data on init
    stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
    options: {
      local: { // Options for the `local` type
        key: 'lanndiProject', // The key for the local storage
      },
      //     remote: {
      //         urlLoad: `api/v1/editor/site/${siteSlug}`,
      //         urlStore: `api/v1/editor/site/store/${siteSlug}`,
      //         // Enrich the store call
      //         onStore: async store(data) {
      //             return await axios.patch(`projects/${projectId}`, {id: siteSlug, data});
      //         },
      //     // If on load, you're returning the same JSON from above...
      //     onLoad: result => result.data,
      // }
    },
  },
  selectorManager: {
    stylePrefix: 'lnd-', componentFirst: false, states: [
      { name: 'hover', label: 'Hover', info: 'Change styles on user hover' },
      { name: 'focus', label: 'Focus', info: 'Change styles on user focus' },
      { name: 'active', label: 'Active', info: 'Change styles on active element' },
    ],
  },

  // projectData: data?.data ||
  //   {
  //     assets: [
  //       'https://via.placeholder.com/350x250/78c5d6/fff',
  //       'https://via.placeholder.com/350x250/459ba8/fff',
  //       'https://via.placeholder.com/350x250/79c267/fff',
  //       'https://via.placeholder.com/350x250/c5d647/fff',
  //       'https://via.placeholder.com/350x250/f28c33/fff',
  //     ],
  //     pages: [
  //       {
  //         name: '/',
  //         component: starterTemplate,
  //         styles: styleStarterTemplate,
  //       },
  //     ],
  //   }
  // ,
  plugins: [
    zoomPlugin,
    LayoutBlocks,
    TypographyBlocks,
    CoreBlocks,
    MediaBlocks,
    ListBlocks,
    // FormBlocks,
    // SemanticBlocks,
    // IntegrationsBlocks,
    // ExtraBlocks,
    // PostCss,
    ScriptEditor,
    CustomCode,
    GoogleIcons,
    BorderStyle,
    Sections,
    UtilsPlugin,
    // Grid
  ],

  styleManager: {
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
        id: 'gridItem',
        name: 'Grid Item Properties',
        open: false,
        visible: false,
        properties: [
          {
            label: 'Column span',
            property: 'grid-column',
            type: 'base',
            tooltip: 'Starts/spans - e.g. 2/span 2 - starts in row 2 and spans 2 rows',
          },
          {
            label: 'Row span',
            property: 'grid-row',
            type: 'base',
            tooltip: 'Starts/spans - e.g. 1/span 1 - starts in column 1 and spans 1 column',
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
        id: 'flexProperties',
        name: 'Flex Properties',
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
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-right-left" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7l-18 0" /><path d="M18 10l3 -3l-3 -3" /><path d="M6 20l-3 -3l3 -3" /><path d="M3 17l18 0" /></svg>`,
              }, {
                id: 'column',
                label: 'Vertical',
                icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-up-down"
                             width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 3l0 18" />
                            <path d="M10 6l-3 -3l-3 3" />
                            <path d="M20 18l-3 3l-3 -3" />
                            <path d="M17 21l0 -18" />
                        </svg>`
                ,
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
            // detached:false,
            properties: [
              {
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
        id: 'gridProperties',
        name: 'Grid Properties',
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
          }],
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
                property: 'border-bottom-right-radius',
                label: 'Bottom right',
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
            detached: false,
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
            label: 'Align', // Label for the property
            property: 'text-align', // CSS property to change
            options: [
              { id: 'left', label: 'Left' },
              { id: 'center', label: 'Center' },
              { id: 'right', label: 'Right' },
              { id: 'justify', label: 'Justify' },
            ],
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
            type: 'color',
            label: 'Colour', // Label for the property
            property: 'color', // CSS property to change
            units: ['px', '%', 'em', 'rem'], // Units (available only for the 'number' type)
            min: 0, // Min value (available only for the 'number' type)
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


        ],
      },
      {
        name: 'Extra',
        open: true,
        visible: true,
        properties: [
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
        ],
      },
    ],
  },


});



