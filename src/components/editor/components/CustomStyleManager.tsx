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
    const { editor } = useEditorInstance()
    const sm = editor?.StyleManager
    const selectedComponent  = editor?.getSelected()?.getStyle('display')
    const selectedComponentParent = editor?.getSelected()?.parent()?.getStyle('display')


    if (selectedComponent === 'flex') {
        const sector = sm?.getSector('flexProperties')
        sector?.setOpen(true)
    } else if (selectedComponent !== 'flex' || selectedComponent !== 'undefined') {
        const sector = sm?.getSector('flexProperties')
        sector?.setOpen(false)
    }

    if (selectedComponent === 'grid') {

         const sector = sm?.getSector('gridProperties')
        sector?.setOpen(true)
    } else if (selectedComponent !== 'grid' || selectedComponent !== 'undefined') {
         const sector = sm?.getSector('gridProperties')
        sector?.setOpen(false)
    }

    if (selectedComponentParent === 'grid') {
        console.log('true')
        const sector = sm?.getSector('gridItem')
        sector?.setOpen(true)
    } else if (selectedComponentParent !== 'grid' || selectedComponentParent !== 'undefined') {
        const sector = sm?.getSector('gridItem')
        sector?.setOpen(false)
    }



    // Check if there are any sectors
    if (sectors.length === 0) {
        return null // or some placeholder component
    }

    // Separate the first sector from the rest
    const [firstSector, ...otherSectors] = sectors

    console.log(otherSectors.filter(sector => sector.isOpen()))
    // Render the first sector outside the accordion
    const firstSectorElement = (
        <div key={firstSector.getId()}>
            {firstSector.getProperties().map((prop) => (
                <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
        </div>
    )

    // Map the rest of the sectors to accordion items
    const accordionItems = otherSectors.filter(sector => sector.isOpen()).map((sector) => {
        // Determine if the sector has more than 8 properties
        const isLargeSector = sector.getProperties().length > 8

        const icon = (sectorId) => {
            if (sectorId === 'Flex Properties') {
                return <Tooltip color="blue" multiline
                                w={200}
                                withArrow openDelay={400} label="Only use for flex layout">
                    <IconExclamationCircle size="1rem" />
                </Tooltip>
            } else if (sectorId === 'Grid Properties') {
                return <Tooltip color="blue" multiline
                                w={200}
                                withArrow openDelay={400} label="Only use for grid layout">
                    <IconExclamationCircle size="1rem" />
                </Tooltip>
            } else if (sectorId === 'Grid Item Properties') {
                return <Tooltip color="blue" multiline
                                w={200}
                                withArrow openDelay={400} label="Only use if the parent block is a grid layout">
                    <IconExclamationCircle size="1rem" />
                </Tooltip>
            } else {
                return null // Return null if none of the conditions are met
            }
        }
        return (
            <Accordion.Item key={sector.getId()} value={sector.getId()}>
                <Accordion.Control icon={icon(sector.getId())}>
                    {sector.getName()}
                </Accordion.Control>
                <Accordion.Panel>
                    <div className={isLargeSector ? 'flex flex-wrap  items-center' : ''}>
                        {sector.getProperties().map((prop, index) => (
                            // Apply 'w-full' to the first item and 'w-1/2' to the rest if it's a large sector

                                <StylePropertyField key={prop.getId()} prop={prop} />

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