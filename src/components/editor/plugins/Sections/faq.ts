import type { Editor } from 'grapesjs';

const faqs = (editor: Editor) => {
  const { Components } = editor;

  const script = function() {
    let answers = document.querySelectorAll('.faqa-accordion__question');

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
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20215334.png',
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
<div class="faqa-container">
    <h2 class="faqa-heading-two">Frequently Asked Questions
    </h2>
    <div  class="faqa-layout">
      <div class="faqa-accordion">
        <button   class="faqa-accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="faqa-accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="faqa-accordion">
        <button   class="faqa-accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="faqa-accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="faqa-accordion">
        <button   class="faqa-accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="faqa-accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="faqa-accordion">
        <button   class="faqa-accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="faqa-accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="faqa-accordion">
        <button   class="faqa-accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="faqa-accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="faqa-accordion">
        <button   class="faqa-accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="faqa-accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="faqa-accordion">
        <button   class="faqa-accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="faqa-accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
      <div class="faqa-accordion">
        <button   class="faqa-accordion__question">Lorem ipsum dolor sit amet?</button>
        <div class="faqa-accordion__answer">
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque fugiat inventore itaque natus odio!
          </p>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
   .faqa-container{
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
}
.faqa-heading-two{
  margin-right:0;
  margin-bottom:2rem;
  margin-left:0;
  margin-top:2rem;
}
.faqa-layout{
  width:100%;
  margin-top:auto;
  margin-right:auto;
  margin-bottom:auto;
  margin-left:auto;
}
.faqa-accordion{
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
.faqa-accordion__question{
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
.faqa-accordion__question:hover{
  background:rgba(231, 231, 233, 1);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
}
.faqa-accordion__answer{
  display:none;
}

.faqa-accordion__answer p{
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
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20215353.png',
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
<div class="faqg-container" >
    <h2 class="faqg-heading-two">Frequently Asked Questions
    </h2>
    <div class="faqg-grid">
      <div class="faqg-grid-item">
        <h3 class="faqg-heading-three">Lorem ipsum dolor sit amet, consectetur adipisicing elit.?
        </h3>
        <p class="faqg-paragraph">
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div class="faqg-grid-item">
        <h3 class="faqg-heading-three">Lorem ipsum dolor sit amet, consectetur adipisicing elit?
        </h3>
        <p class="faqg-paragraph">
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div class="faqg-grid-item">
        <h3 class="faqg-heading-three">Lorem ipsum dolor sit amet, consectetur adipisicing.?
        </h3>
        <p class="faqg-paragraph">
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div class="faqg-grid-item">
        <h3 class="faqg-heading-three">Lorem ipsum dolor sit amet, consectetur adipisicing.?
        </h3>
        <p class="faqg-paragraph">
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
     
    </div>
  </div>`,
        styles: `
  .faqg-container{
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  align-items:center;
  justify-content:center;
 padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
padding-left: 10px;
   height:fit-content;
  flex-direction:column;
  align-items:center;
  justify-content:start;
  row-gap:2rem;
  margin-top:2rem;
  margin-bottom:2rem;
}

.faqg-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  height:27px;
}

.faqg-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;
  gap:10px;
  padding:10px;
  height:fit-fit-content;
  width:100%;
}
.faqg-grid-item{
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
.faqg-heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.faqg-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
   color:rgb(82, 82, 91);
  font-family:"Plus Jakarta Sans";
  font-size:18px;
}

@media (max-width: 880px){
  .faqg-grid{
    height:fit-content;
  }
}
@media (max-width: 600px){
  .faqg-grid{
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