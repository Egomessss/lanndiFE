import { Accordion, ActionIcon, Divider, ScrollArea, Text } from '@mantine/core'
import * as React from 'react'

import StylePropertyField from './StylePropertyField'
import { StylesResultProps } from '../wrappers/StylesProvider'
import { IconFile } from '@tabler/icons-react'


export default function CustomStyleManager({
                                               sectors,
                                           }: Omit<StylesResultProps, 'Container'>) {

    const items = sectors.map((sector) => (
        <Accordion.Item key={sector.getId()} value={sector.getId()}>
            <Accordion.Control>
                {sector.getName()}
            </Accordion.Control>
            <Accordion.Panel>  {sector.getProperties().map((prop) => (
                <StylePropertyField
                    key={prop.getId()}
                    prop={prop}
                />
            ))}</Accordion.Panel>
        </Accordion.Item>
    ))
    return (
        <div
            className="gjs-custom-style-manager text-left mt-2"
        >
            <Accordion variant="contained">
                {items}
            </Accordion>

        </div>
    )
}
