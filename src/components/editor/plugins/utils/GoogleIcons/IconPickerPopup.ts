import materialIcons from './versions.json'
import IEditor from './types/editor';

const IconPickerPopup = (editor: IEditor) => {
  return (
    `<div id="googleIconPicker" class="googleIconPicker items-center justify-center" ref={wrapperRef}>
      <div class="googleIconPicker__overlay"></div>
      <div class="googleIconPicker__content gjs-one-bg gjs-two-color gjs-mdl-dialog">
        <span class="close flex justify-end googleIconPicker__close gjs-mdl-btn-close">⨯</span>
        <div class="googleIconPicker__filterBar gjs-mdl-header">
          <div class="googleIconPicker__search gjs-field gjs-am-add-field">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search" autofocus>
          </div>
         
        </div>
        <div class="googleIconPicker__icons icons">
          ${
            Object.keys(materialIcons).map((icon) => (`
              <button
                aria-haspopup="dialog" 
                role="option" 
                aria-label="Search Icon" 
                aria-selected="false" 
                class="googleIconPicker__iconWrapper" 
              >
                <span 
                  class="googleIconPicker__icon material-icons material-symbols-outlined" 
                  style="font-size: 48px"
                >
                  ${icon}
                </span>
                <span class="googleIconPicker__iconName">
                  ${icon.replaceAll('_', ' ')}
                </span>
              </button>
            `)).join('')
          }
        </div>
      </div>
    </div>`
  );
};

export default IconPickerPopup;
