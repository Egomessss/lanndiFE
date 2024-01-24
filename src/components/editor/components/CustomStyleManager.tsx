import { Accordion, ActionIcon, Divider, ScrollArea, Text } from "@mantine/core"
import * as React from "react"

import StylePropertyField from "./StylePropertyField"
import { IconFile } from '@tabler/icons-react'


export default function CustomStyleManager({
    sectors,
}: Omit<StylesResultyProps, "Container">) {
    return (
        <div

            className="gjs-custom-style-manager text-left "
        >
            <div className="ml-2 flex flex-col items-center  justify-center">
                {sectors.map((sector) => (
                    <div
                        key={sector.getId()}
                        className="w-full"
                    >
                        <div className="flex w-full items-center justify-between">
                            {" "}
                            <Text fw={700}>{sector.getName()}</Text>
                        </div>
                        <Divider
                            className="w-full"
                            my="sm"
                        />{" "}
                        <div>
                            {sector.getProperties().map((prop) => (
                                <StylePropertyField
                                    key={prop.getId()}
                                    prop={prop}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
