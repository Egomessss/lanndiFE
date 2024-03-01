import {useEditor} from "@/components/editor/context/EditorInstance";
import {useState} from "react";
import {Select} from "@mantine/core";

export const HtmlElementSelector = () => {
    const editor = useEditor()

    const [valueHtml, setValueHtml] = useState('nav'); // Default to 'nav' or any sensible default

    const htmlElements = [
        {label: 'Navigation - nav', value: 'nav'},
        {label: 'Section - section', value: 'section'},
        {label: 'Article - article', value: 'article'},
        {label: 'Aside - aside', value: 'aside'},
        {label: 'Header - header', value: 'header'},
        {label: 'Footer - footer', value: 'footer'},
        {label: 'Main Content - main', value: 'main'},
        {label: 'Figure - figure', value: 'figure'},
        {label: 'Figure Caption - figcaption', value: 'figcaption'},
        {label: 'Time - time', value: 'time'},
        {label: 'Paragraph - p', value: 'p'},
        {label: 'Heading 1 - h1', value: 'h1'},
        {label: 'Heading 2 - h2', value: 'h2'},
        {label: 'Heading 3 - h3', value: 'h3'},
        {label: 'Heading 4 - h4', value: 'h4'},
        {label: 'Heading 5 - h5', value: 'h5'},
        {label: 'Heading 6 - h6', value: 'h6'},
        {label: 'Div - div', value: 'div'},
        {label: 'Anchor - a', value: 'a'},
        {label: 'Button - button', value: 'button'},
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
    return <Select size="xs" label="HTML Element type"
                   data={htmlElements}
                   value={valueHtml}
                   onChange={handleElementChange}/>;
}