import React from "react";
import {ActionIcon, AppShell, Box, Divider, ScrollArea, Tooltip} from "@mantine/core";
import styles from "@/app/editor/[slug]/page.module.css";
import {IconFile, IconLayoutGridAdd, IconSection, IconStack2, IconWebhook} from "@tabler/icons-react";
import TemplatesManager from "@/components/editor/components/TemplatesManager";
import SettingsModal from "@/components/editor/components/SettingsModal";

function EditorNavbar(props: {
    onClick: () => void,
    onClick1: () => void,
    onClick2: () => void,
    onClick3: () => void,
    onClick4: () => void,
    renderSelectedComponent: React.JSX.Element | null
}) {
    return <AppShell.Navbar  classNames={styles}>
        <div className="h-full flex">
            <div className=" flex flex-col gap-2 h-full  p-1">
                <Tooltip label="Blocks">
                    <ActionIcon onClick={props.onClick} variant="subtle">
                        <IconLayoutGridAdd size="1rem"/>
                    </ActionIcon>
                </Tooltip>

                <Tooltip label="Sections">
                    <ActionIcon onClick={props.onClick2} variant="subtle">
                        <IconSection size="1rem"/>
                    </ActionIcon>
                </Tooltip>
                {/*<Tooltip label="Integrations">*/}
                {/*    <ActionIcon onClick={props.onClick1} variant="subtle">*/}
                {/*        <IconWebhook size="1rem"/>*/}
                {/*    </ActionIcon>*/}
                {/*</Tooltip>*/}
                {/*<TemplatesManager/>*/}
                {/*<Tooltip label="Custom Blocks">*/}
                {/*    <ActionIcon variant="subtle">*/}
                {/*        <IconUserBolt size="1rem" />*/}
                {/*    </ActionIcon>*/}
                {/*</Tooltip>*/}
                <Divider my="xs" variant="dashed"/>
                <Tooltip label="Layers">
                    <ActionIcon onClick={props.onClick3} variant="subtle">
                        <IconStack2 size="1rem"/>
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="Pages">
                    <ActionIcon onClick={props.onClick4} variant="subtle">
                        <IconFile size="1rem"/>
                    </ActionIcon>
                </Tooltip>
                <SettingsModal/>
            </div>
            <Divider orientation="vertical" my="md"/>
            <Box component={ScrollArea} className="p-2 w-full"> {props.renderSelectedComponent}</Box>
        </div>

    </AppShell.Navbar>;
}

export default EditorNavbar