import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from './index';

const heros = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('hero-one', {
    label: 'FAQ Simple',
    category: 'sections-heros',
    select: true,
    content: { type: 'hero-one' },
  });

  Components.addType('hero-one', {
    model: {
      defaults: {
        droppable: false,
        name: 'FAQ One',
        attributes: { class: 'hero-one' },
        components: `  
  <div class="container">
    <div class="block">
      <div id="im3n">
        <h1 id="i7vj">Create your dream website
          <br/> in minutes
        </h1>
        <p id="i30t">Create, launch and share your fast, beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
          <!-- notionvc: 28f945b7-a712-442e-8c2a-3354ca2f6bac -->
        </p>
        <div class="btn">Join The Waitlist
        </div>
      </div>
    </div>
  </div>`,
        styles: `
        .accordion-wrapper {
        height:500px;
        width:100%;
        display:flex;
        justify-items:center;
        align-items:center;
        }
        
        
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

export default heros;