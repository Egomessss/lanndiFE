import { useEditor } from '@/components/editor/context/EditorInstance';
import { useState } from 'react';
import { ActionIcon, Select, TextInput, Tooltip } from '@mantine/core';
import { IconCheck, IconPlus } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

export const HtmlElementSelector = () => {
  const editor = useEditor();
  const [isEditing, setIsEditing] = useState(false); // New state to manage editing mode
  const [customValue, setCustomValue] = useState(''); // State to hold custom input value
  const [valueHtml, setValueHtml] = useState(() => editor.getSelected()?.get('tagName')); // Default to 'nav' or any sensible default

  const htmlElements = [
    { label: 'Navigation - nav', value: 'nav' },
    { label: 'Section - section', value: 'section' },
    { label: 'Article - article', value: 'article' },
    { label: 'Aside - aside', value: 'aside' },
    { label: 'Header - header', value: 'header' },
    { label: 'Footer - footer', value: 'footer' },
    { label: 'Main Content - main', value: 'main' },
    { label: 'Paragraph - p', value: 'p' },
    { label: 'Heading One - h1', value: 'h1' },
    { label: 'Heading Two - h2', value: 'h2' },
    { label: 'Heading Three - h3', value: 'h3' },
    { label: 'Heading Four - h4', value: 'h4' },
    { label: 'Heading Five - h5', value: 'h5' },
    { label: 'Heading Six - h6', value: 'h6' },
    { label: 'Div - div', value: 'div' },
    { label: 'Anchor - a', value: 'a' },
    { label: 'Button - button', value: 'button' },
  ];

  const handleElementChange = (selectedValue:any) => {
    const selectedOption = htmlElements.find(option => option.value === selectedValue);
    const label = selectedOption ? selectedOption.label : '';
    setValueHtml(selectedValue); // Update state for controlled component

    const selectedElement = editor.getSelected();
    if (selectedElement) {
      selectedElement.set({
        tagName: selectedValue,
        name: label,
      });
    }
  };

  const saveCustomValue = () => {
    if (customValue === '') {
      notifications.show({
        color: 'red',
        title: 'Error!',
        message: 'Please insert a valid html element',
      });
    } else {
      handleElementChange(customValue);
      setValueHtml(customValue)
      setIsEditing(false); // Exit editing mode after saving
    }
  };

  return (

    <>
      {isEditing ? (
        <TextInput
          label="Enter new html element"
          size="xs"
          value={customValue}
          onChange={(event) => setCustomValue(event.target.value)}
          placeholder="Enter HTML element type"
          leftSection={<ActionIcon onClick={saveCustomValue} size="sm">
            <IconCheck size="1rem" />
          </ActionIcon>}
        />

      ) : (
        <Select
          size="xs"
          label="Change HTML Element type"
          data={htmlElements}
          value={valueHtml}
          onChange={handleElementChange}
          leftSection={
            <Tooltip label="Add new HTML type">
              <ActionIcon size="sm" onClick={() => setIsEditing(true)}>
                <IconPlus size="1rem" />
              </ActionIcon>
            </Tooltip>
          }
        />
      )}
    </>

  );

};