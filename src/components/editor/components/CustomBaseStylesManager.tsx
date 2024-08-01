import React, { useState, useEffect } from 'react';
import { Tooltip, Pill, TextInput, Button, Group, Stack } from '@mantine/core';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { EditorView } from '@codemirror/view';
import { useEditor } from '../wrappers';
import { formatCss } from '@/components/editor/components/CustomAdvancedTraitManager';

interface Selector {
  getName: () => string;
  getActive: () => boolean;
}

interface SelectorManagerProps {
  editor: any; // Replace 'any' with the actual GrapesJS editor type if available
  formatCss: (css: string) => string;
  setRules: (selectors: string[]) => void;
}

const CustomBaseStyleManager: React.FC<SelectorManagerProps> = () => {
  const editor = useEditor();
  const [selectors, setSelectors] = useState<Selector[]>([]);
  const [newSelector, setNewSelector] = useState('');

  const isValidSelector = (name: string): boolean => {
    return /^[a-z]+$/i.test(name) || name.startsWith('g-');
  };

  useEffect(() => {
    // Initialize selectors from GrapesJS, filtering for valid selectors
    const initialSelectors = editor.SelectorManager.getAll().filter((selector: Selector) =>
      isValidSelector(selector.getName())
    );
    setSelectors(initialSelectors);
  }, [editor]);

  const addSelector = () => {
    if (newSelector && isValidSelector(newSelector)) {
      const updatedSelectors = [...selectors, editor.SelectorManager.add(newSelector)];
      // setSelectors(updatedSelectors);
      editor.Css.addRules(`.${newSelector} {}`);
      // setRules(updatedSelectors.map(s => s.getName()));
      setNewSelector('');
    }
  };

  // const removeSelector = (index: number) => {
  //   const updatedSelectors = selectors.filter((_, i) => i !== index);
  //   setSelectors(updatedSelectors);
  //   setRules(updatedSelectors.map(s => s.getName()));
  // };
  //
  // const updateSelector = (index: number, newName: string) => {
  //   if (newName && isValidSelector(newName)) {
  //     const updatedSelectors = [...selectors];
  //     updatedSelectors[index] = editor.SelectorManager.add(newName);
  //     setSelectors(updatedSelectors);
  //     setRules(updatedSelectors.map(s => s.getName()));
  //   }
  // };

  const setActiveSelectorByIndex = (index: number) => {
    const updatedSelectors = selectors.map((selector, i) => {
      if (i === index) {
        // editor.SelectorManager.select(selector);
      }
      return selector;
    });
    setSelectors(updatedSelectors);
  };

  return (
    <Stack>
      <Group>
        <TextInput
          value={newSelector}
          onChange={(event) => setNewSelector(event.currentTarget.value)}
          placeholder="Add new selector (tag or g-class)"
        />
        <Button onClick={addSelector}>Add</Button>
      </Group>
      {selectors.map((selector, index) => (
        <Tooltip
          key={selector.getName()}
          openDelay={400}
          w={400}
          p="xs"
          position="left-end"
          style={{ height: 'fit-content' }}
          multiline
          color="dark"
          label={
            <CodeMirror
              value={(() => {
                const classes = editor.Css.getRules(`.${selector.getName()}`).map((rule: any) => rule.toCSS().toString()).join('\n');
                return classes ? formatCss(classes) : 'No css found';
              })()}
              theme="dark"
              extensions={[css(), EditorView.lineWrapping]}
            />
          }
        >
          <Pill
            onClick={() => setActiveSelectorByIndex(index)}
            className="cursor-pointer"
            style={selector.getActive() ? {} : { opacity: 0.5 }}
            radius="xs"
          >
            <span>{selector.getName()}</span>
          </Pill>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default CustomBaseStyleManager;