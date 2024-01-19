import type {
    Property,
    PropertyComposite,
    PropertyRadio,
    PropertySelect,
    PropertySlider,
    PropertyStack,
} from 'grapesjs'

import { SegmentedControl, Select, Slider, TextInput, ThemeIcon } from '@mantine/core'
import { useEditor } from '../wrappers'
import React from 'react'
import { IconArrowDown, IconArrowUp, IconPlus, IconScaleOutline, IconX } from '@tabler/icons-react'


interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
    prop: Property
}

export default function StylePropertyField({
                                               prop,
                                               ...rest
                                           }: StylePropertyFieldProps) {
    const editor = useEditor()

    const handleChange = (value: any) => {
        prop.upValue(value)
    }

    const onChange = (ev: any) => {
        handleChange(ev.target.value)
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

    const type = prop.getType()
    const defValue = prop.getDefaultValue()
    const canClear = prop.canClear()
    const hasValue = prop.hasValue()
    const value = prop.getValue()
    const valueString = hasValue ? value : ''
    const valueWithDef = hasValue ? value : defValue

    let inputToRender = (
        <TextInput
            placeholder={defValue}
            value={valueString}
            onChange={(newValue) => handleChange(newValue)}
            size="small"
        />
    )

    switch (type) {
        case 'radio': {
            const radioProp = prop as PropertyRadio
            inputToRender = (
                <SegmentedControl
                    value={value}
                    size="xs"
                    onChange={(newValue) => handleChange(newValue)}
                    data={radioProp.getOptions().map((option) => ({
                        value: radioProp.getOptionId(option),
                        label: radioProp.getOptionLabel(option),
                    }))}
                />
            )
        }
            break
        case 'select': {
            const selectProp = prop as PropertySelect
            inputToRender = (
                <Select
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
                <TextInput
                    placeholder={defValue}
                    value={valueString}
                    onChange={(newValue) => handleChange(newValue)}

                    // InputProps={{
                    //     startAdornment: (
                    //         <InputAdornment position="start">
                    //             <div
                    //                 className={`w-[15px] h-[15px] ${ROUND_BORDER_COLOR}`}
                    //                 style={{
                    //                     backgroundColor: valueWithDef,
                    //                 }}>
                    //                 <input
                    //                     type="color"
                    //                     className="w-[15px] h-[15px] cursor-pointer opacity-0"
                    //                     value={valueWithDef}
                    //                     onChange={ev =>
                    //                         handleChange(ev.target.value)
                    //                     }
                    //                 />
                    //             </div>
                    //         </InputAdornment>
                    //     ),
                    // }}
                />
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
                <div
                    className="flex flex-wrap bg-black/20 p-2"
                >
                    {
                        compositeProp.getProperties().map((prop) => (
                            <StylePropertyField
                                key={prop.getId()}
                                prop={prop}
                            />
                        ))
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
                    className='flex min-h-[54px] flex-col gap-2 bg-black/20 p-2'


                >
                    {layers.map((layer) => (
                        <div
                            key={layer.getId()}

                        >
                            <div className="flex items-center gap-1 bg-slate-800 px-2 py-1">
                                <ThemeIcon
                                    size="small"
                                    onClick={() =>
                                        layer.move(layer.getIndex() - 1)
                                    }
                                >
                                    <IconArrowDown />
                                </ThemeIcon>
                                <ThemeIcon
                                    size="small"
                                    onClick={() =>
                                        layer.move(layer.getIndex() + 1)
                                    }
                                >
                                    <IconArrowUp />
                                </ThemeIcon>
                                <button
                                    className="flex-grow"
                                    onClick={() => layer.select()}
                                >
                                    {layer.getLabel()}
                                </button>
                                <div
                                    className='flex min-h-[17px] min-w-[17px] justify-center bg-white text-sm text-black'

                                    style={layer.getStylePreview({
                                        number: { min: -3, max: 3 },
                                        camelCase: true,
                                    })}
                                >
                                    {isTextShadow && 'T'}
                                </div>
                                <ThemeIcon
                                    size="small"
                                    onClick={() => layer.remove()}
                                >
                                    <IconScaleOutline />
                                </ThemeIcon>
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
            className={`mb-3 px-1 ${prop.isFull() ? 'w-full' : 'w-1/2'}`}

        >
            <div
                className={`mb-2 flex items-center ${canClear ? 'text-sky-300' : ''}`}

            >
                <div className="flex-grow capitalize">{prop.getLabel()}</div>
                {canClear && (
                    <button onClick={() => prop.clear()}>
                        <IconX />
                    </button>
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
