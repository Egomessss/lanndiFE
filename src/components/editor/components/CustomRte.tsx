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
import { OrderedList } from '@tiptap/extension-ordered-list';
import { Bold } from '@tiptap/extension-bold';
import { BulletList } from '@tiptap/extension-bullet-list';
import { ListItem } from '@tiptap/extension-list-item';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Heading } from '@tiptap/extension-heading';
import { Italic } from '@tiptap/extension-italic';




const CustomRte = () => {

  const editor = useEditor();
  const selected = editor.getSelected();
  const richTextContent = editor.getSelected()?.toHTML().toString();
  const [opened, { open, close }] = useDisclosure(false);
  // Ensure event listener is added only once and removed on unmount


  // Initialize the Tiptap editor with extensions
  const rteEditor = useTiptapEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: "rte-h",
          },
        },
        bold: {
          HTMLAttributes: {
            class: 'rte-bold',
          }
        },
        strike: {
          HTMLAttributes: {
            class: 'rte-strike',
          }
        },
        italic: {
          HTMLAttributes: {
            class: 'rte-italic',
          }
        },
        orderedList: {
          HTMLAttributes: {
            class: 'rte-ol',
          }
        },
        bulletList: {
          HTMLAttributes: {
            class: 'rte-ul',
          }
        },paragraph: {
          HTMLAttributes: {
            class: 'rte-p',
          }
        },
        listItem: {
          HTMLAttributes: {
            class: 'rte-li',
          }
        },
      }),
      Underline.configure({
        HTMLAttributes: {
          class: 'rte-underline',
        },
      }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({
        HTMLAttributes: {
          class: 'rte-link',
        },
      }),
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
      <Modal centered size="80%" opened={opened} onClose={close} scrollAreaComponent={ScrollArea.Autosize}>
        {!rteEditor ? <Loading/> :   <RichTextEditor editor={rteEditor}>
          <RichTextEditor.Toolbar style={{width:'100%'}} sticky stickyOffset={60}>
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
                  className="text-xs px-4 mx-4 flex-grow"
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