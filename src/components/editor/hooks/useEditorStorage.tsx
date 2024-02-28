import {useEditor} from "@/components/editor/context/EditorInstance";

type Props = {

};
export const UseEditorStorage = (props: Props) => {

    const editor = useEditor()

    console.log(editor.sto)



    return (
        <div>

        </div>
    );
};