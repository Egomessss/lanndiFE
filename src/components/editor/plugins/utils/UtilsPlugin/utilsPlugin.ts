import { Editor } from 'grapesjs';

export default (editor: Editor, opts = {}) => {
    editor.Commands.add('wrapper', {
        run: () => {
            // Get all currently selected components

            const selectedComponents = editor.getSelectedAll()

            // Check if there are selected components
            if (selectedComponents.length === 0) {
                return // Exit if no components are selected
            }

            // Create a new 'div' component
            const wrapperDiv = editor.DomComponents.addComponent({
                tagName: 'div',
                // Additional properties for the 'div', like classes, styles, etc.
            })

            // Get the parent of the first selected component
            const firstComponentParent = selectedComponents[0].parent()

            const selected = editor.getSelected()

            // Insert the wrapper at the position of the first selected component
            if (firstComponentParent) {
                firstComponentParent.append(wrapperDiv, {at: selected?.index()})
            }

            // Append each selected component to the new 'div'
            selectedComponents.forEach(component => {
                // @ts-ignore
                wrapperDiv.append(component)
            })

            // Select the new wrapper 'div' component
            editor.select(wrapperDiv)
        },
        // Optional: Define the 'stop' function if needed
        // stop: () => {
        //     // Your stop logic here
        // },
    })


    // Command for deselecting components
    editor.Commands.add('deselect-components', {
        run: () => {
            editor.select(undefined)
        },
    })

    // Keymap for the 'Esc' key to trigger the deselect command
    editor.Keymaps.add('deselect-components', 'esc', 'deselect-components')

    editor.on('load', () => {
        editor.runCommand('core:component-outline')
    })

    // editor.StyleManager.addBuiltIn('font-family', {
    //     type: 'select',
    //     label: 'Family', // Updated label for clarity
    //     default: 'inherit', // 'inherit' is more appropriate for font-family defaults
    // },)

}
