import type { Editor } from 'grapesjs';
import postcss, { Rule, AtRule, Declaration } from 'postcss';

export type ParsedRule = {
  selectors: string;
  style: Record<string, string>;
  atRule?: string;
  params?: string;
};

/**
 * Log stuff
 * @param  {Editor} editor
 * @param  {*} msg
 */
export const log = (editor?: Editor, msg?: any) =>
    editor && editor.log(msg, { ns: 'parser-postcss' });

/**
 * Validate CSS for common syntax errors (e.g., unclosed blocks)
 * @param {string} css
 * @returns {boolean} Returns true if CSS is valid, false otherwise
 */
export const validateCssSyntax = (css: string): boolean => {
  const stack: string[] = [];
  let isInString: boolean = false;
  let stringChar: string = '';

  for (let i = 0; i < css.length; i++) {
    const char = css[i];
    const prevChar = css[i - 1];

    // Toggle string state
    if ((char === '"' || char === "'") && prevChar !== '\\') {
      if (isInString && char === stringChar) {
        isInString = false;
        stringChar = '';
      } else if (!isInString) {
        isInString = true;
        stringChar = char;
      }
    }

    if (isInString) continue;

    switch (char) {
      case '{':
        stack.push(char);
        break;
      case '}':
        if (stack.pop() !== '{') return false; // Unmatched closing brace
        break;
    }
  }

  return stack.length === 0; // Ensure all blocks are closed
};

/**
 * Create rule from node
 * @param  {Rule} node
 * @return {ParsedRule}
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
  };
};

/**
 * Create at rule from node
 * @param  {AtRule} node
 * @param  {Array<ParsedRule>} result
 */
export const createAtRule = (node: AtRule, result: ParsedRule[]) => {
  const { name, params } = node;
  const isNested = ['media', 'keyframes'].indexOf(name) >= 0;

  if (isNested) {
    node.nodes.forEach(subNode => {
      if (subNode.type === 'rule') {
        result.push({
          ...createRule(subNode as Rule),
          atRule: name,
          params,
        });
      }
    });
  } else {
    // Handle other at-rules that are not nested...
  }
};

export default (css: string, editor?: Editor) => {
  if (!validateCssSyntax(css)) {
    log(editor, 'CSS Syntax Error: Unclosed block detected');
    return []; // Return or handle error appropriately
  }

  const result: ParsedRule[] = [];
  log(editor, ['Input CSS', css]);

  try {
    const ast = postcss().process(css, { from: undefined }).sync().root;
    log(editor, ['PostCSS AST', ast]);

    ast.nodes.forEach(node => {
      const { type } = node;
      if (type === 'rule') {
        // Process rule nodes
      } else if (type === 'atrule') {
        // Process atrule nodes
      }
    });

    log(editor, ['Output', result]);
  } catch (error) {
    // Use a type guard to narrow the error type from 'unknown' to 'Error'
    if (error instanceof Error) {
      log(editor, `Error processing CSS: ${error.toString()}`);
    } else {
      // Handle cases where the error might not be an instance of Error
      log(editor, `An unknown error occurred during CSS processing.`);
    }
  }

  return result;
};
