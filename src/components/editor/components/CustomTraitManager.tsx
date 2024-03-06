import {TraitsResultProps, useEditor} from '@/components/editor/wrappers'
import TraitPropertyField from '@/components/editor/components/TraitPropertyField'
import {ActionIcon, Button, TextInput} from "@mantine/core";
import {HeadingTypeSelector} from "@/components/editor/components/HeadingTypeSelector";
import {HtmlElementSelector} from "@/components/editor/components/HtmlElementSelector";
import CodeMirror, {EditorView} from "@uiw/react-codemirror";
import {langs} from "@uiw/codemirror-extensions-langs";
import React, {useState} from "react";
import {IconPlus, IconTrash} from "@tabler/icons-react";

export const CssCode = () => {

    const editor = useEditor()

    const stylesObject = editor.getSelected()?.attributes.styles
    console.log(editor.getSelected()?.attributes.styles);
    // console.log("style", editor.getSelected()?.toHTML())
    // function convertStylesToString(stylesObject) {
    //     // Check if stylesObject is truthy; if not, return an empty string
    //     if (!stylesObject) return '';
    //
    //     const styleStrings = Object.entries(stylesObject).map(([key, value]) => {
    //         return `${key}: ${value};`;
    //     });
    //     return styleStrings.join(' ');
    // }
    //
    // const styleString = convertStylesToString(stylesObject);

    const [value, setValue] = useState(stylesObject || '');
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    const handleClick = () => {
        editor.Css.addRules(value)
    }


    return <div className="flex items-start gap-2 flex-col w-full">
        <p>CSS Editor</p>
        <div className="w-full text-xs overflow-x-scroll">
            <CodeMirror

                value={value} height="200px" theme="dark"
                extensions={[langs.css(), EditorView.lineWrapping]}
                onChange={onChange}/>
        </div>
        <Button onClick={handleClick} size="xs">Save Changes</Button>
    </div>;
}

export const SvgContentCode = () => {

    const editor = useEditor()


    const [value, setValue] = useState(() => editor.getSelected()?.toHTML());


    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    const handleClick = () => {
        editor.getSelected()?.set({content: value})
    }

    return <div className="flex items-start gap-2 flex-col w-full">
        <p>Svg content</p>
        <div className="w-full text-xs">
            <CodeMirror
                value={value} height="200px" theme="dark"
                extensions={[langs.html(), EditorView.lineWrapping]}
                onChange={onChange}/>
        </div>
        <Button onClick={handleClick} size="xs">Save Changes</Button>
    </div>;
}

function CustomAttributes() {

    const editor = useEditor(); // Custom hook to access the GrapeJS editor instance
    const [attributeKey, setAttributeKey] = useState('');
    const [attributeValue, setAttributeValue] = useState('');

    // Function to handle adding attributes
    const handleAddAttribute = () => {
        const component = editor.getSelected(); // Get the currently selected component
        if (component) {
            component.addAttributes({ [attributeKey]: attributeValue }); // Add custom attribute
            setAttributeKey(''); // Reset attribute key input
            setAttributeValue(''); // Reset attribute value input
        }
    };

    // Function to handle removing attributes
    const handleRemoveAttribute = () => {
        const component = editor.getSelected(); // Get the currently selected component
        if (component) {
            component.removeAttributes([attributeKey]); // Remove specified attribute
            setAttributeKey(''); // Reset attribute key input
        }
    };

    return (
        <div>
            <TextInput
                placeholder="Attribute Key"
                value={attributeKey}
                onChange={(event) => setAttributeKey(event.currentTarget.value)}
            />
            <TextInput
                placeholder="Attribute Value"
                value={attributeValue}
                onChange={(event) => setAttributeValue(event.currentTarget.value)}
                rightSection={
                    <ActionIcon onClick={handleAddAttribute}>
                        <IconPlus size="1rem" />
                    </ActionIcon>
                }
            />
            <Button onClick={handleAddAttribute}>
                Add Attribute
            </Button>
            <ActionIcon onClick={handleRemoveAttribute}>
                <IconTrash size="1rem" />
            </ActionIcon>
        </div>
    );

}

export default function CustomTraitManager({
                                               traits,
                                           }: Omit<TraitsResultProps, 'Container'>) {

    const editor = useEditor()
    const value = editor.getSelected()?.get('tagName')


    return (
        <div className="gjs-custom-trait-manager mt-3 p-1 text-left w-full flex flex-col gap-4">
            {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value!) && <HeadingTypeSelector/>}
            <HtmlElementSelector/>
            {value === 'svg' && <SvgContentCode/>}
            <CssCode/>
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
            <CustomAttributes/>
        </div>
    )
}

