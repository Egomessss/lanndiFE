'use client'

import {
    Property,
    PropertyComposite, PropertyNumber,
    PropertyRadio,
    PropertySelect,
    PropertySlider,
    PropertyStack,
} from 'grapesjs'

import {
    ActionIcon,
    Button,
    ColorInput,
    NumberInput,
    Popover,
    SegmentedControl,
    Select,
    Slider,
    TextInput,
    ThemeIcon,
    Tooltip,
} from '@mantine/core'
import {useEditor} from '../wrappers'
import React, {useState} from 'react'
import {
    IconArrowDown,
    IconArrowUp,
    IconCircleFilled,
    IconExclamationCircle,
    IconPalette,
    IconPlus,
    IconScaleOutline,
    IconX,
} from '@tabler/icons-react'
import ColorPicker from 'react-best-gradient-color-picker'
import classes from './StylePropertyField.module.css'


interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
    prop: Property;
}


export default function StylePropertyField({
                                               prop,
                                               ...rest
                                           }: StylePropertyFieldProps) {

    const editor = useEditor()


    const handleChange = (value: any) => {
        prop.upValue(value)
        console.log(prop.getValue())
    }

    const onChange = (ev: any) => {
        handleChange(ev)
    }


    // Handle change in select value
    const handleSizeChange = (newValue: any) => {
        // console.log(newValue)
        // @ts-ignore
        prop.upUnit(newValue)
        // console.log('log', prop.getUnit())
    }

    const openAssets = () => {
        const {Assets} = editor
        Assets.open({
            select: (asset, complete) => {
                console.log({complete})
                prop.upValue(asset.getSrc(), {partial: !complete})
                complete && Assets.close()
            },
            types: ['image'],
            accept: 'image/*',
        })
    }


    const type = prop.getType()
    const defValue = prop.getDefaultValue()
    const canClear = prop.canClear()
    const hasValue = prop.hasValue()
    const value = prop.getValue()
    const valueString = hasValue ? value : ''
    const valueWithDef = hasValue ? value : defValue


    let inputToRender = (
        <TextInput
            className="col-span-1"
            // @ts-ignore
            rightSection={<Tooltip multiline w={200} color="blue" label={prop.attributes.tooltip}><IconExclamationCircle
                size="1rem"/></Tooltip>}
            placeholder={defValue}
            value={valueString}
            onChange={onChange}
            size="xs"
        />
    )


    switch (type) {
        case 'number': {
            const numberProp = prop as PropertyNumber
            inputToRender = (
                <NumberInput
                    size="xs"
                    stepHoldDelay={500}
                    stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
                    placeholder={defValue}
                    value={numberProp.getValue()}
                    onChange={onChange}
                    rightSectionWidth={30}
                    min={numberProp.getMin()}
                    max={numberProp.getMax()}
                    rightSection={<Select
                        classNames={classes}
                        size="xs"
                        variant="unstyled"
                        placeholder="Unit"
                        value={numberProp.getUnit()}
                        onChange={handleSizeChange}
                        data={numberProp.getUnits()}
                    />}
                />
            )
        }
            break
        case 'radio': {
            const radioProp = prop

            inputToRender = (
                <SegmentedControl
                    value={prop.getValue()}
                   size='xs'
                    fullWidth
                    onChange={onChange}
                    // @ts-ignore
                    data={radioProp.getOptions().map((option) => ({
                        // @ts-ignore
                        value: radioProp.getOptionId(option),
                        label: (
                            <Tooltip color="blue" multiline
                                     w={200}
                                // @ts-ignore
                                     withArrow openDelay={400} label={radioProp.getOptionLabel(option)}>
                                <div className="flex items-center justify-center  w-full">
                                    <span className="mt-1"
                                          dangerouslySetInnerHTML={{__html: option.icon}}/>
                                </div>
                            </Tooltip>
                        ),
                    }))}
                />
            )
        }
            break
        case 'select': {
            const selectProp = prop as PropertySelect

            inputToRender = (
                <Select
                    size="xs"
                    placeholder={value}
                    value={value}
                    onChange={onChange}
                    data={selectProp.getOptions().map((option) => ({
                        value: selectProp.getOptionId(option),
                        label: selectProp.getOptionLabel(option),
                    }))}
                />

            )
        }
            break
        case 'composite': {
            const compositeProp = prop as PropertyComposite
            inputToRender = (
                <div className="flex flex-wrap">
                    {
                        compositeProp.getProperties().map((prop, index) => {
                            // Determine the width class based on index and total length
                            const widthClass = compositeProp.getProperties().length > 4 && compositeProp.getProperties().length < 6
                                ? (index === 0 ? 'w-full' : 'w-1/2')
                                : 'w-1/2'

                            return (
                                <div key={prop.getId()} className={widthClass}>
                                    <StylePropertyField prop={prop}/>
                                </div>
                            )
                        })
                    }
                </div>

            )
        }

            break
        case 'color': {
            inputToRender = (
                <Popover position="left-start" shadow="md">
                    <Popover.Target>
                        <Button justify="space-between" leftSection={<IconPalette size="1rem"/>}
                                rightSection={
                                    <IconCircleFilled className={`text-[${value}]`} size="1rem"/>} variant="default"
                                fullWidth
                                size="xs">Pick</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <ColorPicker hideOpacity hideAdvancedSliders hideColorGuide height={200} width={280}
                                     value={value} onChange={onChange}/>
                    </Popover.Dropdown>
                </Popover>

            )
        }
            break
        case 'slider': {
            const sliderProp = prop as PropertySlider

            inputToRender = (
                <Slider
                    size="xs"
                    value={sliderProp.getValue()}
                    min={sliderProp.getMin()}
                    max={sliderProp.getMax()}
                    onChange={onChange}
                />
            )
        }
            break
    }

    return (
        <div
            {...rest}
            className="mb-3 px-1 w-full"
        >
            <div
                className={`mb-2 flex items-center justify-between w-full text-xs  whitespace-nowrap  ${canClear ? 'text-blue-300' : ''}`}
            >
                <div className="flex-grow capitalize">{prop.getLabel()}</div>
                {canClear && (
                    <ActionIcon size="xs" variant="subtle" onClick={() => prop.clear()}>
                        <IconX size="0.6rem"/>
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
    )
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