import React, {useState} from "react";
import {AppShell, ScrollArea, SegmentedControl} from "@mantine/core";
import SelectorsProvider from "../wrappers/SelectorsProvider";
import CustomSelectorManager from "@/components/editor/components/CustomSelectorManager";
import StylesProvider from "../wrappers/StylesProvider";
import CustomStyleManager from "@/components/editor/components/CustomStyleManager";
import {TraitsProvider} from "@/components/editor/wrappers";
import CustomTraitManager from "@/components/editor/components/CustomTraitManager";

function RightSideBar() {
    const [selectedRightBar, setSelectedRightBar] = useState('Styles')

    const renderSelectedRightBarComponent = () => {
        switch (selectedRightBar) {
            case 'Styles':
                return <ScrollArea
                    offsetScrollbars
                    pl={4}
                >
                    <SelectorsProvider>
                        {(props) => <CustomSelectorManager {...props} />}
                    </SelectorsProvider>
                    <StylesProvider>
                        {(props) => <CustomStyleManager {...props} />}
                    </StylesProvider>
                </ScrollArea>
            case 'Settings':
                return <TraitsProvider>
                    {(props) => <CustomTraitManager {...props} />}
                </TraitsProvider>
            default:
                return null
        }
    }

    return <AppShell.Aside>
        <AppShell.Section>
            <SegmentedControl fullWidth m="4" size="xs" color="blue" value={selectedRightBar}
                              onChange={setSelectedRightBar} data={["Styles", "Settings"]}/>

        </AppShell.Section>
        <AppShell.Section grow mb="lg" component={ScrollArea}>
            {renderSelectedRightBarComponent()}
        </AppShell.Section>
    </AppShell.Aside>;
}

export default RightSideBar