import type { Selector, State, Editor } from "grapesjs"
import React, { memo, useEffect, useState } from "react"
import { useEditorInstance } from "../context/EditorInstance"
import { useEditorOptions } from "../context/EditorOptions"
import { noop, isFunction } from "../utils"
import { PortalContainerResult, portalContainer } from "../utils/react"
import StylesProvider from '@/components/editor/wrappers/StylesProvider';

export type SelectorsState = {

    /**
     * Array of current selectors.
     */
    selectors: Selector[],

    /**
     * Array of current selectors.
     */
    selectedSelectors: string[]

    /**
     * Array of available states.
     */
    states: State[]

    /**
     * Current selected state.
     */
    selectedState: string

    /**
     * Selector strings of currently selected targets.
     */
    targetsIds: string[]

    /**
     * Selector strings of currently selected targets.
     */
    allSelectors: string[]

    /**
     * Add new selector to selected targets.
     */
    addSelector: (
        ...args: Parameters<Editor["Selectors"]["addSelected"]>
    ) => void

    /**
     * Remove selector from selected targets.
     */
    removeSelector: (
        ...args: Parameters<Editor["Selectors"]["removeSelected"]>
    ) => void

    /**
     * Update current state.
     */
    setState: (...args: Parameters<Editor["Selectors"]["setState"]>) => void

    /**
     * Default Selectors container.
     */
    Container: PortalContainerResult
}

export type SelectorsResultProps = SelectorsState

export interface SelectorsProviderProps {
    children: (props: SelectorsResultProps) => React.JSX.Element
}

const SelectorsProvider = memo(function ({ children }: SelectorsProviderProps) {
    const { editor } = useEditorInstance()
    const options = useEditorOptions()
    const [propState, setPropState] = useState<SelectorsState>(() => ({
        selectors: [],
        selectedSelectors: [],
        states: [],
        selectedState: "",
        targetsIds: [],
        allSelectors: [],
        addSelector: noop,
        removeSelector: noop,
        setState: noop,
        Container: () => null,
    }))

    useEffect(() => {
        if (!editor) return
        const { Selectors } = editor
        const event = Selectors.events.custom



        const up = ({ container }: { container: HTMLElement }) => {
            setPropState({
                selectors: Selectors.getSelected(),
                selectedSelectors: Selectors.getSelected().filter((s:Selector) => s.get('type') === 1).map(s => s.toString()),
                states: Selectors.getStates(),
                selectedState: Selectors.getState(),
                targetsIds:editor.getSelectedAll().map((t)=>t.getId()),
                allSelectors: Selectors.getAll().filter((s:Selector) => s.get('type') === 1).map(s => s.toString()),
                addSelector: (...args) => Selectors.addSelected(...args),
                removeSelector: (...args) => Selectors.removeSelected(...args),
                setState: (...args) => Selectors.setState(...args),
                Container: portalContainer(container),
            })
        }

        editor.on(event, up)

        return () => {
            editor.off(event, up)
        }
    }, [editor])

    useEffect(() => options.setCustomSelectors(true), [])

    return editor ? (isFunction(children) ? children(propState) : null) : null
})

SelectorsProvider.displayName = 'SelectorsProvider';

export default SelectorsProvider
