import { useEditor } from '@/components/editor/wrappers';
import { ActionIcon, Button, Divider, Modal, ScrollArea, TextInput } from '@mantine/core';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import React, { useEffect, useState } from 'react';
import { IconBrandCss3, IconBrandJavascript, IconEdit, IconKey, IconTrash, IconWorld } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import useUser from '@/hooks/use-user';

// Function to format the CSS string
const formatCss = (cssString: any): string => {
  return cssString.replace(/}/g, '}\n\n').replace(/{/g, ' {\n  ').replace(/;/g, ';\n  ').replace(/\n  \n/g, '\n');
};

// Function to unformat the CSS string (minify)
const unformatCss = (cssString: string): string => {
  return cssString.replace(/\s+/g, ' ').replace(/}\s/g, '}').replace(/;\s/g, ';').replace(/\s{/g, '{').trim();
};


export const CssCode = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState('');

  const editor = useEditor();
  const component = editor.getSelected();


  // console.log('value', value);
  // console.log('css', componentCss);

  useEffect(() => {
    // @ts-ignore
    const formatedCss = formatCss(editor.getCss({ component, avoidProtected: true }));
    // @ts-ignore
    setValue(formatedCss);

  }, [opened]);


  const handleClick = () => {
    const unformattedCss = unformatCss(value); // Unformat the CSS for saving
    editor.CssComposer.setRule(unformattedCss); // Apply the edited CSS
    setValue('');
    close();
  };


  return <div className="flex items-start gap-2 flex-col w-full ">
    <Modal opened={opened} size="xl" centered onClose={close} title="Block CSS">
      <ul className="p-2">
        <li>Can add styles to selector</li>
        <li>Can modify style of a selector</li>
      </ul>
      <ul className="p-2 text-red-500">
        <li>Can&apos;t remove styles</li>
        <li>Can&apos;t change selectors name</li>
        <li>Can&apos;t add new selectors</li>
      </ul>
      <CodeMirror
        value={value} height="400px" theme="dark"
        extensions={[langs.css(), EditorView.lineWrapping]}
        onChange={setValue}
      />
      <Button my="1rem" fullWidth onClick={handleClick} size="xs">Save CSS Changes</Button>
    </Modal>
    <Button leftSection={<IconBrandCss3 size="1rem" />} fullWidth onClick={open} size="xs">Edit CSS</Button>
  </div>;
};

export const GlobalCssCode = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState('');
  // console.log('global css', value);
  const editor = useEditor();
  const component = editor.Pages.getSelected()?.getMainComponent();

  // console.log("value",value);
  // console.log('css', componentCss);

  useEffect(() => {
    // @ts-ignore
    const formatedCss = formatCss(editor.getCss({ avoidProtected: false }));
    // @ts-ignore
    setValue(formatedCss);

  }, [opened]);


  const handleClick = () => {
    const formattedCssCode = formatCss(value);
    editor.Css.clear()
    // console.log('css', formattedCssCode);
    // component?.set('style', value);
    editor.setStyle(formattedCssCode);
    setValue('');
    close();
  };


  return <div className="flex items-start gap-2 flex-col w-full ">
    <Modal opened={opened} size="xl" centered onClose={close} title="Global CSS">
      <ul className="p-2">
        <li>Can add styles to selector</li>
        <li>Can modify style of a selector</li>
      </ul>
      <ul className="p-2 text-red-500" >
        <li>Can&apos;t change selectors name</li>
        <li>Can&apos;t add new selectors</li>
      </ul>
      <CodeMirror
        value={value} height="400px" theme="dark"
        extensions={[langs.css(), EditorView.lineWrapping]}
        onChange={setValue}
      />
      <Button my="1rem" fullWidth onClick={handleClick} size="xs">Save Global CSS Changes</Button>
    </Modal>
    <Button justify="space-between" leftSection={<IconBrandCss3 size="1rem" />} rightSection={<IconWorld size="1rem" />}
            fullWidth onClick={open} size="xs">Edit Global CSS</Button>
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
      // console.log('global js', globalJs);
      setValue(globalJs);
    }
  }, [component, opened]);


  // console.log("value",value);
  // console.log('css', componentCss);

  const handleClick = () => {
    // console.log('global js', value);
    component?.set('script', value);
    // setValue('')
    editor.refresh();
    close();
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
    <Button justify="space-between" leftSection={<IconBrandCss3 size="1rem" />} rightSection={<IconWorld size="1rem" />}
            fullWidth onClick={open} size="xs">Edit Global Javascript</Button>
  </div>;
};


function CustomAttributes() {

  // open a modal to change already existing keys, filter out id, class

  const editor = useEditor(); // Custom hook to access the GrapeJS editor instance
  const { user } = useUser();
  const [opened, { open, close }] = useDisclosure(false);
  const component = editor.getSelected();
  const [attributeKey, setAttributeKey] = useState('');
  const [attributeValue, setAttributeValue] = useState('');
  const [refreshCounter, setRefreshCounter] = useState(0); // State to track changes


// if changing an already added attribute get the key also

  const attributes = editor.getSelected()?.getAttributes();

  const filteredAttributes = Object.entries(attributes || {}).reduce((acc, [key, value]) => {
    if (key !== 'id' && key !== 'class') {
      // @ts-ignore
      acc[key] = value;
    }
    return acc;
  }, {});

  // console.log('attrbiutes', attributes);
  // Function to handle adding attributes
  const handleAddAttribute = () => {
    if (component) {
      component.addAttributes({ [attributeKey]: attributeValue });
      setAttributeKey('');
      setAttributeValue('');
      setRefreshCounter((prev) => prev + 1); // Trigger re-render
    }
    if (opened) {
      close();
    }
  };

  // Function to handle removing attributes
  const handleRemoveAttribute = (keyToRemove: string) => {
    if (component) {
      component.removeAttributes([keyToRemove]);
      if (keyToRemove === attributeKey) {
        setAttributeKey('');
        setAttributeValue('');
      }
      setRefreshCounter((prev) => prev + 1); // Trigger re-render
      if (opened) {
        close();
      }
    }
  };
  const openModalWithAttribute = (key: string, value: string) => {
    setAttributeKey(key);
    setAttributeValue(value);
    open();
  };

  return (
    <>
      <Modal centered opened={opened} onClose={close} title="Edit Attribute">
        <TextInput
          readOnly
          disabled={user?.subscription === 'free'}
          size="xs"
          className="w-full"
          label="Attribute Key"
          value={attributeKey}
        />
        <TextInput
          disabled={user?.subscription === 'free'}
          size="xs"
          className="w-full mt-2"
          label="Attribute Value"
          value={attributeValue}
          onChange={(event) => setAttributeValue(event.currentTarget.value)}
        />
        <div className="flex gap-1 items-center w-full justify-end">
          <Button disabled={user?.subscription === 'free'} size="xs" my="md" onClick={() => handleAddAttribute()}>
            Save Changes
          </Button>
          <Button disabled={user?.subscription === 'free'} color="red" size="xs"
                  onClick={() => handleRemoveAttribute(attributeKey)}>
            Delete Attribute
          </Button>
        </div>
      </Modal>
      <div className="flex flex-col gap-2 justify-end">
        <TextInput
          disabled={user?.subscription === 'free'}
          size="xs"
          label="Attribute Key"
          placeholder="Attribute Key"
          value={attributeKey}
          onChange={(event) => setAttributeKey(event.currentTarget.value)}
        />
        <TextInput
          disabled={user?.subscription === 'free'}
          size="xs"
          label="Attribute Value"
          placeholder="Attribute Value"
          value={attributeValue}
          onChange={(event) => setAttributeValue(event.currentTarget.value)}
        />
        <Button disabled={user?.subscription === 'free'} leftSection={<IconKey size="1rem" />} size="xs"
                onClick={handleAddAttribute}>
          Add Attribute
        </Button>
        <ScrollArea offsetScrollbars h={250} w={200} py="md">
          <div className="flex flex-col gap-6 w-full">
            {Object.entries(filteredAttributes).map(([key, value]) => {
              return (
                <div key={key} className="flex  flex-col gap-2 justify-start  items-center">
                  <div className="flex gap-1 flex-col justify-start w-full text-sm text-wrap">
                    <p className="font-bold">{key}</p>
                    {/*// @ts-ignore*/}
                    <p className="text-xs w-full">{value}</p>
                  </div>
                  <div className="flex gap-1 justify-start w-full text-sm">
                    {/*// @ts-ignore*/}
                    <ActionIcon size="sm" onClick={() => openModalWithAttribute(key, value)}>
                      <IconEdit size="1rem" />
                    </ActionIcon>
                    <ActionIcon disabled={user?.subscription === 'free'} color="red" size="sm"
                                onClick={() => handleRemoveAttribute(key)}>
                      <IconTrash size="1rem" />
                    </ActionIcon>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </>

  );

}

export default function CustomAdvancedTraitManager() {
  const { user } = useUser();
  const editor = useEditor();


  return (
    <div className="gjs-custom-trait-manager text-left w-full flex flex-col gap-4 my-4">
      {user?.subscription === 'free' && <p className="text-xs text-red-500">Buy a plan to take advantage of all
        lanndi&apos;s features such as CSS and
        Javascript code editors</p>}
      <Divider className="w-full" label="Custom attributes" />
      <CustomAttributes />
      {user?.subscription !== 'free' ? <>
        <Divider className="w-full" label="Selected Block Customization" />
        <CssCode />
        <Button leftSection={<IconBrandJavascript size="1rem" />} onClick={() => editor.runCommand('edit-script')}
                size="xs" mb="4">
          Edit Javascript
        </Button>
        <Divider className="w-full" label="Global Customization" />
        <GlobalCssCode />
        <GlobalJsCode />
      </> : <>

        {/*<Button leftSection={<IconBrandCss3 size="1rem" />} disabled size="xs" mb="4">*/}
        {/*  Edit CSS*/}
        {/*</Button>*/}
        <Button leftSection={<IconBrandJavascript size="1rem" />} disabled size="xs" mb="4">
          Edit Javascript
        </Button>
      </>}

    </div>
  );
}

