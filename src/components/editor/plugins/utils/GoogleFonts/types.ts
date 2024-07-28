// types.ts

import { Editor } from 'grapesjs';

export interface Font {
  name: string;
  value: string;
  variants: string[];
}

export interface GoogleFont {
  family: string;
  category: string;
  variants: string[];
}

export interface FontsPluginOptions {
  i18n: Record<string, string>;
  preserveDefaultFonts: boolean;
  server_url?: string;
  api_url?: string;
  api_key: string;
}

export interface FontsPluginEditor extends Editor {
  I18n: {
    t: (key: string) => string;
  };
  StyleManager: {
    getBuiltIn: (prop: string) => { options: Font[] };
    getProperty: (category: string, property: string) => {
      setOptions: (options: Font[]) => void;
    };
  };
}

