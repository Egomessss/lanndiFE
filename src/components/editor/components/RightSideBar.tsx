import React, {useState} from "react";
import {AppShell, ScrollArea, SegmentedControl, Tabs} from "@mantine/core";
import SelectorsProvider from "../wrappers/SelectorsProvider";
import CustomSelectorManager from "@/components/editor/components/CustomSelectorManager";
import StylesProvider from "../wrappers/StylesProvider";
import CustomStyleManager from "@/components/editor/components/CustomStyleManager";
import {TraitsProvider} from "@/components/editor/wrappers";
import CustomTraitManager from "@/components/editor/components/CustomTraitManager";

const StyledComponents = () => (
    <ScrollArea offsetScrollbars pl={4}>
        <SelectorsProvider>
            {(props) => <CustomSelectorManager {...props} />}
        </SelectorsProvider>
            <StylesProvider>
                {(props) => <CustomStyleManager {...props} />}
            </StylesProvider>
    </ScrollArea>
);

const SettingsComponents = () => (
  <ScrollArea offsetScrollbars pl={4}>
    <TraitsProvider>
        {(props) => <CustomTraitManager {...props} />}
    </TraitsProvider>
  </ScrollArea>
);

function RightSideBar() {
    const [selectedRightBar, setSelectedRightBar] = useState('Styles')

    const renderSelectedRightBarComponent = () => {
        switch (selectedRightBar) {
            case "Styles":
                return <StyledComponents/>;
            case "Settings":
                return <SettingsComponents/>;
            default:
                return null;
        }
    };

    return <AppShell.Aside>
        <AppShell.Section>
            <SegmentedControl fullWidth m="4" size="xs" color="blue" value={selectedRightBar}
                              onChange={setSelectedRightBar} data={["Styles", "Settings"]}/>

        </AppShell.Section>
        <AppShell.Section grow mb="lg" component={ScrollArea}>
            {renderSelectedRightBarComponent()}
        </AppShell.Section>
        {/*<Tabs>*/}
        {/*    <Tabs.List>*/}
        {/*        <Tabs.Tab value="first">Styles</Tabs.Tab>*/}
        {/*        <Tabs.Tab value="second">Settings</Tabs.Tab>*/}
        {/*    </Tabs.List>*/}

        {/*    <Tabs.Panel value="first"><StyledComponents/></Tabs.Panel>*/}
        {/*    <Tabs.Panel value="second"> <SettingsComponents/></Tabs.Panel>*/}
        {/*</Tabs>*/}
    </AppShell.Aside>;
}

export default RightSideBar