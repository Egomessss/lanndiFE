import type { Plugin } from 'grapesjs'
import loadBlocks from './blocks'


const LayoutBlocks: Plugin = (editor, opts = {}) => {
    const config = {
        blocks: ['block','container','rows', 'columns',
            // 'grid',
            // 'table', 'table-cell', 'table-row', 'table-head', 'table-body','table-footer'
        ],
        flexGrid: false,
        stylePrefix: 'lyt-',
        addBasicStyle: true,
        category: 'Layout',
        labelContainer: 'Container',
        labelRows: 'Columns',
        labelColumns: 'Rows',
        labelGrid: 'Grid',
        labelTable: 'Table',
        rowHeight: 75,
        ...opts,
    }

    loadBlocks(editor, config)
}

export default LayoutBlocks
