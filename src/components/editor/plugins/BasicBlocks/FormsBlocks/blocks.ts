import type { BlockProperties, Editor } from 'grapesjs';
import { PluginOptions } from './index';
import {
  typeButton,
  typeCheckbox,
  typeForm,
  typeInput,
  typeLabel,
  typeRadio,
  typeSelect,
  typeTextarea,
} from './components';

export default function (editor: Editor, opt: Required<PluginOptions>) {
  const opts = opt;
  const bm = editor.BlockManager;
  const addBlock = (id: string, def: BlockProperties) => {
    opts.blocks?.indexOf(id)! >= 0 && bm.add(id, {
      ...def,
      category: opts.category,
      select: true,
      ...opt.block(id),
    });
  }

  // addBlock(typeForm, {
  //   label: 'Form',
  //   media: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-forms" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" /><path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" /><path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" /><path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" /><path d="M17 12h.01" /><path d="M13 12h.01" /></svg>',
  //   content: {
  //     type: typeForm,
  //     components: [
  //       {
  //         components: [
  //           { type: typeLabel, components: 'Name' },
  //           { type: typeInput },
  //         ]
  //       }, {
  //         components: [
  //           { type: typeLabel, components: 'Email' },
  //           { type: typeInput, attributes: { type: 'email' } },
  //         ]
  //       }, {
  //         components: [
  //           { type: typeLabel, components: 'Gender' },
  //           { type: typeCheckbox, attributes: { value: 'M' } },
  //           { type: typeLabel, components: 'M' },
  //           { type: typeCheckbox, attributes: { value: 'F' } },
  //           { type: typeLabel, components: 'F' },
  //         ]
  //       }, {
  //         components: [
  //           { type: typeLabel, components: 'Message' },
  //           { type: typeTextarea },
  //         ]
  //       }, {
  //         components: [{ type: typeButton }]
  //       },
  //     ]
  //   }
  // });
  //
  // addBlock(typeInput, {
  //   label: 'Input',
  //   media: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cursor-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12h4" /><path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3" /><path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3" /></svg>',
  //   content: { type: typeInput },
  // });
  //
  // addBlock(typeTextarea, {
  //   label: 'Textarea',
  //   media: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-resize" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 7v10" /><path d="M7 5h10" /><path d="M7 19h10" /><path d="M19 7v10" /><path d="M10 10h4" /><path d="M12 14v-4" /></svg>',
  //   content: { type: typeTextarea },
  // });
  //
  // addBlock(typeSelect, {
  //   label: 'Select',
  //   media: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-select" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M9 11l3 3l3 -3" /></svg>',
  //   content: { type: typeSelect },
  // });
  //
  // addBlock(typeButton, {
  //   label: 'Form Button',
  //   media: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>',
  //   content: { type: typeButton },
  // });
  //
  // addBlock(typeLabel, {
  //   label: 'Label',
  //   media: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" /></svg>  ',
  //   content: { type: typeLabel },
  // });
  //
  // addBlock(typeCheckbox, {
  //   label: 'Checkbox',
  //   media: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-select" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M9 11l3 3l3 -3" /></svg>',
  //   content: { type: typeCheckbox },
  // });
  //
  // addBlock(typeRadio, {
  //   label: 'Radio',
  //   media: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" /></svg>',
  //   content: { type: typeRadio },
  // });
}
