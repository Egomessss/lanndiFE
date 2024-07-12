import type { Editor } from 'grapesjs';

const pricings = (editor: Editor) => {
  const { Components } = editor;

  const script = function() {
    // @ts-ignore
    document.getElementById('pws-togglePricing').addEventListener('change', function() {

      const monthlyElements = document.querySelectorAll('.pws-price-monthly');
      const annualElements = document.querySelectorAll('.pws-price-annual');


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
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214935.png',
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
        components: `<div class="ltp-container">
    <h2 class="ltp-heading-two">Simple no tricks pricing
    </h2>
    <p class="ltp-subheading-text" >Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
    </p>
    <div class="ltp-pricing-columns-container" >
      <div class="ltp-features-text" >
        <h3 class="ltp-heading-three">Heading
        </h3>
        <p class="ltp-paragraph ltp-features-pricing-text" >Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
        </p>
        <div class="ltp-features-container" >
          <div class="ltp-feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="ltp-paragraph ltp-text-size">Insert your text here
            </p>
          </div>
          <div class="ltp-feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="ltp-paragraph ltp-text-size" >Insert your text here
            </p>
          </div>
          <div class="ltp-feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="ltp-paragraph ltp-text-size" >Insert your text here
            </p>
          </div>
          <div class="ltp-feature-box">
            <span class="material-icons material-symbols-outlined">check</span>
            <p class="ltp-paragraph ltp-text-size">Insert your text here
            </p>
          </div>
        </div>
      </div>
      <div class="ltp-price-container" >
        <p class="ltp-paragraph ltp-price-deal">Lifetime deal
        </p>
        <p class="ltp-paragraph ltp-price" id=.>$299
        </p>
        <a class="ltp-link-box">
          <button class="ltp-button">Buy Now</button>
      </a>
        <div class="ltp-links" >
          <a  href="#">Terms</a>
          <a  href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
        .ltp-container{
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
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

 
.ltp-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.ltp-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:193px;
}
.ltp-subheading-text{
  width:557px;
  text-align:center;
}

.ltp-pricing-columns-container{
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
.ltp-features-text{
  height:fit-content;
  grid-column:span 2;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
}
.ltp-heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.ltp-features-pricing-text{
  width:504px;
}
.ltp-features-container{
display:grid;
  width:515px;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
}

.ltp-link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding:10px;
  max-width:100%;
  text-decoration:none;
  cursor:pointer;
}
.ltp-link-box:empty{
  text-decoration:none;
  padding:5px;
}
.ltp-link-box:empty:before{
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
.ltp-feature-box{
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
.ltp-text-size{
  width:133px;
}

.ltp-price-container{
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
.ltp-price-deal{
  height:fit-content;
}
.ltp-price{
  font-size:2.5rem;
  font-weight:700;
}
.ltp-button{
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
.ltp-button:hover{
  opacity:0.9;
}
.ltp-links{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  height:fit-content;
  width:fit-content;
}
@media (max-width: 880px){
  .ltp-pricing-columns-container{
    grid-template-columns:1fr 1fr ;
    row-gap:2rem;
  }
  .ltp-features-pricing-text{
    width:fit-content;
  }
  .ltp-features-container{
    width:100%;
  }
 .ltp-price-container{
    padding-top:1rem;
    padding-right:1rem;
    padding-bottom:1rem;
    padding-left:1rem;
    grid-column:span 2;
  }
}
@media (max-width: 600px){
  .ltp-subheading-text{
    width:fit-content;
  }
  .ltp-features-container{
    grid-template-columns:1fr ;
  }
}
`,
      },
    },
  });


  editor.Blocks.add('pricing-three-columns', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20215232.png',
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
        components: ` 
   <div class="p3h-container">
      <h2 class="p3h-heading-two">Simple no tricks pricing
      </h2>
      <p class="p3h-heading-subtext">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
      </p>
      <div class="p3h-pricing-container">
        <div class="p3h-pricing-text-container">
          <h3 class="p3h-heading-three">Basic
          </h3>
          <p class="p3h-column-p">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p class="p3h-monthly-big">$29/month
          </p>
          <p class="p3h-price-annual">$290/month
          </p>
          <div class="p3h-features-container">
            <div id="iq39i" class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ijita" class="p3h-feature-p">Insert your text here
              </p>
            </div>
            <div id="i4bsr" class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="in8kg" class="p3h-feature-p">Insert your text here
              </p>
            </div>
            <div id="il9cg" class="p3h-feature-box">
              <span id="ifbec" class="material-icons material-symbols-outlined">check</span>
              <p id="ivs1l" class="p3h-feature-p">Insert your text here
              </p>
            </div>
          </div>
          <a class="p3h-link-box"><button type="button" class="p3h-button">Buy Now</button></a>
          <a class="link-box"></a>
        </div>
        <div class="p3h-highlighted p3h-pricing-text-container highlighted-box">
          <h3 class="p3h-heading-three">Pro
          </h3>
          <p class="p3h-column-p">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p class="p3h-monthly-big">$49/month
          </p>
          <p class="p3h-price-annual">$490/month
          </p>
          <div class="p3h-features-container">
            <div id="i7bv6i" class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ir35pq" class="p3h-feature-p">Insert your text here
              </p>
            </div>
            <div id="ivy0u4" class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="iryct6" class="p3h-feature-p">Insert your text here
              </p>
            </div>
            <div id="izlff6" class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="i58igh" class="p3h-feature-p">Insert your text here
              </p>
            </div>
            <div class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ifh2c7" class="p3h-feature-p">Insert your text here
              </p>
            </div>
            <div id="i9o5tl" class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ial8lb" class="p3h-feature-p">Insert your text here
              </p>
            </div>
          </div>
          <a class="p3h-link-box"><button type="button" class="p3h-button">Buy Now</button></a>
        </div>
        <div class="p3h-pricing-text-container">
          <h3 class="p3h-heading-three">Business
          </h3>
          <p class="p3h-column-p">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p class="p3h-monthly-big">$99/month
          </p>
          <p class="p3h-price-annual">$990/month
          </p>
          <div class="p3h-features-container">
            <div class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p class="p3h-feature-p">Insert your text here
              </p>
            </div>
            <div class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p class="p3h-feature-p">Insert your text here
              </p>
            </div>
            <div class="p3h-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p class="p3h-feature-p">Insert your text here
              </p>
            </div>
          </div>
          <a class="p3h-link-box"><button type="button" class="p3h-button">Buy Now</button></a>
        </div>
      </div>
      <div class="p3h-links-container">
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  `,
        styles:`
     .p3h-container{
  height:fit-content;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
  flex-direction:column;
  row-gap:2rem;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
}
.p3h-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.p3h-heading-subtext{
  width:557px;
  text-align:center;
}
.p3h-input-label{
  display:flex;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  width:160px;
}
#p3h-togglePricing{
  width:20px;
  height:20px;
}
.p3h-annual-text{
  font-weight:700;
}
.p3h-pricing-container{
  height:fit-content;
  width:100%;
  display:grid;
  grid-template-rows:1fr;
  grid-template-columns:1fr 1fr 1fr;
  column-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  border-color:rgb(222, 212, 227);
  flex-direction:row;
  justify-items:center;
  align-items:end;
}
.p3h-pricing-text-container{
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
.p3h-heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  text-align:center;
}
.p3h-column-p{
  width:100%;
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  text-align:center;
}
.p3h-monthly-big{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:100%;
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
}
.p3h-price-annual{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:100%;
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  display:none;
}
.p3h-features-container{
  width:100%;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
  display:flex;
  flex-direction:column;
}
.p3h-feature-box{
  display:flex;
  flex-direction:row;
  height:100%;
  padding-right:1rem;
  padding-left:1rem;
  grid-column:span 1;
  width:100%;
  column-gap:1rem;
  justify-content:start;
  align-items:center;
}
.p3h-feature-p{
  width:133px;
}
.p3h-link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding:10px;
  max-width:100%;
  text-decoration:none;
  cursor:pointer;
}
.p3h-link-box:empty{
  text-decoration:none;
  padding:5px;
}
.p3h-link-box:empty:before{
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
.p3h-button{
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
.p3h-button:hover{
  opacity:0.9;
}
.p3h-highlighted{
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
.p3h-pricing-text-container.highlighted-box{
  background:rgb(244, 244, 245);
  height:478px;
}
.p3h-highlighted.p3h-pricing-text-container.highlighted-box{
  height:fit-content;
}
.p3h-links-container{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  height:fit-content;
  width:fit-content;
}
@media (max-width: 880px){
  .p3h-pricing-container{
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr ;
    row-gap:2rem;
  }
}
@media (max-width: 600px){
  .p3h-heading-subtext{
    width:fit-content;
  }
  .p3h-pricing-container{
    grid-template-columns:1fr;
  }
}

`,
      },
    },
  });

  editor.Blocks.add('pricing-three-columns-switch', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20215246.png',
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
        components: ` 
   <div class="pws-container">
      <h2 class="pws-heading-two">Simple no tricks pricing
      </h2>
      <p class="pws-heading-subtext">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
      </p>
      <div class="pws-pricing-option">
        <label class="pws-input-label"><input type="checkbox" id="pws-togglePricing" autocomplete="off"/><span class="pws-annual-text">Annual 20% off</span></label>
      </div>
      <div class="pws-pricing-container">
        <div class="pws-pricing-text-container">
          <h3 class="pws-heading-three">Basic
          </h3>
          <p class="pws-column-p">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p class="pws-price-monthly">$29/month
          </p>
          <p class="pws-price-annual">$290/month
          </p>
          <div class="pws-features-container">
            <div id="iq39i" class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ijita" class="pws-feature-p">Insert your text here
              </p>
            </div>
            <div id="i4bsr" class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="in8kg" class="pws-feature-p">Insert your text here
              </p>
            </div>
            <div id="il9cg" class="pws-feature-box">
              <span id="ifbec" class="material-icons material-symbols-outlined">check</span>
              <p id="ivs1l" class="pws-feature-p">Insert your text here
              </p>
            </div>
          </div>
          <a class="pws-link-box"><button type="button" class="pws-button">Buy Now</button></a>
          <a class="link-box"></a>
        </div>
        <div class="pws-highlighted pws-pricing-text-container highlighted-box">
          <h3 class="pws-heading-three">Pro
          </h3>
          <p class="pws-column-p">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p class="pws-price-monthly">$49/month
          </p>
          <p class="pws-price-annual">$490/month
          </p>
          <div class="pws-features-container">
            <div id="i7bv6i" class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ir35pq" class="pws-feature-p">Insert your text here
              </p>
            </div>
            <div id="ivy0u4" class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="iryct6" class="pws-feature-p">Insert your text here
              </p>
            </div>
            <div id="izlff6" class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="i58igh" class="pws-feature-p">Insert your text here
              </p>
            </div>
            <div class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ifh2c7" class="pws-feature-p">Insert your text here
              </p>
            </div>
            <div id="i9o5tl" class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p id="ial8lb" class="pws-feature-p">Insert your text here
              </p>
            </div>
          </div>
          <a class="pws-link-box"><button type="button" class="pws-button">Buy Now</button></a>
        </div>
        <div class="pws-pricing-text-container">
          <h3 class="pws-heading-three">Business
          </h3>
          <p class="pws-column-p">Sit molestiae et. Provident ad dolorem occaecati eos iste.
          </p>
          <p class="pws-price-monthly">$99/month
          </p>
          <p class="pws-price-annual">$990/month
          </p>
          <div class="pws-features-container">
            <div class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p class="pws-feature-p">Insert your text here
              </p>
            </div>
            <div class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p class="pws-feature-p">Insert your text here
              </p>
            </div>
            <div class="pws-feature-box">
              <span class="material-icons material-symbols-outlined">check</span>
              <p class="pws-feature-p">Insert your text here
              </p>
            </div>
          </div>
          <a class="pws-link-box"><button type="button" class="pws-button">Buy Now</button></a>
        </div>
      </div>
      <div class="pws-links-container">
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  `,
        styles:`
     .pws-container{
  height:fit-content;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
  flex-direction:column;
  row-gap:2rem;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
}
.pws-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.pws-heading-subtext{
  width:557px;
  text-align:center;
}
.pws-input-label{
  display:flex;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  width:160px;
}
#pws-togglePricing{
  width:20px;
  height:20px;
}
.pws-annual-text{
  font-weight:700;
}
.pws-pricing-container{
  height:fit-content;
  width:100%;
  display:grid;
  grid-template-rows:1fr;
  grid-template-columns:1fr 1fr 1fr;
  column-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  border-color:rgb(222, 212, 227);
  flex-direction:row;
  justify-items:center;
  align-items:end;
}
.pws-pricing-text-container{
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
.pws-heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  text-align:center;
}
.pws-column-p{
  width:100%;
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  text-align:center;
}
.pws-price-monthly{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:100%;
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
}
.pws-price-annual{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:100%;
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  display:none;
}
.pws-features-container{
  width:100%;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
  display:flex;
  flex-direction:column;
}
.pws-feature-box{
  display:flex;
  flex-direction:row;
  height:100%;
  padding-right:1rem;
  padding-left:1rem;
  grid-column:span 1;
  width:100%;
  column-gap:1rem;
  justify-content:start;
  align-items:center;
}
.pws-feature-p{
  width:133px;
}
.pws-link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding:10px;
  max-width:100%;
  text-decoration:none;
  cursor:pointer;
}
.pws-link-box:empty{
  text-decoration:none;
  padding:5px;
}
.pws-link-box:empty:before{
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
.pws-button{
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
.pws-button:hover{
  opacity:0.9;
}
.pws-highlighted{
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
.pws-pricing-text-container.highlighted-box{
  background:rgb(244, 244, 245);
  height:478px;
}
.pws-highlighted.pws-pricing-text-container.highlighted-box{
  height:fit-content;
}
.pws-links-container{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  height:fit-content;
  width:fit-content;
}
@media (max-width: 880px){
  .pws-pricing-container{
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr ;
    row-gap:2rem;
  }
}
@media (max-width: 600px){
  .pws-heading-subtext{
    width:fit-content;
  }
  .pws-pricing-container{
    grid-template-columns:1fr;
  }
}

`,
      },
    },

  });



};

export default pricings;