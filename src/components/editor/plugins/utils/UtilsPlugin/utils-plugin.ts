import { DeviceProperties, Editor } from 'grapesjs';

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

  editor.Canvas.setZoom(60);
  editor.Canvas.setCoords(-160, -10);

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
  });


  // Command for deselecting components
  editor.Commands.add('deselect-components', {
    run: () => {
      editor.select(undefined);
    },
  });

  editor.Keymaps.add('deselect-components', 'esc', 'deselect-components');


  // if editor zoom is less than 100%
  // get body height
  // set iframe height to body height

  editor.Commands.add('change-frame-height', {
    run: () => {
      const bodyHeight = editor.Canvas.getBody().offsetHeight;
      editor.Canvas.getFrame().set('height', bodyHeight);
    },
    stop: () => {
      editor.Canvas.getFrame().set('height', 600);
    },
  });


  // editor.on('component:update', () => {
  //   const zoom = editor.Canvas.getZoom();
  //   const bodyHeight = editor.Canvas.getBody().offsetHeight;
  //   console.log('body heoght component update',bodyHeight);
  //   if (zoom < 100 || zoom > 100) {
  //     editor.Canvas.getFrame().set('height', bodyHeight);
  //   }
  // });


  editor.on('component:selected', (component) => {
    component.set({
      toolbar: [
        // these are the default toolbar elements
        {
          label: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 11l-6 -6" /><path d="M6 11l6 -6" /></svg>',
          attributes: { title: 'Select Parent' },
          command: 'select-parent',
        },
        {
          label: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3" /><path d="M15 12h6" /><path d="M6 9l-3 3l3 3" /><path d="M3 12h6" /><path d="M9 18l3 3l3 -3" /><path d="M12 15v6" /><path d="M15 6l-3 -3l-3 3" /><path d="M12 3v6" /></svg>',
          attributes: { title: 'Move Block' },
          command: 'tlb-move',
        },
        {
          label: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>',
          attributes: { title: 'Clone Block' },
          command: 'tlb-clone',
        },
        {
          command: 'wrapper',
          label: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-box"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /></svg>',
          attributes: { title: 'Wrap Block' },
        },
        {
          label: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>',
          attributes: { title: 'Delete Block' },
          command: 'tlb-delete',
        },
        // this is my new toolbar element with my custom command
      ],
    });

    // const checkIfAlreadyExists = defaultToolbar.filter((tool:any) => tool.command === newTool.command)

    // if(!checkIfAlreadyExists.length){
    //   defaultToolbar.unshift({
    //     id: newTool.id,
    //     label: newTool.label,
    //     // title: newTool.title,
    //     attributes: {  title: newTool.title },
    //     command: newTool.command,
    //   })
    //   component.set('toolbar', defaultToolbar)
    // }

  });


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


  editor.on('load', () => {
    // @ts-ignore
    const deviceManager = editor.DeviceManager;
    const desktop = deviceManager.get('desktop');

    if (desktop) {
      // @ts-ignore
      desktop.set('widthMedia', '');
    }

  });
  // Create a new class that extends the original Device class

};


export default UtilsPlugin;



