import type { Trait } from 'grapesjs'
import * as React from 'react'
import { Button, Checkbox, Select, Switch, Textarea, TextInput } from '@mantine/core'
import { useEditor } from '@/components/editor/context/EditorInstance'


interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
    trait: Trait
}

export default function TraitPropertyField({
    trait,
    ...rest
}: StylePropertyFieldProps) {
    const editor = useEditor()

    const handleChange = (value: any) => {
        // console.log('value', value)
        trait.setValue(value)
    }

    const handleButtonClick = () => {
        const command = trait.get('command')
        if (command) {
            typeof command === 'string'
                ? editor.runCommand(command)
                : command(editor, trait)
        }
    }

    const type = trait.getType()
    const defValue = trait.getDefault() || trait.attributes.placeholder
    const value = trait.getValue()

    let inputToRender = (
        <TextInput
            placeholder={defValue}
            value={value}
            onChange={(event)=> trait.setValue(event.currentTarget.value)}
        />
    )
    const data = trait.getOptions().map((option) => ({
        value: trait.getOptionId(option),
        label: trait.getOptionLabel(option),
    }))

    // console.log('traitpropertyfield', value)

    switch (type) {

        case 'select':
            {
                inputToRender = (
                    <Select
                        value={value}
                        onChange={handleChange}
                        data={data}
                    />
                )
            }
            break
        case 'color':
            {
                inputToRender = (
                    <TextInput
                        placeholder={defValue}
                        value={value}
                        onChange={handleChange}
                    />
                )
            }
            break
        case 'checkbox':
            {
                inputToRender = (
                    <Checkbox
                        checked={value === '_blank'}
                        onChange={(event) =>
                            trait.setValue(event.currentTarget.checked)
                        }
                    />
                )
            }
            break
        case 'switch':
        {
            inputToRender = (
                <Switch checked={value} onChange={(event) =>
                    trait.setValue(event.currentTarget.checked)
                }/>
            )
        }
            break
        case 'button':
            {
                inputToRender = (
                    <Button
                        fullWidth
                        onClick={handleButtonClick}
                    >
                        {trait.getLabel()}
                    </Button>
                )
            }
            break
    }

    return (
        <div
            {...rest}
            className="mb-3 w-full px-1"
        >
            <div className="mb-2 flex items-center">
                <div className="flex-grow capitalize">{trait.getLabel()}</div>
            </div>
            {inputToRender}
        </div>
    )
}
