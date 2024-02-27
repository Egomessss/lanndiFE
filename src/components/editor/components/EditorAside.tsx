import React from "react";
import {AppShell, ScrollArea, SegmentedControl} from "@mantine/core";

function EditorAside(props: {
    value: string,
    onChange: (value: string) => void,
    renderSelectedRightBarComponent: React.JSX.Element | null
}) {
    return <AppShell.Aside>
        <AppShell.Section>
            <SegmentedControl fullWidth m="4" size="xs" color="blue" value={props.value}
                              onChange={props.onChange} data={["Styles", "Settings"]}/>

        </AppShell.Section>
        <AppShell.Section grow mb="lg" component={ScrollArea}>
            {props.renderSelectedRightBarComponent}
        </AppShell.Section>
    </AppShell.Aside>;
}

export default EditorAside