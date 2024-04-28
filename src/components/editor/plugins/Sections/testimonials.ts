import type { Editor } from 'grapesjs';

const testimonials = (editor: Editor) => {
  const { Components } = editor;


  // editor.Blocks.add('testimonial-one', {
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
  //   label: 'Testimonial Section',
  //   category: 'sections-testimonials',
  //   select: true,
  //   content: { type: 'testimonial-one' },
  // });

  Components.addType('testimonial-one', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Testimonial Section',
        components: `  
   <div id="testimonial-section" class="lnd-grid-row">
    <div id="infwen" class="lnd-grid-column">
      <h2 id="ihap8q" class="lnd-heading">Testimonial section
      </h2>
      <p id="i6fjjy" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div id="i5k4nf" class="lnd-grid-row">
        <div id="inea73" class="lnd-grid-column testimonial-item">
          <div id="i2d7qp" class="lnd-grid-row">
            <div id="idva29" class="lnd-grid-column">
              <img src="https://source.unsplash.com/random/200x200/?profile,person,business" id="ia7pcr"/>
            </div>
            <div id="i4djop" class="lnd-grid-column">
              <h4 id="iqroa4" class="lnd-heading">Full name
              </h4>
              <p id="iaqf2c" class="text-main-content">Role / Company
              </p>
            </div>
          </div>
          <p id="it3yug" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div id="idndjn" class="lnd-grid-column testimonial-item">
          <div id="ish0zj" class="lnd-grid-row">
            <div id="inucqu" class="lnd-grid-column">
              <img src="https://source.unsplash.com/random/200x200/?profile,person,business" id="ixzdlj"/>
            </div>
            <div id="iuk8ib" class="lnd-grid-column">
              <h4 id="i04ztt" class="lnd-heading">Full name
              </h4>
              <p id="ia9ts3" class="text-main-content">Role / Company
              </p>
            </div>
          </div>
          <p id="i8gt4n" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
       .lnd-grid-row{
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
#testimonial-section{
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
#infwen{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
.lnd-heading{
  margin:0;
}
.lnd-heading{
  margin:0;
  color:rgba(29,40,55,1);
}
#ihap8q{
  font-size:2.5rem;
  margin-bottom:10px;
  text-align:center;
}
.text-main-content{
  line-height:30px;
  font-size:1.2rem;
}
#i6fjjy{
  padding:10px;
  max-width:750px;
  margin-bottom:70px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#i5k4nf{
  width:100%;
  flex-wrap:wrap;
  justify-content:flex-start;
  gap:50px;
}
#inea73{
  justify-content:space-between;
}
.lnd-grid-column.testimonial-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  gap:15px;
  min-width:45%;
  background-color:rgba(247,247,247,0.23);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  align-items:flex-start;
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
}
#i2d7qp{
  width:100%;
  gap:20px;
  align-items:center;
}
#ia7pcr{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
  border-top-width:3px;
  border-right-width:3px;
  border-bottom-width:3px;
  border-left-width:3px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgb(36,99,235);
  border-right-color:rgb(36,99,235);
  border-bottom-color:rgb(36,99,235);
  border-left-color:rgb(36,99,235);
}
#iqroa4{
  font-size:1.5rem;
}
#iaqf2c{
  color:rgba(0,0,0,0.5);
}
#it3yug{
  padding:10px;
  padding-left:0px;
  padding-right:0px;
}
#idndjn{
  justify-content:space-between;
}
#ish0zj{
  width:100%;
  gap:20px;
  align-items:center;
}
#ixzdlj{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
  border-top-width:3px;
  border-right-width:3px;
  border-bottom-width:3px;
  border-left-width:3px;
  border-top-color:rgb(36,99,235);
  border-right-color:rgb(36,99,235);
  border-bottom-color:rgb(36,99,235);
  border-left-color:rgb(36,99,235);
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
}
#i04ztt{
 
  font-size:1.5rem;
}
#ia9ts3{
  color:rgba(0,0,0,0.5);
}
#i8gt4n{
  padding:10px;
  padding-left:0px;
  padding-right:0px;
}
@media (max-width:992px){
  .lnd-grid-row{
    flex-direction:column;
  }
  .lnd-grid-row{
    flex-direction:column;
  }
  #i2d7qp{
    flex-direction:row;
  }
  #ish0zj{
    flex-direction:row;
  }
}
`,
      },
    },
  });

  // editor.Blocks.add('testimonial-two', {
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
  //   label: 'Testimonial Simple',
  //   category: 'sections-testimonials',
  //   select: true,
  //   content: { type: 'testimonial-two' },
  // });

  Components.addType('testimonial-two', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Testimonial Simple',
        components: `  
   <div>
  </div>
  <div id="testimonial-section" class="lnd-grid-row">
    <div id="inea73" class="lnd-grid-column testimonial-item">
      <div id="i2d7qp" class="lnd-grid-row">
        <div id="idva29" class="lnd-grid-column">
          <img src="https://source.unsplash.com/random/200x200/?profile,person,business" id="ia7pcr"/>
        </div>
        <div id="i4djop" class="lnd-grid-column">
          <h4 id="iqroa4" class="lnd-heading">Full name
          </h4>
          <p id="iaqf2c" class="text-main-content">Role / Company
          </p>
        </div>
      </div>
      <p id="it3yug" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>`,
        styles: `
      .lnd-grid-row{
  display:flex;
  justify-content:flex-start;
  align-items:stretch;
  flex-direction:row;
  min-height:auto;
  padding:10px 0;
}
#testimonial-section{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
.lnd-grid-column{
  padding:5px 0;
}
#inea73{
  justify-content:space-between;
}
.lnd-grid-column.testimonial-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  gap:15px;
  min-width:45%;
  background-color:rgba(247,247,247,0.23);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  align-items:flex-start;
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
}
#i2d7qp{
  width:100%;
  gap:20px;
  align-items:center;
}
#ia7pcr{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
  border-top-width:3px;
  border-right-width:3px;
  border-bottom-width:3px;
  border-left-width:3px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgb(36,99,235);
  border-right-color:rgb(36,99,235);
  border-bottom-color:rgb(36,99,235);
  border-left-color:rgb(36,99,235);
}
.lnd-heading{
  margin:0;
}
#iqroa4{
  font-size:1.5rem;
}
.text-main-content{
  line-height:30px;
  font-size:1.2rem;
}
#iaqf2c{
  color:rgba(0,0,0,0.5);
}
#it3yug{
  padding:10px;
  padding-left:0px;
  padding-right:0px;
}
@media (max-width:992px){
  .lnd-grid-row{
    flex-direction:column;
  }
  #i2d7qp{
    flex-direction:row;
  }
}

`,
      },
    },
  });

}

export default testimonials;