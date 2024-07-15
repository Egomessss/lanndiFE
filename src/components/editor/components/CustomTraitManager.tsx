import { TraitsResultProps, useEditor } from '@/components/editor/wrappers';
import TraitPropertyField from '@/components/editor/components/TraitPropertyField';
import { Button, Divider, Modal } from '@mantine/core';
import { HeadingTypeSelector } from '@/components/editor/components/HeadingTypeSelector';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import useUser from '@/hooks/use-user';

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




export default function CustomTraitManager({
                                             traits,
                                           }: Omit<TraitsResultProps, 'Container'>) {

  const editor = useEditor();
  const value = editor.getSelected()?.get('tagName');


  return (
    <div className="gjs-custom-trait-manager text-left w-full flex flex-col gap-4 my-4">
      {!traits.length ? (
        <p className="text-xs text-red-500 w-full text-center">No properties available</p>
      ) : (
        traits.map((trait) => (
          <TraitPropertyField
            key={trait.getId()}
            trait={trait}
          />
        ))
      )}
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value!) &&
        <div><Divider className="w-full" my="xs" label="Heading Type" /><HeadingTypeSelector /></div>}
      {value === 'svg' &&
        <div><Divider my="xs" className="w-full" label="SVG Editor" /><SvgContentCode /></div>}
      {/*<HtmlElementSelector />*/}


    </div>
  );
}

