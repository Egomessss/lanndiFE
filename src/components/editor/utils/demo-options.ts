import zoomPlugin from '@/components/editor/plugins/utils/ZoomPlugin/zoom-plugin';
import LayoutBlocks from '../plugins/BasicBlocks/LayoutBlocks';
import TypographyBlocks from '../plugins/BasicBlocks/TypographyBlocks';
import CoreBlocks from '../plugins/BasicBlocks/InteractiveBlocks';
import MediaBlocks from '../plugins/BasicBlocks/MediaBlocks';
import ListBlocks from '../plugins/BasicBlocks/ListBlocks';
import CustomCode from '@/components/editor/plugins/utils/CustomCode';
import BorderStyle from '@/components/editor/plugins/utils/BorderStyle';
import Sections from '@/components/editor/plugins/Sections';
import { EditorData } from '@/hooks/use-editor-data';
import UtilsPlugin from '@/components/editor/plugins/utils/UtilsPlugin/utils-plugin';
import GoogleIcons from '@/components/editor/plugins/utils/GoogleIcons';
import ScriptEditor from '@/components/editor/plugins/utils/ScriptEditor';
import PostCss from '../plugins/utils/PostCss';
import { starterTemplate, styleStarterTemplate } from '@/components/editor/templates/Starter';
import { styles } from '@/components/editor/utils/styles';
import FormBlocks from '@/components/editor/plugins/BasicBlocks/FormsBlocks';
import Accordion from '@/components/editor/plugins/BasicBlocks/Accordion';
import Tabs from '@/components/editor/plugins/BasicBlocks/Tabs';


export const demoEditorConfigOptions = () => ({
  height: '96vh',
  jsInHtml: false,
  optsHtml: { cleanId: true },
  optsCss: { onlyMatched: true, keepUnusedStyles: true },
  clearStyles: true,
  showOffsetsSelected: true,
  undoManager: { trackSelection: false },
  // canvas:{
  //   scripts:["https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"]
  // },
  deviceManager: {
    default: 'fit',
    devices: [
      {
        id: 'fit',
        name: 'Fit to Screen',
        width: '',
      },
      {
        id: 'desktop', name: 'Desktop', width: '1536px',
        // widthMedia: '1560px',
      },
      {
        id: 'laptop',
        name: 'Laptop',
        width: '1280px',
        // widthMedia: '1290px',
      },
      {
        id: 'tablet',
        name: 'Tablet',
        width: '768px',
        // widthMedia: '778px',
      },
      {
        id: 'mobile',
        name: 'Mobile',
        width: '640px',
        // widthMedia: '430px',
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
        // component: starterTemplate,
        // styles: styleStarterTemplate,
      },
    ],
  },

  plugins: [
    zoomPlugin,
    LayoutBlocks,
    TypographyBlocks,
    CoreBlocks,
    MediaBlocks,
    // ListBlocks,
    // FormBlocks,
    // SemanticBlocks,
    // IntegrationsBlocks,
    // ExtraBlocks,
    PostCss,
    ScriptEditor,
    CustomCode,
    GoogleIcons,
    BorderStyle,
    Sections,
    UtilsPlugin,
    // FormBlocks,
    // Grid
    // Accordion,
    // Tabs
  ],
  styleManager:styles,



});



