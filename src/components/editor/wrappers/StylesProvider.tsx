import { Sector } from "grapesjs";
import {portalContainer, PortalContainerResult} from "../utils/react";
import React, {memo, useEffect, useState} from "react";
import { useEditorInstance } from "../context/EditorInstance";
import {useEditorOptions} from "@/components/editor/context/EditorOptions";
import {isFunction} from "@/components/editor/utils";


export type StylesState = {
    /**
     * Array of visible sectors.
     */
    sectors: Sector[],

    /**
     * Default Styles container.
     */
    Container: PortalContainerResult,
};

export type StylesResultProps = StylesState;

export interface StylesProviderProps {
    children: (props: StylesResultProps) => React.JSX.Element,
}

const StylesProvider = memo(function ({ children }: StylesProviderProps) {
    const { editor } = useEditorInstance();
    const options = useEditorOptions();
    const [propState, setPropState] = useState<StylesState>(() => ({
        sectors: [],
        Container: () => null,
    }));
    // console.log('StylesProvider');
    useEffect(() => {
        if (!editor) return;
        const { Styles } = editor;
        const event = Styles.events.custom;

        const up = ({ container }: { container: HTMLElement }) => {
            setPropState({
                sectors: Styles.getSectors({ visible: true }),
                Container: portalContainer(container),
            });
        }

        editor.on(event, up);

        return () => {
            editor.off(event, up);
        };
    }, [editor]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => options.setCustomStyles(true), []);

    return editor ?
        (isFunction(children) ? children(propState)  : null)
        : null;
});

StylesProvider.displayName = 'StylesProvider';

export default StylesProvider;
