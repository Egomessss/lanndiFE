import type { Trait } from 'grapesjs';
import * as React from 'react';
import { Button, Checkbox, Select, Switch, Textarea, TextInput } from '@mantine/core';
import { useEditor } from '@/components/editor/context/EditorInstance';


interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
  trait: Trait;
}
const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function TraitPropertyField({
                                             trait,
                                             ...rest
                                           }: StylePropertyFieldProps) {
  const editor = useEditor();
  // console.log(trait);


  const handleChange = (value: string) => {
    trait.setValue(value);
  };

  const onChange = (value: any) => {
    handleChange(value);
  };


  // console.log(trait);
  const handleButtonClick = () => {
    const command = trait.get('command');
    if (command) {
      typeof command === 'string'
        ? editor.runCommand(command)
        : command(editor, trait);
    }
  };

  const type = trait.getType();
  const defValue = trait.getDefault() || trait.attributes.placeholder;
  const value = trait.getValue();
  const options = trait.getOptions().map((option) => ({
    value: trait.getOptionId(option),
    label: trait.getOptionLabel(option),
  }));

  // console.log(trait);
  let inputToRender = (
    <TextInput
      label={capitalizeFirstLetter(trait.getLabel())}
      size="xs"
      placeholder={defValue || ''}
      value={value}
      onChange={(event) => trait.setValue(event.currentTarget.value)}
    />
  );

  // console.log('traitpropertyfield', value)

  switch (type) {
    case 'select': {
      inputToRender = (
        <Select
          label={trait.getLabel()}
          size="xs"
          value={value}
          onChange={onChange}
          data={options}
        />
      );
    }
      break;
    case 'color': {
      inputToRender = (
        <TextInput
          label={trait.getLabel()}
          size="xs"
          placeholder={defValue}
          value={value}
          onChange={onChange}
        />
      );
    }
      break;
    case 'checkbox': {
      inputToRender = (
        <Checkbox
          label={trait.getLabel()}
          size="xs"
          checked={value}
          onChange={(event) =>
            trait.setValue(event.currentTarget.checked)
          }
        />
      );
    }
      break;
    case 'switch': {
      inputToRender = (
        <Switch label={trait.getLabel()}
                size="xs"
                checked={value}
                onChange={(event) =>
                  trait.setValue(event.currentTarget.checked)
                } />
      );
    }
      break;
    case 'button': {
      inputToRender = (
        <Button
          size="xs"
          fullWidth
          onClick={handleButtonClick}
        >
          {trait.getLabel()}
        </Button>
      );
    }
      break;
  }

  return (
    <div
      {...rest}
      className=" w-full "
    >
      {inputToRender}
    </div>
  );
}
