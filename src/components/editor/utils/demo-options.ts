import zoomPlugin from '@/components/editor/plugins/utils/ZoomPlugin/zoom-plugin';
import LayoutBlocks from '../plugins/BasicBlocks/LayoutBlocks';
import TypographyBlocks from '../plugins/BasicBlocks/TypographyBlocks';
import CoreBlocks from '../plugins/BasicBlocks/InteractiveBlocks';
import MediaBlocks from '../plugins/BasicBlocks/MediaBlocks';
import ListBlocks from '../plugins/BasicBlocks/ListBlocks';
import CustomCode from '@/components/editor/plugins/utils/CustomCode';
import Sections from '@/components/editor/plugins/Sections';
import UtilsPlugin from '@/components/editor/plugins/utils/UtilsPlugin/utils-plugin';
import GoogleIcons from '@/components/editor/plugins/utils/GoogleIcons';
import ScriptEditor from '@/components/editor/plugins/utils/ScriptEditor';
import PostCss from '../plugins/utils/PostCss';
import { starterTemplate, styleStarterTemplate } from '@/components/editor/templates/Starter';
import { styles } from '@/components/editor/utils/styles';
import FormBlocks from '@/components/editor/plugins/BasicBlocks/FormsBlocks';
import Templates from '@/components/editor/plugins/Templates';
import ClickAndDrop from '@/components/editor/plugins/utils/ClickAndDrop/plugin';


export const demoEditorConfigOptions = () => ({
  height: '94vh',
  jsInHtml: false,
  parser: {
    optionsHtml: {
      allowScripts: true,
    },
  },
  // canvasCss: `body{margin: 0;height-fit-content;}`,
  multipleSelection: true,
  clearStyles: true,
  showOffsetsSelected: true,
  // avoidInlineStyle:true,
  undoManager: { trackSelection: false },
  canvas:{
    styles:['https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;v=1704404084845'],
    // scripts:["https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"]
    notTextable: ['input[type=checkbox]', 'input[type=radio]'],

  },
  deviceManager: {
    default: 'desktop',
    devices: [
      {
        id: 'fit',
        name: 'Fit to Screen',
        width: '',
      },
      {
        id: 'desktop', name: 'Desktop(XL)', width: '1536px',
        widthMedia: '1536px',
      },
      {
        id: 'laptop',
        name: 'Laptop(LG)',
        width: '1080px',
        // widthMedia: '1080px',
      },
      {
        id: 'tablet',
        name: 'Tablet(MD)',
        width: '768px',
        widthMedia: '880px',
      },
      {
        id: 'mobile',
        name: 'Mobile(SM)',
        width: '400px',
        widthMedia: '600px',
        height:'600px'
      },
      // { id: 'fit', name: 'Fit To Screen', width: '' },
    ],
  },
  selectorManager: {
    stylePrefix: 'lnd-', componentFirst: false, states: [
      { name: 'hover', label: 'Hover', info: 'Change styles on user hover' },
      { name: 'focus', label: 'Focus', info: 'Change styles on user focus' },
      { name: 'active', label: 'Active', info: 'Change styles on active element' },
    ],
  },
  projectData: {
    assets: [],
    pages: [
      {
        name: 'Home',
        slug: 'index',
        component: starterTemplate,
        styles: styleStarterTemplate,
      },
    ],
  },

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
    PostCss,
    ScriptEditor,
    CustomCode,
    GoogleIcons,
    Sections,
    Templates,
    UtilsPlugin,
    FormBlocks,
    // Grid
    // Accordion,
    // Tabs
    ClickAndDrop
  ],
  styleManager:styles,



});



