import type { Plugin } from 'grapesjs'
import loadBlocks from './blocks'


const SemanticBlocks: Plugin = (editor, opts = {}) => {
    const config = {
        blocks: ['span', 'section', 'main', 'header', 'nav', 'footer'],
        stylePrefix: 'lnd-',
        category: 'Semantic Blocks',
        labelSpan: '<Span>',
        labelSection:'<Section>',
        labelMain: '<Main>',
        labelHeader: '<Header>',
        labelNav: '<Nav>',
        labelFooter: '<Footer>',
        ...opts,
    }

    loadBlocks(editor, config)
}

export default SemanticBlocks
