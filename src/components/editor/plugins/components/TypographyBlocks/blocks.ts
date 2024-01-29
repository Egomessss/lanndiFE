import { BlockProperties, Editor, grapesjs } from 'grapesjs'
import { PluginOptions } from './index'

export default function(editor: Editor, opts: Required<PluginOptions>) {
    const bm = editor.BlockManager
    const { category, blocks } = opts

    const toAdd = (name: string) => blocks.indexOf(name) >= 0
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    }

    editor.DomComponents.addType('heading-one', {
        isComponent: el => {
            if (el.tagName === 'H1') { // Corrected the condition to check for H1 tag
                return { type: 'heading-one' };
            }
        },
        model: {
            defaults: {
                name: 'Heading One', // Default component name
                tagName: 'h1',
                content: 'Heading',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
                // traits: [
                //     {
                //         type: 'select',
                //         label: 'Heading Type',
                //         name: 'tagName', // Use 'tagName' to change the component's tag
                //         options: [
                //             { value: 'h1', name: 'H1 - Heading One' },
                //             { value: 'h2', name: 'H2 - Heading Two' },
                //             { value: 'h3', name: 'H3 - Heading Three' },
                //             { value: 'h4', name: 'H4 - Heading Four' },
                //             { value: 'h5', name: 'H5 - Heading Five' },
                //             { value: 'h6', name: 'H6 - Heading Six' },
                //             // Add more options as needed
                //         ],
                //     },
                // ],
                droppable: false,
            },

            // init() {
            //     this.on('change:attributes', this.handleAttrChange); // Listen to changes in attributes
            // },
            //
            // handleAttrChange() {
            //    editor.log("Attribute change detected");
            //
            //     // Get the currently selected option from the 'tagName' attribute
            //     const newTag = this.getAttributes().tagName;
            //    editor.log("New Tag:", newTag);
            //
            //     // Define a mapping from tagName to a descriptive component name
            //     const nameMap = {
            //         'h1': 'Heading 1',
            //         'h2': 'Heading 2',
            //         'h3': 'Heading 3',
            //         'h4': 'Heading 4',
            //         'h5': 'Heading 5',
            //         'h6': 'Heading 6'
            //     };
            //
            //     // Check if the newTag is in the nameMap
            //     if (nameMap[newTag]) {
            //         // Update the model's tagName and name properties
            //         this.set({
            //             tagName: newTag,
            //             name: nameMap[newTag] // Set the name to a more descriptive value
            //         });
            //        editor.log("Updated name to:", nameMap[newTag]);
            //     } else {
            //        editor.log("No matching name found for tag:", newTag);
            //     }
            // },
        },
    })


    toAdd('heading-one') &&
    bm.add('heading-one', {
        ...commonBlockProps,
        label: "Heading One",

        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        content: { type: 'heading-one' },
    })

    editor.DomComponents.addType('heading-two', {
        isComponent: el => {
            if (el.tagName === 'H2') { // Corrected the condition to check for H1 tag
                return { type: 'heading-two' };
            }
        },
        model: {
            defaults: {
                name: 'Heading Two', // Default component name
                tagName: 'h2',
                content: 'Heading',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-1" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18v-8l-2 2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,

                droppable: false,
            },


        },
    })


    toAdd('heading-two') &&
    bm.add('heading-two', {
        ...commonBlockProps,
        label: "Heading Two",

        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        content: { type: 'heading-two' },
    })

    editor.DomComponents.addType('heading-three', {
        isComponent: el => {
            if (el.tagName === 'H3') { // Corrected the condition to check for H1 tag
                return { type: 'heading' };
            }
        },
        model: {
            defaults: {
                name: 'Heading Three', // Default component name
                tagName: 'h3',
                content: 'Heading',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-2" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,

                droppable: false,
            },


        },
    })


    toAdd('heading-three') &&
    bm.add('heading-three', {
        ...commonBlockProps,
        label: "Heading Three",

        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 -2 -2" /><path d="M17 16a2 2 0 1 0 2 -2" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        content: { type: 'heading-three' },
    })




    editor.DomComponents.addType('heading-four', {
        isComponent: el => {
            if (el.tagName === 'H4') { // Corrected the condition to check for H1 tag
                return { type: 'heading-four' };
            }
        },
        model: {
            defaults: {
                name: 'Heading Four', // Default component name
                tagName: 'h4',
                content: 'Heading',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-4" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 18v-8l-4 6h5" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,

                droppable: false,
            },


        },
    })


    toAdd('heading-four') &&
    bm.add('heading-four', {
        ...commonBlockProps,
        label: "Heading Four",
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 18v-8l-4 6h5" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        content: { type: 'heading-four' },
    })


    editor.DomComponents.addType('heading-five', {
        isComponent: el => {
            if (el.tagName === 'H5') { // Corrected the condition to check for H1 tag
                return { type: 'heading-five' };
            }
        },
        model: {
            defaults: {
                name: 'Heading Five', // Default component name
                tagName: 'h5',
                content: 'Heading',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-5" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,

                droppable: false,
            },


        },
    })


    toAdd('heading-five') &&
    bm.add('heading-five', {
        ...commonBlockProps,
        label: "Heading Five",

        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        content: { type: 'heading-five' },
    })

    editor.DomComponents.addType('heading-six', {
        isComponent: el => {
            if (el.tagName === 'H6') { // Corrected the condition to check for H1 tag
                return { type: 'heading-six' };
            }
        },
        model: {
            defaults: {
                name: 'Heading Six', // Default component name
                tagName: 'h6',
                content: 'Heading',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-6" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" /><path d="M21 12a2 2 0 1 0 -4 0v4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,

                droppable: false,
            },


        },
    })


    toAdd('heading-six') &&
    bm.add('heading-six', {
        ...commonBlockProps,
        label: "Heading Six",
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" /><path d="M21 12a2 2 0 1 0 -4 0v4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
        content: { type: 'heading-six' },
    })

    editor.DomComponents.addType('paragraph', {
        isComponent: el => {
            if (el.tagName === 'P') { // Corrected the condition to check for H1 tag
                return { type: 'paragraph' };
            }
        },
        model: {
            defaults: {
                name: 'Paragraph', // Default component name
                tagName: 'p',
                content: 'Paragraph',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-6" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" /><path d="M21 12a2 2 0 1 0 -4 0v4" /><path d="M4 6v12" /><path d="M12 6v12" /><path d="M11 18h2" /><path d="M3 18h2" /><path d="M4 12h8" /><path d="M3 6h2" /><path d="M11 6h2" /></svg>`,
                droppable: false,
            },

        },
    })


    toAdd('paragraph') &&
    bm.add('paragraph', {
        ...commonBlockProps,
        activate: true,
        label: opts.labelParagraph,
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-justified" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l12 0" /></svg>`,
        content: {
            type: 'text',
            content: 'Insert your text here',
            style: { padding: '10px' },
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-justified" width="12" height="12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l12 0" /></svg>`,
        },
    })



}
