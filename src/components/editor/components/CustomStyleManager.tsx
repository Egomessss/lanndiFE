import { Accordion, ActionIcon, Divider, ScrollArea, Text, Tooltip } from '@mantine/core'
import * as React from 'react'

import StylePropertyField from './StylePropertyField'
import { StylesResultProps } from '../wrappers/StylesProvider'
import { IconExclamationCircle, IconFile } from '@tabler/icons-react'
import classes from './CustomStyleManager.module.css'
import { useEditorInstance } from '@/components/editor/context/EditorInstance'

export default function CustomStyleManager({
                                               sectors,
                                           }: Omit<StylesResultProps, 'Container'>) {


    // Check if there are any sectors
    if (sectors.length === 0) {
        return null // or some placeholder component
    }

    // Separate the first sector from the rest
    const [firstSector, ...otherSectors] = sectors


    // Render the first sector outside the accordion
    const firstSectorElement = (
        <div key={firstSector.getId()}>
            {firstSector.getProperties().map((prop) => (
                <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
        </div>
    )

    // Map the rest of the sectors to accordion items
    const accordionItems = otherSectors.map((sector) => {
        // Determine if the sector has more than 8 properties
        const isLargeSector = sector.getProperties().length > 8

        const icon = (sectorId) => {
            if (sectorId === "Flex Properties") {
                return <Tooltip color="blue" multiline
                                w={200}
                                withArrow openDelay={400}  label="Only use for flex layout">
                    <IconExclamationCircle size="1rem" />
                </Tooltip>;
            } else if (sectorId === "Grid Properties") {
                return <Tooltip color="blue" multiline
                                w={200}
                                withArrow openDelay={400}  label="Only use for grid layout">
                    <IconExclamationCircle size="1rem" />
                </Tooltip>;
            } else if (sectorId === "Grid Item Properties") {
                return <Tooltip color="blue" multiline
                                w={200}
                                withArrow openDelay={400}  label="Only use if the parent block is a grid layout">
                    <IconExclamationCircle size="1rem" />
                </Tooltip>;
            } else {
                return null; // Return null if none of the conditions are met
            }
        };
        return (
            <Accordion.Item key={sector.getId()} value={sector.getId()}>
                <Accordion.Control icon={icon(sector.getId())}>
                    {sector.getName()}
                </Accordion.Control>
                <Accordion.Panel>
                    <div className={isLargeSector ? 'flex flex-wrap  items-center' : ''}>
                        {sector.getProperties().map((prop, index) => (
                            // Apply 'w-full' to the first item and 'w-1/2' to the rest if it's a large sector
                            <div key={prop.getId()} className={isLargeSector ? (index === 0 ? 'w-full' : 'w-1/2') : ''}>
                                <StylePropertyField prop={prop} />
                            </div>
                        ))}
                    </div>
                </Accordion.Panel>
            </Accordion.Item>
        )
    })

    return (
        <div className="gjs-custom-style-manager text-left mt-2">
            {/* Render the first sector element */}
            {firstSectorElement}

            {/* Render the filtered sectors within the accordion */}
            <Accordion classNames={classes}>
                {accordionItems}
            </Accordion>
        </div>
    )
}