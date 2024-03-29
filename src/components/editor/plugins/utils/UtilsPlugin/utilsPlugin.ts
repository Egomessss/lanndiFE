import { Editor } from 'grapesjs';

export default (editor: Editor, opts = {}) => {
  editor.Commands.add('wrapper', {
    run: () => {
      // Get all currently selected components

      const selectedComponents = editor.getSelectedAll();

      // Check if there are selected components
      if (selectedComponents.length === 0) {
        return; // Exit if no components are selected
      }

      const allWrappersClasses = editor.CssComposer.getRules('.wrapper');
      const wrappersLength = allWrappersClasses.length;

      console.log('wrapper', wrappersLength);
      // Create a new 'div' component
      const wrapperDiv = editor.DomComponents.addComponent({
        tagName: 'div',
        name: 'Wrapper Div',
        attributes: { class: wrappersLength === 0 ? 'wrapper' : `wrapper-${wrappersLength + 1}` },
        icon:`<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-box"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /></svg>`,
        // Additional properties for the 'div', like classes, styles, etc.
      });

      // Get the parent of the first selected component
      const firstComponentParent = selectedComponents[0].parent();

      const selected = editor.getSelected();

      // Insert the wrapper at the position of the first selected component
      if (firstComponentParent) {
        firstComponentParent.append(wrapperDiv, { at: selected?.index() });
      }

      // Append each selected component to the new 'div'
      selectedComponents.forEach(component => {
        // @ts-ignore
        wrapperDiv.append(component);
      });

      // Select the new wrapper 'div' component
      editor.select(wrapperDiv);
    },
    // Optional: Define the 'stop' function if needed
    // stop: () => {
    //     // Your stop logic here
    // },
  });


  // Command for deselecting components
  editor.Commands.add('deselect-components', {
    run: () => {
      editor.select(undefined);
    },
  });

  // Keymap for the 'Esc' key to trigger the deselect command
  editor.Keymaps.add('deselect-components', 'esc', 'deselect-components');

  editor.on('load', () => {
    editor.runCommand('core:component-outline');
    // @ts-ignore

    editor.getWrapper()?.set('stylable', [
      'height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'font-family',
    ]);

    editor.getWrapper()?.setStyle({ height: '2000px' })
  });

  // editor.StyleManager.addBuiltIn('font-family', {
  //     type: 'select',
  //     label: 'Family', // Updated label for clarity
  //     default: 'inherit', // 'inherit' is more appropriate for font-family defaults
  // },)

  editor.Canvas.setZoom(60);
  editor.Canvas.setCoords(-140, -100);

}
