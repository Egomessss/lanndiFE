import { Accordion, ActionIcon, Divider, ScrollArea, Select, Text, TextInput, ThemeIcon, Tooltip } from '@mantine/core';
import * as React from 'react';

import StylePropertyField from './StylePropertyField';
import { StylesResultProps } from '../wrappers/StylesProvider';
import { IconExclamationCircle, IconFile } from '@tabler/icons-react';
import classes from './CustomStyleManager.module.css';
import { useEditor, useEditorInstance } from '@/components/editor/context/EditorInstance';
import { SelectSize } from '@/components/editor/components/SelectSize';
import { useEffect } from 'react';



function getClassName(propertiesLength: number) {
  if (propertiesLength > 8) {
    return 'flex flex-wrap items-center';
  } else if (propertiesLength === 6) {
    return 'grid grid-cols-2';
  }
  return ''; // Default className if no condition is met
}

export default function CustomStyleManager({
                                             sectors,
                                           }: Omit<StylesResultProps, 'Container'>) {

  const editor = useEditor();
  const sm = editor.StyleManager;

  const selectedComponent = editor.StyleManager.getSelected()?.getStyle('display');
  const rule = editor.getSelected()?.parent()?.getClasses();

  const selectedComponentParent = editor.Css.getRule(`.${rule}`)?.getStyle('display');


  // @ts-ignore
  if (selectedComponent === 'flex') {
    const sector = sm?.getSector('flexProperties');
    sector?.setOpen(true);

    // @ts-ignore
  } else if (selectedComponent !== 'flex' || selectedComponent !== 'undefined') {
    const sector = sm?.getSector('flexProperties');
    sector?.setOpen(false);
  }

// @ts-ignore
  if (selectedComponent === 'grid') {
    const sector = sm?.getSector('gridProperties');
    sector?.setOpen(true);
    // @ts-ignore
  } else if (selectedComponent !== 'grid' || selectedComponent !== 'undefined') {
    const sector = sm?.getSector('gridProperties');
    sector?.setOpen(false);
  }

  // @ts-ignore
  if (selectedComponentParent === 'grid') {
    const sector = sm?.getSector('gridItem');
    sector?.setOpen(true);
    // @ts-ignore
  } else if (selectedComponentParent !== 'grid' || selectedComponentParent !== 'undefined') {
    const sector = sm?.getSector('gridItem');
    sector?.setOpen(false);
  }


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
  const accordionItems = otherSectors.filter(sector => sector.isOpen()).map((sector) => {
    const propertiesLength = sector.getProperties().length;
    const className = getClassName(propertiesLength);

    return (
      <Accordion.Item key={sector.getId()} value={sector.getId()}>
        <Accordion.Control>
          {sector.getName()}
        </Accordion.Control>
        <Accordion.Panel>
          <div className={className}>
            {sector.getProperties().map((prop) => (
              // Apply 'w-full' to the first item and 'w-1/2' to the rest if it's a large sector
              <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <div className="gjs-custom-style-manager text-left mt-2 ">
      {/* Render the first sector element */}
      {firstSectorElement}
      {/* Render the filtered sectors within the accordion */}
      <Accordion multiple defaultValue={['flexProperties','gridProperties', 'gridItem']} classNames={classes}>
        {accordionItems}
      </Accordion>
    </div>
  );
}



{/*<div className="flex flex-col gap-2 px-1">*/
}
{/*    <div className="flex justify-end w-full">*/
}
{/*        <Tooltip label="">*/
}
{/*            <ThemeIcon variant="light">*/
}
{/*                <IconExclamationCircle size="1rem"/>*/
}
{/*            </ThemeIcon>*/
}
{/*        </Tooltip></div>*/
}

{/*    <div className="grid grid-cols-3">*/
}
{/*        <div className="flex items-center gap-2 w-full col-span-1">*/
}
{/*            /!*<TextInput label="Width" size="xs" />*!/*/
}
{/*            <Tooltip label="Width">*/
}
{/*                <span className="text-[10px]">W</span>*/
}
{/*            </Tooltip>*/
}
{/*            <TextInput*/
}
{/*                size="xs"*/
}
{/*                w="40px"*/
}
{/*                variant="unstyled"*/
}
{/*                placeholder="Value"*/
}
{/*            />*/
}
{/*        </div>*/
}
{/*        <div className="flex items-center gap-2 w-full col-span-1">*/
}
{/*            /!*<TextInput label="Width" size="[10px]" />*!/*/
}
{/*            <Tooltip label="Width">*/
}
{/*                <span className="text-[10px]">MW</span>*/
}
{/*            </Tooltip>*/
}

{/*            <SelectSize*/
}
{/*                //     data={[*/
}
{/*                //   { value: 'px', label: 'Fixed' },*/
}
{/*                //   { value: '%', label: 'Relative' },*/
}
{/*                //   { value: 'em', label: 'Scale with block font size - em' },*/
}
{/*                //   { value: 'rem', label: 'Scale with page font size - rem' },*/
}
{/*                //   { value: '100%', label: 'Full - 100%' },*/
}
{/*                //   { value: 'fit-content', label: 'Fit Content' },*/
}
{/*                //   { value: '100vw', label: 'Viewport - 100vw' },*/
}
{/*                //   { value: 'auto', label: 'auto' },*/
}
{/*                // ]}*/
}

{/*            />*/
}
{/*        </div>*/
}
{/*        <div className="flex items-center gap-2 w-full col-span-1">*/
}
{/*            /!*<TextInput label="Width" size="[10px]" />*!/*/
}
{/*            <Tooltip label="Width">*/
}
{/*                <span className="text-[10px]">mW</span>*/
}
{/*            </Tooltip>*/
}

{/*            <SelectSize*/
}
{/*                //     data={[*/
}
{/*                //   { value: 'px', label: 'Fixed' },*/
}
{/*                //   { value: '%', label: 'Relative' },*/
}
{/*                //   { value: 'em', label: 'Scale with block font size - em' },*/
}
{/*                //   { value: 'rem', label: 'Scale with page font size - rem' },*/
}
{/*                //   { value: '100%', label: 'Full - 100%' },*/
}
{/*                //   { value: 'fit-content', label: 'Fit Content' },*/
}
{/*                //   { value: '100vw', label: 'Viewport - 100vw' },*/
}
{/*                //   { value: 'auto', label: 'auto' },*/
}
{/*                // ]}*/
}

{/*            />*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*    <div className="grid grid-cols-3">*/
}
{/*        <div className="flex items-center gap-2 w-full col-span-1">*/
}
{/*            /!*<TextInput label="Width" size="xs" />*!/*/
}
{/*            <Tooltip label="Width">*/
}
{/*                <span className="text-[10px]">H</span>*/
}
{/*            </Tooltip>*/
}

{/*            <SelectSize*/
}
{/*                //     data={[*/
}
{/*                //   { value: 'px', label: 'Fixed' },*/
}
{/*                //   { value: '%', label: 'Relative' },*/
}
{/*                //   { value: 'em', label: 'Scale with block font size - em' },*/
}
{/*                //   { value: 'rem', label: 'Scale with page font size - rem' },*/
}
{/*                //   { value: '100%', label: 'Full - 100%' },*/
}
{/*                //   { value: 'fit-content', label: 'Fit Content' },*/
}
{/*                //   { value: '100vw', label: 'Viewport - 100vw' },*/
}
{/*                //   { value: 'auto', label: 'auto' },*/
}
{/*                // ]}*/
}

{/*            />*/
}
{/*        </div>*/
}
{/*        <div className="flex items-center gap-2 w-full col-span-1">*/
}
{/*            /!*<TextInput label="Width" size="[10px]" />*!/*/
}
{/*            <Tooltip label="Width">*/
}
{/*                <span className="text-[10px]">MH</span>*/
}
{/*            </Tooltip>*/
}

{/*            <SelectSize*/
}
{/*                //     data={[*/
}
{/*                //   { value: 'px', label: 'Fixed' },*/
}
{/*                //   { value: '%', label: 'Relative' },*/
}
{/*                //   { value: 'em', label: 'Scale with block font size - em' },*/
}
{/*                //   { value: 'rem', label: 'Scale with page font size - rem' },*/
}
{/*                //   { value: '100%', label: 'Full - 100%' },*/
}
{/*                //   { value: 'fit-content', label: 'Fit Content' },*/
}
{/*                //   { value: '100vw', label: 'Viewport - 100vw' },*/
}
{/*                //   { value: 'auto', label: 'auto' },*/
}
{/*                // ]}*/
}

{/*            />*/
}
{/*        </div>*/
}
{/*        <div className="flex items-center gap-2 w-full col-span-1">*/
}
{/*            /!*<TextInput label="Width" size="[10px]" />*!/*/
}
{/*            <Tooltip label="Width">*/
}
{/*                <span className="text-[10px]">mH</span>*/
}
{/*            </Tooltip>*/
}

{/*            <SelectSize*/
}
{/*                //     data={[*/
}
{/*                //   { value: 'px', label: 'Fixed' },*/
}
{/*                //   { value: '%', label: 'Relative' },*/
}
{/*                //   { value: 'em', label: 'Scale with block font size - em' },*/
}
{/*                //   { value: 'rem', label: 'Scale with page font size - rem' },*/
}
{/*                //   { value: '100%', label: 'Full - 100%' },*/
}
{/*                //   { value: 'fit-content', label: 'Fit Content' },*/
}
{/*                //   { value: '100vw', label: 'Viewport - 100vw' },*/
}
{/*                //   { value: 'auto', label: 'auto' },*/
}
{/*                // ]}*/
}

{/*            />*/
}
{/*        </div>*/
}
{/*    </div>*/
}

{/*</div>*/
}