import {TraitsResultProps, useEditor} from '@/components/editor/wrappers'
import TraitPropertyField from '@/components/editor/components/TraitPropertyField'
import {Select, Textarea} from "@mantine/core";
import {useState} from "react";


export default function CustomTraitManager({
                                               traits,
                                           }: Omit<TraitsResultProps, 'Container'>) {
    const [value, setValue] = useState('h1'); // Initial value for controlled Select component

    const editor = useEditor()
    const data = [
        { label: 'Heading One - H1', value: 'h1', icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>' },
        { label: 'Heading Two - H2', value: 'h2', icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>' },
        { label: 'Heading Three - H3', value: 'h3' },
        { label: 'Heading Four - H4', value: 'h4' },
        { label: 'Heading Five - H5', value: 'h5' },
        { label: 'Heading Six - H6', value: 'h6' },
    ];

    const handleHeadingChange = (selectedValue) => {
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
                icon:icon
            });

            console.log("newValue", selectedElement.get('tagName'));
        }
    };


    const [valueHtml, setValueHtml] = useState('nav'); // Default to 'nav' or any sensible default

    const htmlElements = [
        { label: 'Navigation - nav', value: 'nav' },
        { label: 'Section - section', value: 'section' },
        { label: 'Article - article', value: 'article' },
        { label: 'Aside - aside', value: 'aside' },
        { label: 'Header - header', value: 'header' },
        { label: 'Footer - footer', value: 'footer' },
        { label: 'Main Content - main', value: 'main' },
        { label: 'Figure - figure', value: 'figure' },
        { label: 'Figure Caption - figcaption', value: 'figcaption' },
        { label: 'Time - time', value: 'time' },
        { label: 'Paragraph - p', value: 'p' },
        { label: 'Heading 1 - h1', value: 'h1' },
        { label: 'Heading 2 - h2', value: 'h2' },
        { label: 'Heading 3 - h3', value: 'h3' },
        { label: 'Heading 4 - h4', value: 'h4' },
        { label: 'Heading 5 - h5', value: 'h5' },
        { label: 'Heading 6 - h6', value: 'h6' },
        { label: 'Div - div', value: 'div' },
        { label: 'Anchor - a', value: 'a' },
        { label: 'Button - button', value: 'button' },
    ];
    const handleElementChange = (selectedValue) => {
        const selectedOption = htmlElements.find(option => option.value === selectedValue);
        const label = selectedOption ? selectedOption.label : '';
        setValueHtml(selectedValue); // Update state for controlled component

        const selectedElement = editor.getSelected();
        if (selectedElement) {
            selectedElement.set({
                tagName: selectedValue,
                name: label,
            });
        }
    };

    console.log("content", editor.getSelected()?.toHTML())

    return (
        <div className="gjs-custom-trait-manager mt-3 p-1 text-left">
            <Select size="xs" label="Heading type"
                    data={data}
                    value={value}
                    onChange={handleHeadingChange}/>

            <Select size="xs" label="HTML Element type"
                    data={htmlElements}
                    value={valueHtml}
                    onChange={handleElementChange}/>
            <Textarea
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
            />
            {!traits.length ? (
                <div>No properties available</div>
            ) : (
                traits.map((trait) => (
                    <TraitPropertyField
                        key={trait.getId()}
                        trait={trait}
                    />
                ))
            )}
        </div>
    )
}

