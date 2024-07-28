import { html, render } from 'lit-html';
import { live } from 'lit-html/directives/live.js';
import { map } from 'lit-html/directives/map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { ref, createRef } from 'lit-html/directives/ref.js';
import { Font, GoogleFont, FontsPluginOptions, FontsPluginEditor } from './types';

const el = document.createElement('div');
let modal: any; // TODO: Define proper type for modal

export const cmdOpenFonts = 'open-fonts';
// Constants
const enum LocalStorageKeys {
  FONTS = 'silex-loaded-fonts-list',
}

// Module variables
let _fontsList: GoogleFont[] | null = null;
let fonts: Font[] = [];
let defaults: Font[] = [];

// Options
let fontServer = 'https://fonts.googleapis.com';
let fontApi = 'https://www.googleapis.com';

// Load available fonts only once per session
try {
  _fontsList = JSON.parse(localStorage.getItem(LocalStorageKeys.FONTS) || 'null');
} catch(e) {
  console.error('Could not get fonts from local storage:', e);
}


async function wait(ms: number = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadFonts(editor: FontsPluginEditor): Promise<void> {
  fonts = structuredClone(editor.getModel().get('fonts') || []);
}
function saveFonts(editor: FontsPluginEditor, opts: FontsPluginOptions): void {
  const model = editor.getModel();

  model.set('fonts', fonts);
  updateHead(editor, fonts);
  updateUi(editor, fonts, opts);
  model.set('changesCount', editor.getDirtyCount() + 1);
}

async function loadFontList(url: string): Promise<GoogleFont[]> {
  if (!_fontsList) {
    const response = await fetch(url);
    const data = await response.json();
    _fontsList = data.items;
    localStorage.setItem(LocalStorageKeys.FONTS, JSON.stringify(_fontsList));
    await wait(); // let the dialog open
  }
  return _fontsList;
}
export const fontsDialogPlugin = (editor: FontsPluginEditor, opts: FontsPluginOptions): void => {
  defaults = editor.StyleManager.getBuiltIn('font-family').options;
  if (opts.server_url) fontServer = opts.server_url;
  if (opts.api_url) fontApi = opts.api_url;
  // if (!opts.api_key) throw new Error(editor.I18n.t('grapesjs-fonts.You must provide Google font api key'));

  editor.Commands.add(cmdOpenFonts, {
    run: (_, sender) => {
      modal = editor.Modal.open({
        title: editor.I18n.t('grapesjs-fonts.Fonts'),
        content: '',
        attributes: { class: 'fonts-dialog' },
      }).onceClose(() => {
        editor.stopCommand(cmdOpenFonts);
      });

      modal.setContent(el);
      loadFonts(editor);
      displayFonts(editor, opts, []);
      loadFontList(`${fontApi}/webfonts/v1/webfonts?key=AIzaSyDxRNOqu_IcvcyQQQB17JI9MrlwoBpKIyk`)
        .then((fontsList) => {
          displayFonts(editor, opts, fontsList);
          const form = el.querySelector('form');
          if (form) {
            form.onsubmit = (event: Event) => {
              event.preventDefault();
              saveFonts(editor, opts);
              editor.stopCommand(cmdOpenFonts);
            };
            form.querySelector('input')?.focus();
          }
        });
      return modal;
    },
    stop: () => {
      modal.close();
    },
  });

  editor.on('storage:start:store', (data: any) => {
    data.fonts = editor.getModel().get('fonts');
  });

  editor.on('storage:end:load', (data: any) => {
    const loadedFonts = data.fonts || [];
    editor.getModel().set('fonts', loadedFonts);
    setTimeout(() => refresh(editor, opts), 1000);
  });

  editor.on('canvas:frame:load', () => refresh(editor, opts));
  editor.on('page', () => refresh(editor, opts));
};

function match(hay: string, s: string): boolean {
  const regExp = new RegExp(s, 'i');
  return hay.search(regExp) !== -1;
}

const searchInputRef = createRef<HTMLInputElement>();
const fontRef = createRef<HTMLSelectElement>();


function displayFonts(editor: FontsPluginEditor, config: FontsPluginOptions, fontsList: GoogleFont[]): void {
  const searchInput = searchInputRef.value;
  const activeFonts = fontsList.filter(f => match(f.family, searchInput?.value || ''));
  searchInput?.focus();

  function findFont(font: Font): GoogleFont | undefined {
    return fontsList.find(f => font.name === f.family);
  }

  render(html`
    <form class="silex-form grapesjs-fonts">
      <div class="silex-form__group">
        <div class="silex-bar">
          <input
            style=${styleMap({
    width: '100%',
  })}
            placeholder="${editor.I18n.t('grapesjs-fonts.Search')}"
            type="text"
            ${ref(searchInputRef)}
            @keydown=${() => {
    //(fontRef.value as HTMLSelectElement).selectedIndex = 0
    setTimeout(() => displayFonts(editor, config, fontsList))
  }}/>
          <select
            style=${styleMap({
    width: '150px',
  })}
            ${ref(fontRef)}
          >
            ${ map(activeFonts, f => html`
              <option value=${f['family']}>${f['family']}</option>
            `)}
          </select>
          <button class="silex-button"
            ?disabled=${!fontRef.value || activeFonts.length === 0}
            type="button" @click=${() => {
    addFont(
      editor,
      config,
      fonts,
      activeFonts[fontRef.value.selectedIndex]
    )
    displayFonts(editor, config, fontsList)
  }}>
            ${editor.I18n.t('grapesjs-fonts.Add font')}
          </button>
        </div>
      </div>
      <hr/>
      <div
        class="silex-form__element">
        <h2>${editor.I18n.t('grapesjs-fonts.Installed fonts')}</h2>
        <ol class="silex-list">
        ${ map(fonts, f => html`
          <li>
            <div class="silex-list__item__header">
              <h4>${f.name}</h4>
            </div>
            <div class="silex-list__item__body">
              <fieldset class="silex-group--simple full-width">
                <legend>CSS rules</legend>
                <input
                  class="full-width"
                  type="text"
                  name="name"
                  .value=${live(f.value)}
                  @change=${e => {
    updateRules(editor, fonts, f, e.target.value)
    displayFonts(editor, config, fontsList)
  }}
                />
              </fieldset>
              <fieldset class="silex-group--simple full-width">
                <legend>Variants</legend>
                ${ map(
    // keep only variants which are letters, no numbers
    // FIXME: we need the weights
    findFont(f)?.variants.filter(v => v.replace(/[a-z]/g, '') === ''),
    v => html`
                  <div>
                    <input
                      id=${ f.name + v }
                      type="checkbox"
                      value=${v}
                      ?checked=${f.variants?.includes(v)}
                      @change=${e => {
      updateVariant(editor, fonts, f, v, e.target.checked)
      displayFonts(editor, config, fontsList)
    }}
                    /><label for=${ f.name + v }>${v}</label>
                  </div>
                `)}
              </fieldset>
            </div>
            <div class="silex-list__item__footer">
              <button class="silex-button" type="button" @click=${() => {
    removeFont(editor, fonts, f)
    displayFonts(editor, config, fontsList)
  }}>${editor.I18n.t('grapesjs-fonts.Remove')}</button>
            </div>
          </li>
        `) }
        </ol>
      </div>
      <footer>
        <input class="silex-button" type="button" @click=${() => editor.stopCommand(cmdOpenFonts)} value="${editor.I18n.t('grapesjs-fonts.Cancel')}">
        <input class="silex-button" type="submit" value="${editor.I18n.t('grapesjs-fonts.Save')}">
      </footer>
    </form>
  `, el)
}

function addFont(editor: FontsPluginEditor, config: FontsPluginOptions, fonts: Font[], font: GoogleFont): void {
  const name = font.family;
  const value = `"${font.family}", ${font.category}`;
  fonts.push({ name, value, variants: [] });
}

function removeFont(editor: FontsPluginEditor, fonts: Font[], font: Font): void {
  const idx = fonts.findIndex(f => f === font);
  fonts.splice(idx, 1);
}

function removeAll(doc: Document, attr: string): void {
  const all = doc.head.querySelectorAll(`[${attr}]`);
  Array.from(all).forEach((el) => el.remove());
}

const GOOGLE_FONTS_ATTR = 'data-silex-gstatic';

function updateHead(editor: FontsPluginEditor, fonts: Font[]): void {
  const doc = editor.Canvas.getDocument();
  if (!doc) {
    return;
  }
  removeAll(doc, GOOGLE_FONTS_ATTR);
  const html = getHtml(fonts, GOOGLE_FONTS_ATTR);
  doc.head.insertAdjacentHTML('beforeend', html);
}


function updateUi(editor: FontsPluginEditor, fonts: Font[], opts: FontsPluginOptions): void {
  const styleManager = editor.StyleManager;
  const fontProperty = styleManager.getProperty('typography', 'font-family');
  if (!fontProperty) {
    return;
  }
  if (opts.preserveDefaultFonts) {
    fonts = defaults.concat(fonts);
  } else if (fonts.length === 0) {
    fonts = defaults;
  }
  fontProperty.setOptions(fonts);
}

export function refresh(editor: FontsPluginEditor, opts: FontsPluginOptions): void {
  const fonts = editor.getModel().get('fonts') || [];
  updateHead(editor, fonts);
  updateUi(editor, fonts, opts);
}

function updateRules(editor: FontsPluginEditor, fonts: Font[], font: Font, value: string): void {
  font.value = value;
}

function updateVariant(editor: FontsPluginEditor, fonts: Font[], font: Font, variant: string, checked: boolean): void {
  const has = font.variants?.includes(variant);
  if (has && !checked) font.variants = font.variants.filter(v => v !== variant);
  else if (!has && checked) font.variants.push(variant);
}

export function getHtml(fonts: Font[], attr: string = ''): string {
  const preconnect = `<link href="${fontServer}" rel="preconnect" ${attr}><link href="https://fonts.gstatic.com" rel="preconnect" crossorigin ${attr}>`;
  const links = fonts
    .map(f => {
      const prefix = f.variants.length ? ':' : '';
      const variants = prefix + f.variants.map(v => v.replace(/\d+/g, '')).filter(v => !!v).join(',');
      return `<link href="${fontServer}/css?family=${f.name.replace(/ /g, '+')}${variants}&display=swap" rel="stylesheet" ${attr}>`;
    })
    .join('');

  return preconnect + links;
}