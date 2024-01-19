import { Tabs } from '@mantine/core'

import CustomStyleManager from './CustomStyleManager'
import StylesProvider from '../wrappers/StylesProvider'

import { IconEdit, IconSettings } from '@tabler/icons-react'
import SelectorsProvider from '../wrappers/SelectorsProvider'
import CustomSelectorManager from '@/components/editor/components/CustomSelectorManager'
import CustomTraitManager from '@/components/editor/components/CustomTraitManager'
import { TraitsProvider } from '@/components/editor/wrappers'


export default function RightBar() {
    return (
        <Tabs
            // variant="outline"
            defaultValue="styles"
            className='h-full'
        >
            <Tabs.List grow>
                <Tabs.Tab
                    value="styles"
                    leftSection={<IconEdit />}
                >
                    Styles
                </Tabs.Tab>
                <Tabs.Tab
                    value="traits"
                    leftSection={<IconSettings />}
                >
                    Properties
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel
                value="styles"
                pt="xs"
                className='h-full'
            >
                <>
                    <SelectorsProvider>
                        {(props) => <CustomSelectorManager {...props} />}
                    </SelectorsProvider>
                    <StylesProvider>
                        {(props) => <CustomStyleManager {...props} />}
                    </StylesProvider>
                </>
            </Tabs.Panel>

            <Tabs.Panel
                value="traits"
                pt="xs"
            >
                <TraitsProvider>
                    {(props) => <CustomTraitManager {...props} />}
                </TraitsProvider>
            </Tabs.Panel>
        </Tabs>
    )
}
