import { Editor } from 'grapesjs';
import { getHtml } from './fonts';

export const cmdGetCss = 'get-fonts-css'
export const cmdGetHtml = 'get-fonts-html'

export default (editor: Editor) => {
  editor.Commands.add(cmdGetCss, () => {
    throw new Error('Not implemented')
  })
  editor.Commands.add(cmdGetHtml, (editor) => {
    const fonts = editor.getModel().get('fonts') || []
    return getHtml(fonts)
  })
}