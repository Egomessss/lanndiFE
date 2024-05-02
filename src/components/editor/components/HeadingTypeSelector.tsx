import { useState } from 'react';
import { useEditor } from '@/components/editor/context/EditorInstance';
import { Select } from '@mantine/core';

export const HeadingTypeSelector = () => {
  const editor = useEditor();

  const [value, setValue] = useState(editor.getSelected()?.get('tagName')); // Initial value for controlled Select component
  // console.log("heading",value)
  const data = [
    {
      label: 'Heading One - H1',
      value: 'h1',
    },
    {
      label: 'Heading Two - H2',
      value: 'h2',
    },
    {
      label: 'Heading Three - H3',
      value: 'h3',
    },
    {
      label: 'Heading Four - H4',
      value: 'h4',
    },
    {
      label: 'Heading Five - H5',
      value: 'h5',
    },
    {
      label: 'Heading Six - H6',
      value: 'h6',
    },
  ];

  const handleHeadingChange = (selectedValue: any) => {

    const selectedElement = editor.getSelected();
    // const selectedElementClass = selectedElement?.classes;
    // const selectedElementAttributes = selectedElement?.attributes;
    const selectedElementInnerHtml = selectedElement?.__innerHTML();
    if (selectedElement) {

      const newHeading = selectedElement.replaceWith(`<${selectedValue} >${selectedElementInnerHtml}</${selectedValue}>`);

      editor.select(newHeading);
    }
  };
  return <Select size="xs" label="Heading type"
                 data={data}
                 value={value}
                 onChange={handleHeadingChange} />;
};