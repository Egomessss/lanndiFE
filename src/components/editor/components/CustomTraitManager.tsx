import { TraitsResultProps, useEditor } from '@/components/editor/wrappers';
import TraitPropertyField from '@/components/editor/components/TraitPropertyField';
import { ActionIcon, Button, Modal, TextInput } from '@mantine/core';
import { HeadingTypeSelector } from '@/components/editor/components/HeadingTypeSelector';
import { HtmlElementSelector } from '@/components/editor/components/HtmlElementSelector';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import React, { useEffect, useState } from 'react';
import { IconCheck, IconTrash } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

// const data = editor?.getProjectData();
// const pagesData = editor?.Pages.getAll().map(page => {
//   const component = page.getMainComponent();
//   const pageData = page.attributes;
//   return {
//     pageId: pageData.id,
//     name: pageData.name,
//     slug: pageData.slug,
//     title: pageData.title,
//     description: pageData.description,
//     html: editor.getHtml({ component }),
//     css: editor.getCss({ component }),
//     js: editor.getJs({ component }),
//   };

function removeCSSRules(cssString:string) {
  const rulesToRemove = [
    /\*\s*\{\s*box-sizing:\s*border-box;\s*\}/g,
    /body\s*\{\s*margin:\s*0;\s*\}/g,
  ];

  let cleanedCSS = cssString;

  rulesToRemove.forEach((rule) => {
    cleanedCSS = cleanedCSS.replace(rule, '');
  });

  return cleanedCSS;
}
function formatCSS(cssString: string): string {
  // Split the input string into individual block sections (selectors + declarations)
  // First, remove the unwanted CSS rules
  const cleanedCSS = removeCSSRules(cssString);

  // Split the cleaned CSS string into individual block sections (selectors + declarations)
  const blocks = cleanedCSS.split('}').filter(Boolean); // Remove any empty strings


  let formattedCSS = '';

  blocks.forEach((block) => {
    const splitBlock = block.split('{');
    if (splitBlock.length < 2) return; // Skip this iteration if there's no '{'

    const [selectors, declarations] = splitBlock;
    const formattedDeclarations = declarations
      .trim()
      .split(';')
      .filter(Boolean) // Remove any empty strings resulting from split
      .map((declaration) => `  ${declaration.trim()};\n`) // Add indentation and newline to each declaration
      .join('');

    formattedCSS += `${selectors.trim()} {\n${formattedDeclarations}}\n\n`;
  });

  return formattedCSS;
}

export const CssCode = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState('');

  const editor = useEditor();
  const component = editor.getSelected();

  useEffect(() => {
    if (component) {
      // @ts-ignore
      const formatedCss = formatCSS(editor.getCss({ component }));

      setValue(formatedCss);
    }
  }, [component]);



  // console.log("value",value);
  // console.log('css', componentCss);

  const handleClick = () => {
    console.log('css', value);
    editor.Css.addRules(value);
    // setValue('')
  };


  return <div className="flex items-start gap-2 flex-col w-full ">
    <p>CSS Editor</p>
    <Modal opened={opened} size="xl" centered onClose={close} title="Block CSS">
      <CodeMirror
        value={value} height="400px"  theme="dark"
        extensions={[langs.css(), EditorView.lineWrapping]}
        onChange={setValue}
      />
      <Button my="1rem" fullWidth onClick={handleClick} size="xs">Save CSS Changes</Button>
    </Modal>
    <Button fullWidth onClick={open} size="xs">Edit CSS</Button>
  </div>;
};

export const SvgContentCode = () => {

  const editor = useEditor();


  const [value, setValue] = useState(() => editor.getSelected()?.toHTML());


  const onChange = React.useCallback((val: string) => {
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

function removeAttributes(attributes: any) {
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
                // readOnly
                className="w-full"
                label={key}
                placeholder="Attribute Key"
                // @ts-ignore
                value={value}
                // onChange={(event) => setAttributeKey(event.currentTarget.value)}
                // rightSection={<ActionIcon size="sm" onClick={handleAddAttribute}>
                //   <IconCheck size="1rem" />
                // </ActionIcon>}
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
      {/*<CustomAttributes />*/}
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value!) && <HeadingTypeSelector />}
      <HtmlElementSelector />
      {value === 'svg' && <SvgContentCode />}
      <CssCode />
      <Button onClick={() => editor.runCommand('edit-script')} size="xs" mb="4">
        Edit Javascript
      </Button>
    </div>
  );
}

