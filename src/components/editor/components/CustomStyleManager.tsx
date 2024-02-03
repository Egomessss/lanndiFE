    import { Accordion, ActionIcon, Divider, ScrollArea, Text } from '@mantine/core'
    import * as React from 'react'

    import StylePropertyField from './StylePropertyField'
    import { StylesResultProps } from '../wrappers/StylesProvider'
    import { IconFile } from '@tabler/icons-react'
    import classes from './CustomStyleManager.module.css'

    export default function CustomStyleManager({
                                                   sectors,
                                               }: Omit<StylesResultProps, 'Container'>) {

        // Check if there are any sectors
        if (sectors.length === 0) {
            return null; // or some placeholder component
        }

        // Separate the first sector from the rest
        const [firstSector, ...otherSectors] = sectors;

        // Render the first sector outside the accordion
        const firstSectorElement = (
            <div key={firstSector.getId()}>
                {firstSector.getProperties().map((prop) => (
                    <StylePropertyField key={prop.getId()} prop={prop} />
                ))}
            </div>
        );

        // Map the rest of the sectors to accordion items
        const accordionItems = otherSectors.map((sector) => (
            <Accordion.Item key={sector.getId()} value={sector.getId()}>
                <Accordion.Control>
                    {sector.getName()}
                </Accordion.Control>
                <Accordion.Panel>
                    {sector.getProperties().map((prop) => (
                        <StylePropertyField key={prop.getId()} prop={prop} />
                    ))}
                </Accordion.Panel>
            </Accordion.Item>
        ));

        return (
            <div className="gjs-custom-style-manager text-left mt-2">
                {/* Render the first sector element */}
                {firstSectorElement}

                {/* Render the rest of the sectors within the accordion */}
                {otherSectors.length > 0 && (
                    <Accordion classNames={classes}>
                        {accordionItems}
                    </Accordion>
                )}
            </div>
        );
    }
