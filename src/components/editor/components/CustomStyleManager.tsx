import { Accordion, Button } from '@mantine/core';
import * as React from 'react';
import { useState } from 'react';

import StylePropertyField from './StylePropertyField';
import { StylesResultProps } from '../wrappers/StylesProvider';
import classes from './CustomStyleManager.module.css';
import { useEditor } from '@/components/editor/context/EditorInstance';


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


  const [value, setValue] = useState<string | null>(null);
  // const [activeTab, setActiveTab] = useState(sectors.length > 0 ? sectors[0].getId().toString() : '');
  // Map the rest of the sectors to accordion items
  const accordionItems = otherSectors.filter(sector => sector.isOpen()).map((sector) => {

    const propertiesLength = sector.getProperties().length;
    const className = getClassName(propertiesLength);

    return (
      <Accordion.Item key={sector.getId()} value={sector.getId()}>
        <Accordion.Control>
          {sector.getName()}
        </Accordion.Control>
        {value === sector.getId() && ( // Conditionally render Accordion.Panel based on value state
          <Accordion.Panel>
            <div className={className}>
              {sector.getProperties().map((prop) => (
                <StylePropertyField key={prop.getId()} prop={prop} />
              ))}
            </div>
          </Accordion.Panel>
        )}
      </Accordion.Item>
    );
  });


  return (
    <div className="gjs-custom-style-manager text-left mt-2 ">
      {/*<Button onClick={onClick}>Set</Button>*/}
      {/* Render the first sector element */}
      {firstSectorElement}
      <Accordion value={value} onChange={setValue}
                 classNames={classes}>
        {accordionItems}
      </Accordion>

    </div>
  );
}

