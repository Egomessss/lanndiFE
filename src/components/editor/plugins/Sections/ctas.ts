import type { Editor } from 'grapesjs';

const ctas = (editor: Editor) => {
  const { Components } = editor;

  // get number of the component being added

  // let numberOfComponents = '';
  //
  // editor.on('component:add', (model) => {
  //   const count = editor.DomComponents.getById(model.type).components().length;
  //
  //   numberOfComponents = count.toString();
  // });


  editor.Blocks.add('cta-one', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214835.png',
    label: 'Simple With Button',
    category: 'sections-ctas',
    select: true,
    content: { type: 'cta-one' },
  });

  Components.addType('cta-one', {
    model: {
      defaults: {
        name: 'CTA Simple With Button',
        attributes: { class: 'cta-simple-container' },
        components: `  
    <div class="cta-simple-content-box">
      <h2 class="cta-simple-heading-one">CTA Heading
      </h2>
      <p class="cta-simple-paragraph">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
      </p>
        <button class="cta-simple-button">CTA Button</button>
    </div>
  `,
        styles: `
       .cta-simple-container{
  height:fit-content;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
  padding-top:2rem;
  padding-right:2rem;
  padding-bottom:2rem;
  padding-left:2rem;
}
.cta-simple-content-box{
  height:268px;
  max-height:100%;
  width:100%;
  border-style:solid;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  border-color:rgba(70, 111, 250, 1);
}
.cta-simple-heading-one{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.cta-simple-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:366px;
  text-align:center;
}
.cta-simple-button{
  width:fit-content;
  cursor:pointer;
  outline:0;
  color:#fff;
  background-color:#0d6efd;
  border-color:#0d6efd;
  display:flex;
  font-weight:400;
  line-height:1.5;
  text-align:center;
  border:1px solid transparent;
  padding:2px 8px 2px 8px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.cta-simple-button:hover{
  opacity:0.9;
}
@media (max-width: 600px){
  .cta-simple-container{
    padding-top:0;
    padding-right:0;
    padding-bottom:0;
    padding-left:0;
  }
  .cta-simple-paragraph{
    height:fit-content;
    width:fit-content;
  }
}

`,
      },
    },
  });

  editor.Blocks.add('cta-two', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214921.png',
    label: 'With Feature List',
    category: 'sections-ctas',
    select: true,
    content: { type: 'cta-two' },
  });

  Components.addType('cta-two', {
    model: {
      defaults: {
        attributes: { class: 'container-feature-list' },
        name: 'CTA With Feature List',
        components: `  
      <div class="cta-feature-list-content" >
        <h2 class="container-feature-list-heading-one">CTA Heading
        </h2>
        <p class="container-feature-list-paragraph">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
        </p>
        <div class="cta-feature-list-features">
          <div class="cta-feature-list-feature">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="container-feature-list-paragraph">Feature one
            </p>
          </div>
          <div class="cta-feature-list-feature">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="container-feature-list-paragraph">Feature two
            </p>
          </div>
          <div class="cta-feature-list-feature">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="container-feature-list-paragraph">Feature three
            </p>
          </div>
          <div class="cta-feature-list-feature">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="container-feature-list-paragraph">Feature four
            </p>
          </div>
        </div>
      
          <button class="container-feature-list-button">CTA Button</button>
        
        
      </div>
  `,
        styles: `
     .container-feature-list{
  height:fit-content;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
  padding-top:2rem;
  padding-right:2rem;
  padding-bottom:2rem;
  padding-left:2rem;
}
.cta-feature-list-content{
  height:268px;
  max-height:100%;
  width:100%;
  border-style:solid;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  border-color:rgba(70, 111, 250, 1);
}
.container-feature-list-heading-one{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.container-feature-list-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.cta-feature-list-features{
  width:fit-content;
  height:fit-content;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
.cta-feature-list-feature{
  width:fit-content;
  height:fit-content;
  display:flex;
  flex-direction:row;
  column-gap:1rem;
}
.container-feature-list-button{
  width:fit-content;
  cursor:pointer;
  outline:0;
  color:#fff;
  background-color:#0d6efd;
  border-color:#0d6efd;
  display:flex;
  font-weight:400;
  line-height:1.5;
  text-align:center;
  border:1px solid transparent;
  padding:2px 8px 2px 8px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.container-feature-list-button:hover{
  opacity:0.9;
}
@media (max-width: 600px){
  
  .container-feature-list{
    padding-top:0;
    padding-right:0;
    padding-bottom:0;
    padding-left:0;
  }
  .cta-feature-list-feature-list-content{
    padding-top:1rem;
    padding-bottom:1rem;
    padding-right:1rem;
    padding-left:1rem;
    height:fit-content;
  }
  .container-feature-list-paragraph{
    height:fit-content;
    width:fit-content;
    text-align:center;
  }
  .cta-feature-list-features{
    flex-direction:row;
    flex-wrap:wrap;
  }
}
`,
      },
    },
  });

};

export default ctas;