import { useState } from 'react'
import { Editor } from 'grapesjs'

export default (editor: Editor, opts = {}) => {

    // zoomout button
    const addToToolbar = (component, tool) => {
        const toolbar = component.get('toolbar')
        const toolExists = toolbar.some(item => item.command === tool.commandName)

        if (!toolExists) {
            toolbar.unshift({
                id: tool.id,
                attributes: { class: tool.icon, title: tool.title },
                command: tool.commandName,
            })
            component.set('toolbar', toolbar)
        }
    }

    // Event handler for component selection
    editor.on('component:selected', (component) => {
        // Define tools to be added
        const wrapperTool = {
            icon: 'fa fa-plus',
            title: 'Add a wrapper',
            commandName: 'wrapper',
            id: 'wrapper',
        }
        const settingsTool = {
            icon: 'fa fa-cog',
            title: 'Open component settings',
            commandName: 'open-traits-manager',
            id: 'open-traits-manager',
        }

        // Add tools to the toolbar
        addToToolbar(component, wrapperTool)
        addToToolbar(component, settingsTool)
    })

    // Command to open the Traits Manager
    // editor.Commands.add('open-traits-manager', {
    //     run: () => {
    //         setSelectedRightBar('Settings')
    //     },
    // })

    // Command for deselecting components
    editor.Commands.add('deselect-components', {
        run: () => {
            editor.select(undefined)
            console.log('Components deselected')
        },
    })

    // Keymap for the 'Esc' key to trigger the deselect command
    editor.Keymaps.add('deselect-components', 'esc', 'deselect-components')
}
