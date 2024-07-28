import zoomPlugin from '@/components/editor/plugins/utils/ZoomPlugin/zoom-plugin';
import LayoutBlocks from '../plugins/BasicBlocks/LayoutBlocks';
import TypographyBlocks from '../plugins/BasicBlocks/TypographyBlocks';
import CoreBlocks from '../plugins/BasicBlocks/InteractiveBlocks';
import MediaBlocks from '../plugins/BasicBlocks/MediaBlocks';
import CustomCode from '@/components/editor/plugins/utils/CustomCode';
import Sections from '@/components/editor/plugins/Sections';
import { EditorData } from '@/hooks/use-editor-data';
import UtilsPlugin from '@/components/editor/plugins/utils/UtilsPlugin/utils-plugin';
import GoogleIcons from '@/components/editor/plugins/utils/GoogleIcons';
import ScriptEditor from '@/components/editor/plugins/utils/ScriptEditor';
import PostCss from '../plugins/utils/PostCss';
import { styles } from '@/components/editor/utils/styles';
import FormBlocks from '@/components/editor/plugins/BasicBlocks/FormsBlocks';
import ClickAndDrop from '@/components/editor/plugins/utils/ClickAndDrop/plugin';
import Templates from '@/components/editor/plugins/Templates';
import ListBlocks from '@/components/editor/plugins/BasicBlocks/ListBlocks';
import GoogleFontsPlugin from '../plugins/utils/GoogleFonts';


export const editorConfigOptions = (data: EditorData, siteSlug: string, isDemo: boolean) => ({
  height: '94vh',
  jsInHtml: false,
  parser: {
    optionsHtml: {
      allowScripts: true,
    },
  },
  // canvasCss: `body{margin: 0;height-fit-content;}`,
  multipleSelection: true,
  showOffsetsSelected: true,
  // avoidInlineStyle:true,
  undoManager: { trackSelection: false },
  canvas:{
    styles:['https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;v=1704404084845'],
    // scripts:["https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"]
    // frameStyle: 'body{height:fit-content;}',
    notTextable: ['input[type=checkbox]', 'input[type=radio]'],

  },
  deviceManager: {
    default: 'desktop',
    devices: [
      // {
      //   id: 'fit',
      //   name: 'Fit to Screen',
      //   width: '',
      // },
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
  projectData: data?.data ||
    {
      assets: [
      ],
      pages: [
        {
          name: 'Home',
          slug: 'index',
          // component: starterTemplate,
          // styles: styleStarterTemplate,
        },
      ],
    }
  ,
  plugins: [
    zoomPlugin,
    LayoutBlocks,
    TypographyBlocks,
    CoreBlocks,
    MediaBlocks,
    ListBlocks,
    // IntegrationsBlocks,
    // ExtraBlocks,
    PostCss,
    // CssEditor,
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
    ClickAndDrop,
    GoogleFontsPlugin
  ],
  pluginsOpts: {
    ['GoogleFontsPlugin']: {
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY,
      preserveDefaultFonts: true,
    }
  },
  styleManager:
  styles
  ,


});



