import { useState } from 'react'
import { Editor } from 'grapesjs'

export default (editor: Editor, opts = {}) => {
    const options = {
        ...{
            // default options
            zoomInKey: ['ctrl', '='],
            zoomOutKey: ['ctrl', '-'],
            panelCategory: 'Custom Category',
        },
        ...opts,
    }
    // zoomout button
    editor.Panels.addButton('options', {
        id: 'Zoom Out',
        command: 'zoomout',
        attributes: { title: 'Back' },
        category: options.panelCategory, // add a new category for the custom icon
    })

    // zoomin button
    editor.Panels.addButton('options', {
        id: 'Zoom In',
        command: 'zoomin',
        attributes: { title: 'Back' },
        category: options.panelCategory, // add a new category for the custom icon
    })

    editor.Panels.addButton('options', {
        id: 'Reset Zoom',
        command: 'resetZoom',
        attributes: { title: 'Reset' },
        category: options.panelCategory, // add a new category for the custom icon
    })

    editor.Commands.add('zoomIn', {
        run: () => {
            const zoom = editor.Canvas.getZoom()
            editor.Canvas.setZoom(`${zoom + 10}`)
        },
    })
    editor.Commands.add('zoomOut', {
        run: () => {
            const zoom = editor.Canvas.getZoom()
            editor.Canvas.setZoom(`${zoom - 10}`)
        },
    })

    editor.Commands.add('zoomReset', {
        run: () => {
            editor.Canvas.setZoom(100)
            editor.Canvas.setCoords(0, 0)
        },
    })

    editor.Commands.add('zoomInput', (editor, sender, options = {}) => {
        // Set the canvas zoom to the specified level
        editor.Canvas.setZoom(options.value)
    })

    document.addEventListener('keydown', function(event) {
        if (event.shiftKey && (event.key === '=' || event.key === '+')) {
            event.preventDefault()
            editor.runCommand('zoomin')
        }
        if (event.shiftKey && (event.key === '-' || event.key === '_')) {
            event.preventDefault()
            editor.runCommand('zoomout')
        }
    })
}
