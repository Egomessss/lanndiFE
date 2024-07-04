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

  // Keymap for the 'Esc' key to trigger the deselect command
  editor.Keymaps.add('deselect-components', 'esc', 'deselect-components');

  editor.on('page:select', () => {
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
      'font',
      'font-family',
    ]);
  });


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
      'font',
      'font-family',
    ]);

    // editor.getWrapper()?.setStyle({ height: '2000px' });

    // editor.on('device:select', (device) => {
    //   console.log('device selected', device);
    //   console.log('offeset',editor.Canvas.canvasRectOffset())
    //   // editor.Canvas.setZoom(100);
    //   // const bodyHeight = editor.Canvas.getBody().clientHeight
    //   // console.log('coords world',editor.Canvas.getWorldRectToScreen());
    //   console.log('coords',editor.Canvas.getCoords());
    //   editor.Canvas.setCoords(0, 0);
    // });

    // const bodyHeight = editor.Canvas.getBody().clientHeight;
    // console.log(editor.Canvas);
    // console.log('body height', bodyHeight);
    // const bodyHeight = editor.getWrapper()?.getStyle();
    //
    // if(bodyHeight > 2000){
    //
    // }


    // editor.Canvas.getFrame().set('height', bodyHeight);
    // editor.getWrapper()?.set({ tagName: 'div' });

  });

  // editor.StyleManager.addBuiltIn('font-family', {
  //     type: 'select',
  //     label: 'Family', // Updated label for clarity
  //     default: 'inherit', // 'inherit' is more appropriate for font-family defaults
  // },)

  // editor.Selectors.setComponentFirst(true);

  // editor.Canvas.setZoom(60);
  // editor.Canvas.setCoords(-140, -100);

  // Function to update the frame height based on the body's client height

  // Use ResizeObserver to watch for changes in the body's size, if the editor exists
  // const resizeObserver = new ResizeObserver(entries => {
  //   // Assuming there's only one element (body) being observed
  //   for (let entry of entries) {
  //     // Check if the contentRect size is what we're observing
  //     if (entry.contentRect) {
  //       updateFrameHeight();
  //     }
  //   }
  // });
  //
  // // Start observing the body element
  // const bodyElement = editor.Canvas.getBody();
  // resizeObserver.observe(bodyElement);
//   editor.Keymaps.add('ns:redo', 'ctrl+z', editor => {
//     editor.UndoManager.redo()
//     // prevent: true,
//   });
// // or
//   // resizeObserver.observe(bodyElement);
//   editor.Keymaps.add('ns:undo', 'ctrl+y', editor => {
//     editor.UndoManager.undo()
//     // prevent: true,
//   });

  // listen to events
  // editor.on('keymap:emit', (id, shortcut, event) => {
  //   // ...
  // })
  // const loadStyling = () => {
  //   const head = editor.Canvas.getDocument().head;
  //   const urls = [
  //     "//fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404084845",
  //     // "//fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404087635",
  //     // "//fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404089108"
  //   ]
  //
  //   urls.forEach(url => {
  //     head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${url}" />`);
  //     document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${url}" />`);
  //   });
  // }

  editor.on('load', () => {
    // loadStyling()
    // This overload the select type



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
  });


};

export default UtilsPlugin;



