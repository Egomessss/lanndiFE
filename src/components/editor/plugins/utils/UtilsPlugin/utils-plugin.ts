import { Editor } from 'grapesjs';

const UtilsPlugin = (editor: Editor, opts = {}) => {
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

      // console.log('wrapper', wrappersLength);
      // Create a new 'div' component
      const wrapperDiv = editor.DomComponents.addComponent({
        tagName: 'div',
        name: 'Wrapper',
        resizable: true,
        attributes: { class: wrappersLength === 0 ? 'wrapper' : `wrapper-${wrappersLength + 1}` },
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="12"  height="12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-box"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /></svg>`,
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

  editor.Keymaps.add('deselect-components', 'esc', 'deselect-components');


  editor.runCommand('core:component-outline');

  // if editor zoom is less than 100%
  // get body height
  // set iframe height to body height


  editor.on('canvas:zoom', () => {
    const zoom = editor.Canvas.getZoom();
    const bodyHeight = editor.Canvas.getBody().offsetHeight;
    console.log('body heoght  ',bodyHeight);
    if (zoom < 100 || zoom > 100) {
      editor.Canvas.getFrame().set('height', bodyHeight);
    }
  });


  // editor.on('component:update', () => {
  //   const zoom = editor.Canvas.getZoom();
  //   const bodyHeight = editor.Canvas.getBody().offsetHeight;
  //   console.log('body heoght component update',bodyHeight);
  //   if (zoom < 100 || zoom > 100) {
  //     editor.Canvas.getFrame().set('height', bodyHeight);
  //   }
  // });



  editor.DomComponents.addType('select', {
    model: {
      defaults: {
        enableEvents: false,
      },

      init() {
        // Maybe better to use (this.listenTo)
        editor.on('run:preview', () => this.set('enableEvents', true));
        editor.on('stop:preview', () => this.set('enableEvents', false));
      },
    },
    view: {
      events: {
        // @ts-ignore
        mousedown: function(e) {
          if (!this.model.get('enableEvents')) {
            e.preventDefault();
          }
        },
      },
    },
  });


};

export default UtilsPlugin;



