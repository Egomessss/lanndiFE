import { AppShell, ScrollArea } from '@mantine/core'

import CustomLayerManager from './CustomLayerManager'
import { LayersProvider } from '../wrappers'
import React from 'react'

export default function LayersLeftSideBar() {
    return (

        <AppShell.Section
            grow
            component={ScrollArea}
        >
            <LayersProvider>
                {(props) => <CustomLayerManager {...props} />}
            </LayersProvider>
        </AppShell.Section>

    )
}
