import { TraitsResultProps, useEditor } from '@/components/editor/wrappers';
import TraitPropertyField from '@/components/editor/components/TraitPropertyField';
import { ActionIcon, Box, Button, TextInput } from '@mantine/core';
import { HeadingTypeSelector } from '@/components/editor/components/HeadingTypeSelector';
import { HtmlElementSelector } from '@/components/editor/components/HtmlElementSelector';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import React, { useState } from 'react';
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';

export const CssCode = () => {

  const editor = useEditor();

  const stylesObject = editor.getSelected()?.attributes.styles;

  const [value, setValue] = useState(stylesObject || '');

  const handleClick = () => {
    editor.Css.addRules(value);
  };

  return <div className="flex items-start gap-2 flex-col w-full">
    <p>CSS Editor</p>
    <div className="w-full text-xs">
      <CodeMirror
        value={value} height="200px" theme="dark"
        extensions={[langs.css(), EditorView.lineWrapping]}
        onChange={setValue} />
    </div>
    <Button onClick={handleClick} size="xs">Save Changes</Button>
  </div>;
};

export const SvgContentCode = () => {

  const editor = useEditor();


  const [value, setValue] = useState(() => editor.getSelected()?.toHTML());


  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  const handleClick = () => {
    editor.getSelected()?.set({ content: value });
  };

  return <div className="flex items-start gap-2 flex-col w-full">
    <p>Svg content</p>
    <div className="w-full text-xs">
      <CodeMirror
        value={value} height="200px" theme="dark"
        extensions={[langs.html(), EditorView.lineWrapping]}
        onChange={onChange} />
    </div>
    <Button onClick={handleClick} size="xs">Save Changes</Button>
  </div>;
};

function CustomAttributes() {

  const editor = useEditor(); // Custom hook to access the GrapeJS editor instance

  const [attributeKey, setAttributeKey] = useState('');
  const [attributeValue, setAttributeValue] = useState('');


  const attributes = editor.getSelected()?.getAttributes();
  // Function to handle adding attributes
  const handleAddAttribute = () => {
    const component = editor.getSelected(); // Get the currently selected component
    if (component) {
      component.addAttributes({ [attributeKey]: attributeValue }); // Add custom attribute
      setAttributeKey(''); // Reset attribute key input
      setAttributeValue(''); // Reset attribute value input
    }
  };

  // Function to handle removing attributes
  const handleRemoveAttribute = () => {
    const component = editor.getSelected(); // Get the currently selected component
    if (component) {
      component.removeAttributes([attributeKey]); // Remove specified attribute
      setAttributeKey(''); // Reset attribute key input
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-end">
      <div>
        {Object.entries(attributes || {}).map(([key, value]) => {
          return (
            <div key={key} className=" p-1 text-sm flex  justify-between flex-wrap  items-center px-1">
              <TextInput
                size="xs"
                label="Attribute Key"
                placeholder="Attribute Key"
                value={`${key}: ${value}`}
                // onChange={(event) => setAttributeKey(event.currentTarget.value)}
                rightSection={<div className="flex  gap-2 items-center">
                  <ActionIcon color="red" size="sm"
                              onClick={handleRemoveAttribute}>
                    <IconTrash size="1rem" />
                  </ActionIcon>
                  <ActionIcon size="sm" onClick={handleRemoveAttribute}>
                    <IconEdit size="1rem" />
                  </ActionIcon></div>}
              />


            </div>);
        })}
      </div>
      <TextInput
        size="xs"
        label="Attribute Key"
        placeholder="Attribute Key"
        value={attributeKey}
        onChange={(event) => setAttributeKey(event.currentTarget.value)}
      />
      <TextInput
        size="xs"
        label="Attribute Value"
        placeholder="Attribute Value"
        value={attributeValue}
        onChange={(event) => setAttributeValue(event.currentTarget.value)}
      />
      <Button size="xs" onClick={handleAddAttribute}>
        Add Attribute
      </Button>
      {/*<ActionIcon onClick={handleRemoveAttribute}>*/}
      {/*  <IconTrash size="1rem" />*/}
      {/*</ActionIcon>*/}
    </div>
  );

}

export default function CustomTraitManager({
                                             traits,
                                           }: Omit<TraitsResultProps, 'Container'>) {

  const editor = useEditor();
  const value = editor.getSelected()?.get('tagName');


  return (
    <div className="gjs-custom-trait-manager text-left w-full flex flex-col gap-2">
      {!traits.length ? (
        <div>No properties available</div>
      ) : (
        traits.map((trait) => (
          <TraitPropertyField
            key={trait.getId()}
            trait={trait}
          />
        ))
      )}
      <CustomAttributes />
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value!) && <HeadingTypeSelector />}
      <HtmlElementSelector />
      {value === 'svg' && <SvgContentCode />}
      <CssCode />


    </div>
  );
}

