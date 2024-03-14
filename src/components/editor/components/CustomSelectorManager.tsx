import * as React from 'react';
import { useState } from 'react';
import { SelectorsResultProps } from '../wrappers';
import {
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
import { IconExclamationCircle, IconHash, IconTags } from '@tabler/icons-react';


export default function CustomSelectorManager({
                                                selectedSelectors,
                                                selectedState,
                                                targetsIds,
                                                allSelectors,
                                                states,
                                                setState,
                                                addSelector,
                                                removeSelector,
                                              }: Omit<SelectorsResultProps, 'Container'>) {


  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');

  const [value, setValue] = useState<string[]>([]);
  const exactOptionMatch = allSelectors.some((item) => item === search);


  const handleValueSelect = (val: string) => {
    setSearch('');
    if (val === '$create') {
      addSelector(search);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val],
      );
    }
  };


  const handleValueRemove = (val: any) => {
    console.log(val);
    removeSelector(val);
    // removeSelector(val); // Move this line inside handleValueRemove
  };

  const values = selectedSelectors.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => removeSelector(item)}>
      {item}
    </Pill>
  ));

  console.log("val",selectedSelectors);

  const options = allSelectors
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

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
          // @ts-ignore
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

      <div className="flex gap-2 items-start w-full h-full">
        <div className="flex gap-5 h-full w-full flex-col">
          <Tooltip color="blue" label="Apply style changes to all blocks with the same class">
            <ThemeIcon variant="light">
              <IconTags size="1rem" />
            </ThemeIcon>
          </Tooltip>
          <Tooltip color="blue" label={`#${targetsIds.toString()}`}>
            <ThemeIcon
              variant="light">
              <IconHash size="1rem" />
            </ThemeIcon>
          </Tooltip>
        </div>

        <Combobox styles={{
          dropdown: { width: '100%' },
        }} store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
          <Combobox.DropdownTarget>
            <PillsInput size="xs" onClick={() => combobox.openDropdown()}>
              <Pill.Group>
                <ScrollArea.Autosize type="scroll" mah={40}>
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
                        handleValueRemove(value[value.length - 1]);
                      }
                    }}
                  />
                </Combobox.EventsTarget>
              </Pill.Group>
            </PillsInput>
          </Combobox.DropdownTarget>

          <Combobox.Dropdown>
            <Combobox.Options>
              {options}
              {!exactOptionMatch && search.trim().length > 0 && (
                <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
              )}
              {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
                <Combobox.Empty>Nothing found</Combobox.Empty>
              )}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>

      </div>

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