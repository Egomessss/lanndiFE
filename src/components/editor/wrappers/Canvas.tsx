import { useRef, useEffect, HTMLProps } from 'react';
import {useEditorOptions} from "../context/EditorOptions"
import {ScrollArea, AppShell} from "@mantine/core";

export default function Canvas({
                                   children,
                                   ...rest
                               }: HTMLProps<HTMLDivElement>) {
    const editorOptions = useEditorOptions()

    const canvasRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        canvasRef.current && editorOptions.setRefCanvas(canvasRef.current)
    }, [canvasRef.current])



    return (
        <AppShell.Main >
            <div
                {...rest}
                ref={canvasRef}
                className="w-full h-full"
            >
                {children}
            </div>
        </AppShell.Main>
    )
}
