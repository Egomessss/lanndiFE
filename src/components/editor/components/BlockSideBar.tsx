import CustomBlockManager from './CustomBlockManager'
import { BlocksProvider } from '../wrappers'
import React from 'react'

export default function BlockSideBar() {
    return (
        <BlocksProvider>
            {(props) => <CustomBlockManager {...props} />}
        </BlocksProvider>
    )
}