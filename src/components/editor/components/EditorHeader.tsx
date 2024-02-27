import {AppShell} from "@mantine/core";
import TopBar from "@/components/editor/components/TopBar";
import React from "react";

function EditorHeader(props: { onClick: () => void, openBlockSideBar: boolean }) {
    return <AppShell.Header>
        <TopBar onClick={props.onClick} openBlockSideBar={props.openBlockSideBar}/>
    </AppShell.Header>;
}

export default EditorHeader