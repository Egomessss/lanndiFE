import * as React from 'react';
import { useState } from 'react';

import { ActionIcon, Button, Tooltip } from '@mantine/core';
import { useEditor } from '@/components/editor/wrappers';
import { IconBulb, IconPlus, IconTrash } from '@tabler/icons-react';


export default function CustomComponentsBlockManager() {

  const editor = useEditor();

  const [symbols, setSymbols] = useState(editor.Components.getSymbols());

  editor.on('symbol', () => {
    setSymbols(editor.Components.getSymbols());
  });

  editor.off('symbol', () => {
    setSymbols(editor.Components.getSymbols());
  });


  const addComponentBlock = () => {
    const selected = editor.getSelected();
    if (!selected) return alert('Select a component first!');
    const info = editor.Components.getSymbolInfo(selected);
    if (info.isSymbol) return alert('Selected component is already a symbol!');

    editor.Components.addSymbol(selected);
  };

  const appendComponentBlock = (main: string) => {
    // @ts-ignore
    const instance = editor.Components.addSymbol(main);
    // @ts-ignore
    editor.getWrapper().append(instance, { at: 0 });
  };

  const removeSymbol = (symbol: any) => {
    symbol.remove();
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Tooltip arrowOffset={10} color="dark" w={400} multiline arrowSize={4}
               label={<div className="flex flex-col gap-2"><p>1. Allows you to save a component that you can use
                 multiple times across your site while being synced on every change.</p></div>
               }
               withArrow position="top">
        <Button variant="subtle" leftSection={<IconBulb size="1rem" />} size="xs" fullWidth>Tips</Button>
      </Tooltip>
      <Button onClick={addComponentBlock} leftSection={<IconPlus size="1rem" />} size="xs" fullWidth>Add To
        Components</Button>
      <div className="flex flex-col gap-2">
        {symbols.map((symbol: any) => {
          return (
            <div key={symbol.getId()} className="flex flex-col justify-end items-end gap-2">
              <Button  variant="subtle" size="xl"
                      style={{ padding: '10px' }}
                // draggable={!disabled}
                      justify="start" fullWidth
                      onClick={() => appendComponentBlock(symbol)}
                //       onDragStart={(ev) => dragStart(symbol, ev.nativeEvent)}
                //       onDragEnd={() => dragStop(false)}

              >
                <div className="flex flex-col gap-2 justify-start items-start text-xs">
                  <p>{symbol.getName()}</p>
                  <p>{editor.Components.getSymbolInfo(symbol).instances.length} {(editor.Components.getSymbolInfo(symbol).instances.length > 1) ? 'Instances' : 'Instance'}</p>
                </div>
              </Button>
              <ActionIcon color="red" variant="subtle" onClick={() => removeSymbol(symbol)}>
                <IconTrash size="1rem" />
              </ActionIcon>
            </div>
          );
        })}
      </div>
    </div>
  );
}
