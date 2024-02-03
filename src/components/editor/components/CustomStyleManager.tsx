import { Accordion, ActionIcon, Divider, ScrollArea, Text } from '@mantine/core'
import * as React from 'react'

import StylePropertyField from './StylePropertyField'
import { StylesResultProps } from '../wrappers/StylesProvider'
import { IconFile } from '@tabler/icons-react'
import classes from './CustomStyleManager.module.css'
import { useEditorInstance } from '@/components/editor/context/EditorInstance'

export default function CustomStyleManager({
                                               sectors,
                                           }: Omit<StylesResultProps, 'Container'>) {

    const { editor } = useEditorInstance()
    const sm = editor?.StyleManager

    const gridItemId = 'gridItem';
    let excludeGridItem = false;

    // const selectedComponent = sm?.getSelected()
    // let selectComponentsDisplay = ''
    //
    // console.log("component",selectedComponent)
    // if (selectedComponent.attributes.style.display === 'flex' || selectedComponent.attributes.style.display === 'grid') {
    //
    //     // selectComponentsDisplay = selectedComponent.attributes.style.display
    //
    // }


    const selectedParents = sm?.getSelectedParents()


    if (selectedParents && selectedParents.length > 0) {
        excludeGridItem = true; // Initially assume you need to exclude the gridItem
        selectedParents.forEach(parent => {
            // Check if display style is specifically 'grid', then do not exclude gridItem
            if (parent.attributes.style.display === 'grid') {
                excludeGridItem = false; // Found a grid, so do not exclude
                return; // Exit the loop early since we found a grid display
            }
        });
    }

    // Check if there are any sectors
    if (sectors.length === 0) {
        return null // or some placeholder component
    }

    // Exclude the 'gridItem' sector if the condition is met
    const filteredSectors = excludeGridItem ? sectors.filter(sector => sector.getId() !== gridItemId) : sectors;

    // Separate the first sector from the rest
    const [firstSector, ...otherSectors] = filteredSectors;



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

            {/* Render the filtered sectors within the accordion */}
            <Accordion classNames={classes}>
                {accordionItems}
            </Accordion>
        </div>
    );
}