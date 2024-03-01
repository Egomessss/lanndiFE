import {TraitsResultProps, useEditor} from '@/components/editor/wrappers'
import TraitPropertyField from '@/components/editor/components/TraitPropertyField'
import {Button, Textarea} from "@mantine/core";
import {HeadingTypeSelector} from "@/components/editor/components/HeadingTypeSelector";
import {HtmlElementSelector} from "@/components/editor/components/HtmlElementSelector";
import CodeMirror, {EditorView} from "@uiw/react-codemirror";
import {langs} from "@uiw/codemirror-extensions-langs";
import React, {useState} from "react";

export const CssCode = () => {

    const editor = useEditor()
    console.log("css", editor.getSelected()?.getStyle())
    const stylesObject = editor.getSelected()?.getStyle()

    // console.log("style", editor.getSelected()?.toHTML())
    function convertStylesToString(stylesObject) {
        const styleStrings = Object.entries(stylesObject).map(([key, value]) => {
            return `${key}: ${value};`;
        });
        return styleStrings.join(' ');
    }

    const styleString = convertStylesToString(stylesObject);

    const [value, setValue] = useState(styleString);
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    const handleClick =()=>{
        editor.getSelected()?.setStyle(value)
    }


    return <div className="flex items-start gap-2 flex-col w-full">
        <p>CSS Editor</p>
        <div className="w-full text-xs overflow-x-scroll">
            <CodeMirror
                // options={{
                //     lineWrapping: true,
                //     keyMap: 'sublime',
                //     mode: 'jsx',
                // }}
                // options={
                //     {lineWrapping = {true}}
                // }
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

    const handleClick =()=>{
        editor.getSelected()?.set({content: value})
    }

    return <div className="flex items-start gap-2 flex-col w-full">
        <p>Svg content</p>
        <div className="w-full">
            <CodeMirror
                // options={
                //     {lineWrapping = {true}}
                // }
                value={value} height="200px" theme="dark"
                extensions={[langs.html()]}
                onChange={onChange}/>
        </div>
        <Button onClick={handleClick} size="xs">Save Changes</Button>
    </div>;
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
        </div>
    )
}

