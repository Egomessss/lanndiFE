import type { Editor } from 'grapesjs';

const faqs = (editor: Editor) => {
  const { Components } = editor;

  const script = function() {
    let answers = document.querySelectorAll('.accordion__question');

    answers.forEach((question) => {
      question.addEventListener('click', function(event) {
        const target = event.currentTarget;
        // @ts-ignore
        if (target.classList.contains('active')) {
          // @ts-ignore
          target.classList.remove('active');
        } else {
          // @ts-ignore
          target.classList.add('active');
        }
        // Toggle the display of the next sibling (the answer)
        // @ts-ignore
        const answer = target.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  };

  editor.Blocks.add('faq-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Accordion',
    category: 'sections-faqs',
    select: true,
    content: { type: 'faq-one' },
  });

  Components.addType('faq-one', {
    model: {
      defaults: {
        script: script,
        name: 'FAQ Accordion',
        // attributes: { class: 'faq-one' },
        components: `  
<div id="iq5a">
    <h2 class="heading-two">Frequently Asked Questions
    </h2>
    <div id="i6nwu" class="layout">
      <div class="accordion">
        <button type="button" id="iqdry" class="accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="accordion">
        <button type="button" class="accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="accordion">
        <button type="button" class="accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="accordion">
        <button type="button" class="accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="accordion">
        <button type="button" class="accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="accordion">
        <button type="button" class="accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="accordion">
        <button type="button" class="accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="accordion">
        <button type="button" class="accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
   #iq5a{
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
}
.heading-two{
  margin-right:0;
  margin-bottom:2rem;
  margin-left:0;
  margin-top:2rem;
}
.layout{
  width:100%;
  margin-top:auto;
  margin-right:auto;
  margin-bottom:auto;
  margin-left:auto;
}
.accordion{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  margin-top:10px;
  margin-right:0;
  margin-bottom:10px;
  margin-left:0;
  border-style:solid;
  border-top-width:2px;
  border-right-width:0;
  border-bottom-width:0;
  border-left-width:0;
  border-color:rgb(231,231,233);
}
.accordion__question{
  cursor:pointer;
  width:100%;
  height:30px;
  background:inherit;
  border-top-width:0;
  border-right-width:0;
  border-bottom-width:0;
  border-left-width:0;
  text-align:left;
}
.accordion__question:hover{
  background:rgba(231, 231, 233, 1);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
}
.accordion__answer{
  display:none;
}

.accordion__answer p{
  margin-top:5px;
  margin-right:0;
  margin-bottom:5px;
  margin-left:0;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
}
`,
      },
    },
  });


  editor.Blocks.add('faq-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Grid',
    category: 'sections-faqs',
    select: true,
    content: { type: 'faq-two' },
  });

  Components.addType('faq-two', {
    model: {
      defaults: {
        script: script,
        name: 'FAQ Grid',
        // attributes: { class: 'faq-one' },
        components: `  
<div class="container" id="il9g">
    <h2 class="heading-two" id="icu2">Frequently Asked Questions
    </h2>
    <div class="grid">
      <div class="faq-grid-item">
        <h3 class="heading-three">How long do you provide support?
        </h3>
        <p class="paragraph">
          <span id="ihmps">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
        </p>
      </div>
      <div class="faq-grid-item">
        <h3 class="heading-three">How long do you provide support?
        </h3>
        <p class="paragraph">
          <span id="ikrn8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
        </p>
      </div>
      <div class="faq-grid-item">
        <h3 class="heading-three">How long do you provide support?
        </h3>
        <p class="paragraph">
          <span id="iiiuh">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
        </p>
      </div>
      <div class="faq-grid-item">
        <h3 class="heading-three">How long do you provide support?
        </h3>
        <p class="paragraph">
          <span id="iwp8k">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
        </p>
      </div>
    </div>
  </div>`,
        styles: `
  .container{
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
}
#il9g{
  height:fit-content;
  flex-direction:column;
  align-items:center;
  justify-content:start;
  row-gap:2rem;
  margin-top:2rem;
  margin-bottom:2rem;
}
.heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#icu2{
  height:27px;
}
.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;
  gap:10px;
  padding:10px;
  height:fit-fit-content;
  width:100%;
}
.faq-grid-item{
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
.heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#ihmps{
  color:rgb(82, 82, 91);
  font-family:"Plus Jakarta Sans";
  font-size:18px;
}
#ikrn8{
  color:rgb(82, 82, 91);
  font-family:"Plus Jakarta Sans";
  font-size:18px;
}
#iiiuh{
  color:rgb(82, 82, 91);
  font-family:"Plus Jakarta Sans";
  font-size:18px;
}
#iwp8k{
  color:rgb(82, 82, 91);
  font-family:"Plus Jakarta Sans";
  font-size:18px;
}
@media (max-width: 880px){
  .grid{
    height:fit-conten;
  }
}
@media (max-width: 768px){
  .grid{
    grid-template-columns:repeat(1, 1fr);
    grid-template-rows:repeat(4, 1fr);
  }
}
`,
      },
    },
  });

};

export default faqs;