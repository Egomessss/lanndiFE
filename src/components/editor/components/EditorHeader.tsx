import {AppShell} from "@mantine/core";
import TopBar from "@/components/editor/components/TopBar";
import React from "react";

function EditorHeader() {
    return <AppShell.Header>
        <TopBar />
    </AppShell.Header>;
}

export default EditorHeader