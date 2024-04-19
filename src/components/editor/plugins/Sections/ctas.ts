import type { Editor } from 'grapesjs';

const ctas = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('cta-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'CTA Simple',
    category: 'sections-ctas',
    select: true,
    content: { type: 'cta-one' },
  });

  Components.addType('cta-one', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'CTA Simple',
        components: `  
    <div id="iz29ek" class="lnd-cta-container">
    <div id="ik2rdi" class="lnd-cta-column">
      <h2 id="i83vu9" class="lnd-heading">Put here your description
        <br/>for 
        <span id="i7owfh" class="lnd-text-blue">this section</span>
      </h2>
      <div id="in201n" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br/>
      </div>
      <a id="iwgwt5" class="lnd-button">Join
        Waitlist</a>
    </div>
  </div>`,
        styles: `
       .lnd-cta-container{
  display:flex;
  justify-content:flex-start;
  align-items:stretch;
  flex-direction:row;
  min-height:auto;
  padding:10px 0;
}
.lnd-cta-row{
  display:flex;
  justify-content:flex-start;
  align-items:stretch;
  flex-direction:row;
  min-height:auto;
  padding:10px 0;
}
#i6po{
  justify-content:center;
  position:sticky;
  top:15px;
  padding-top:0px;
  padding-bottom:0px;
  padding-left:20px;
  padding-right:20px;
}
#iz29ek{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
.lnd-grid-column{
  padding:5px 0;
}
.lnd-grid-column{
  padding:5px 0;
}
#ik2rdi{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
  padding-top:50px;
  padding-right:50px;
  padding-bottom:50px;
  padding-left:50px;
  border-top-left-radius:50px;
  border-top-right-radius:50px;
  border-bottom-right-radius:50px;
  border-bottom-left-radius:50px;
  border-top-width:1px;
  border-right-width:1px;
  border-bottom-width:1px;
  border-left-width:1px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgba(0,0,0,0.06);
  border-right-color:rgba(0,0,0,0.06);
  border-bottom-color:rgba(0,0,0,0.06);
  border-left-color:rgba(0,0,0,0.06);
  background-image:radial-gradient(515px at 50% 141%,rgba(35,98,235,0.22) 10%,white 90%);
  background-position:0px 0px;
  background-size:100% 100%;
  background-repeat:repeat;
  background-attachment:scroll;
  background-origin:padding-box;
  box-shadow:0px 10px 15px 0 rgba(0,0,0,0.07);
}
.lnd-heading{
  margin:0;
}
.lnd-heading{
  margin:0;
  color:rgba(29,40,55,1);
}
#i83vu9{

  font-size:2.5rem;
  text-align:center;
}
.lnd-text-blue{
  color:rgb(36,99,235);
}
.text-main-content{
  line-height:30px;
  font-size:1.2rem;
}
#in201n{
  padding:10px;
  max-width:750px;
  margin-bottom:35px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
  margin-top:35px;
}
.lnd-button{
  vertical-align:top;
  max-width:100%;
  display:inline-block;
  text-decoration:none;
  color:white;
  padding-right:15px;
  padding-bottom:10px;
  padding-left:15px;
  background-color:rgb(36,99,235);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  padding-top:10px;
  font-size:1.1rem;
  text-align:center;
}
@media (max-width:992px){
  .lnd-grid-row{
    flex-direction:column;
  }
  .lnd-grid-row{
    flex-direction:column;
  }
}
`,
      },
    },
  });

}

export default ctas;