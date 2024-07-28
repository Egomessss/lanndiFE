import { Link, RichTextEditor } from '@mantine/tiptap';
import { useEditor as useTiptapEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button, Modal, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEditor } from '@/components/editor/context/EditorInstance';
import { TextAlign } from '@tiptap/extension-text-align';
import { Underline } from '@tiptap/extension-underline';
import { useEffect } from 'react';
import { IconDeviceFloppy } from '@tabler/icons-react';
import Loading from '@/app/(sites)/Loading';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';


const CustomRte = () => {

  const editor = useEditor();
  const selected = editor.getSelected();
  const richTextContent = editor.getSelected()?.toHTML().toString();
  const [opened, { open, close }] = useDisclosure(false);
  // Ensure event listener is added only once and removed on unmount


  // Initialize the Tiptap editor with extensions
  const rteEditor = useTiptapEditor({
    extensions: [
      StarterKit,
      Link,
      Underline,
      // Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: richTextContent,
    immediatelyRender: false,
  });


  // editor.on('component:add', (component) => {
  //   // console.log('comp',component.type);
  //   if (component.getName() === 'Rich Text') {
  //     console.log('is rich text');
  //     open();
  //   }
  // });

  useEffect(() => {
    if (selected?.getName() === 'Rich Text') {
      console.log('is rich text');
      open();
    }
  }, [editor.Canvas, selected]);


  // Save the edited rich text back to the selected component
  const saveRichText = () => {
    selected?.empty()
    // @ts-ignore
    editor.getSelected()?.append(rteEditor?.getHTML());
    close();
  };


  return (
    <>
      <Button variant="subtle" onClick={open}>Edit Rich Text</Button>
      <Modal centered size="xl" opened={opened} onClose={close} scrollAreaComponent={ScrollArea.Autosize}>
        {!rteEditor ? <Loading/> :   <RichTextEditor editor={rteEditor}>
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
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Undo />
              <RichTextEditor.Redo />
              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Control
                  onClick={saveRichText}
                  aria-label="Save"
                  title="Save"
                  color="blue"
                  className="text-xs px-4 mx-4 "
                >
                  <div className="flex gap-2 items-center">
                    <p>Save</p>
                    <IconDeviceFloppy size="0.8rem" />
                  </div>

                </RichTextEditor.Control>
                {/*<div className="w-full flex justify-end ">*/}
                {/*  <Button size="xs" onClick={saveRichText}>*/}
                {/*    Save*/}
                {/*  </Button>*/}
                {/*</div>*/}
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>
          <RichTextEditor.Content />

        </RichTextEditor>
        }
      </Modal>

    </>
  );
};

export default CustomRte;