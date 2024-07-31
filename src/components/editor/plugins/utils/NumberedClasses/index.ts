import { Editor, Component, Selector } from 'grapesjs';


const addNumberedSelector = (editor: Editor, component: Component) => {
  const baseSelector = component.getAttributes().baseClass;
  if (!baseSelector) return;

  console.log('baseSelector', baseSelector);

  const count = editor.Selectors.getAll()
    .filter((selector: Selector) => selector.getName().startsWith(baseSelector))
    .length;
  console.log('count', count);
  const existingClasses = component.getClasses();
  const newSelector = `${baseSelector}'unnamed'${count + 1}`;
  if (existingClasses.length >= 2 || existingClasses.some((cls: any) => cls.toLowerCase().includes('unnamed'))) {
    console.log('Skipping new selector: Component has more than 2 classes or contains "unnamed" class');
    return;
  }
  console.log('newSelector', newSelector);
  component.addClass(newSelector);
};

const NumberedClasses = (editor: Editor) => {

  editor.on('component:add', (component: Component) => {
    addNumberedSelector(editor, component);
  });

  // Command to edit base style
  editor.Commands.add('edit-base-style', {
    run: (editor: Editor) => {
      const classes = editor.Selectors.getSelectedAll();
      if (classes) {
        // Disable all classes except the base one
        classes.forEach((cls: any, index: number) => {
          if (index !== 0) {
            cls.setActive(false);
          }
        });
      }
    },
    stop: (editor: Editor) => {
      const classes = editor.Selectors.getSelectedAll();
      if (classes) {
        // Re-enable all classes
        classes.forEach((cls: any) => {
          cls.setActive(true);
        });

        // Trigger style manager update
        // editor.Styles.select(selected);
      }
    },
  });
};

export default NumberedClasses;