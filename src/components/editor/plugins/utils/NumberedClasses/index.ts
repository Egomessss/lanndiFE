import { Editor, Component } from 'grapesjs';

const NumberedClasses = (editor: Editor) => {
  const baseComponents = ['block', 'container', 'rows', 'columns', 'grid', 'heading-one', 'heading-two', 'heading-three', 'heading-four', 'heading-five', 'heading-six', 'paragraph', 'link', 'link-box', 'button', 'image', 'svg', 'video', 'material-icon', 'ordered-list', 'unordered-list', 'list-item', 'custom-code'];

  const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const findNearestUnnamedClass = (component: Component): string | null => {
    const classes = component.getClasses();
    const unnamedClass = classes.find((cls: string) => cls.startsWith('unnamed-'));
    if (unnamedClass) return unnamedClass;
    const parent = component.parent();
    return parent ? findNearestUnnamedClass(parent) : null;
  };

  editor.on('component:add', (component: Component) => {
    const classes = component.getClasses();

    // Check if there's only one class and it's in baseComponents
    if (classes.length === 1 && baseComponents.includes(classes[0])) {
      const existingUnnamedClass = findNearestUnnamedClass(component);
      if (existingUnnamedClass) {
        component.addClass(existingUnnamedClass);
        component.set('unnamedClass', existingUnnamedClass);
      } else {
        const newClass = `unnamed-class-${generateRandomString(8)}`;
        component.addClass(newClass);
        component.set('unnamedClass', newClass);
      }
    }
  });
};

export default NumberedClasses;