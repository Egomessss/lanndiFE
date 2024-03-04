import {useState} from "react";
import {Combobox, InputBase, useCombobox} from "@mantine/core";
import classes from './SelectSize.module.css'

type Props = {};


const units = [
    {value: 'px', label: 'Fixed - px'},
    {value: '%', label: 'Relative - %'},
    {value: 'em', label: 'Scale with block font size - em'},
    {value: 'rem', label: 'Scale with page font size - rem'},
    {value: '100%', label: 'Full - 100%'},
    {value: 'fit-content', label: 'Fit Content'},
    {value: '100vw', label: 'Viewport - 100vw'},
    {value: 'auto', label: 'auto'},
];


export const SelectSize = () => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [data, setData] = useState(units);
    const [value, setValue] = useState<string>('');


    const options = data.map((item) => (
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
                setValue(val);
                combobox.closeDropdown();
            }}
            // position="right"
        >
            <Combobox.Target>
                <InputBase
                    size="xs"
                    w="40px"
                    variant="unstyled"
                    value={value}
                    onChange={(event) => {
                        combobox.openDropdown();
                        combobox.updateSelectedOptionIndex();
                        setValue(event.currentTarget.value);
                    }}
                    onClick={() => combobox.openDropdown()}
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => {
                        combobox.closeDropdown();
                        setValue(value || '');
                    }}
                    placeholder="Value"
                    rightSectionPointerEvents="none"
                />
            </Combobox.Target>
            <Combobox.Dropdown >
                <Combobox.Options >
                    {options}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};