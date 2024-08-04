import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SelectorsResultProps, useEditor } from '../wrappers';
import {
  ActionIcon,
  Combobox, Divider,
  Group,
  Menu,
  Pill,
  PillsInput, Popover,
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
  IconCheck, IconCode,
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
import { useMantineTheme } from '@mantine/core';


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
  const [selector, setSelector] = useState<null | Selector>(null);
  const [selectorName, setSelectorName] = useState('');
  const [opened, setOpened] = useState(false);
  const [isRenamingSelector, setIsRenamingSelector] = useState(false);
  const [, forceUpdate] = useState({});
  const theme = useMantineTheme();

  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const [isCloningAndRenaming, setIsCloningAndRenaming] = useState(false);

  const [search, setSearch] = useState('');


  const exactOptionMatch = allSelectors.some((item) => item === search);


  const deleteSelector = (selector: Selector) => {

    const protectedClass = selector.get('protected');

    if (!protectedClass) {
      removeSelector(selector);
      const cssToRemove = editor.Css.getRules(`.${selector.getName()}`);
      // console.log(cssToRemove);
      // @ts-ignore
      editor.Css.remove(cssToRemove);
    }
  };

  const disableSelector = (selector: Selector) => {
    const isDisabled = selector.getActive();

    if (isDisabled) {
      selector.setActive(false);
    } else {
      selector.setActive(true);
    }
  };


  const cloneAndRenameSelector = () => {
    // Ensure the selector is defined
    if (!selector) return;

    const protectedClass = selector.get('protected');

    if (protectedClass) return;

    // Convert the selector to string
    const selectorString = selector.toString();

    // Get all CSS rules for the given selector
    const classRules = editor.Css.getRules(selectorString);

    // Clone the CSS styles by converting rules to string
    const clonedStyle = classRules.map((rule) => rule.toCSS().toString()).join('\n');

    // Log the cloned style for debugging
    // console.log('cloned style', clonedStyle);

    // Create a new regular expression to replace the old selector with the new one
    const replaceClassName = new RegExp(selectorString, 'g');
    const newStyle = clonedStyle.replace(replaceClassName, `.${selectorName}`);

    // Check if the newStyle is successfully created
    if (newStyle) {
      // Add the new rules with the new selector name
      editor.Css.addRules(newStyle);

      // Remove the old selector from the component
      removeSelector(selector);

      // Add the new selector to the component
      addSelector(selectorName);

      // Reset the state variables
      setIsRenamingSelector(false);
      setIsCloningAndRenaming(false);
      setSelectorName('');
    } else {
      console.error('Failed to create new style');
    }
  };


  const renameSelector = () => {

    const protectedClass = selector?.get('protected');

    if (protectedClass) return;

    if (selector) {
      selector.set('name', selectorName);
      setSelector(null);
      setIsRenamingSelector(false);
      setSelectorName('');
    }
  };




  const getActiveSelector = useCallback(() => {
    const selected = editor.getSelected();
    if (selected) {
      const selectors = selected.getSelectors();
      return selectors.find((selector: { getActive: () => any; }) => selector.getActive());
    }
    return null;
  }, [editor]);

  useEffect(() => {
    const handleSelectionChange = () => {
      forceUpdate({});
    };

    editor.on('component:selected', handleSelectionChange);
    editor.on('component:update:classes', handleSelectionChange);

    return () => {
      editor.off('component:selected', handleSelectionChange);
      editor.off('component:update:classes', handleSelectionChange);
    };
  }, [editor]);

  const setActiveSelectorByIndex = useCallback((index: number) => {
    const selected = editor.getSelected();
    if (selected) {
      const selectors = selected.getSelectors();
      selectors.forEach((selector: Selector, i: number) => {
        selector.setActive(i === index);
      });
      editor.select(selected); // This will trigger a re-render
    }
  }, [editor]);

  const activeSelector = getActiveSelector();

  const values = selectors.map((selector: Selector, index: number) => {
    const classes = editor.Css.getRules(`.${selector.getName()}`).map((rule) => rule.toCSS().toString()).join('\n');
    let formattedCss: string = classes ? formatCss(classes) : 'No css found';

    const protectedClass = selector?.get('protected');
    const isBaseClass = editor.getSelected()?.get('baseClass');

    const isActive = selector === activeSelector;

    return (
      <div key={selector.toString()} className="flex gap-1 items-center flex-wrap w-full overflow-hidden">
        <Tooltip
          openDelay={700}
          w={400}
          p="xs"
          position="left-end"
          style={{ height: 'fit-content' }}
          multiline
          color="dark"
          label={
            <CodeMirror
              value={formattedCss}
              theme="dark"
              extensions={[langs.css(), EditorView.lineWrapping]}
            />
          }
        >
          <Pill
            my="1"
            size="xs"
            onClick={() => setActiveSelectorByIndex(index)}
            className="cursor-pointer"
            style={
              isActive
                ? { backgroundColor: theme.colors.blue[7], color: theme.white }
                : { opacity: 0.5 }
            }
            radius="xs"
          >
            <span>{selector.getName()}</span>
          </Pill>
        </Tooltip>
          <Menu zIndex={500} shadow="md">
            <Menu.Target>
              <ActionIcon variant="subtle" size="xs">
                <IconDotsVertical size="0.7rem" /></ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRenamingSelector(true);
                  setIsCloningAndRenaming(false);
                  setSelector(selector);
                  combobox.closeDropdown();
                }}
                disabled={protectedClass || isBaseClass === selector.getName()}
              >
                <div className="flex items-center justify-between w-full"><span>Rename</span>
                  {protectedClass ?
                    <Tooltip label="Can't delete protected classes that add interactivity to your blocks">
                      <IconExclamationCircle size="1rem" />
                    </Tooltip> :
                    <Tooltip label="This will rename all the classes with the same name not just the selected one">
                      <IconExclamationCircle size="1rem" />
                    </Tooltip>}

                </div>
              </Menu.Item>
              <Menu.Item onClick={(e) => {
                e.stopPropagation();
                setIsCloningAndRenaming(true);
                setIsRenamingSelector(false);
                setSelector(selector);
              }
              }>
                <div className="flex items-center justify-between w-full gap-2"><span>Clone</span>
                  <Tooltip label="This will clone the styles and allow you to change the new cloned style class">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip>
                </div>
              </Menu.Item>
              <Menu.Item disabled={isBaseClass === selector.getName()} onClick={() => disableSelector(selector)}>
                <div className="flex items-center justify-between w-full">
                  {selector.getActive() ? 'Disable' : 'Enable'}
                  <Tooltip label="Edit a class style without affecting the disabled one">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip>
                </div>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                color="red"
                disabled={protectedClass}
                onClick={() => removeSelector(selector)}
                // add tooltip
              >
                <div className="flex items-center justify-between w-full"><span>Remove</span>
                  {protectedClass ? <Tooltip label="Can't remove protected classes that add interactivity to your blocks">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip> : <Tooltip label="Removes the class from the selected blocks">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip>}
                </div>

              </Menu.Item>
              <Menu.Item
                color="red"
                disabled={protectedClass || isBaseClass === selector.getName()}
                onClick={() => deleteSelector(selector)}
                // add tooltip
              >
                <div className="flex items-center justify-between w-full"><span>Delete</span>
                  {protectedClass ? <Tooltip label="Can't delete protected classes that add interactivity to your blocks">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip> : <Tooltip label="Deletes the class from the project">
                    <IconExclamationCircle size="1rem" />
                  </Tooltip>}

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

      return (
        <Combobox.Option key={item} value={item}>
          <Group gap="sm">
            <span className="text-xs">{item}</span>
          </Group>
        </Combobox.Option>
      );
    });


  const isComponentFirst = editor.Selectors.getComponentFirst();
  // console.log('isComp', isComponentFirst);
  const setComponentFirst = () => {
    editor.Selectors.setComponentFirst(!isComponentFirst);
  };


  const isInteractive = editor.getSelected()?.get('isInteractive');

  const idCodes: string[] = [];

  targetsIds.forEach((id) => {
    const rules = editor.Css.getRules(`#${id}`);
    const cssCode = rules.map((rule) => rule.toCSS()).join('\n');
    if (cssCode) {
      idCodes.push(`/* CSS for #${id} */\n${cssCode}`);
    }
  });

  const allIdCodes = idCodes.join('\n\n');

  const classCodes: string[] = [];

  selectors.forEach((selector) => {
    const rules = editor.Css.getRules(`.${selector.getName()}`);
    const cssCode = rules.map((rule) => rule.toCSS()).join('\n');
    if (cssCode) {
      classCodes.push(`/* CSS for .${selector.getName()} */\n${cssCode}`);
    }
  });

  const allClassCodes = classCodes.join('\n\n');

  let formattedCss: string;

  if (allIdCodes || allClassCodes) {
    formattedCss = formatCss(`${allIdCodes}\n\n${allClassCodes}`);
  } else {
    formattedCss = 'No css found';
  }

  // console.log(formattedCss);
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
          <Popover styles={{dropdown:{backgroundColor: theme.colors.dark[7]}}}  position="left-start" opened={opened} onChange={setOpened}>
            <Popover.Target>
              <Tooltip label="Show CSS Code" color="dark">
              <ActionIcon onClick={() => setOpened((o) => !o)}
                          variant="subtle">
                <IconCode size="1rem" />
              </ActionIcon>
              </Tooltip>
            </Popover.Target>

            <Popover.Dropdown >
              <div className="flex flex-col gap-2"><p>CSS Code</p>
                <ScrollArea h={400} >
                  <CodeMirror
                    value={formattedCss} theme="dark"
                    extensions={[langs.css(), EditorView.lineWrapping]}
                  />
                </ScrollArea>
              </div>
            </Popover.Dropdown>
          </Popover>
          {isInteractive
            && <Tooltip color="dark"
                        label={<div>
                          <p>This block is Interactive</p>
                          <p>It uses special classes to add
                            interactivity to the block</p>
                          <p>You can&apos;t delete, rename or remove the following classes as they
                            doing this will break the
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
          <Tooltip position="left" color="dark" multiline w={300}
                   label={
                     <div className="flex flex-col gap-2">
                       <p>Enabled: All the style changes will be applied on
                         only the selected
                         blocks (ID rules)</p>
                       <p>Disabled: All the style changes will be applied on selected blocks with same
                         selectors(classes)</p>
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
                     w={700}
                     label={<div className="flex flex-col gap-2">
                       {/*<p>Important: All pages share the same style file, e.g. If you don&apos;t want page two paragraph*/}
                       {/*  to*/}
                       {/*  be the same size as your homepage you need to either style by ID or use a different class from*/}
                       {/*  the default one or the already styled one</p>*/}
                       <p>Each style property includes a hoverable tooltip
                         that provides detailed usage instructions.</p>
                       <p>For further customization, we recommend searching for additional CSS property options
                         online.</p>  <p>Tip 1: Use ID to style a single component independently</p>
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
                         breakpoint </p></div>}>
              <ThemeIcon
                color="red"
                variant="light">
                <IconExclamationCircle size="1rem" />
              </ThemeIcon>
            </Tooltip>
          </div>
        </div>
        {!isComponentFirst && <Combobox  styles={{
          dropdown: { width: '100%' },
        }} store={combobox}
                                        onOptionSubmit={(val) => {
                                          // console.log('val', val);
                                          if (val === '$create') {
                                            addSelector(search);
                                          } else {
                                            addSelector(val);
                                          }
                                          scrollToBottom();
                                          combobox.closeDropdown();
                                        }}


                                        withinPortal={false}> <ScrollArea viewportRef={viewport} type="hover" h={45}
                                                                          w="100%">
          {values}
        </ScrollArea>
          <Combobox.DropdownTarget>
            <PillsInput size="xs" className="w-full" onClick={() => combobox.openDropdown()}>
              <Pill.Group>
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

        {isCloningAndRenaming &&
          <TextInput autoFocus className="w-full" placeholder="Insert new class name" size="xs" my={8}
                     value={selectorName}
                     onChange={(event) => setSelectorName(event.currentTarget.value)}
                     rightSection={
                       <ActionIcon size="sm" onClick={() => cloneAndRenameSelector()}><IconCheck
                         size="1rem" /></ActionIcon>} />}

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

