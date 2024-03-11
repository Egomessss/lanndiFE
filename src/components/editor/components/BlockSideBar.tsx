import CustomBlockManager from './CustomBlockManager'
import { BlocksProvider } from '../wrappers'
import React from 'react'
import CustomSectionsBlockManager from "@/components/editor/components/CustomSectionsBlockManager";

export default function BlockSideBar({type}:any) {
    return (
        <BlocksProvider>
            {type === 'Blocks' ?
                (props => <CustomBlockManager {...props} />) :
                (props => <CustomSectionsBlockManager {...props} />)
            }
        </BlocksProvider>
    )
}