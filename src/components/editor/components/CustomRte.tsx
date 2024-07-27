import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor as useTiptapEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ActionIcon, Button, Modal, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit } from '@tabler/icons-react';
import { useEditor } from '@/components/editor/context/EditorInstance';


const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';



const CustomRte = () => {
  const gjsEditor = useEditor();
  const [opened, { open, close }] = useDisclosure(false);

  const richTextContent = gjsEditor.getSelected()?.toHTML().toString();
  console.log(richTextContent);

  const editor = useTiptapEditor({
    extensions: [
      StarterKit,
      Link,
    ],
    content,
    immediatelyRender:false
  });

  // gjsEditor.on('component:add', (component) => {
  //   // console.log('comp',component.type);
  //   if (component.getName() === 'Rich Text') {
  //     console.log('is rich text');
  //     open();
  //   }
  // });


  // console.log(editor?.getHTML());

  const saveRichText = () => {
    // @ts-ignore
    gjsEditor.getSelected()?.append(editor.getHTML());
  };

  return (
    <>
      <Button onClick={open}>Edit Rich Text</Button>
      <Modal size="xl" opened={opened} onClose={close} scrollAreaComponent={ScrollArea.Autosize}>
        <RichTextEditor editor={editor}>
          <RichTextEditor.Toolbar sticky stickyOffset={60}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
              <RichTextEditor.H5 />
              <RichTextEditor.H6 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Link />
              <RichTextEditor.Unlink />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Undo />
              <RichTextEditor.Redo />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>

          <RichTextEditor.Content />
        </RichTextEditor>
        <Button onClick={saveRichText}>
          Save
        </Button>
      </Modal>

    </>
  );
};

export default CustomRte;