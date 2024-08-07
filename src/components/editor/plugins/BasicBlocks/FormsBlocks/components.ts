import type { Editor } from 'grapesjs';

export const typeForm = 'form';
export const typeInput = 'input';
export const typeTextarea = 'textarea';
export const typeSelect = 'select';
export const typeCheckbox = 'checkbox';
export const typeRadio = 'radio';
export const typeButton = 'form-button';
export const typeLabel = 'label';
export const typeOption = 'option';

export default function(editor: Editor) {
  const { Components } = editor;

  const idTrait = {
    name: 'id',
  };


  const forTrait = {
    name: 'for',
  };

  const nameTrait = {
    name: 'name',
  };

  const placeholderTrait = {
    name: 'placeholder',
  };

  const valueTrait = {
    name: 'value',
  };

  const requiredTrait = {
    type: 'checkbox',
    name: 'required',
  };

  const checkedTrait = {
    type: 'checkbox',
    name: 'checked',
  };

  const createOption = (value: string, content: string) => {
    return { type: typeOption, content, attributes: { value } };
  };

  const checkIfInPreview = (ev: Event) => {
    if (!editor.Commands.isActive('preview')) {
      ev.preventDefault();
    }
  };

  const eventsWithoutPreview = (ev: Event) => {

      ev.preventDefault();

  };

  Components.addType(typeForm, {
    isComponent: el => el.tagName == 'FORM',

    model: {
      defaults: {
        tagName: 'form',
        droppable: ':not(form)',
        draggable: ':not(form)',
        attributes: { method: 'get' },
        traits: [{
          type: 'select',
          name: 'method',
          options: [
            { id: '1', value: 'get', name: 'GET' },
            { id: '2', value: 'post', name: 'POST' },
          ],
        }, {
          name: 'action',
        }],
      },
    },

    view: {
      events: {
        // The submit of the form might redirect the user from the editor so
        // we should always prevent the default here.
        submit: (e: Event) => e.preventDefault(),
      } as any,
    },
  });


  // INPUT

  Components.addType(typeInput, {
    isComponent: el => el.tagName == 'INPUT',

    model: {
      defaults: {
        tagName: 'input',
        droppable: false,
        highlightable: false,
        attributes: { type: 'text' },
        traits: [
          nameTrait,
          placeholderTrait,
          {
            type: 'select',
            name: 'type',
            options: [
              { id: '1', value: 'text' },
              { id: '2', value: 'email' },
              { id: '3', value: 'password' },
              { id: '4', value: 'number' },
            ],
          },
          requiredTrait,
        ],
      },
    },

    extendFnView: ['updateAttributes'],
    view: {
      updateAttributes() {
        this.el.setAttribute('autocomplete', 'off');
      },
    },
  });


  // TEXTAREA
  Components.addType(typeTextarea, {
    extend: typeInput,
    isComponent: el => el.tagName == 'TEXTAREA',

    model: {
      defaults: {
        tagName: 'textarea',
        attributes: {},
        traits: [
          nameTrait,
          placeholderTrait,
          requiredTrait,
        ],
      },
    },
  });


  // OPTION
  Components.addType(typeOption, {
    isComponent: el => el.tagName == 'OPTION',

    model: {
      defaults: {
        tagName: 'option',
        layerable: false,
        droppable: false,
        draggable: false,
        highlightable: false,
      },
    },
  });


  // SELECT
  Components.addType(typeSelect, {
    isComponent: el => el.tagName == 'SELECT',

    model: {
      defaults: {
        tagName: 'select',
        droppable: false,
        highlightable: false,
        components: [
          createOption('opt1', 'Option 1'),
          createOption('opt2', 'Option 2'),
        ],
        traits: [
          nameTrait,
          {
            name: 'options',
            type: 'select-options',
          },
          requiredTrait,
        ],
      },
    },

    view: {
      events: {
        mousedown: checkIfInPreview,
      } as any,
    },
  });


  // CHECKBOX
  Components.addType(typeCheckbox, {
    extend: typeInput,
    isComponent: (el) => el.tagName == 'INPUT' && (el as HTMLInputElement).type == 'checkbox',

    model: {
      defaults: {
        copyable: false,
        attributes: { type: 'checkbox' },
        traits: [
          idTrait,
          nameTrait,
          valueTrait,
          requiredTrait,
          checkedTrait,
        ],
      },
    },

    view: {
      events: {
        click: 'checkIfInPreview',
      } as any,

      // handleClick: function(e) {
      //   e.preventDefault();
      //   // Assuming 'this' refers to the view context where 'model' is accessible
      //
      //
      //   // Toggle the checkbox state
      //   this.model.set('attributes', { ...this.model.get('attributes'), checked: !isChecked });
      //
      //   // Perform actions based on the checkbox state
      // },
      init() {
        this.listenTo(this.model, 'change:attributes:checked', this.handleChecked);
      },

      handleChecked() {
        const isChecked = this?.model.get('attributes')?.checked;
        this.model.set('attributes', { ...this.model.get('attributes'), checked: !isChecked });
        // (this.el as any).checked = !!this.model.get('attributes')?.checked;
      },
    },
  });


  // RADIO
  Components.addType(typeRadio, {
    extend: typeCheckbox,
    isComponent: el => el.tagName == 'INPUT' && (el as HTMLInputElement).type == 'radio',

    model: {
      defaults: {
        attributes: { type: 'radio' },
      },
    },
  });


  // Components.addType(typeButton, {
  //   extend: typeInput,
  //   isComponent: el => el.tagName == 'BUTTON',
  //
  //   model: {
  //     defaults: {
  //       tagName: 'button',
  //       attributes: { type: 'button' },
  //       text: 'Send',
  //       traits: [
  //         {
  //           name: 'text',
  //           changeProp: true,
  //         }, {
  //           type: 'select',
  //           name: 'type',
  //           options: [
  //             { id: '1', value: 'submit' },
  //             { id: '2', value: 'reset' },
  //           ],
  //         }],
  //     },
  //
  //     init() {
  //       const comps = this.components();
  //       const tChild = comps.length === 1 && comps.models[0];
  //       const chCnt = (tChild && tChild.is('textnode') && tChild.get('content')) || '';
  //       const text = chCnt || this.get('text');
  //       this.set('text', text);
  //       this.on('change:text', this.__onTextChange);
  //       (text !== chCnt) && this.__onTextChange();
  //     },
  //
  //     __onTextChange() {
  //       this.components(this.get('text'));
  //     },
  //   },
  //
  //   view: {
  //     events: {
  //       click: checkIfInPreview,
  //     } as any,
  //   },
  // });


  // LABEL
  Components.addType(typeLabel, {
    extend: 'text',
    isComponent: el => el.tagName == 'LABEL',

    model: {
      defaults: {
        tagName: 'label',
        components: 'Label' as any,
        traits: [forTrait],
      },
    },
  });
}
