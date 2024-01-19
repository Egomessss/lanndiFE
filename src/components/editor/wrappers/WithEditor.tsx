import { PropsWithChildren } from "react"
import { useEditorMaybe } from "./index"

/**
 * Load children once the editor is available
 */
const WithEditor = ({ children }: PropsWithChildren) => {
    const editor = useEditorMaybe()

    return editor ? <>{children}</> : null
}

export default WithEditor
