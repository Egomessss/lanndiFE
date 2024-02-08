import { AppShell, Box, Divider, ScrollArea } from '@mantine/core'

import CustomLayerManager from './CustomLayerManager'
import CustomPageManager from './CustomPageManager'
import { LayersProvider, PagesProvider } from '../wrappers'
import React from 'react'

import { IconPageBreak } from '@tabler/icons-react'

export default function PagesLeftSideBar() {
    return (
        <AppShell.Section>
            <PagesProvider>
                {(props) => <CustomPageManager {...props} />}
            </PagesProvider>
        </AppShell.Section>
    )
}
