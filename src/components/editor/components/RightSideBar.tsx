import React, { useState } from 'react';
import { AppShell, ScrollArea, SegmentedControl, Tabs } from '@mantine/core';
import SelectorsProvider from '../wrappers/SelectorsProvider';
import CustomSelectorManager from '@/components/editor/components/CustomSelectorManager';
import StylesProvider from '../wrappers/StylesProvider';
import CustomStyleManager from '@/components/editor/components/CustomStyleManager';
import { TraitsProvider } from '@/components/editor/wrappers';
import CustomTraitManager from '@/components/editor/components/CustomTraitManager';




function RightSideBar() {


  return <AppShell.Aside>
    <AppShell.Section grow component={ScrollArea}>
      <Tabs defaultValue="first" >
        <Tabs.List justify="space-between" grow>
          <Tabs.Tab value="first">Styles</Tabs.Tab>
          <Tabs.Tab value="second">Settings</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel  value="first">
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
      </Tabs>
    </AppShell.Section>

  </AppShell.Aside>;
}

export default RightSideBar;