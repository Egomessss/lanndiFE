import type { Editor } from 'grapesjs';

const features = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('feature-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'CTA Simple',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-one' },
  });

  Components.addType('feature-one', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Feature Image Side',
        components: `  
   <div id="feature-section" class="lnd-feature-grid-row">
    <div id="imymf" class="lnd-feature-grid-column">
      <div id="ib541" class="lnd-feature-grid-row">
        <div id="iz8m8" class="lnd-feature-grid-column">
          <h4 id="ij2gh" class="lnd-heading lnd-text-blue">Feature One text
          </h4>
          <h2 id="ism014" class="lnd-heading">Feature Text
          </h2>
          <div id="igrx8" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button id="iqx3z1" class="lnd-button">Getting
            Started</button>
        </div>
        <div id="iepks" class="lnd-feature-grid-column">
          <img src="https://images.pexels.com/photos/2121640/pexels-photo-2121640.jpeg?auto=compress&cs=tinysrgb&w=500&dpr=2" id="i466d"/>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
       .lnd-feature-grid-row{
  display:flex;
  justify-content:flex-start;
  align-items:stretch;
  flex-direction:row;
  min-height:auto;
  padding:10px 0;
}
.lnd-grid-row{
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
#feature-section{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
.lnd-feature-grid-column{
  padding:5px 0;
}
.lnd-grid-column{
  padding:5px 0;
}
#imymf{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#ib541{
  gap:100px;
  justify-content:space-between;
}
#iz8m8{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
}
.lnd-heading{
  margin:0;
}
.lnd-heading{
  margin:0;
  color:rgba(29,40,55,1);
}
#ij2gh{
  font-size:1.2rem;
  margin-bottom:15px;
}
.lnd-text-blue{
  color:rgb(36,99,235);
}
#ism014{
  font-size:2.5rem;
}
.text-main-content{
  line-height:30px;
  font-size:1.2rem;
}
#igrx8{
  padding:10px;
  max-width:750px;
  margin-bottom:25px;
  padding-left:0px;
  padding-right:0px;
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
#i466d{
  color:black;
  border-top-left-radius:35px;
  border-top-right-radius:35px;
  border-bottom-right-radius:35px;
  border-bottom-left-radius:35px;
  max-width:100%;
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

export default features;