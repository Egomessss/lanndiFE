import * as React from 'react';
import { SelectorsResultProps, useEditor } from '../wrappers';
import {
  ActionIcon,
  Pill,
  PillsInput,
  Select,
  TagsInput, TextInput, ThemeIcon,
  Tooltip,
} from '@mantine/core';
import {
  IconBorderAll, IconCheck,
  IconComponents,
  IconCurrentLocation,
  IconExclamationCircle, IconHash, IconPlus,
  IconSelectAll,
  IconSelector, IconTags,
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';


export default function CustomSelectorManager({
                                                // selectors,
                                                selectedState,
                                                targetsIds,
                                                targets,
                                                states,
                                                setState,
                                                addSelector,
                                                removeSelector,
                                              }: Omit<SelectorsResultProps, 'Container'>) {

  const addNewSelector = () => {
    const next = selectors.length + 1;
    addSelector({ name: `new-${next}`, label: `New ${next}` });
  };


  const editor = useEditor();
  const sm = editor.Selectors;
  const selectors = editor.SelectorManager.getSelected().map(s => s.toString());
  console.log('selectors', selectors);

  const [isEditing, setIsEditing] = useState(false); // New state to manage editing mode
  const [customValue, setCustomValue] = useState(''); // State to hold custom input value
  const [valueHtml, setValueHtml] = useState(() => editor.getSelected()?.get('tagName')); // Default to 'nav' or any sensible default



  const handleElementChange = (selectedValue) => {
    setValueHtml(selectedValue); // Update state for controlled component

    editor.SelectorManager.addSelected(customValue);
  };

  const saveCustomValue = () => {
    if (customValue === '') {
      notifications.show({
        color: 'red',
        title: 'Error!',
        message: 'Please insert a valid html element',
      });
    } else {
      handleElementChange(customValue);
      setValueHtml(customValue);
      setIsEditing(false); // Exit editing mode after saving
    }
  };

  return (
    <div className=" flex flex-col  gap-2 text-left">
      <div className="flex items-center justify-between">
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
          data={states.map((state) => ({
            key: state.id,
            value: state.id,
            label: state.getLabel(),
          }))}
          size="xs"
          placeholder="-No state-"
          className="w-1/2"
        />
      </div>

      <div className="flex gap-2 items-center w-full">
        <Tooltip label="Applies style changes to all blocks with the same class">
          <ThemeIcon className="h-full">
            <IconTags size="1rem" />
          </ThemeIcon>
        </Tooltip>
        <>
          {isEditing ? (
            <TextInput
              label="Enter new html element"
              size="xs"
              value={customValue}
              onChange={(event) => setCustomValue(event.target.value)}
              placeholder="Enter HTML element type"
              leftSection={<ActionIcon onClick={saveCustomValue} size="sm">
                <IconCheck size="1rem" />
              </ActionIcon>}
            />

          ) : (
            <Select
              size="xs"
              label="Change HTML Element type"
              data={selectors}
              value={selectors}
              onChange={handleElementChange}
              leftSection={
                <Tooltip label="Add new HTML type">
                  <ActionIcon size="sm" onClick={() => setIsEditing(true)}>
                    <IconPlus size="1rem" />
                  </ActionIcon>
                </Tooltip>
              }
            />
          )}
        </>
      </div>
      <div className="flex gap-2 items-center w-full">
        <Tooltip label="Block ID">
          <ThemeIcon
            className="h-full">
            <IconHash size="1rem" />
          </ThemeIcon>
        </Tooltip>
        <PillsInput className="w-full" size="xs"
        >
          <Pill.Group>
            {targetsIds.map((target) => (
              <Pill key={target}>#{target}</Pill>
            ))}
          </Pill.Group>

        </PillsInput></div>
    </div>
  );
}

// export function MultiSelectCreatable() {
//     const combobox = useCombobox({
//         onDropdownClose: () => combobox.resetSelectedOption(),
//         onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
//     });
//
//     const [search, setSearch] = useState('');
//     const [data, setData] = useState(groceries);
//     const [value, setValue] = useState<string[]>([]);
//
//     const exactOptionMatch = data.some((item) => item === search);
//
//     const handleValueSelect = (val: string) => {
//         setSearch('');
//
//         if (val === '$create') {
//             setData((current) => [...current, search]);
//             setValue((current) => [...current, search]);
//         } else {
//             setValue((current) =>
//                 current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
//             );
//         }
//     };
//
//     const handleValueRemove = (val: string) =>
//         setValue((current) => current.filter((v) => v !== val));
//
//     const values = value.map((item) => (
//         <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
//             {item}
//         </Pill>
//     ));
//
//     const options = data
//         .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
//         .map((item) => (
//             <Combobox.Option value={item} key={item} active={value.includes(item)}>
//                 <Group gap="sm">
//                     {value.includes(item) ? <CheckIcon size={12} /> : null}
//                     <span>{item}</span>
//                 </Group>
//             </Combobox.Option>
//         ));
//
//     return (
//         <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
//             <Combobox.DropdownTarget>
//                 <PillsInput onClick={() => combobox.openDropdown()}>
//                     <Pill.Group>
//                         {values}
//
//                         <Combobox.EventsTarget>
//                             <PillsInput.Field
//                                 onFocus={() => combobox.openDropdown()}
//                                 onBlur={() => combobox.closeDropdown()}
//                                 value={search}
//                                 placeholder="Search values"
//                                 onChange={(event) => {
//                                     combobox.updateSelectedOptionIndex();
//                                     setSearch(event.currentTarget.value);
//                                 }}
//                                 onKeyDown={(event) => {
//                                     if (event.key === 'Backspace' && search.length === 0) {
//                                         event.preventDefault();
//                                         handleValueRemove(value[value.length - 1]);
//                                     }
//                                 }}
//                             />
//                         </Combobox.EventsTarget>
//                     </Pill.Group>
//                 </PillsInput>
//             </Combobox.DropdownTarget>
//
//             <Combobox.Dropdown>
//                 <Combobox.Options>
//                     {options}
//
//                     {!exactOptionMatch && search.trim().length > 0 && (
//                         <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
//                     )}
//
//                     {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
//                         <Combobox.Empty>Nothing found</Combobox.Empty>
//                     )}
//                 </Combobox.Options>
//             </Combobox.Dropdown>
//         </Combobox>
//     );
// }