import React, { useState } from 'react';
import { AppShell, ScrollArea, SegmentedControl, Tabs, Tooltip } from '@mantine/core';
import SelectorsProvider from '../wrappers/SelectorsProvider';
import CustomSelectorManager from '@/components/editor/components/CustomSelectorManager';
import StylesProvider from '../wrappers/StylesProvider';
import CustomStyleManager from '@/components/editor/components/CustomStyleManager';
import { TraitsProvider, WithEditor } from '@/components/editor/wrappers';
import CustomTraitManager from '@/components/editor/components/CustomTraitManager';
import CustomAdvancedTraitManager from '@/components/editor/components/CustomAdvancedTraitManager';
import { IconAdjustmentsCode, IconPaint, IconPalette, IconSettings } from '@tabler/icons-react';


function RightSideBar() {

  return <AppShell.Aside>
    <AppShell.Section grow component={ScrollArea}>
      <Tabs defaultValue="first">
        <Tabs.List justify="space-between" grow>
          <Tabs.Tab value="first">
            <Tooltip label="Palette" position="top">
              <IconPalette size="1rem" />
            </Tooltip>
          </Tabs.Tab>
          <Tabs.Tab value="second">
            <Tooltip label="Settings" position="top">
              <IconSettings size="1rem" />
            </Tooltip>
          </Tabs.Tab>
          <Tabs.Tab value="third">
            <Tooltip label="Code Adjustments" position="top">
              <IconAdjustmentsCode size="1rem" />
            </Tooltip>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first">
          <ScrollArea offsetScrollbars mt={6} pl={2}>
            <SelectorsProvider>
              {(props) => <CustomSelectorManager {...props} />}
            </SelectorsProvider>
            <StylesProvider>
              {(props) => <CustomStyleManager {...props} />}
            </StylesProvider>
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="second">
          <ScrollArea offsetScrollbars pl={4}>
            <TraitsProvider>
              {(props) => <CustomTraitManager {...props} />}
            </TraitsProvider>
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="third">
          <ScrollArea offsetScrollbars pl={4}>
            <WithEditor>
              <CustomAdvancedTraitManager />
            </WithEditor>
          </ScrollArea>
        </Tabs.Panel>
      </Tabs>
    </AppShell.Section>

  </AppShell.Aside>;
}

export default RightSideBar;