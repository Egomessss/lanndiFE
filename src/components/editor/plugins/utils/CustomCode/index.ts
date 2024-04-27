import type { BlockProperties, ComponentDefinition, Plugin } from 'grapesjs';
import loadBlocks from './blocks';
import loadCommands from './commands';
import loadComponents from './components';

export type PluginOptions = {
  /**
   * Object to extend the default custom code block. Pass a falsy value to avoid adding the block
   * @example
   * { label: 'Custom Code', category: 'Extra', ... }
   */
  blockCustomCode?: Partial<BlockProperties>;

  /**
   * Object to extend the default custom code properties.
   * @example
   * { name: 'Custom Code', droppable: false, ... }
   */
  propsCustomCode?: ComponentDefinition;

  /**
   * Object to extend the default component's toolbar button for the code. Pass a falsy value to avoid adding the button
   * @example
   * { label: '</>', attributes: { title: 'Open custom code' } }
   */
  toolbarBtnCustomCode?: Record<string, any>;

  /**
   * Content to show when the custom code contains `<script>`
   */
  placeholderScript?: string;

  /**
   * Title for the custom code modal
   * @default 'Insert your code'
   */
  modalTitle?: string;

  /**
   * Additional options for the code viewer.
   * @example
   * { theme: 'hopscotch', readOnly: 0 }
   */
  codeViewOptions?: Record<string, any>;

  /**
   * Label for the default save button
   * @default 'Save'
   */
  buttonLabel?: string;

  /**
   * Object to extend the default custom code command.
   */
  commandCustomCode?: Record<string, any>;
};

const plugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  const options: PluginOptions = {
    blockCustomCode: {},
    propsCustomCode: {},
    toolbarBtnCustomCode: {},
    placeholderScript: `<div style="pointer-events: none; padding: 10px;">
      <svg viewBox="0 0 24 24" style="height: 30px; vertical-align: middle;">
        <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"></path>
        </svg>
      Custom code with <i>&lt;script&gt;</i> or <i>iframe> </i> tags will only be shown in preview/published site
    </div>`,
    modalTitle: 'Insert your custom code here:\n' +
      '- HTML inside a div\n' +
      '- CSS inside a style tag\n' +
      '- JavaScript inside a script tag\n' +
      'Please note:\n' +
      '1. Your custom code should come styled - editor styles might not work.\n' +
      '2. Custom code with <script> or <iframe> tags will only be shown in preview/published site.\n' +
      '3. Scripts and links should be added to site settings custom head code for them to work.',
    codeViewOptions: {},
    buttonLabel: 'Save',
    commandCustomCode: {},
    ...opts,
  };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Add commands
  loadCommands(editor, options);
};

export default plugin;
