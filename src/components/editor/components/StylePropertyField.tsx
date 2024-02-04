import type {
    Property,
    PropertyComposite,
    PropertyRadio,
    PropertySelect,
    PropertySlider,
    PropertyStack,
} from 'grapesjs'

import {
    ActionIcon,
    Box, Button,
    Center,
    NumberInput,
    Popover,
    SegmentedControl,
    Select,
    Slider,
    TextInput,
    ThemeIcon,
    Tooltip,
} from '@mantine/core'
import { useEditor } from '../wrappers'
import React, { useState } from 'react'
import {
    IconArrowDown,
    IconArrowsUpDown,
    IconArrowUp,
    IconCircleFilled,
    IconCode,
    IconPalette,
    IconPlus,
    IconScaleOutline,
    IconX,
} from '@tabler/icons-react'
import ColorPicker from 'react-best-gradient-color-picker'
import classes from './StylePropertyField.module.css'

const selectProp = {
    getOptions: () => ['px', 'em', 'rem', '%', 'vh', 'vw'],
    getOptionId: (option: string) => option,
    getOptionLabel: (option: string) => option,
}

interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
    prop: Property;
}

export default function StylePropertyField({
                                               prop,
                                               ...rest
                                           }: StylePropertyFieldProps) {

    const editor = useEditor()


    const handleChange = (ev: any) => {
        prop.upValue(ev)

    }


    const onChange = (ev: any) => {

        handleChange(ev.target.value)
    }

    const [sizeValue, setSizeValue] = useState<string>('px') // Default value

    // Handle change in select value
    const handleSizeChange = (newValue: any) => {
        setSizeValue(newValue)
        // Apply the selected CSS unit in your style logic
        // Example: updateStyleProperty('fontSize', `12${newValue}`);
    }

    const openAssets = () => {
        const { Assets } = editor
        Assets.open({
            select: (asset, complete) => {
                console.log({ complete })
                prop.upValue(asset.getSrc(), { partial: !complete })
                complete && Assets.close()
            },
            types: ['image'],
            accept: 'image/*',
        })
    }
    const [color, setColor] = useState('rgba(255,255,255,1)')
    const type = prop.getType()

    const defValue = prop.getDefaultValue()
    const canClear = prop.canClear()
    const hasValue = prop.hasValue()

    const value = prop.getValue()
    const valueString = hasValue ? value : ''
    const valueWithDef = hasValue ? value : defValue


    let inputToRender = (
        <div className="">
            <NumberInput
                // hideControls
                // leftSection={
                // <ActionIcon>
                //    <IconArrowsUpDown size="1rem"/>
                // </ActionIcon>
                // }
                size="xs"
                stepHoldDelay={500}
                stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
                placeholder={defValue}
                value={valueString}
                onChange={(newValue) => handleChange(newValue)}
                // rightSectionWidth='md'
                rightSection={<Select
                    classNames={classes}
                    size="xs"
                    variant="unstyled"
                    placeholder="Unit"
                    value={sizeValue}
                    onChange={(newValue) => handleSizeChange(newValue)}
                    data={selectProp.getOptions().map((option) => ({
                        value: selectProp.getOptionId(option),
                        label: selectProp.getOptionLabel(option),
                    }))}
                />}
            />
        </div>
    )




    switch (type) {
        case 'text': {
            const radioProp = prop as PropertyRadio
            inputToRender = (
                <TextInput
                    placeholder={defValue}
                    value={valueString}
                    onChange={(newValue) => handleChange(newValue)}
                    size="small"
                />
            )
        }
            break
        case 'radio': {
            const radioProp = prop
            inputToRender = (
                <SegmentedControl
                    value={value}
                    size="xs"
                    fullWidth
                    onChange={handleChange}
                    data={radioProp.getOptions().map((option) => ({
                        value: radioProp.getOptionId(option),
                        label: (
                            <Tooltip color="blue" multiline
                                     w={200}
                                     withArrow openDelay={400} label={radioProp.getOptionLabel(option)}>
                                <div className="flex items-center justify-center  w-full">
                                    <span className="mt-1"
                                          dangerouslySetInnerHTML={{ __html: option.icon }} />
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
                    onChange={(newValue) => handleChange(newValue)}
                    data={selectProp.getOptions().map((option) => ({
                        value: selectProp.getOptionId(option),
                        label: selectProp.getOptionLabel(option),
                        name: selectProp.getOptionLabel(option), // You can adjust this according to your needs
                    }))}
                />

            )
        }
            break
        case 'color': {
            inputToRender = (
                <Popover position="left-end"
                         offset={10} width={200}  withArrow shadow="md">
                    <Popover.Target>
                        <Button justify="space-between" leftSection={<IconPalette size="1rem"/>} rightSection={<IconCircleFilled size="1rem"/>} variant="default" fullWidth size="xs">Pick</Button>
                    </Popover.Target>
                    <Popover.Dropdown >
                        <div style={{ background: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 0 6px rgb(0,0,0, .25)",
                            padding: "8px",
                            width: "310px",
                            zIndex: 102}}>  <ColorPicker value={color} onChange={setColor} /></div>

                    </Popover.Dropdown>
                </Popover>

            )
        }
            break
        case 'slider': {
            const sliderProp = prop as PropertySlider
            inputToRender = (
                <Slider
                    size="small"
                    value={parseFloat(value)}
                    min={sliderProp.getMin()}
                    max={sliderProp.getMax()}
                    step={sliderProp.getStep()}
                    onChange={(newValue) => handleChange(newValue)}
                />
            )
        }
            break
        case 'file': {
            inputToRender = (
                <div className="flex flex-col items-center gap-3">
                    {value && value !== defValue && (
                        <div
                            className="inline-block h-[50px] w-[50px] cursor-pointer rounded bg-cover bg-center"
                            style={{ backgroundImage: `url("${value}")` }}
                            onClick={() => handleChange('')}
                        />
                    )}
                    <button
                        type="button"
                        onClick={openAssets}

                    >
                        Select Image
                    </button>
                </div>
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
                                    <StylePropertyField prop={prop} />
                                </div>
                            )
                        })
                    }
                </div>

            )
        }
            break
        case 'stack': {
            const stackProp = prop as PropertyStack
            const layers = stackProp.getLayers()
            const isTextShadow = stackProp.getName() === 'text-shadow'
            inputToRender = (
                <div
                    className="flex min-h-[54px] flex-col gap-2 bg-black/20 p-2"


                >
                    {layers.map((layer) => (
                        <div
                            key={layer.getId()}

                        >
                            <div className="flex items-center gap-1 bg-slate-800 px-2 py-1">
                                <ActionIcon
                                    size="small"
                                    onClick={() =>
                                        layer.move(layer.getIndex() - 1)
                                    }
                                >
                                    <IconArrowDown />
                                </ActionIcon>
                                <ActionIcon
                                    size="small"
                                    onClick={() =>
                                        layer.move(layer.getIndex() + 1)
                                    }
                                >
                                    <IconArrowUp />
                                </ActionIcon>
                                <button
                                    className="flex-grow"
                                    onClick={() => layer.select()}
                                >
                                    {layer.getLabel()}
                                </button>
                                <div
                                    className="flex min-h-[17px] min-w-[17px] justify-center bg-white text-sm text-black"

                                    style={layer.getStylePreview({
                                        number: { min: -3, max: 3 },
                                        camelCase: true,
                                    })}
                                >
                                    {isTextShadow && 'T'}
                                </div>
                                <ActionIcon
                                    size="small"
                                    onClick={() => layer.remove()}
                                >
                                    <IconScaleOutline />
                                </ActionIcon>
                            </div>
                            {layer.isSelected() && (
                                <div className="flex flex-wrap p-2">
                                    {stackProp
                                        .getProperties()
                                        .map((prop) => (
                                            <StylePropertyField
                                                key={prop.getId()}
                                                prop={prop}
                                            />
                                        ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
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
                className={`mb-2 flex items-center justify-between w-full text-xs    ${canClear ? 'text-sky-300' : ''}`}

            >
                <div className="flex-grow capitalize">{prop.getLabel()}</div>
                {canClear && (
                    <ActionIcon size="xs" variant="subtle" onClick={() => prop.clear()}>
                        <IconX size="0.8rem" />
                    </ActionIcon>
                )}
                {type === 'stack' && (
                    <ThemeIcon
                        size="small"
                        className="!ml-2"
                        onClick={() =>
                            (prop as PropertyStack).addLayer({}, { at: 0 })
                        }
                    >
                        <IconPlus />
                    </ThemeIcon>
                )}
            </div>
            {inputToRender}
        </div>
    )
}
