import {useState} from "react";
import {Combobox, InputBase, useCombobox} from "@mantine/core";
import classes from './SelectSize.module.css'
type Props = {};


const units = [
    { value: 'px', label: 'Fixed' },
    { value: '%', label: 'Relative' },
    { value: 'em', label: 'Scale with block font size - em' },
    { value: 'rem', label: 'Scale with page font size - rem' },
    { value: '100%', label: 'Full - 100%' },
    { value: 'fit-content', label: 'Fit Content' },
    { value: '100vw', label: 'Viewport - 100vw' },
    { value: 'auto', label: 'auto' },
];


export const SelectSize = () => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [data, setData] = useState(units);
    const [value, setValue] = useState<string | null>(null);
    const [search, setSearch] = useState('');

    const exactOptionMatch = data.some((item) => item.value === search);
    const filteredOptions = exactOptionMatch
        ? data
        : data.filter((item) => item.value.toLowerCase().includes(search.toLowerCase().trim()));

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item.value} key={item.value}>
            {item.label}
        </Combobox.Option>
    ));

    return (
        <Combobox
            classNames={classes}
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
                if (val === '$create') {
                    setData((current) => [...current, search]);
                    setValue(search);
                } else {
                    setValue(val);
                    setSearch(val);
                }

                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    size="xs"
                    w="40px"
                    variant="unstyled"
                    value={search}
                    onChange={(event) => {
                        combobox.openDropdown();
                        combobox.updateSelectedOptionIndex();
                        setSearch(event.currentTarget.value);
                    }}
                    onClick={() => combobox.openDropdown()}
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => {
                        combobox.closeDropdown();
                        setSearch(value || '');
                    }}
                    placeholder="Value"
                    rightSectionPointerEvents="none"
                />
            </Combobox.Target>
            <Combobox.Dropdown>
                <Combobox.Options>
                    {options}
                    {!exactOptionMatch && search.trim().length > 0 && (
                        <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
                    )}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};