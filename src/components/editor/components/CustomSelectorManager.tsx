import * as React from 'react'
import { SelectorsResultProps, useEditor } from '../wrappers'
import {
    ActionIcon,
    Pill,
    PillsInput,
    Select,
    TagsInput,
    Tooltip,
} from '@mantine/core'
import { IconComponents, IconSelector } from '@tabler/icons-react'


export default function CustomSelectorManager({
                                                  selectors,
                                                  selectedState,
                                                  states,
                                                  targets,
                                                  setState,
                                                  addSelector,
                                                  removeSelector,
                                              }: Omit<SelectorsResultProps, 'Container'>) {
    const addNewSelector = () => {
        const next = selectors.length + 1
        addSelector({ name: `new-${next}`, label: `New ${next}` })
    }

    const editor = useEditor()

    const targetStr = targets.join(', ')

    const stateOptions = states.map((state) => ({
        value: state.id,
        label: state.getName(),
    }))
    console.log(selectors.map((selector) => selector.toString()))
    return (
        <div className="gjs-custom-selector-manager flex h-[18%] flex-col  gap-2 px-2 text-left">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2">
                    <Tooltip label="Apply style changes to all components with the same class">
                        <ActionIcon className="h-full">
                            <IconComponents />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Apply style changes to only selected components">
                        <ActionIcon className="h-full">
                            <IconSelector />
                        </ActionIcon>
                    </Tooltip>
                </div>

                <Select
                    value={selectedState}
                    onChange={(ev) => setState(ev.target.value)}
                    data={states.map((state) => ({
                        value: state.id,
                        label: state.getName(),
                    }))}
                    size="xs"
                    placeholder="-State-"
                    className="w-1/2"
                />
            </div>


            <PillsInput size="xs"
            >
                <Pill.Group>
                    {selectors.map((selector) => (
                        <Pill key={selector.getLabel()}>{selector.getLabel()}</Pill>
                    ))}
                    <PillsInput.Field placeholder="Add class" />
                </Pill.Group>
            </PillsInput>
            <PillsInput size="xs"
            >
                <Pill.Group>
                    {selectors.map((selector) => (
                        <Pill key={selector.getLabel()}>{selector.getLabel()}</Pill>
                    ))}
                    <PillsInput.Field placeholder="Component" />
                </Pill.Group>

            </PillsInput>
            {/*<div className="flex min-h-[45px] flex-wrap items-center gap-2 rounded border bg-black/30 p-2">*/}
            {/*    {selectors.map((selector) => (*/}
            {/*        <div*/}
            {/*            key={selector.toString()}*/}
            {/*            className="flex items-center gap-1 whitespace-nowrap rounded bg-sky-500 px-2 py-1"*/}
            {/*        >*/}
            {/*            <div>{selector.getLabel()}</div>*/}
            {/*            <button*/}
            {/*                type="button"*/}
            {/*                onClick={() => removeSelector(selector)}*/}
            {/*            >*/}
            {/*                <AiOutlineClose />*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    Selected:{' '}*/}
            {/*    <span className="opacity-70">{targetStr || 'None'}</span>*/}
            {/*</div>*/}
        </div>
    )
}
