import { Editor, Component } from 'grapesjs';

interface NumberedClassesPluginConfig {
  componentTypes: string[];
  numberingPrefix: string;
}

const getBaseSelector = (component: Component): string => {
  const classes = component.getClasses();
  return classes.length > 0 ? classes[0] : '';
};

const addNumberedSelector = (editor: Editor, component: Component) => {
  const baseSelector = getBaseSelector(component);
  if (!baseSelector) return;

  const count = editor.Css.getRules(`.${baseSelector}`)?.length;
  const newSelector = `${baseSelector}'unnamed'${count + 1}`;
  component.addClass(newSelector);
};

const NumberedClasses = (editor: Editor) => {

  editor.on('component:add', (component: Component) => {
    addNumberedSelector(editor, component);
  });

  // Command to edit base style
  editor.Commands.add('edit-base-style', {
    run: (editor: Editor) => {
      const selected = editor.getSelected();
      if (selected) {
        const baseSelector = getBaseSelector(selected);
        const classes = selected.getClasses();

        // Disable all classes except the base one
        classes.forEach(cls => {
          if (cls !== baseSelector) {
            selected.removeClass(cls);
            selected.setClass(cls, { active: false });
          }
        });

        // Trigger style manager update
        editor.Styles.select(selected);
      }
    },
    stop: (editor: Editor) => {
      const selected = editor.getSelected();
      if (selected) {
        const classes = selected.getClasses();

        // Re-enable all classes
        classes.forEach(cls => {
          selected.setClass(cls, { active: true });
        });

        // Trigger style manager update
        editor.Styles.select(selected);
      }
    }
  });
};

export default NumberedClasses;