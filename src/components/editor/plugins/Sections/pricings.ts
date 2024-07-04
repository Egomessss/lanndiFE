import type { Editor } from 'grapesjs';

const pricings = (editor: Editor) => {
  const { Components } = editor;

  const script = function() {
    // @ts-ignore
    document.getElementById('togglePricing').addEventListener('change', function() {

      const monthlyElements = document.querySelectorAll('.monthly');
      const annualElements = document.querySelectorAll('.annual');


      console.log('elements', monthlyElements, annualElements);

      monthlyElements.forEach(el => {
        // @ts-ignore
        el.style.display = this.checked ? 'none' : 'block'; // Explicitly set to 'block'
      });

      annualElements.forEach(el => {
        // @ts-ignore
        el.style.display = this.checked ? 'block' : 'none'; // Explicitly set to 'block' when checked
      });


    });
  };

  editor.Blocks.add('pricing-simple', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Lifetime deal',
    category: 'sections-pricing',
    select: true,
    content: { type: 'pricing-simple' },
  });

  Components.addType('pricing-simple', {
    model: {
      defaults: {
        name: 'Lifetime Pricing',
        // Define default values for your custom properties
        components: `<div class="container" id="id7a">
    <h2 class="heading-two">Simple no tricks pricing
    </h2>
    <p class="paragraph" id="ibq3">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
    </p>
    <div class="block" id="ickt">
      <div class="block" id="irkq2">
        <h3 class="heading-three">Heading
        </h3>
        <p class="paragraph" id="iowbj">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
        </p>
        <div class="block" id="ii4hh">
          <div class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="paragraph" id="in6fg">Insert your text here
            </p>
          </div>
          <div class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="paragraph" id="isw0z">Insert your text here
            </p>
          </div>
          <div class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="paragraph" id="ivs1l">Insert your text here
            </p>
          </div>
          <div class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="paragraph" id="ixbxn">Insert your text here
            </p>
          </div>
        </div>
      </div>
      <div class="block" id="ikx8v">
        <p class="paragraph" id="ij8r9">Lifetime deal
        </p>
        <p class="paragraph" id="iwerr">$299
        </p>
        <div class="button">
          <button class="button">Buy Now</button>
        </div>
        <div class="block" id="iqt06">
          <a id="isnyz" href="#">Terms</a>
          <a id="ive7h" href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
        .container{
  height:100px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
}
#id7a{
  height:fit-content;
  flex-direction:column;
  row-gap:2rem;
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
}
.heading-two{
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
  width:193px;
}
#ibq3{
  width:557px;
  text-align:center;
}
.block{
  height:80px;
  max-height:100%;
  width:100%;
  display:grid;
  grid-template-rows:1fr 1fr;
}
#ickt{
  height:fit-content;
  display:grid;
  flex-direction:column;
  justify-content:start;
  align-items:start;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows:1fr;
  column-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  border-color:rgb(222, 212, 227);
}
#irkq2{
  height:fit-content;
  grid-column:span 2;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
}
.heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#iowbj{
  width:504px;
}
#ii4hh{
  width:515px;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
}
.feature-box{
  display:flex;
  flex-direction:row;
  height:100%;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  grid-column:span 1;
  width:100%;
  column-gap:1rem;
}
#in6fg{
  width:133px;
}
#isw0z{
  width:133px;
}
#ivs1l{
  width:133px;
}
#ixbxn{
  width:133px;
}
#ikx8v{
  grid-column:span 1;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  row-gap:1rem;
  background:rgb(237, 236, 238);
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
}
#ij8r9{
  height:fit-content;
}
#iwerr{
  font-size:2.5rem;
  font-weight:700;
}
.button{
  width:fit-content;
  cursor:pointer;
  outline:0;
  color:#fff;
  background-color:#0d6efd;
  border-color:#0d6efd;
  display:inline-block;
  font-weight:400;
  line-height:1.5;
  text-align:center;
  border:1px solid transparent;
  padding:2px 8px 2px 8px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
}
.button:hover{
  opacity:0.9;
}
#iqt06{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  height:fit-content;
  width:fit-content;
}
@media (max-width: 880px){
  #ickt{
    grid-template-columns:1fr 1fr ;
    row-gap:2rem;
  }
  #iowbj{
    width:fit-content;
  }
  #ii4hh{
    width:100%;
  }
  #ikx8v{
    padding-top:1rem;
    padding-right:1rem;
    padding-bottom:1rem;
    padding-left:1rem;
    grid-column:span 2;
  }
}
@media (max-width: 600px){
  #ibq3{
    width:fit-content;
  }
  #ii4hh{
    grid-template-columns:1fr ;
  }
}
`,
      },
    },
  });


  editor.Blocks.add('pricing-three-columns', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: '3 Columns Highlighted',
    category: 'sections-pricing',
    select: true,
    content: { type: 'pricing-three-columns' },
  });

  Components.addType('pricing-three-columns', {
    model: {
      defaults: {
        name: 'Pricing 3 Columns Highlighted',
        // Define default values for your custom properties
        components: `<div id="id7a" class="container">
    <h2 id="ihhff" class="heading-two">Simple no tricks pricing
    </h2>
    <p id="ibq3" class="paragraph">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
    </p>
    <div id="ickt" class="pricing-container">
      <div id="irkq2" class="pricing-box">
        <h3 id="iqmsf" class="heading-three">Basic
        </h3>
        <p id="iowbj" class="paragraph">Sit molestiae et. Provident ad dolorem occaecati eos iste.
        </p>
        <p id="iwerr" class="paragraph">$29/month
        </p>
        <div id="ii4hh" class="pricing-container">
          <div id="iwphn" class="feature-box">
            <span id="ixcwu" class="material-icons material-symbols-outlined">check</span>
            <p id="in6fg" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="iq39i" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="ijita" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="i4bsr" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="in8kg" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="il9cg" class="feature-box">
            <span id="ifbec" class="material-icons material-symbols-outlined">check</span>
            <p id="ivs1l" class="paragraph">Insert your text here
            </p>
          </div>
        </div>
        <a id="ihugse" class="link-box"><div id="i44cv" class="button">
          <button id="iuro6" class="button">Buy Now</button>
          </div></a>
      </div>
      <div id="i3og3b" class="pricing-box highlighted-box">
        <h3 id="ijyaj7" class="heading-three">Pro
        </h3>
        <p id="ioq1d6" class="paragraph">Sit molestiae et. Provident ad dolorem occaecati eos iste.
        </p>
        <p id="if8tsj" class="paragraph">$29/month
        </p>
        <div id="i81q4l" class="pricing-container">
          <div id="i7bv6i" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="ir35pq" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="ivy0u4" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="iryct6" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="izlff6" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="i58igh" class="paragraph">Insert your text here
            </p>
          </div>
          <div class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="ifh2c7" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="iwe4sm" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="iy5yof" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="i9o5tl" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="ial8lb" class="paragraph">Insert your text here
            </p>
          </div>
        </div>
        <a id="ibtrkj" class="link-box"><div id="ia7l0p" class="button">
          <button id="i03m1p" class="button">Buy Now</button>
          </div></a>
      </div>
      <div id="ib9ttc" class="pricing-box">
        <h3 id="ip1wns" class="heading-three">Business
        </h3>
        <p id="i7e68a" class="paragraph">Sit molestiae et. Provident ad dolorem occaecati eos iste.
        </p>
        <p id="inqrci" class="paragraph">$29/month
        </p>
        <div id="ip235d" class="pricing-container">
          <div id="i2l0zt" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="ifrwkg" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="iucp2p" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="igz37i" class="paragraph">Insert your text here
            </p>
          </div>
          <div id="i4pu8j" class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="imzkhx" class="paragraph">Insert your text here
            </p>
          </div>
          <div class="feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p id="ius7c8" class="paragraph">Insert your text here
            </p>
          </div>
        </div>
        <a id="imlptp" class="link-box"><div id="i33ya2" class="button">
          <button id="iciil6" class="button">Buy Now</button>
          </div></a>
      </div>
    </div>
    <div id="iqt06" class="pricing-container">
      <a id="isnyz" href="#">Terms</a>
      <a id="ive7h" href="#">Privacy Policy</a>
    </div>
  </div>`,
        styles: `
       .container{
  height:100px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
}
#id7a{
  height:fit-content;
  flex-direction:column;
  row-gap:2rem;
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
}
.heading-two{
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
  width:100%;
}
#ibq3{
  width:557px;
  text-align:center;
}
.pricing-container{
  height:80px;
  max-height:100%;
  width:100%;
  display:grid;
  grid-template-rows:1fr 1fr;
  grid-template-columns:1fr 1fr 1fr;
  grid-column:span;
}
#ickt{
  height:fit-content;
  display:grid;
  flex-direction:column;
  align-items:end;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows:1fr;
  column-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  border-color:rgb(222, 212, 227);
}
#irkq2{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  border-color:rgb(225, 218, 230);
}
.pricing-box{
  grid-column:span 1;
}
.heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#iowbj{
  width:100%;
}
#iwerr{
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
}
#ii4hh{
  width:100%;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
  display:flex;
  flex-direction:column;
}
.feature-box{
  display:flex;
  flex-direction:row;
  height:100%;
  padding-right:1rem;
  padding-left:1rem;
  grid-column:span 1;
  width:100%;
  column-gap:1rem;
}
#in6fg{
  width:133px;
}
#ijita{
  width:133px;
}
#in8kg{
  width:133px;
}
#ivs1l{
  width:133px;
}
.link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding:10px;
  max-width:100%;
  text-decoration:none;
  cursor:pointer;
}
.link-box:empty{
  text-decoration:none;
  padding:5px;
}
.link-box:empty:before{
  background-color:#ddd;
  color:#000;
  font-size:16px;
  font-weight:bold;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:30px;
  padding:0 10px;
  opacity:0.3;
  border-radius:3px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  content:"Link Box";
}
.button{
  cursor:pointer;
  outline:0;
  color:#fff;
  background-color:#0d6efd;
  border-color:#0d6efd;
  display:inline-block;
  font-weight:400;
  line-height:1.5;
  text-align:center;
  border:1px solid transparent;
  padding:2px 8px 2px 8px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
  width:100%;
}
.button:hover{
  opacity:0.9;
}
#i3og3b{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  border-color:rgb(225, 218, 230);
}
.pricing-box.highlighted-box{
  background:rgb(244, 244, 245);
  height:478px;
}
#ioq1d6{
  width:100%;
}
#if8tsj{
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
}
#i81q4l{
  width:100%;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
  display:flex;
  flex-direction:column;
}
#ir35pq{
  width:133px;
}
#iryct6{
  width:133px;
}
#i58igh{
  width:133px;
}
#ifh2c7{
  width:133px;
}
#iy5yof{
  width:133px;
}
#ial8lb{
  width:133px;
}
#ib9ttc{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  border-color:rgb(225, 218, 230);
}
#i7e68a{
  width:100%;
}
#inqrci{
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
}
#ip235d{
  width:100%;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
  display:flex;
  flex-direction:column;
}
#ifrwkg{
  width:133px;
}
#igz37i{
  width:133px;
}
#imzkhx{
  width:133px;
}
#ius7c8{
  width:133px;
}
#iqt06{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  height:fit-content;
  width:fit-content;
}
@media (max-width: 880px){
  #ickt{
    grid-template-columns:1fr 1fr;
    row-gap:2rem;
  }
  #iowbj{
    width:fit-content;
  }
  #ii4hh{
    width:100%;
  }
  #ioq1d6{
    width:fit-content;
  }
  #i81q4l{
    width:100%;
  }
  #i7e68a{
    width:fit-content;
  }
  #ip235d{
    width:100%;
  }
}
@media (max-width: 600px){
  #ibq3{
    width:fit-content;
  }
  #ickt{
    grid-template-columns:1fr;
  }
  #ii4hh{
    grid-template-columns:1fr;
  }
  #i81q4l{
    grid-template-columns:1fr;
  }
  #ip235d{
    grid-template-columns:1fr;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('pricing-three-columns-switch', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Monthly/Annual Switch',
    category: 'sections-pricing',
    select: true,
    content: { type: 'pricing-three-columns-switch' },
    // tooltip:'To use the checkbox event switch to preview mode, if you want to change annual values just double click them on preview mode'
  });

  Components.addType('pricing-three-columns-switch', {
    model: {
      defaults: {
        script: script,
        name: 'Pricing With Monthly/Annual Switch',
        // Define default values for your custom properties
        components: ` <div id="i9e6">
    <div id="id7a" class="container">
      <h2 id="ihhff" class="heading-two">Simple no tricks pricing
      </h2>
      <p id="ibq3" class="paragraph">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
      </p>
      <div class="pricing-option">
        <label id="i6gi9"><input type="checkbox" id="togglePricing" autocomplete="off"/><span id="iwixn" class="annual-text">Annual 20% off</span></label>
      </div>
      <div id="ickt" class="pricing-container">
        <div id="irkq2" class="pricing-box">
          <h3 id="iqmsf" class="heading-three">Basic
          </h3>
          <p id="iowbj" class="paragraph">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p id="iwerr" class="monthly">$29/month
          </p>
          <p id="iwerr-2" class="annual">$290/month
          </p>
          <div id="ii4hh" class="pricing-container">
            <div id="iwphn" class="feature-box">
              <span id="ixcwu" class="material-icons material-symbols-outlined">check</span>
              <p id="in6fg" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="iq39i" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ijita" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="i4bsr" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="in8kg" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="il9cg" class="feature-box">
              <span id="ifbec" class="material-icons material-symbols-outlined">check</span>
              <p id="ivs1l" class="paragraph">Insert your text here
              </p>
            </div>
          </div>
          <a id="ihugse" class="link-box"><div id="i44cv" class="button">
            <button type="button" id="iuro6" class="button">Buy Now</button>
            </div></a>
        </div>
        <div id="i3og3b" class="pricing-box highlighted-box">
          <h3 id="ijyaj7" class="heading-three">Pro
          </h3>
          <p id="ioq1d6" class="paragraph">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p id="if8tsj" class="monthly">$49/month
          </p>
          <p id="iwerr-3" class="annual">$490/month
          </p>
          <div id="i81q4l" class="pricing-container">
            <div id="i7bv6i" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ir35pq" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="ivy0u4" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="iryct6" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="izlff6" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="i58igh" class="paragraph">Insert your text here
              </p>
            </div>
            <div class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ifh2c7" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="iwe4sm" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="iy5yof" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="i9o5tl" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ial8lb" class="paragraph">Insert your text here
              </p>
            </div>
          </div>
          <a id="ibtrkj" class="link-box"><div id="ia7l0p" class="button">
            <button type="button" id="i03m1p" class="button">Buy Now</button>
            </div></a>
        </div>
        <div id="ib9ttc" class="pricing-box">
          <h3 id="ip1wns" class="heading-three">Business
          </h3>
          <p id="i7e68a" class="paragraph">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p id="inqrci" class="monthly">$99/month
          </p>
          <p id="iwerr-4" class="annual">$990/month
          </p>
          <div id="ip235d" class="pricing-container">
            <div id="i2l0zt" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ifrwkg" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="iucp2p" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="igz37i" class="paragraph">Insert your text here
              </p>
            </div>
            <div id="i4pu8j" class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="imzkhx" class="paragraph">Insert your text here
              </p>
            </div>
            <div class="feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ius7c8" class="paragraph">Insert your text here
              </p>
            </div>
          </div>
          <a id="imlptp" class="link-box"><div id="i33ya2" class="button">
            <button type="button" id="iciil6" class="button">Buy Now</button>
            </div></a>
        </div>
      </div>
      <div id="iqt06" class="pricing-container">
        <a id="isnyz" href="#">Terms</a>
        <a id="ive7h" href="#">Privacy Policy</a>
      </div>
    </div>
  </div>`,
        styles: `
      .container{
  height:100px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
}
#id7a{
  height:fit-content;
  flex-direction:column;
  row-gap:2rem;
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
}
.heading-two{
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
#ibq3{
  width:557px;
  text-align:center;
}
#i6gi9{
  display:flex;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  width:160px;
}
#togglePricing{
  width:20px;
  height:20px;
}
#iwixn{
  font-weight:700;
}
.pricing-container{
  height:80px;
  max-height:100%;
  width:100%;
  display:grid;
  grid-template-rows:1fr 1fr;
  grid-template-columns:1fr 1fr 1fr;
  grid-column:span;
}
#ickt{
  height:fit-content;
  display:grid;
  flex-direction:column;
  align-items:end;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows:1fr;
  column-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  border-color:rgb(222, 212, 227);
}
#irkq2{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  border-color:rgb(225, 218, 230);
}
.pricing-box{
  grid-column:span 1;
}
.heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#iowbj{
  width:100%;
}
.monthly{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:100%;
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
}
.annual{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:100%;
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  display:none;
  undefined:undefined;
}
#iwerr-2{
  display:none;
}
#ii4hh{
  width:100%;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
  display:flex;
  flex-direction:column;
}
.feature-box{
  display:flex;
  flex-direction:row;
  height:100%;
  padding-right:1rem;
  padding-left:1rem;
  grid-column:span 1;
  width:100%;
  column-gap:1rem;
}
#in6fg{
  width:133px;
}
#ijita{
  width:133px;
}
#in8kg{
  width:133px;
}
#ivs1l{
  width:133px;
}
.link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding:10px;
  max-width:100%;
  text-decoration:none;
  cursor:pointer;
}
.link-box:empty{
  text-decoration:none;
  padding:5px;
}
.link-box:empty:before{
  background-color:#ddd;
  color:#000;
  font-size:16px;
  font-weight:bold;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:30px;
  padding:0 10px;
  opacity:0.3;
  border-radius:3px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  content:"Link Box";
}
.button{
  cursor:pointer;
  outline:0;
  color:#fff;
  background-color:#0d6efd;
  border-color:#0d6efd;
  display:inline-block;
  font-weight:400;
  line-height:1.5;
  text-align:center;
  border:1px solid transparent;
  padding:2px 8px 2px 8px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
  width:100%;
}
.button:hover{
  opacity:0.9;
}
#i3og3b{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  border-color:rgb(225, 218, 230);
}
.pricing-box.highlighted-box{
  background:rgb(244, 244, 245);
  height:478px;
}
#ioq1d6{
  width:100%;
}
#iwerr-3{
  display:none;
}
#i81q4l{
  width:100%;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
  display:flex;
  flex-direction:column;
}
#ir35pq{
  width:133px;
}
#iryct6{
  width:133px;
}
#i58igh{
  width:133px;
}
#ifh2c7{
  width:133px;
}
#iy5yof{
  width:133px;
}
#ial8lb{
  width:133px;
}
#ib9ttc{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-style:solid;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  border-color:rgb(225, 218, 230);
}
#i7e68a{
  width:100%;
}
#iwerr-4{
  display:none;
}
#ip235d{
  width:100%;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
  display:flex;
  flex-direction:column;
}
#ifrwkg{
  width:133px;
}
#igz37i{
  width:133px;
}
#imzkhx{
  width:133px;
}
#ius7c8{
  width:133px;
}
#iqt06{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  height:fit-content;
  width:fit-content;
}
@media (max-width: 880px){
  #ickt{
    grid-template-columns:1fr 1fr;
    row-gap:2rem;
  }
  #iowbj{
    width:fit-content;
  }
  #ii4hh{
    width:100%;
  }
  #ioq1d6{
    width:fit-content;
  }
  #i81q4l{
    width:100%;
  }
  #i7e68a{
    width:fit-content;
  }
  #ip235d{
    width:100%;
  }
}
@media (max-width: 600px){
  #ibq3{
    width:fit-content;
  }
  #ickt{
    grid-template-columns:1fr;
  }
  #ii4hh{
    grid-template-columns:1fr;
  }
  #i81q4l{
    grid-template-columns:1fr;
  }
  #ip235d{
    grid-template-columns:1fr;
  }
}
`,
      },
    },

  });

  // editor.Blocks.add('pricing', {
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
  //   label: 'Pricing Simple',
  //   category: 'sections-pricing',
  //   select: true,
  //   content: { type: 'pricing' },
  // });

//   Components.addType('pricing', {
//     model: {
//       defaults: {
//         script: script,
//         droppable: false,
//         name: 'Pricing Two',
//         // Define default values for your custom properties
//         pricingBasicMonthly: '19.99',
//         pricingBasicAnnual: '199.99',
//         pricingProfessionalMonthly: '24.99',
//         pricingProfessionalAnnual: '249.99',
//         pricingMasterMonthly: '39.99',
//         pricingMasterAnnual: '399.99',
//         // Define traits, in order to change your properties
//         traits: [
//           {
//             type: 'number',
//             name:'pricingBasicMonthly', // 'myprop1'
//             label: 'Basic Monthly',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingBasicAnnual', // 'myprop1'
//             label: 'Basic Annual',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingProfessionalMonthly', // 'myprop1'
//             label: 'Professional Monthly',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingProfessionalAnnual', // 'myprop1'
//             label: 'Professional Annual',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingMasterMonthly', // 'myprop1'
//             label: 'Master Monthly',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingMasterAnnual', // 'myprop1'
//             label: 'Master Annual',
//             changeProp: true,
//           }
//
//         ],
//         'script-props': ['pricingBasicMonthly', 'pricingBasicAnnual', 'pricingProfessionalMonthly', 'pricingProfessionalAnnual', 'pricingMasterMonthly', 'pricingMasterAnnual'],
//         components: `<div class="pricing-container">
//    <div class="pricing-header">
//     <h1>Our Pricing</h1>
//     <div class="toggle">
//       <label>Annually </label>
//       <div class="toggle-btn">
//         <input type="checkbox" class="checkbox" id="checkbox" />
//         <label class="sub" id="sub" for="checkbox">
//           <div class="circle"></div>
//         </label>
//       </div>
//       <label> Monthly</label>
//     </div>
//   </div>
//   <div class="cards">
//     <div data-gjs-copyable="false" class="card shadow">
//       <ul>
//         <li class="pack">Basic</li>
//         <li id="basic" class="price bottom-bar">&dollar;199.99</li>
//         <li class="bottom-bar">500 GB Storage</li>
//         <li class="bottom-bar">2 Users Allowed</li>
//         <li class="bottom-bar">Send up to 3 GB</li>
//         <li class="bottom-bar">50 Email Accounts</li>
//         <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
//       </ul>
//     </div>
//     <div data-gjs-copyable="false"  class="card active">
//       <ul>
//         <li class="pack">Professional</li>
//         <li id="professional" class="price bottom-bar">&dollar;249.99</li>
//         <li class="bottom-bar">1 TB Storage</li>
//         <li class="bottom-bar">5 Users Allowed</li>
//         <li class="bottom-bar">Send up to 10 GB</li>
//         <li class="bottom-bar">Unlimited Email Accounts</li>
//         <li><button class="btn active-btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
//       </ul>
//     </div>
//     <div data-gjs-copyable="false"  class="card shadow">
//       <ul>
//         <li class="pack">Master</li>
//         <li id="master" class="price bottom-bar">&dollar;399.99</li>
//         <li class="bottom-bar">2 TB Storage</li>
//         <li class="bottom-bar">10 Users Allowed</li>
//         <li class="bottom-bar">Send up to 20 GB</li>
//         <li class="bottom-bar">Unlimited Email Accounts</li>
//         <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
//       </ul>
//     </div>
//   </div>
// </div>`,
//         styles: `
//         .pricing-container {
//          background: #f7f7ff;
//   width: 80%;
//   max-width: 1440px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow: hidden;
//   }
//
//
//        .pricing-header {
//   color: hsl(233, 13%, 49%);
//   margin: 3.3rem 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
// .toggle {
//   margin-top: 2rem;
//   color: hsl(234, 14%, 74%);
//   display: flex;
//   align-items: center;
// }
// .toggle-btn {
//   margin: 0 1rem;
// }
// .checkbox {
//   display: none;
// }
//
// .sub {
//   background: linear-gradient(
//     135deg,
//     rgba(163, 168, 240, 1) 0%,
//     rgba(105, 111, 221, 1) 100%
//   );
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 1.6rem;
//   width: 3.3rem;
//   border-radius: 1.6rem;
//   padding: 0.3rem;
// }
// .circle {
//   background-color: #fff;
//   height: 1.4rem;
//   width: 1.4rem;
//   border-radius: 50%;
// }
// .checkbox:checked + .sub {
//   justify-content: flex-end;
// }
//
// .cards {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// }
//
// .card {
//   background: #fff;
//   color: hsl(233, 13%, 49%);
//   border-radius: 0.8rem;
// }
// .card.active:hover{
//   box-shadow: rgba(255, 188, 0, 0.8) 0px 0px 0px 3px;
// }
//
// .cards .card.active {
//   background: linear-gradient(
//     135deg,
//     rgba(163, 168, 240, 1) 0%,
//     rgba(105, 111, 221, 1) 100%
//   );
//   color: #fff;
//   display: flex;
//   align-items: center;
//   transform: scale(1.1);
//   z-index: 1;
// }
// ul {
//   margin: 2.6rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
// }
// ul li {
//   list-style-type: none;
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   padding: 1rem 0;
// }
// ul li.price {
//   font-size: 3rem;
//   color: hsl(232, 13%, 33%);
//   padding-bottom: 2rem;
// }
// .shadow {
//   box-shadow: -5px 5px 15px 1px rgba(0, 0, 0, 0.1);
// }
//
// .card.active .price {
//   color: #fff;
// }
//
// .btn {
//   margin-top: 1rem;
//   height: 2.6rem;
//   width: 13.3rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 4px;
//   background: linear-gradient(
//     135deg,
//     rgba(163, 168, 240, 1) 0%,
//     rgba(105, 111, 221, 1) 100%
//   );
//   color: #fff;
//   outline: none;
//   border: 0;
//   font-weight: bold;
// }
// .btn:hover{
//   cursor: pointer;
//   color: #1970C2;
//   background: white;
//   border: 1px solid #1970C2;
// }
// .active-btn {
//   background: #fff;
//   color: hsl(237, 63%, 64%);
// }
// .active-btn:hover{
//   background: #1970C2;
//   color: white;
//   border: 1px solid white;
//   cursor: pointer;
// }
// .bottom-bar {
//   border-bottom: 2px solid hsla(240, 8%, 85%, 0.582);
// }
// .card.active .bottom-bar {
//   border-bottom: 2px solid hsla(240, 8%, 85%, 0.253);
// }
// .pack {
//   font-size: 1.1rem;
// }
//
// @media (max-width: 280px) {
//   ul {
//     margin: 1rem;
//   }
//   h1 {
//     font-size: 1.2rem;
//   }
//   .toggle {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: center;
//     height: 80px;
//   }
//   .cards {
//     margin: 0;
//     display: flex;
//     flex-direction: column;
//   }
//
//   .card {
//     transform: scale(0.8);
//     margin-bottom: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(0.8);
//   }
// }
//
// @media (min-width: 280px) and (max-width: 320px) {
//   ul {
//     margin: 20px;
//   }
//   .cards {
//     display: flex;
//     flex-direction: column;
//   }
//   .card {
//     margin-bottom: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(1);
//   }
// }
//
// @media (min-width: 320px) and (max-width: 414px) {
//   .cards {
//     display: flex;
//     flex-direction: column;
//   }
//   .card {
//     margin-bottom: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(1);
//   }
// }
// @media (min-width: 414px) and (max-width: 768px) {
//   .card {
//     margin-bottom: 1rem;
//     margin-right: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(1);
//   }
// }
// @media (min-width: 768px) and (max-width: 1046px) {
//   .cards {
//     display: flex;
//   }
//   .card {
//     margin-bottom: 1rem;
//     margin-right: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(1);
//   }
// }
// `,
//       },
//     },
//   });

};

export default pricings;