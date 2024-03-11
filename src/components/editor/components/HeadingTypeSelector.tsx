import {useState} from "react";
import {useEditor} from "@/components/editor/context/EditorInstance";
import {Select} from "@mantine/core";

export const HeadingTypeSelector = () => {
    const editor = useEditor()

    const [value, setValue] = useState(editor.getSelected()?.get('tagName')); // Initial value for controlled Select component
    // console.log("heading",value)
    const data = [
        {
            label: 'Heading One - H1',
            value: 'h1',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>'
        },
        {
            label: 'Heading Two - H2',
            value: 'h2',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>'
        },
        {
            label: 'Heading Three - H3',
            value: 'h3',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-2" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>'
        },
        {
            label: 'Heading Four - H4',
            value: 'h4',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-4" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 18v-8l-4 6h5" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>'
        },
        {
            label: 'Heading Five - H5',
            value: 'h5',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-5" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>'
        },
        {
            label: 'Heading Six - H6',
            value: 'h6',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-6" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" /><path d="M21 12a2 2 0 1 0 -4 0v4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>'
        },
    ];
    const handleHeadingChange = (selectedValue:any) => {
        const selectedOption = data.find(option => option.value === selectedValue);
        const label = selectedOption ? selectedOption.label : '';
        const icon = selectedOption ? selectedOption.icon : '';
        setValue(selectedValue); // Update state for controlled component

        console.log("oldValue", selectedValue);

        const selectedElement = editor.getSelected();
        if (selectedElement) {
            selectedElement.set({
                tagName: selectedValue,
                name: label,
                icon: icon
            });

            console.log("newValue", selectedElement.get('tagName'));
        }
    };
    return <Select size="xs" label="Heading type"
                   data={data}
                   value={value}
                   onChange={handleHeadingChange}/>;
}