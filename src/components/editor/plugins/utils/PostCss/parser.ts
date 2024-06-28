import type { Editor } from 'grapesjs';
import postcss, { Rule, AtRule, Declaration } from 'postcss';

export type ParsedRule = {
  selectors: string;
  style: Record<string, string>;
  atRule?: string;
  params?: string;
}

/**
 * Log stuff
 * @param  {Editor} editor
 * @param  {*} msg
 */
export const log = (editor?: Editor, msg?: any) =>
  editor && editor.log(msg, { ns: 'parser-poscss' });

/**
 * Create rule from node
 * @param  {Object} node
 * @return {Object}
 */
export const createRule = (node: Rule): ParsedRule => {
  const declarations = (node.nodes as Declaration[]) || [];
  const style: Record<string, string> = {};

  declarations.forEach(({ prop, value, important }) => {
    style[prop] = value + (important ? ' !important' : '');
  });

  return {
    selectors: node.selector || '',
    style,
  }
};

/**
 * Create at rule from node
 * @param  {Object} node
 * @param  {Array<Object>} result
 * @return {Object}
 */
export const createAtRule = (node: AtRule, result: ParsedRule[]) => {
  const { name, params } = node;
  const isNested = ['media', 'keyframes'].indexOf(name) >= 0;

  if (isNested) {
    if (node.nodes) {
      node.nodes.forEach(node => {
        result.push({
          ...createRule(node as Rule),
          atRule: name,
          params,
        });
      });
    }
  } else {
    result.push({
      // @ts-ignore
      ...createRule(node as Rule),
      atRule: name,
    })
  }
};

const parser = (css: string, editor?: Editor) => {
  const result: ParsedRule[] = [];
  log(editor, ['Input CSS', css]);

  const ast = postcss().process(css).sync().root;
  log(editor, ['PostCSS AST', ast]);

  ast.nodes.forEach(node => {
    const { type } = node;

    switch (type) {
      case 'rule':
        result.push(createRule(node));
        break;
      case 'atrule':
        createAtRule(node, result);
        break;
    }
  });

  log(editor, ['Output', result]);

  return result;
}


export default parser;