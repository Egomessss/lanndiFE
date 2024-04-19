import type { Editor } from 'grapesjs';

const features = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('feature-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Image Side',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-one' },
  });

  Components.addType('feature-one', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Image Side',
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
            <div class="button">
              <button class="button">Button</button>
            </div>
          </div>
          <div id="iepks" class="lnd-feature-grid-column">
            <img src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" id="i466d"/>
          </div>
        </div>
      </div>
    </div>`,
        styles: `
       .lnd-feature-grid-row{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  min-height:auto;
  padding:10px 0;
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
  padding:4px 12px 4px 12px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
}
.button:hover{
  opacity:0.9;
}
#i466d{
  color:black;
  border-top-left-radius:35px;
  border-top-right-radius:35px;
  border-bottom-right-radius:35px;
  border-bottom-left-radius:35px;
  max-width:100%;
  width:829px;
}
`,
      },
    },
  });

  editor.Blocks.add('feature-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Image Bottom',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-two' },
  });

  Components.addType('feature-two', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Image Bottom',
        components: `  
   <div class="block">
    <h4 class="sub-heading" id="ic2u">Insert Your Sub-Heading
    </h4>
    <h1 class="heading-one" id="i1cu">Insert Your Heading Here
    </h1>
    <p class="paragraph" id="iab4">Insert your description here
    </p>
    <img src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" class="image"/>
  </div>`,
        styles: `
       .block{
  height:649px;
  max-height:100%;
  width:100%;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
}

.sub-heading{
  margin-top:0;
  margin-bottom:0;
}
.heading-one{
  margin-top:0;
  margin-bottom:0;
  font-size:3rem;
}


.paragraph{
  margin-top:0;
  margin-bottom:0;
}
.image{
  width:721px;
  height:403px;
  border-top-left-radius:8px;
  border-top-right-radius:8px;
  border-bottom-right-radius:8px;
  border-bottom-left-radius:8px;
}
`,
      },
    },
  });

  editor.Blocks.add('feature-three', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'List',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-three' },
  });

  Components.addType('feature-three', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'List',
        components: `  
   <div id="ioyxg" class="gjs-grid-row">
    <div id="i8w4i" class="gjs-grid-column">
      <h4 id="ihs4lb" class="gjs-heading gjs-text-blue">More Features</h4>
      <h2 id="iiacm" class="gjs-heading">Put here the text describing why your features are
        <span id="icxfor" class="gjs-text-blue">so amazing</span>
      </h2>
      <div id="ia21sa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</div>
      <div id="ixzh1" class="gjs-grid-row">
        <div id="ilpi3" class="gjs-grid-column feature-item">
          <div data-type-icon id="ipmqo6" class="gjs-icon gjs-feature-icon"><svg viewBox="0 0 24 24">
              <path
                d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
              </path>
            </svg></div>
          <h3 id="in9ef" class="gjs-heading">Feature text</h3>
          <div id="i8isa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div id="ic57kq" class="gjs-grid-column feature-item">
          <div data-type-icon id="ibdusm" class="gjs-icon gjs-feature-icon"><svg viewBox="0 0 24 24">
              <path
                d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
              </path>
            </svg></div>
          <h3 id="ica43q" class="gjs-heading">Feature text</h3>
          <div id="ickn3f" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div id="idv32l" class="gjs-grid-column feature-item">
          <div data-type-icon id="ipmept" class="gjs-icon gjs-feature-icon"><svg viewBox="0 0 24 24">
              <path
                d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
              </path>
            </svg></div>
          <h3 id="ieu6p6" class="gjs-heading">Feature text</h3>
          <div id="izqkf7" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
       .gjs-heading {
\tmargin:0;
\tcolor:rgba(29,40,55,1);
}
.gjs-grid-column {
\tflex:1 1 0%;
\tpadding:5px 0;
}
.gjs-grid-row {
\tdisplay:flex;
\tjustify-content:flex-start;
\talign-items:stretch;
\tflex-direction:row;
\tmin-height:auto;
\tpadding:10px 0;
}
.text-main-content {
\tline-height:30px;
\tfont-size:1.2rem;
}
#iau9 {
\tfont-family:Arial,Helvetica,sans-serif;
\tbackground-image:linear-gradient(180deg,rgba(59,130,245,0.11),white 14%);
\tbackground-position:0px 0px;
\tbackground-size:100% 100%;
\tbackground-repeat:repeat;
\tbackground-attachment:scroll;
\tbackground-origin:padding-box;
\tcolor:#475569;
}
#in9ef {
\tfont-size:1.5rem;
}
#i8isa {
\tpadding:10px;
\tpadding-left:0px;
\tpadding-right:0px;
}
#i8w4i {
\tmax-width:1200px;
\tdisplay:flex;
\tflex-direction:column;
}
#ioyxg {
\tjustify-content:center;
\tpadding-top:80px;
\tpadding-bottom:80px;
\tpadding-left:20px;
\tpadding-right:20px;
}
#iiacm {
\tfont-size:2.5rem;
\tmargin-bottom:10px;
\tmax-width:750px;
}
#ixzh1 {
\twidth:100%;
\tflex-wrap:wrap;
\tjustify-content:flex-start;
\tgap:50px;
}
.gjs-grid-column.feature-item {
\tpadding-top:15px;
\tpadding-right:15px;
\tpadding-bottom:15px;
\tpadding-left:15px;
\tdisplay:flex;
\tflex-direction:column;
\tgap:15px;
\tmin-width:30%;
}
#ia21sa {
\tpadding:10px;
\tmax-width:750px;
\tmargin-bottom:70px;
\tpadding-left:0px;
\tpadding-right:0px;
}
.gjs-grid-column.testimonial-item {
\tpadding-top:15px;
\tpadding-right:15px;
\tpadding-bottom:15px;
\tpadding-left:15px;
\tdisplay:flex;
\tflex-direction:column;
\tgap:15px;
\tmin-width:45%;
\tbackground-color:rgba(247,247,247,0.23);
\tborder-top-left-radius:5px;
\tborder-top-right-radius:5px;
\tborder-bottom-right-radius:5px;
\tborder-bottom-left-radius:5px;
\talign-items:flex-start;
\tborder-top-width:1px;
\tborder-right-width:1px;
\tborder-bottom-width:1px;
\tborder-left-width:1px;
\tborder-top-style:solid;
\tborder-right-style:solid;
\tborder-bottom-style:solid;
\tborder-left-style:solid;
\tborder-top-color:rgba(0,0,0,0.06);
\tborder-right-color:rgba(0,0,0,0.06);
\tborder-bottom-color:rgba(0,0,0,0.06);
\tborder-left-color:rgba(0,0,0,0.06);
}
.gjs-text-blue {
\tcolor:rgb(36,99,235);
}
.gjs-icon {
\tdisplay:inline-block;
\ttext-decoration:none;
\tcolor:inherit;
\tvertical-align:middle;
\tfill:currentColor;
\twidth:50px;
\theight:50px;
}
#ihs4lb {
\tfont-size:1.2rem;
\tmargin-bottom:15px;
}
.gjs-icon.gjs-feature-icon {
\tpadding-top:10px;
\tpadding-right:10px;
\tpadding-bottom:10px;
\tpadding-left:10px;
\tbackground-color:rgb(36,99,235);
\tcolor:white;
\tborder-top-left-radius:10px;
\tborder-top-right-radius:10px;
\tborder-bottom-right-radius:10px;
\tborder-bottom-left-radius:10px;
}
#ieu6p6 {
\tfont-size:1.5rem;
}
#izqkf7 {
\tpadding:10px;
\tpadding-left:0px;
\tpadding-right:0px;
}
#ica43q {
\tfont-size:1.5rem;
}
#ickn3f {
\tpadding:10px;
\tpadding-left:0px;
\tpadding-right:0px;
}
@media (max-width:992px) {
\t.gjs-grid-row {
\tflex-direction:column;
}
}
`,
      },
    },
  });


  editor.Blocks.add('feature-four', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Grid With Image',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-four' },
  });

  Components.addType('feature-four', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Grid With Image',
        components: `  
  <section class="flex-sect" id="iaxad">
    <div class="container-width" id="izopk">
      <h2 class="flex-title">Flex is the new black
      </h2>
      <p class="flex-desc">With flexbox system you're able to build complex layouts easily and with free responsivity
      </p>
      <div class="cards">
        <div class="card">
        <img class="card-header" src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" alt="">
          <div class="card-body">
            <h3 class="card-title">Title one
            </h3>
            <p class="card-sub-title">Subtitle one
            </p>
            <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div class="card">
           <img class="card-header" src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" alt="">
          <div class="card-body">
            <h3 class="card-title">Title two
            </h3>
            <p class="card-sub-title">Subtitle two
            </p>
            <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-header" src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" alt="">
          <div class="card-body">
            <h3 class="card-title">Title three
            </h3>
            <p class="card-sub-title">Subtitle three
            </p>
            <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div class="card">
           <img class="card-header" src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" alt="">
          <div class="card-body">
            <h3 class="card-title">Title four
            </h3>
            <p class="card-sub-title">Subtitle four
            </p>
            <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div class="card">
           <img class="card-header" src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" alt="">
          <div class="card-body">
            <h3 class="card-title">Title five
            </h3>
            <p class="card-sub-title">Subtitle five
            </p>
            <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-header" src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" alt="">
          <div class="card-body">
            <h3 class="card-title">Title six
            </h3>
            <p class="card-sub-title">Subtitle six
            </p>
            <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`,
        styles: `
       .container-width{
  width:90%;
  max-width:1150px;
  margin:0 auto;
}
.flex-sect{
  background-color:#fafafa;
  padding:100px 0;
  font-family:Helvetica, serif;
}
.flex-title{
  margin-bottom:15px;
  font-size:2em;
  text-align:center;
  font-weight:700;
  color:#555;
  padding:5px;
}
.flex-desc{
  margin-bottom:55px;
  font-size:1em;
  color:rgba(0, 0, 0, 0.5);
  text-align:center;
  padding:5px;
}
.cards{
  padding:20px 0;
  display:flex;
  justify-content:space-around;
  flex-flow:wrap;
}
.card{
  background-color:white;
  height:340px;
  width:300px;
  margin-bottom:30px;
  box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius:2px;
  transition:all 0.5s ease;
  font-weight:100;
  overflow:hidden;
}

.card-header{
  height:155px;
  width:100%;
}

.card-body{
  padding:15px 15px 5px 15px;
  color:#555;
}
.card-title{
  font-size:1.4em;
  margin-bottom:5px;
}
.card-sub-title{
  color:#b3b3b3;
  font-size:1em;
  margin-bottom:15px;
}
.card-desc{
  font-size:0.85rem;
  line-height:17px;
}

`,
      },
    },
  });

}

export default features;