// index.ts

import { Editor } from 'grapesjs';
import { fontsDialogPlugin } from './fonts';
import commands from './commands';
import { FontsPluginOptions } from './types';

export default (editor: Editor, opts: Partial<FontsPluginOptions> = {}) => {
  const options: FontsPluginOptions = {
    i18n: {},
    preserveDefaultFonts: true,
    api_key: '',
    ...opts
  };

  commands(editor, options);
  fontsDialogPlugin(editor, options);
};

// Expose commands to the app
export * from './fonts';
export * from './commands';