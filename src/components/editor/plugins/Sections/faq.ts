import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from './index';

export default (editor: Editor) => {
  const { Components } = editor;
  const script = function() {
    const accordionContent = document.querySelectorAll('.accordion-content');

    accordionContent.forEach((item, index) => {
      let header = item.querySelector('header');
      header?.addEventListener('click', () => {

        item.classList.toggle('open');

        let description = item.querySelector('.description');
        let icon = item.querySelector('.fa-angle-down');

        if (item.classList.contains('open')) {
          // @ts-ignore
          description.style.height = `${description.scrollHeight + 10}px`;
          // @ts-ignore
          icon.style.transform = 'rotate(180deg)';
        } else {
          // @ts-ignore
          description.style.height = '0px';
          // @ts-ignore
          icon.style.transform = 'rotate(0deg)';
        }

        removeOpen(index);
      });

    });

    function removeOpen(index1: number) {

      accordionContent.forEach((item2, index2) => {

        if (index1 != index2) {
          item2.classList.remove('open');

          let des = item2.querySelector('.description');
          // @ts-ignore
          des.style.height = '0px';

          let icon = item2.querySelector('.fa-angle-down');
          // @ts-ignore
          icon.style.transform = 'rotate(0deg)';
        }
      });
    }
  };

  editor.Blocks.add('faq-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'FAQ Simple',
    category: 'sections-faqs',
    select: true,
    content: { type: 'faq-one' },
  });

  Components.addType('faq-one', {
    model: {
      defaults: {
        script: script,
        droppable: false,
        name: 'FAQ One',
        attributes: { class: 'faq-one' },
        components: `  
     <div class="accordion">
        <div class="accordion-content">
            <header>
                <span class="title">What do you mean by Accordion?</span>
                <i class="fa-solid fa-angle-down"></i>
            </header>

            <p class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod inventore repudiandae repellendus
                possimus voluptates nobis quisquam, ipsam natus laboriosam! Sed, pariatur! Maxime aut reiciendis libero,
                omnis debitis expedita consectetur eos!
            </p>
        </div>

        <div class="accordion-content">
            <header>
                <span class="title">What do you mean by Footer?</span>
                <i class="fa-solid fa-angle-down"></i>
            </header>

            <p class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod inventore repudiandae repellendus
                possimus voluptates nobis quisquam, ipsam natus laboriosam! Sed, pariatur! Maxime aut reiciendis libero,
                omnis debitis expedita consectetur eos!
            </p>
        </div>

        <div class="accordion-content">
            <header>
                <span class="title">What do you mean by Navbar?</span>
                <i class="fa-solid fa-angle-down"></i>
            </header>

            <p class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod inventore repudiandae repellendus
                possimus voluptates nobis quisquam, ipsam natus laboriosam! Sed, pariatur! Maxime aut reiciendis libero,
                omnis debitis expedita consectetur eos!
            </p>
        </div>

        <div class="accordion-content">
            <header>
                <span class="title">What do you mean by Sidebar?</span>
                <i class="fa-solid fa-angle-down"></i>
            </header>

            <p class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod inventore repudiandae repellendus
                possimus voluptates nobis quisquam, ipsam natus laboriosam! Sed, pariatur! Maxime aut reiciendis libero,
                omnis debitis expedita consectetur eos!
            </p>
        </div>
    </div>
    <!-- footer copy right section end -->`,
        styles: `
.accordion{
    max-width: 530px;
    width: 100%;
    background: #fff;
    margin: 0 15px;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
}

.accordion .accordion-content{
    background: #fff6ee;
    border-left: 4px solid #efc6a1;
    border-radius: 4px;
    overflow: hidden;
    margin: 10px 0;
}

.accordion .accordion-content:nth-child(2){
    background: #f1f1fe;
    border-left: 4px solid #928edf;
}

.accordion .accordion-content:nth-child(3){
    background: #fef0f5;
    border-left: 4px solid #e696a8;
}

.accordion .accordion-content:nth-child(4){
    background: #f0f9ff;
    border-left: 4px solid #9ecfec;
}

.accordion-content header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
    padding: 0 15px;
    cursor: pointer;
    transition: all 0.2s linear;
}

.accordion-content header .title{
    font-size: 14px;
    font-weight: 500;
    color: #333;
}

.accordion-content header i{
    font-size: 15px;
    color: #333;
    transition: all 0.1s linear;
}

.accordion-content .description{
    padding: 0 15px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    height: 0;
    transition: all 0.2s linear;
}
`,
      },
    },
  });

}