import type { Plugin } from 'grapesjs';
import loadBlocks from './blocks';
import { PluginOptions } from '@/components/editor/plugins/BasicBlocks/InteractiveBlocks';


const LayoutBlocks: Plugin<PluginOptions> = (editor, opts = {}) => {
  const config = {
    blocks: [
      'block',
      'container',
      'columns',
      'rows',
      'grid',
      'table',
      'thead',
      'tbody',
      'tcell',
      'trow',
      'tfoot',
      // 'table', 'table-cell', 'table-row', 'table-head', 'table-body','table-footer'
    ],
    flexGrid: false,
    stylePrefix: 'lyt-',
    addBasicStyle: true,
    category: 'Layout',
    rowHeight: 75,
    ...opts,
  };

  loadBlocks(editor, config);
};

export default LayoutBlocks;
