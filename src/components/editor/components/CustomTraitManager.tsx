import { TraitsResultProps, useEditor } from '@/components/editor/wrappers';
import TraitPropertyField from '@/components/editor/components/TraitPropertyField';
import { ActionIcon, Button, Divider, Modal, TextInput } from '@mantine/core';
import { HeadingTypeSelector } from '@/components/editor/components/HeadingTypeSelector';
import { HtmlElementSelector } from '@/components/editor/components/HtmlElementSelector';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import React, { useEffect, useState } from 'react';
import { IconCheck, IconTrash } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import useUser from '@/hooks/use-user';
import Link from 'next/link';

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

function removeCSSRules(cssString: string) {
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
    <Modal opened={opened} size="xl" centered onClose={close} title="Block CSS">
      <CodeMirror
        value={value} height="400px" theme="dark"
        extensions={[langs.css(), EditorView.lineWrapping]}
        onChange={setValue}
      />
      <Button my="1rem" fullWidth onClick={handleClick} size="xs">Save CSS Changes</Button>
    </Modal>
    <Button fullWidth onClick={open} size="xs">Edit CSS</Button>
  </div>;
};

export const GlobalCssCode = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState('');

  const editor = useEditor();
  const component = editor.Pages.getSelected()?.getMainComponent();

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
    <Modal opened={opened} size="xl" centered onClose={close} title="Global CSS">
      <CodeMirror
        value={value} height="400px" theme="dark"
        extensions={[langs.css(), EditorView.lineWrapping]}
        onChange={setValue}
      />
      <Button my="1rem" fullWidth onClick={handleClick} size="xs">Save Global CSS Changes</Button>
    </Modal>
    <Button fullWidth onClick={open} size="xs">Edit Global CSS</Button>
  </div>;
};

export const GlobalJsCode = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState('');

  const editor = useEditor();
  const component = editor.Pages.getSelected()?.getMainComponent();

  useEffect(() => {
    if (component) {
      // @ts-ignore
      const globalJs = editor.getJs({ component });
      console.log('global js', globalJs);
      setValue(globalJs);
    }
  }, [component]);


  // console.log("value",value);
  // console.log('css', componentCss);

  const handleClick = () => {
    console.log('global js', value);
    component?.set('script', value);
    // setValue('')
  };


  return <div className="flex items-start gap-2 flex-col w-full ">
    <Modal opened={opened} size="xl" centered onClose={close} title="Global Javascript">
      <CodeMirror
        value={value} height="400px" theme="dark"
        extensions={[langs.javascript(), EditorView.lineWrapping]}
        onChange={setValue}
      />
      <Button my="1rem" fullWidth onClick={handleClick} size="xs">Save Global Js Changes</Button>
    </Modal>
    <Button fullWidth onClick={open} size="xs">Edit Global Javascript</Button>
  </div>;
};

export const SvgContentCode = () => {

  const [opened, { open, close }] = useDisclosure(false);
  const editor = useEditor();

  const component = editor.getSelected();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (component) {
      // @ts-ignore
      setValue(editor.getHtml({ component }));
    }
  }, [component]);

  // console.log("value",value);
  // console.log('css', componentCss);
  const handleClick = () => {
    editor.getSelected()?.set({ content: value });
    close();
  };

  return <div className="flex items-start gap-2 flex-col w-full ">
    <p>SVG Editor</p>
    <Modal opened={opened} size="xl" centered onClose={close} title="SVG Content">
      <CodeMirror
        value={value} height="400px" theme="dark"
        extensions={[langs.html(), EditorView.lineWrapping]}
        onChange={setValue}
      />
      <Button my="1rem" fullWidth onClick={handleClick} size="xs">Save SVG Changes</Button>
    </Modal>
    <Button fullWidth onClick={open} size="xs">Edit SVG</Button>
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
  const { user } = useUser();
  const component = editor.getSelected();
  const [attributeKey, setAttributeKey] = useState('');
  const [attributeValue, setAttributeValue] = useState('');


  const attributes = removeAttributes(editor.getSelected()?.getAttributes());
  // console.log('attrbiutes', attributes);
  // Function to handle adding attributes
  const handleAddAttribute = () => {
    // Get the currently selected component
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
                disabled={user?.subscription === 'free'}
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

              <ActionIcon disabled={user?.subscription === 'free'} color="red" size="sm"
                          onClick={handleRemoveAttribute}>
                <IconTrash size="1rem" />
              </ActionIcon>


            </div>);
        })}
      </div>

      <TextInput
        disabled={user?.subscription === 'free'}
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
  const { user } = useUser();
  const editor = useEditor();
  const value = editor.getSelected()?.get('tagName');


  return (
    <div className="gjs-custom-trait-manager text-left w-full flex flex-col gap-4 my-4">
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
      {user?.subscription === 'free' && <> <p className="text-xs text-red-500">You must be subscribed for further
        customization</p>
        <Button component={Link} href="/plans" size="xs" mb="4">
          Subscribe Now
        </Button></>}
      {/*<Divider className="w-full"  label="Custom attributes" />*/}
      {/*<CustomAttributes />*/}
      <Divider className="w-full" label="Extra Customization" />
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value!) && <HeadingTypeSelector />}
      {/*<HtmlElementSelector />*/}
      {value === 'svg' && <SvgContentCode />}
      {
        user?.subscription !== 'free' ? <>
          <CssCode />
          <Button onClick={() => editor.runCommand('edit-script')} size="xs" mb="4">
            Edit Javascript
          </Button>
          {/*<Divider className="w-full" label="Global Customization" />*/}
          {/*<GlobalCssCode />*/}
          {/*<GlobalJsCode />*/}
        </> : <>
          <Button disabled size="xs" mb="4">
            Edit CSS
          </Button>
          <Button disabled size="xs" mb="4">
            Edit Javascript
          </Button>
        </>
      }

    </div>
  );
}

