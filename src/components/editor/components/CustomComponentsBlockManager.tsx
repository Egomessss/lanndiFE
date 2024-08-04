import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

import { ActionIcon, Button, Tooltip } from '@mantine/core';
import { useEditor } from '@/components/editor/wrappers';
import { IconBulb, IconPlus, IconTrash, IconX } from '@tabler/icons-react';
import { Component } from 'grapesjs';


export default function CustomComponentsBlockManager() {
  const editor = useEditor();
  const [isInstance, setIsInstance] = useState(false);
  const [symbols, setSymbols] = useState<Component[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  const updateSymbols = useCallback(() => {
    setSymbols(editor.Components.getSymbols());
  }, [editor]);

  const handleSelectionChange = useCallback(() => {
    const selected = editor.getSelected();
    if (selected && 'getClasses' in selected) {
      setSelectedComponent(selected as Component);
      const component = editor.Components.getSymbolInfo(selected as Component);
      setIsInstance(component.isInstance);
    } else {
      setSelectedComponent(null);
      setIsInstance(false);
    }
  }, [editor]);

  useEffect(() => {
    updateSymbols();
    handleSelectionChange();

    editor.on('symbol', updateSymbols);
    editor.on('component:selected', handleSelectionChange);
    editor.on('component:deselected', handleSelectionChange);

    return () => {
      editor.off('symbol', updateSymbols);
      editor.off('component:selected', handleSelectionChange);
      editor.off('component:deselected', handleSelectionChange);
    };
  }, [editor, updateSymbols, handleSelectionChange]);

  const addComponentBlock = useCallback(() => {
    if (!selectedComponent) return alert('Select a component first!');
    const info = editor.Components.getSymbolInfo(selectedComponent);
    if (info.isSymbol) return alert('Selected component is already a symbol!');

    const symbolMain = editor.Components.addSymbol(selectedComponent);
    editor.select(symbolMain);
  }, [editor, selectedComponent]);

  const appendComponentBlock = useCallback((main: Component) => {
    const instance = editor.Components.addSymbol(main);
    if (selectedComponent) {
      // @ts-ignore
      const appendedBlock = selectedComponent.append(instance)[0];
      if (appendedBlock) {
        editor.select(appendedBlock);
      }
    }
  }, [editor, selectedComponent]);

  const removeSymbol = useCallback((symbol: Component) => {
    symbol.remove();
  }, []);

  const handleDetachSymbol = useCallback(() => {
    if (selectedComponent) {
      editor.Components.detachSymbol(selectedComponent);
    }
  }, [editor, selectedComponent]);

  return (
    <div className="w-full flex flex-col gap-4">
      <Tooltip
        arrowOffset={10}
        color="dark"
        w={400}
        multiline
        arrowSize={4}
        label={
          <div className="flex flex-col gap-2">
            <p>
              1. Allows you to save a component that you can use multiple times across your site that is synced on every
              change.
            </p>
            <p>2. Select a block to add your instances to it.</p>
            <p>3. To change the name of the component use the layers manager and select your component and rename it on the layer options.</p>
          </div>
        }
        withArrow
        position="top"
      >
        <Button variant="subtle" leftSection={<IconBulb size="1rem" />} size="xs" fullWidth>
          Tips
        </Button>
      </Tooltip>
      <div className="flex gap-2 items-center w-full">
        <Tooltip arrowOffset={10} color="dark" arrowSize={4} label="Detach Component From Main" withArrow position="top">
          <ActionIcon
            variant="subtle"
            color="red"
            onClick={handleDetachSymbol}
            disabled={!selectedComponent || !isInstance}
          >
            <IconX size="1rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip arrowOffset={10} color="dark" arrowSize={4} label="Add As New Component" withArrow position="top">
          <Button
            onClick={addComponentBlock}
            disabled={!selectedComponent || isInstance}
            leftSection={<IconPlus size="1rem" />}
            size="xs"
            fullWidth
          >
            Add
          </Button>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-2">
        {symbols.map((symbol: Component) => {
          const symbolInfo = editor.Components.getSymbolInfo(symbol);
          return (
            <div key={symbol.getId()} className="flex flex-col justify-end items-end gap-2">
              <Button
                variant="subtle"
                className="h-fit"
                style={{ padding: '10px' }}
                justify="start"
                fullWidth
                onClick={() => appendComponentBlock(symbol)}
              >
                <div className="flex flex-col gap-2 justify-start items-start text-xs">
                  <p className="max-w-xs text-wrap">{symbol.getName()}</p>
                  <p>
                    {symbolInfo.instances.length} {symbolInfo.instances.length > 1 ? 'Instances' : 'Instance'}
                  </p>
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
