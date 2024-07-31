import React, { useState } from 'react';
import { SelectorsResultProps, useEditor } from '../wrappers';
import {
  ActionIcon,
  Combobox, Divider,
  Group,
  Menu,
  Pill,
  PillsInput,
  ScrollArea,
  Select,
  TextInput,
  ThemeIcon,
  Tooltip,
  useCombobox,
} from '@mantine/core';
import {
  IconBolt,
  IconBrush,
  IconCheck,
  IconDotsVertical,
  IconExclamationCircle,
  IconFocus2,
  IconHash,
  IconTags,
  IconX,
} from '@tabler/icons-react';
import { Selector } from 'grapesjs';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { formatCss } from '@/components/editor/components/CustomAdvancedTraitManager';


export default function CustomSelectorManager({
                                                selectors,
                                                selectedSelectors,
                                                selectedState,
                                                targetsIds,
                                                allSelectors,
                                                states,
                                                setState,
                                                addSelector,
                                                removeSelector,
                                              }: Omit<SelectorsResultProps, 'Container'>) {

  const editor = useEditor();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });


  const [search, setSearch] = useState('');


  const exactOptionMatch = allSelectors.some((item) => item === search);


  const deleteSelector = (selector: Selector) => {
    removeSelector(selector);
    const cssToRemove = editor.Css.getRules(`.${selector.getName()}`);
    // console.log(cssToRemove);
    // @ts-ignore
    editor.Css.remove(cssToRemove);
  };

  // const duplicateSelector = (selector:Selector) => {
  //     addSelector(selector)
  // }

  const disableSelector = (selector: Selector) => {
    const isDisabled = selector.getActive();

    if (isDisabled) {
      selector.setActive(false);
    } else {
      selector.setActive(true);
    }
  };

  const [selector, setSelector] = useState<null | Selector>(null);
  const [selectorName, setSelectorName] = useState('');

  const [isRenamingSelector, setIsRenamingSelector] = useState(false);


  const styleBaseClass = () => {
    if (editor.getSelected()?.getClasses().length <= 1)
      return;

    if (editor.Commands.isActive('edit-base-style')) {
      editor.Commands.stop('edit-base-style');
      // setIsMoveActive(false);
    } else {
      editor.Commands.run('edit-base-style');
      // setIsMoveActive(true);
    }
  };


  const renameSelector = () => {
    if (selector) {
      selector.set('name', selectorName);
      setSelector(null);
      setIsRenamingSelector(false);
      setSelectorName('');
    }
  };


  const values = selectors.map((selector) => {
    // console.log(selector);
      const classes = editor.Css.getRules(`.${selector.getName()}`).map((rule) => rule.toCSS().toString()).join('\n');
      // console.log('class', classes);

      let formattedCss: string;

      if (classes) {
        formattedCss = formatCss(classes);
      } else {
        formattedCss = 'No css found';
      }

      return (
        <div key={selector.toString()} className="flex gap-1 items-center w-full overflow-hidden">
          <Tooltip w={400} p="xs" position="left-end" style={{ height: 'fit-content' }} multiline color="dark"
                   label={<CodeMirror
                     value={formattedCss} theme="dark"
                     extensions={[langs.css(), EditorView.lineWrapping]}
                   />}><Pill
            style={selector.getActive() ? {} : { opacity: 0.5 }}
            disabled={!selector.getActive()}
            radius="xs"
          >
            <span>{selector.toString()}</span>
          </Pill></Tooltip>
          <Menu shadow="md">
            <Menu.Target>
              <ActionIcon variant="subtle" size="xs">
                <IconDotsVertical size="0.7rem" /></ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Utility</Menu.Label>
              <Menu.Item onClick={(e) => {
                e.stopPropagation();
                setIsRenamingSelector(true);
                // setIsCloningAndRenaming(false);
                setSelector(selector);
                combobox.closeDropdown();
              }
              }>
                <div className="flex items-center justify-between w-full"><span>Rename class</span>
                  <Tooltip label="This will rename all the classes not just one">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip>
                </div>
              </Menu.Item>

              <Menu.Item onClick={() => disableSelector(selector)}>
                <div className="flex items-center justify-between w-full">
                  {selector.getActive() ? 'Disable' : 'Enable'}
                  <Tooltip label="Edit a class style without affecting the disabled one">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip>
                </div>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item
                color="red"
                onClick={() => removeSelector(selector)}
                // add tooltip
              >
                <div className="flex items-center justify-between w-full"><span>Remove</span>
                  <Tooltip label="Removes the class from the selected blocks">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip>
                </div>

              </Menu.Item>
              <Menu.Item
                color="red"
                onClick={() => deleteSelector(selector)}
                // add tooltip
              >
                <div className="flex items-center justify-between w-full"><span>Delete</span>
                  <Tooltip label="Deletes the class from the project">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip>
                </div>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu></div>
      );
    })
  ;

  const options = allSelectors
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => {
      const classes = editor.Css.getRules(item).map((rule) => rule.toCSS().toString()).join('\n');
      // console.log('class', classes);

      let formattedCss: string;

      if (classes) {
        formattedCss = formatCss(classes);
      } else {
        formattedCss = 'No css found';
      }

      return (
        <Tooltip w={400} p="xs" position="left-end" style={{ height: 'fit-content' }} multiline color="dark" key={item}
                 label={<CodeMirror
                   value={formattedCss} theme="dark"
                   extensions={[langs.css(), EditorView.lineWrapping]}
                 />}>
          <Combobox.Option value={item}>
            <Group gap="sm">
              <span>{item}</span>
            </Group>
          </Combobox.Option>
        </Tooltip>);
    });


  const isComponentFirst = editor.Selectors.getComponentFirst();
  // console.log('isComp', isComponentFirst);
  const setComponentFirst = () => {
    editor.Selectors.setComponentFirst(!isComponentFirst);
  };


  const isInteractive = editor.getSelected()?.get('isInteractive');


  return (
    <div className=" flex flex-col  gap-2 text-left">
      <div className="flex items-center gap-2">
        <Tooltip color="blue" multiline
                 w={200} position="left-end"
                 withArrow openDelay={400}
                 label="Use this to change how your block reacts with a user action. e.g. Change background colour on hover">
          <ThemeIcon variant="light">
            <IconExclamationCircle size="1rem" />
          </ThemeIcon>
        </Tooltip>
        <Select
          clearable
          value={selectedState}
          onChange={(newValue: any) => {
            setState(newValue);
          }}
          // @ts-ignore
          data={states.map((state) => ({
            key: state.id,
            value: state.id,
            label: state.getLabel(),
          }))}
          size="xs"
          placeholder="-No state-"
        />
      </div>

      <div className="flex flex-col gap-2 items-start w-full h-full">
        <div className="flex justify-between w-full h-full ">
          <Tooltip color="blue"
                   label={`Block ID - #${targetsIds.toString()}`}>
            <ActionIcon
              variant="subtle">
              <IconHash size="1rem" />
            </ActionIcon>
          </Tooltip>
          {isInteractive
            && <Tooltip color="dark"
                        label={<div>
                          <p>This block is Interactive</p>
                          <p>It uses special classes to add
                            interactivity to the block</p>
                          <p>You should not modify these
                            classes as this will break the
                            interactivity:</p>
                          {editor.getSelected()?.get('interactiveClasses')?.map((c: string, i: number) => (
                            <p className="font-bold text-red-500" key={i}>[{c}]</p>
                          ))}
                        </div>}>
              <ActionIcon
                color="green"
                variant="subtle">
                <IconBolt size="1rem" />
              </ActionIcon>
            </Tooltip>}
          <Tooltip color="blue"
                   label="Style base class">
            <ActionIcon
              onClick={styleBaseClass}
              variant={editor.Commands.isActive('edit-base-style') ? 'filled' : 'subtle'}>
              <IconBrush size="1rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip position="left" color="dark" multiline w={700}
                   label={
                     <div className="flex flex-col gap-2">
                       <p>Enabled: All the style changes will be applied on
                         selected
                         blocks (ID rules)</p>
                       <p>Disabled: All the style changes will be applied on selected blocks with same
                         selectors(classes)</p>
                       <p>Tip 1: Use ID to style a single component independently</p>
                       <p>Tip 2: Use classes/selectors to style multiple component simultaneously</p>
                       <p>Tip 3: ID always takes precedent in styling over classes. e.g. if you style a block
                         height
                         using its ID you won&apos;t be able to change the height using class, only if you remove that
                         value from the ID e.g: if you had styled a block with 100px height using its ID you&apos;d have
                         to remove(leave the input empty) that style before styling the height by class.</p>
                       <p>Tip 4: Use ID for solo blocks and classes for blocks that are used multiple time and share the
                         same style.</p>
                       <p>Tip 5: The latest class will always take precedent over the previous one. Use this to add
                         extra styles without affecting base classes. e.g. Adding a background color to just one of
                         three grid items</p>
                       <p>Tip 6: You can disable certain style classes to modify a specific class style when you have
                         multiple ones for a select block</p>
                       <p>Tip 7: Combo classes add another layer of styles on just the last class without modifying the
                         previous one, example you have a heading with a class of hero-heading which has a white text
                         colour on your homepage, but then you have another page where you need your hero heading to be
                         black, you just add another class on top of the select block such as hero-heading-text-black
                         thus allowing you to make slight changes to a block style without modifying certain classes</p>
                       <p className="font-bold">Important: Always remember If you can&apos;t change a style its either
                         because you styled that block using the priority style(ID) or you&apos;re styling the wrong
                         breakpoint </p>
                     </div>}>
            <ActionIcon onClick={setComponentFirst}
                        variant={isComponentFirst ? 'filled' : 'subtle'}>
              <IconFocus2 size="1rem" />
            </ActionIcon>
          </Tooltip>
          <div>
            <Tooltip color="dark"
                     position="left"
                     multiline
                     w={300}
                     label={<div className="flex flex-col gap-2">
                       <p>Important: All pages share the same style file, e.g. If you don&apos;t want page two paragraph
                         to
                         be the same size as your homepage you need to either style by ID or use a different class from
                         the default one or the already styled one</p>
                       <p>Each style property includes a hoverable tooltip
                         that provides detailed usage instructions.</p>
                       <p>For further customization, we recommend searching for additional CSS property options
                         online.</p></div>}>
              <ThemeIcon
                color="red"
                variant="light">
                <IconExclamationCircle size="1rem" />
              </ThemeIcon>
            </Tooltip>
          </div>
        </div>
        {!isComponentFirst && <Combobox styles={{
          dropdown: { width: '100%' },
        }} store={combobox}
                                        onOptionSubmit={(val) => {
                                          console.log('val', val);
                                          if (val === '$create') {
                                            addSelector(search);
                                          } else {
                                            addSelector(val);
                                          }
                                          combobox.closeDropdown();
                                        }}


                                        withinPortal={false}>
          <Combobox.DropdownTarget>
            <PillsInput size="xs" className="w-full" onClick={() => combobox.openDropdown()}>
              <Pill.Group>
                <ScrollArea type="hover" h={40} w="100%">
                  {values}
                </ScrollArea>
                <Combobox.EventsTarget>
                  <PillsInput.Field
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => {
                      combobox.closeDropdown();
                      setSearch('');
                    }}
                    value={search}
                    placeholder="Add class style"
                    onChange={(event) => {
                      combobox.updateSelectedOptionIndex();
                      setSearch(event.currentTarget.value);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Backspace' && search.length === 0) {
                        event.preventDefault();
                      }
                    }}
                  />
                </Combobox.EventsTarget>
              </Pill.Group>
            </PillsInput>
          </Combobox.DropdownTarget>

          <Combobox.Dropdown>
            <Combobox.Options>
              <Divider size="xs" label="Existing Classes" />
              <ScrollArea.Autosize mah={200} type="scroll">
                {options}
                {!exactOptionMatch && search.trim().length > 0 && (
                  <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
                )}
                {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
                  <Combobox.Empty>Nothing found</Combobox.Empty>
                )}
              </ScrollArea.Autosize>
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>}

        {/*{isCloningAndRenaming &&*/}
        {/*  <TextInput autoFocus className="w-full" placeholder="Insert new class name" size="xs" my={8}*/}
        {/*             value={selectorName}*/}
        {/*             onChange={(event) => setSelectorName(event.currentTarget.value)}*/}
        {/*             rightSection={*/}
        {/*               <ActionIcon size="sm" onClick={() => cloneAndRenameSelector()}><IconCheck*/}
        {/*                 size="1rem" /></ActionIcon>} />}*/}

        {isRenamingSelector &&
          <div className="flex flex-col justify-start w-full">
            <TextInput autoFocus className="w-full" placeholder="Insert new class name" size="xs" my={8}
                       value={selectorName}
                       onChange={(event) => setSelectorName(event.currentTarget.value)}
                       rightSection={
                         <ActionIcon size="sm" onClick={() => renameSelector()}><IconCheck
                           size="1rem" /></ActionIcon>} />
            <ActionIcon size="xs" color="red" onClick={() => setIsRenamingSelector(false)}><IconX
              size="1rem" /></ActionIcon>
          </div>}
      </div>

    </div>
  );
}

