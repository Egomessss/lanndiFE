import { AppShell, Box, Divider, ScrollArea } from '@mantine/core'

import CustomLayerManager from './CustomLayerManager'
import CustomPageManager from './CustomPageManager'
import { LayersProvider, PagesProvider } from '../wrappers'
import React from 'react'

import { IconPageBreak } from '@tabler/icons-react'

export default function LayersAndPagesLeftSideBar() {
    return (
        <>
            <AppShell.Section
                grow
                component={ScrollArea}
            >
                <LayersProvider>
                    {(props) => <CustomLayerManager {...props} />}
                </LayersProvider>
            </AppShell.Section>
            <Divider
                my="xs"
                variant="dashed"
                labelPosition="center"
                label={
                    <>
                        <IconPageBreak />
                        <Box ml={5}>Pages</Box>
                    </>
                }
            />
            <AppShell.Section>
                <PagesProvider>
                    {(props) => <CustomPageManager {...props} />}
                </PagesProvider>
            </AppShell.Section>

        </>
    )
}
