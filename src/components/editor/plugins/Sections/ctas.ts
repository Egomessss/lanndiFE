import type { Editor } from 'grapesjs';

const ctas = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('cta-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Simple With Button',
    category: 'sections-ctas',
    select: true,
    content: { type: 'cta-one' },
  });

  Components.addType('cta-one', {
    model: {
      defaults: {
        name: 'CTA Simple With Button',
        components: `  
    <div class="container" id="iku71">
    <div class="cta-box">
      <h2 class="heading-one">CTA Heading
      </h2>
      <p class="paragraph">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
      </p>
      <div class="button">
        <button class="button">CTA Button</button>
        <span class="material-icons material-symbols-outlined">arrow_forward</span>
      </div>
    </div>
  </div>`,
        styles: `
       .container{
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
.cta-box{
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
.heading-one{
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
  width:366px;
  text-align:center;
}
.button{
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
.button:hover{
  opacity:0.9;
}
@media (max-width: 600px){
  #iku71{
    padding-top:0;
    padding-right:0;
    padding-bottom:0;
    padding-left:0;
  }
  .paragraph{
    height:fit-content;
    width:fit-content;
  }
}

`,
      },
    },
  });

  editor.Blocks.add('cta-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'With Feature List',
    category: 'sections-ctas',
    select: true,
    content: { type: 'cta-two' },
  });

  Components.addType('cta-two', {
    model: {
      defaults: {
        name: 'CTA With Feature List',
        components: `  
   <div id="iku71" class="container">
      <div class="cta-box" id="ic5s">
        <h2 class="heading-one">CTA Heading
        </h2>
        <p class="paragraph">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
        </p>
        <div class="cta-features">
          <div class="cta-feature">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="paragraph">Feature one
            </p>
          </div>
          <div class="cta-feature">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="paragraph">Feature two
            </p>
          </div>
          <div class="cta-feature">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="paragraph">Feature three
            </p>
          </div>
          <div class="cta-feature">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="paragraph">Feature four
            </p>
          </div>
        </div>
        <div class="button">
          <button class="button">CTA Button</button>
          <span class="material-icons material-symbols-outlined">arrow_forward</span>
        </div>
      </div>
    </div>`,
        styles: `
     .container{
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
.cta-box{
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
.heading-one{
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
.cta-features{
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
.cta-feature{
  width:fit-content;
  height:fit-content;
  display:flex;
  flex-direction:row;
  column-gap:1rem;
}
.button{
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
.button:hover{
  opacity:0.9;
}
@media (max-width: 600px){
  #iknt{
    margin-top:1rem;
  }
  #iku71{
    padding-top:0;
    padding-right:0;
    padding-bottom:0;
    padding-left:0;
  }
  #ic5s{
    padding-top:1rem;
    padding-bottom:1rem;
    padding-right:1rem;
    padding-left:1rem;
    height:fit-content;
  }
  .paragraph{
    height:fit-content;
    width:fit-content;
    text-align:center;
  }
  .cta-features{
    flex-direction:row;
    flex-wrap:wrap;
  }
}
`,
      },
    },
  });

}

export default ctas;