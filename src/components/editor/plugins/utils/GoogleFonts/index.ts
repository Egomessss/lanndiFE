import axios from 'axios';
import type { Editor, Plugin } from 'grapesjs';

interface GoogleFont {
  family: string;
  variants: string[];
  subsets: string[];
}

interface UsedFont {
  family: string;
  variants: string[];
}

interface PluginOptions {
  apiKey: string;
  preserveDefaultFonts: boolean;
}

const defaultFonts = [
  'Arial',
  'Arial Black',
  'Comic Sans MS',
  'Courier New',
  'Georgia',
  'Impact',
  'Lucida Sans Unicode',
  'Tahoma',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana',
];

const getFontsFromLocalStorage = (): GoogleFont[] | null => {
  const fonts = localStorage.getItem('googleFonts');
  return fonts ? JSON.parse(fonts) : null;
};

const saveFontsToLocalStorage = (fonts: GoogleFont[]): void => {
  localStorage.setItem('googleFonts', JSON.stringify(fonts));
};

const fetchGoogleFonts = async (apiKey: string): Promise<GoogleFont[]> => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching Google Fonts:', error);
    return [];
  }
};

const loadFonts = async (apiKey: string): Promise<GoogleFont[]> => {
  const cachedFonts = getFontsFromLocalStorage();
  if (cachedFonts) {
    return cachedFonts;
  } else {
    const fonts = await fetchGoogleFonts(apiKey);
    saveFontsToLocalStorage(fonts);
    return fonts;
  }
};

const addFontLink = (editor: Editor, font: GoogleFont): void => {
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css?family=${font.family.replace(' ', '+')}:${font.variants.join(',')}`;
  link.rel = 'stylesheet';
  editor.Canvas.getDocument().head.appendChild(link);
};

const updateUi = (editor: Editor, fonts: GoogleFont[], preserveDefaultFonts: boolean): void => {
  const styleManager = editor.StyleManager;
  const sector = styleManager.getSector('typography');
  const fontProperty = sector?.getProperty('font-family');

  if (!fontProperty) {
    console.warn('Font-family property not found in typography sector');
    return;
  }

  let fontList = fonts.map(font => font.family);
  if (preserveDefaultFonts) {
    fontList = defaultFonts.concat(fontList);
  } else if (fontList.length === 0) {
    fontList = defaultFonts;
  }

  const options = fontList.map(font => ({
    id: `${font}, serif`,
    label: font
  }));

  fontProperty.set('options', options);
};

const setupFontTracking = (editor: Editor, fonts: GoogleFont[], usedFonts: Map<string, UsedFont>): void => {
  editor.on('component:update:style', (component) => {
    const fontFamily = component.getStyle()['font-family'];
    if (fontFamily) {
      const mainFont = fontFamily.split(',')[0].trim();
      addUsedFont(editor, fonts, usedFonts, mainFont);
    }
  });
};

const addUsedFont = (editor: Editor, fonts: GoogleFont[], usedFonts: Map<string, UsedFont>, fontFamily: string): void => {
  fontFamily = fontFamily.replace(/["']/g, '');
  const font = fonts.find(f => f.family === fontFamily);
  if (font && !usedFonts.has(fontFamily)) {
    usedFonts.set(fontFamily, {
      family: font.family,
      variants: font.variants,
    });
    addFontLink(editor, font);
  }
};

const addExportCommand = (editor: Editor, usedFonts: Map<string, UsedFont>): void => {
  editor.Commands.add('export:google-fonts', {
    run: () => {
      return Array.from(usedFonts.values()).map(font => {
        const family = font.family.replace(' ', '+');
        const variants = font.variants.join(',');
        return `<link rel="preload" href="https://fonts.googleapis.com/css?family=${family}:${variants}&display=swap" as="style">`;
      });
    },
  });
};

const GoogleFontsPlugin: Plugin<PluginOptions> = {
  async init(editor, opts) {
    const fonts = await loadFonts(opts.apiKey);
    const usedFonts: Map<string, UsedFont> = new Map();

    updateUi(editor, fonts, opts.preserveDefaultFonts);
    setupFontTracking(editor, fonts, usedFonts);
    addExportCommand(editor, usedFonts);
  }
};

export default GoogleFontsPlugin;