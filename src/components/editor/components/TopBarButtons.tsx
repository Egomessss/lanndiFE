import { ActionIcon, Divider, NumberInput, rem, ThemeIcon, Tooltip } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import { useEditor } from '../wrappers';
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBorderNone, IconCode, IconEye, IconHandGrab,
  IconTrash,
  IconVector,
  IconZoomIn,
  IconZoomOut,
  IconZoomReset,
} from '@tabler/icons-react';
import { useAuth } from '@/hooks/auth';
import { usePathname } from 'next/navigation';
import useUser from '@/hooks/use-user';
import { useSidePanel } from '@/contexts/SidePanelPreviewContext';


interface CommandButton {
  id: string;
  Icon: any;
  name: string;
  options?: Record<string, any>;
  disabled?: () => boolean;
}

export default function TopBarButtons() {
  const editor = useEditor();


  const [, setUpdateCounter] = useState(0);

  const { UndoManager, Commands } = editor;


  editor.Commands.add('designer-mode', {
    run: () => {
      editor.setDragMode('absolute');
      // console.log(editor.el)
    },
    stop: () => {
      editor.setDragMode('');
      // console.log('translate')
    },
  });

  // editor.Commands.extend('core:preview', {
  //   run: () => {
  //     editor.runCommand('core:preview');
  //     // Adding a specific class to hide elements
  //     editor.refresh();
  //   },
  //   stop: () => {
  //     // closeSidePanel();
  //     editor.stopCommand('core:preview');
  //     editor.refresh();
  //   },
  // });


  const { user } = useUser();


  const cmdButtons: CommandButton[] = [
    // TODO fix these 2 commands
    {
      id: 'core:canvas-clear',
      Icon: IconTrash,
      name: 'Clear Canvas',

    },
    // Conditionally include the "Code" button if the user is an admin
    ...(user?.isAdmin ? [{
      id: 'core:open-code',
      Icon: IconCode,
      name: 'Code',
    }] : []),

    {
      id: 'core:component-outline',
      Icon: IconBorderNone,
      name: 'Outline',

    },
    {
      id: 'designer-mode',
      Icon: IconVector,
      name: 'Designer Mode',
    },
    // {
    //     id: 'core:fullscreen',
    //     Icon: IconAspectRatio,
    //     name: 'Fullscreen',
    // },
    {
      id: 'core:undo',
      Icon: IconArrowBackUp,
      disabled: () => !UndoManager.hasUndo(),
      name: 'Undo - Ctrl + Z',
    },
    {
      id: 'core:redo',
      Icon: IconArrowForwardUp,
      disabled: () => !UndoManager.hasRedo(),
      name: 'Redo - Ctrl + Shift + Z',
    },
  ];

  useEffect(() => {
    const cmdEvent = 'run stop';
    const updateEvent = 'update';
    const updateCounter = () => setUpdateCounter((value) => value + 1);
    const onCommand = (id: string) => {
      cmdButtons.find((btn) => btn.id === id) && updateCounter();
    };
    editor.on(cmdEvent, onCommand);
    editor.on(updateEvent, updateCounter);


    return () => {
      editor.off(cmdEvent, onCommand);
      editor.off(updateEvent, updateCounter);
    };
  }, [cmdButtons, editor]);




  return (
    <div className="flex w-full gap-2 items-center">
      <Divider orientation="vertical" />
      {cmdButtons.map(({ id, Icon, disabled, options, name }) => (
        <div
          key={id}
          className="item flex items-center gap-2 whitespace-nowrap "
        >
          <Tooltip color="dark" label={name}>
            <ActionIcon
              key={id}
              color="blue"

              variant={
                Commands.isActive(id) ? 'filled' : 'subtle'
              }
              onClick={() =>
                Commands.isActive(id)
                  ? Commands.stop(id)
                  : Commands.run(id, options)
              }
              disabled={disabled?.()}
            >
              <Icon size="1rem" />
            </ActionIcon>
          </Tooltip>
        </div>
      ))}


    </div>
  );
}
