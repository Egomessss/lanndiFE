import { TraitsResultProps, useEditor } from '@/components/editor/wrappers';
import TraitPropertyField from '@/components/editor/components/TraitPropertyField';
import { ActionIcon, Box, Button, TextInput } from '@mantine/core';
import { HeadingTypeSelector } from '@/components/editor/components/HeadingTypeSelector';
import { HtmlElementSelector } from '@/components/editor/components/HtmlElementSelector';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import React, { useState } from 'react';
import { IconCheck, IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';
import type { Selector } from 'grapesjs';

export const CssCode = () => {

  const editor = useEditor();


  const component = editor.getSelected();
  let componentCss = editor.CodeManager.getCode(component, 'css', {
    cssc: editor.CssComposer,
  });

  const [value, setValue] = useState(componentCss || '');
  // console.log("value",value);

  const handleClick = () => {
    editor.Css.addRules(value);
    setValue('')
  };

  return <div className="flex items-start gap-2 flex-col w-full ">
    <p>CSS Editor</p>
    <div className="w-full text-xs">
      <CodeMirror
        value={componentCss} height="200px" theme="dark"
        extensions={[langs.css(), EditorView.lineWrapping]}
        onChange={setValue}
      />
    </div>
    <Button fullWidth onClick={handleClick} size="xs">Save CSS Changes</Button>
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

function removeAttributes(attributes) {
  // Clone the attributes object to avoid mutating the original object
  const clonedAttributes = { ...attributes };

  // Remove 'id' and 'class' keys if they exist
  delete clonedAttributes.id;
  delete clonedAttributes.class;

  return clonedAttributes;
}

function CustomAttributes() {

  const editor = useEditor(); // Custom hook to access the GrapeJS editor instance

  const [attributeKey, setAttributeKey] = useState('');
  const [attributeValue, setAttributeValue] = useState('');


  const attributes = removeAttributes(editor.getSelected()?.getAttributes());
  // console.log('attrbiutes', attributes);
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
            <div key={key} className="flex  gap-4 justify-end flex-wrap  items-center ">
              <TextInput
                size="xs"
                className="w-full"
                label="Attribute Key"
                placeholder="Attribute Key"
                value={`${key}: "${value}"`}
                // onChange={(event) => setAttributeKey(event.currentTarget.value)}
                rightSection={<ActionIcon size="sm" onClick={handleAddAttribute}>
                  <IconCheck size="1rem" />
                </ActionIcon>}
              />

              <ActionIcon color="red" size="sm"
                          onClick={handleRemoveAttribute}>
                <IconTrash size="1rem" />
              </ActionIcon>


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
    <div className="gjs-custom-trait-manager text-left w-full flex flex-col gap-4">
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
      <Button onClick={() => editor.runCommand('edit-script')} size="xs" mb="4">
        Edit Script Code
      </Button>

    </div>
  );
}

