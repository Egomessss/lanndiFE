import type { Editor } from 'grapesjs';
import { PluginOptions } from './index';
import { typeCustomCode } from './utils';

const CustomCode =  (editor: Editor, { blockCustomCode }: PluginOptions = {}) => {
  const { Blocks } = editor;

  blockCustomCode && Blocks.add(typeCustomCode, {
    label: 'Custom Code',
    media: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
    `,
    category: 'Extra',
    activate: true,
    select: true,
    content: { type: typeCustomCode },
    ...blockCustomCode
  });
}

export default CustomCode;