import * as React from 'react'
import { SelectorsResultProps, useEditor } from '../wrappers'
import {
    ActionIcon,
    Pill,
    PillsInput,
    Select,
    TagsInput, ThemeIcon,
    Tooltip,
} from '@mantine/core'
import {
    IconBorderAll,
    IconComponents,
    IconCurrentLocation,
    IconExclamationCircle,
    IconSelectAll,
    IconSelector,
} from '@tabler/icons-react'


export default function CustomSelectorManager({
                                                  selectors,
                                                  selectedState,
                                                  targetsIds,
                                                  targets,
                                                  states,
                                                  setState,
                                                  addSelector,
                                                  removeSelector,
                                              }: Omit<SelectorsResultProps, 'Container'>) {

    const addNewSelector = () => {
        const next = selectors.length + 1
        addSelector({ name: `new-${next}`, label: `New ${next}` })
    }



    const editor = useEditor()
    const sm = editor.Selectors

    const isComponentFirst = sm.getComponentFirst()

    const setComponentFirst = () => sm.setComponentFirst(true)
    const setClassesFirst = () => sm.setComponentFirst(false)

    console.log('targets',targets)
    return (
        <div className=" flex flex-col  gap-2 px-2 text-left">
            <div className="flex items-center justify-between">
                <Tooltip
                    label="Use this to change how your block reacts with a user action. e.g. Change background colour on hover">
                    <ThemeIcon variant="light">
                        <IconExclamationCircle size="1rem" />
                    </ThemeIcon>
                </Tooltip>
                <Select
                    clearable
                    value={selectedState}
                    onChange={(newValue: any) => {
                        setState(newValue)
                    }}
                    data={states.map((state) => ({
                        key: state.id,
                        value: state.id,
                        label: state.getLabel(),
                    }))}
                    size="xs"
                    placeholder="-No state-"
                    className="w-1/2"
                />
            </div>

            <div className="flex gap-2 items-center w-full">
                <Tooltip label="Apply style changes to all blocks with the same class">
                    <ActionIcon variant={!isComponentFirst ? 'filled':'subtle'} onClick={setClassesFirst}  className="h-full">
                        <IconBorderAll size="1rem" />
                    </ActionIcon>
                </Tooltip>
                <PillsInput className="w-full" size="xs"
                >
                    <Pill.Group>
                        {selectors.map((selector) => (
                            <Pill key={selector.getLabel()}>{selector.getLabel()}</Pill>
                        ))}
                    </Pill.Group>
                </PillsInput>
            </div>
            <div className="flex gap-2 items-center w-full">
                <Tooltip label="Apply style changes to only selected blocks(block ID)">
                    <ActionIcon variant={isComponentFirst ? 'filled' : 'subtle'} onClick={setComponentFirst}
                                className="h-full">
                        <IconCurrentLocation size="1rem" />
                    </ActionIcon>
                </Tooltip>
                <PillsInput className="w-full" size="xs"
                >
                    <Pill.Group>
                        {targetsIds.map((target) => (
                            <Pill key={target}>#{target}</Pill>
                        ))}
                    </Pill.Group>

                </PillsInput></div>
        </div>
    )
}
