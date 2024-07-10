import { Accordion, Button } from '@mantine/core';
import * as React from 'react';
import { useEffect, useState } from 'react';

import StylePropertyField from './StylePropertyField';
import { StylesResultProps } from '../wrappers/StylesProvider';
import classes from './CustomStyleManager.module.css';
import { useEditor } from '@/components/editor/context/EditorInstance';


function getClassName(propertiesLength: number) {
  // console.log(propertiesLength);
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

  const selected = editor.getSelected();

  // editor.on('device:select', (device) => {
  //   let zoomLevel;
  //   switch (device.getName()) {
  //     case 'Mobile(SM)':
  //       zoomLevel = 100;
  //       // editor.Canvas.setCoords(0, -100);
  //       break;
  //     case 'Tablet(MD)':
  //       zoomLevel = 90;
  //       editor.Canvas.setCoords(-5, -100);
  //       break;
  //     case 'Laptop(LG)':
  //       zoomLevel = 80;
  //       editor.Canvas.setCoords(-45, -40);
  //       break;
  //     case 'Desktop(XL)':
  //       zoomLevel = 60;
  //       editor.Canvas.setCoords(-165, -100);
  //       break;
  //     default:
  //       zoomLevel = 100; // Default zoom level if device is not recognized
  //   }
  //   editor.Canvas.setZoom(zoomLevel);
  //
  //   // const frameHeight =  editor.Canvas.getBody().clientHeight;
  //   // console.log('frameh',frameHeight);
  //   // editor.Canvas.getFrame().set('height', frameHeight);
  //   // editor.Canvas.getFrame().set('width', frameHeight);
  //
  // });


// console.log('style manager');

// const sm = editor.StyleManager;
// console.log();
//
//
// // console.log('selected component', selectedComponent);
// const childRule = editor.getSelected()?.getClasses();
// console.log('parent rules', sm.getSelectedParents().map(rule => rule.toCSS()))
// const parentClass = editor.getSelected()?.parent()?.getClasses();
//
//
// const selectedComponentChildRule = sm.getProperty('layout', 'display')?.getValue();
// const selectedComponentParentRule = editor.Css.getRule(`.${parentClass}`)?.getStyle();
// // console.log('selectedComponentChildRule', selectedComponentChildRule);
// // console.log('selectedComponentParent', selectedComponentParentRule);
//
//
// // @ts-ignore
// if (selectedComponentChildRule === 'flex') {
//   const sector = editor.StyleManager?.getSector('flexProperties');
//   sector?.setOpen(true);
//
//   // @ts-ignore
// } else if (selectedComponentChildRule !== 'flex' || selectedComponentChildRule !== 'undefined') {
//   const sector = editor.StyleManager?.getSector('flexProperties');
//   sector?.setOpen(false);
// }
//
// // @ts-ignore
// if (selectedComponentChildRule === 'grid') {
//   const sector = editor.StyleManager?.getSector('gridProperties');
//   sector?.setOpen(true);
//   // @ts-ignore
// } else if (selectedComponentChildRule !== 'grid' || selectedComponentChildRule !== 'undefined') {
//   const sector = editor.StyleManager?.getSector('gridProperties');
//   sector?.setOpen(false);
// }
//
//
// // @ts-ignore
// if (selectedComponentParentRule === 'grid' ) {
//   const sector = sm?.getSector('gridItem');
//   sector?.setOpen(true);
//   // @ts-ignore
// } else if (selectedComponentParentRule !== 'grid' || selectedComponentParentRule !== 'undefined') {
//   const sector = sm?.getSector('gridItem');
//   sector?.setOpen(false);
// }
//
// // @ts-ignore
// if (selectedComponentParentRule === 'flex' ) {
//   const sector = sm?.getSector('flexItem');
//   sector?.setOpen(true);
//   // @ts-ignore
// } else if (selectedComponentParentRule !== 'flex' || selectedComponentParentRule !== 'undefined') {
//   const sector = sm?.getSector('flexItem');
//   sector?.setOpen(false);
// }

  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    // Reset the value state when selected changes
    setValue(null);
  }, [selected]);

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


// const [activeTab, setActiveTab] = useState(sectors.length > 0 ? sectors[0].getId().toString() : '');
// Map the rest of the sectors to accordion items
  const accordionItems = otherSectors
    // .filter(sector => sector.isOpen())
    .map((sector) => {
      // console.log(sector);
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

      {/* Render the first sector element */}
      {firstSectorElement}
      <Accordion value={value} onChange={setValue}
                 classNames={classes}>
        {accordionItems}
      </Accordion>

    </div>
  );
}

