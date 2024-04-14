import * as React from 'react';
import { useState } from 'react';
import { SelectorsResultProps, useEditor } from '../wrappers';
import {
  ActionIcon,
  CheckIcon,
  Combobox,
  Group,
  Pill,
  PillsInput,
  ScrollArea,
  Select,
  ThemeIcon,
  Tooltip,
  useCombobox,
} from '@mantine/core';
import { IconExclamationCircle, IconFocus, IconHash, IconTags } from '@tabler/icons-react';


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

  const handleValueSelect = () => {
    setSearch('');
    addSelector(search);

  };

  const values = selectors.map((selector) => (
    <Pill radius="xs" key={selector.toString()} withRemoveButton onRemove={() => removeSelector(selector)}>
      {selector.toString()}
    </Pill>
  ));

  const options = allSelectors
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option onClick={() => addSelector(item)} value={item} key={item}>
        <Group gap="sm">
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  const isComponentFirst = editor.Selectors.getComponentFirst();

  const setComponentFirst = () => {
    editor.Selectors.setComponentFirst(!isComponentFirst);
  };

  console.log(selectedSelectors);
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

      <div className="flex gap-2 items-start w-full h-full">
        <div className="flex gap-5 h-full  flex-col">
          <Tooltip color="blue"
                   label={`block classes -[${selectors.map((s) => s.toString())}] | block ID - #${targetsIds.toString()}`}>
            <ThemeIcon

              variant="light">
              <IconTags size="1rem" />
            </ThemeIcon>
          </Tooltip>
          <Tooltip color="blue" multiline w={200}
                   label="If enabled, all the style changes will be applied on selected components (ID rules) instead of selectors (which would change styles on all components with those classes)">
            <ActionIcon onClick={setComponentFirst}
                        variant={isComponentFirst ? 'filled' : 'subtle'}>
              <IconFocus size="1rem" />
            </ActionIcon>
          </Tooltip>
        </div>

        <Combobox styles={{
          dropdown: { width: '100%' },
        }} store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
          <Combobox.DropdownTarget>
            <PillsInput size="xs" onClick={() => combobox.openDropdown()}>
              <Pill.Group>
                <ScrollArea.Autosize type="hover" h={40}>
                  {values}
                </ScrollArea.Autosize>
                <Combobox.EventsTarget>
                  <PillsInput.Field
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => combobox.closeDropdown()}
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
        </Combobox>

      </div>

    </div>
  );
}

