'use client';

import {
  Property,
  PropertyComposite, PropertyNumber,
  PropertyRadio,
  PropertySelect,
  PropertySlider,
  PropertyStack,
} from 'grapesjs';

import {
  ActionIcon,
  Button,
  ColorInput, Input,
  NumberInput,
  Popover,
  SegmentedControl,
  Select,
  Slider,
  TextInput,
  ThemeIcon,
  Tooltip,
} from '@mantine/core';
import { useEditor } from '../wrappers';
import React, { useEffect, useState } from 'react';
import {
  IconArrowDown,
  IconArrowUp,
  IconCircleFilled,
  IconExclamationCircle,
  IconPalette,
  IconPlus,
  IconScaleOutline,
  IconX,
} from '@tabler/icons-react';
import ColorPicker from 'react-best-gradient-color-picker';
import classes from './StylePropertyField.module.css';


interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
  prop: Property;
}


export default function StylePropertyField({
                                             prop,
                                             ...rest
                                           }: any) {

  // get value from editor
  // when user input new value delay 1 sec after typing
  // send value after delay

  const editor = useEditor();

  const [inputKey, setInputKey] = useState(Date.now());

  const component = editor.getSelected();

// Reset the input when the selected component changes
  useEffect(() => {
    // Generate a new key to force the Input component to remount
    setInputKey(Date.now());
  }, [component]); // Dependency array includes `component` to trigger effect when it changes



  const handleChange = (value: any) => {
    prop.upValue(value);
  };

  const onChange = (ev: any) => {
    handleChange(ev);
  };

  const onChangeNumber = (value: string | number) => {
    handleChange(value);
  };

  const onChangeText = (ev: any) => {
    handleChange(ev.currentTarget.value);
  };


  // Handle change in select value
  const handleSizeChange = (newValue: any) => {
    // @ts-ignore
    prop.upUnit(newValue);

  };

  const openAssets = () => {
    const { Assets } = editor;
    Assets.open({
      select: (asset, complete) => {
        // console.log({ complete });
        prop.upValue(asset.getSrc(), { partial: !complete });
        complete && Assets.close();
      },
      types: ['image'],
      accept: 'image/*',
    });
  };


  const type = prop.getType();
  const style = prop.getName();

  const defValue = prop.getDefaultValue();
  const canClear = prop.canClear();
  const hasValue = prop.hasValue();
  const value = prop.getValue();
  const valueString = hasValue ? value : '';
  const valueWithDef = hasValue ? value : defValue;
  // console.log('property', prop.getName(), 'value', value);


  let inputToRender = (
    <Input
      key={inputKey}
      className="col-span-1"
      // default={valueWithDef}
      // @ts-ignore
      defaultValue={valueString}
      placeholder={valueWithDef}
      // value={valueString}
      onChange={onChangeText}
      size="xs"
    />
  );


  switch (type) {
    case 'number': {
      const numberProp = prop as PropertyNumber;
      inputToRender = (
        <NumberInput
          size="xs"
          stepHoldDelay={500}
          stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
          placeholder={defValue}
          defaultValue={value}
          onChange={onChangeNumber}
          rightSectionWidth={30}
          min={numberProp.getMin()}
          max={numberProp.getMax()}
          rightSection={numberProp.getUnits().length > 2 && <Select
            classNames={classes}
            size="xs"
            variant="unstyled"
            placeholder="Unit"
            value={numberProp.getUnit()}
            onChange={handleSizeChange}
            data={numberProp.getUnits()}
          />}
        />
      );
    }
      break;
    case 'radio': {
      const radioProp = prop;

      inputToRender = (
        <SegmentedControl
          value={prop.getValue()}
          size="xs"
          fullWidth
          onChange={onChange}
          // @ts-ignore
          data={radioProp.getOptions().map((option) => ({
            // @ts-ignore
            value: radioProp.getOptionId(option),
            label: (
              <Tooltip color="gray" multiline
                       w={200}
                // @ts-ignore
                       withArrow openDelay={400} label={radioProp.getOptionLabel(option)}>
                <div className="flex items-center justify-center  w-full">
                                    <span className="mt-1"
                                          dangerouslySetInnerHTML={{ __html: option.icon }} />
                </div>
              </Tooltip>
            ),
          }))}
        />
      );
    }
      break;
    case 'select': {
      const selectProp = prop as PropertySelect;

      inputToRender = (
        <Select
          size="xs"
          placeholder={value}
          value={value}
          onChange={onChange}
          clearable
          data={selectProp.getOptions().map((option) => ({
            value: selectProp.getOptionId(option),
            label: selectProp.getOptionLabel(option),
          }))}
        />

      );
    }
      break;
    case 'composite': {
      const compositeProp = prop as PropertyComposite;
      inputToRender = (
        <div className="flex flex-wrap">
          {
            compositeProp.getProperties().map((prop, index) => {
              // Determine the width class based on index and total length
              const widthClass = compositeProp.getProperties().length > 4 && compositeProp.getProperties().length < 6
                ? (index === 0 ? 'w-full' : 'w-1/2')
                : 'w-1/2';

              return (
                <div key={prop.getId()} className={widthClass}>
                  <StylePropertyField prop={prop} />
                </div>
              );
            })
          }
        </div>

      );
    }

      break;
    case 'color': {
      inputToRender = (
        <Popover position="left-start" shadow="md">
          <Popover.Target>
            <Button justify="space-between" leftSection={<IconPalette size="1rem" />}
                    rightSection={
                      <IconCircleFilled className={`text-[rgb(140, 36, 193)]`} size="1rem" />} variant="default"
                    fullWidth
                    size="xs">Pick</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <ColorPicker className="text-xs" hideAdvancedSliders hideColorGuide height={180} width={280}
                         value={value} onChange={onChange} />
          </Popover.Dropdown>
        </Popover>

      );
    }
      break;
    case 'slider': {
      const sliderProp = prop as PropertySlider;
      inputToRender = (
        <Slider
          p="md"
          mb="xl"
          size="sm"
          min={0}
          max={1}
          value={sliderProp.getValue()}
          onChange={onChange}
          step={0.1}
          marks={[
            { value: 0, label: '0%' },
            { value: 1, label: '100%' },
          ]}
        />
      );
    }
      break;
  }


  // @ts-ignore
  return (
    <div
      {...rest}
      className="mb-3 px-1 w-full"
    >
      <div
        className={`mb-2 flex items-center justify-between w-full text-xs  whitespace-nowrap  ${canClear ? 'text-blue-300' : ''}`}
      >
        <div className="flex-grow capitalize flex gap-1 items-center  ">
          {/* if the prop.attributes.tooltip doesnt exist dont render the tooltip*/}
          <Tooltip position="left" className="cursor-pointer" multiline w={200} openDelay={180} color="gray"
            //@ts-ignore
                   label={<div className="flex flex-col gap-2"><span>{prop.attributes.tooltip}</span>CSS property
                     - {style}<span></span></div>}><span>{prop.getLabel()}</span></Tooltip>
        </div>
        {canClear && (
          <ActionIcon size="xs" variant="subtle" onClick={() => prop.clear()}>
            <IconX size="0.6rem" />
          </ActionIcon>
        )}
        {/*{type === 'stack' && (*/}
        {/*    <ThemeIcon*/}
        {/*        size="small"*/}
        {/*        className="!ml-2"*/}
        {/*        onClick={() =>*/}
        {/*            (prop as PropertyStack).addLayer({}, {at: 0})*/}
        {/*        }*/}
        {/*    >*/}
        {/*        <IconPlus/>*/}
        {/*    </ThemeIcon>*/}
        {/*)}*/}
      </div>
      {inputToRender}
    </div>
  );
}
// case 'stack': {
//     const stackProp = prop as PropertyStack
//     const layers = stackProp.getLayers()
//     const isTextShadow = stackProp.getName() === 'text-shadow'
//     inputToRender = (
//         <div
//             className="flex min-h-[54px] flex-col gap-2 bg-black/20 p-2"
//
//
//         >
//             {layers.map((layer) => (
//                 <div
//                     key={layer.getId()}
//
//                 >
//                     <div className="flex items-center gap-1 bg-slate-800 px-2 py-1">
//                         <ActionIcon
//                             size="small"
//                             onClick={() =>
//                                 layer.move(layer.getIndex() - 1)
//                             }
//                         >
//                             <IconArrowDown />
//                         </ActionIcon>
//                         <ActionIcon
//                             size="small"
//                             onClick={() =>
//                                 layer.move(layer.getIndex() + 1)
//                             }
//                         >
//                             <IconArrowUp />
//                         </ActionIcon>
//                         <button
//                             className="flex-grow"
//                             onClick={() => layer.select()}
//                         >
//                             {layer.getLabel()}
//                         </button>
//                         <div
//                             className="flex min-h-[17px] min-w-[17px] justify-center bg-white text-sm text-black"
//
//                             style={layer.getStylePreview({
//                                 number: { min: -3, max: 3 },
//                                 camelCase: true,
//                             })}
//                         >
//                             {isTextShadow && 'T'}
//                         </div>
//                         <ActionIcon
//                             size="small"
//                             onClick={() => layer.remove()}
//                         >
//                             <IconScaleOutline />
//                         </ActionIcon>
//                     </div>
//                     {layer.isSelected() && (
//                         <div className="flex flex-wrap p-2">
//                             {stackProp
//                                 .getProperties()
//                                 .map((prop) => (
//                                     <StylePropertyField
//                                         key={prop.getId()}
//                                         prop={prop}
//                                     />
//                                 ))}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     )
// }
//     break