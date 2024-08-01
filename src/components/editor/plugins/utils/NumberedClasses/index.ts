import { Editor, Component } from 'grapesjs';

const NumberedClasses = (editor: Editor) => {
  const baseComponents = ['block', 'container', 'rows', 'columns', 'grid', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'paragraph', 'link', 'link-box', 'button', 'image', 'svg', 'youtube', 'material-icon', 'ordered-list', 'unordered-list', 'list-item', 'custom-code'];

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
    const componentType = component.get('type');
    // @ts-ignore
    if (baseComponents.includes(componentType)) {
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