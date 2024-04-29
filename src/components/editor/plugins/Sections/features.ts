import type { Editor } from 'grapesjs';

const features = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('feature-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Features Image Side',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-one' },
  });

  Components.addType('feature-one', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Features Image Side',
        components: `  
  <div class="feature-two">
    <div class="feature-two-container">
      <div class="feature-text-container">
        <h1 id="iyi6" class="heading-feature">
        </h1>
        <h1 class="heading-one" id="im2wi">Insert feature text here
        </h1>
        <p id="it2f" class="feature-description">
          <span id="i09aq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </p>
        <button class="button">Button
        </button>
      </div>
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="feature-image"/>
    </div>
  </div>`,
        styles: `
       .feature-two-container{
  display:flex;
  justify-content:center;
  align-items:center;
  column-gap:2rem;
  height:559px;
}
.feature-text-container{
  height:359px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:457px;
}
.heading-feature{
  width:571px;
  text-align:center;
  font-size:3rem;
}

.heading-one{
  font-size:3rem;
}
.feature-description{
  width:100%;
  text-align:center;
  font-size:1rem;
}

#i09aq{
  color:rgb(71, 85, 105);
  font-family:Arial, Helvetica, sans-serif;
  font-size:1rem;
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
.image-container{
  display:flex;
  justify-content:center;
  align-items:center;
  height:fit-content;
}
.feature-image{
  width:450px;
  height:361px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  object-fit:cover;
}
@media (max-width: 810px){
  .feature-two-container{
    flex-direction:column;
    row-gap:2rem;
    height:823px;
  }
  .feature-text-container{
    width:649px;
  }
  .feature-image{
    width:645px;
  }
}
@media (max-width: 390px){
  .feature-text-container{
    width:90%;
    text-align:center;
    height:344px;
    align-items:center;
    justify-content:center;
  }
  .heading-one{
    height:88px;
    font-size:2.5rem;
    line-height:2.5rem;
  }
  .feature-image{
    width:90%;
    height:254px;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('feature-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Features Image Bottom',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-two' },
  });

  Components.addType('feature-two', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Features Image Bottom',
        components: `  
   <div class="block">
    <h4 class="sub-heading" id="ic2u">Insert Your Sub-Heading
    </h4>
    <h1 class="heading-one" id="i1cu">Insert Your Heading Here
    </h1>
    <p class="paragraph" id="iab4">Insert your description here
    </p>
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="image"/>
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
    label: 'Feature Grid With Icons',
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
    <div>
    <div id="ioyxg" class="gjs-grid-row">
      <div id="i8w4i" class="gjs-grid-column">
        <h4 id="ihs4lb" class="gjs-heading gjs-text-blue">More Features
        </h4>
        <h2 id="iiacm" class="gjs-heading">Put here the text describing why your features are
          <span id="icxfor" class="gjs-text-blue">so amazing</span>
        </h2>
        <div id="ia21sa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div id="ixzh1" class="gjs-grid-row">
          <div id="ilpi3" class="gjs-grid-column feature-item">
            <div data-type-icon="" id="ipmqo6" class="gjs-icon gjs-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
                </path>
              </svg>
              <span class="material-icons material-symbols-outlined">check</span>
            </div>
            <h3 id="in9ef" class="gjs-heading">Feature text
            </h3>
            <div id="i8isa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div id="ic57kq" class="gjs-grid-column feature-item">
            <div data-type-icon="" class="gjs-icon gjs-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
                </path>
              </svg>
              <span class="material-icons material-symbols-outlined">check</span>
            </div>
            <h3 id="ica43q" class="gjs-heading">Feature text
            </h3>
            <div id="ickn3f" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div id="idv32l" class="gjs-grid-column feature-item">
            <div data-type-icon="" class="gjs-icon gjs-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
                </path>
              </svg>
              <span class="material-icons material-symbols-outlined">check</span>
            </div>
            <h3 id="ieu6p6" class="gjs-heading">Feature text
            </h3>
            <div id="izqkf7" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
       .gjs-grid-row{
  display:flex;
  justify-content:flex-start;
  align-items:stretch;
  flex-direction:row;
  min-height:auto;
  padding:10px 0;
}
#ioyxg{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
.gjs-grid-column{
  flex:1 1 0%;
  padding:5px 0;
}
#i8w4i{
  max-width:1200px;
  display:flex;
  flex-direction:column;
}
.gjs-heading{
  margin:0;
  color:rgba(29,40,55,1);
}
.gjs-text-blue{
  color:rgb(36,99,235);
}
#ihs4lb{
  font-size:1.2rem;
  margin-bottom:15px;
}
#iiacm{
  font-size:2.5rem;
  margin-bottom:10px;
  max-width:750px;
}
.text-main-content{
  line-height:30px;
  font-size:1.2rem;
}
#ia21sa{
  padding:10px;
  max-width:750px;
  margin-bottom:70px;
  padding-left:0px;
  padding-right:0px;
}
#ixzh1{
  width:100%;
  flex-wrap:wrap;
  justify-content:flex-start;
  gap:50px;
}
.gjs-grid-column.feature-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  gap:15px;
  min-width:30%;
}
.gjs-icon{
  display:inline-block;
  text-decoration:none;
  color:inherit;
  vertical-align:middle;
  fill:currentColor;
  width:50px;
  height:50px;
}
.gjs-icon.gjs-feature-icon{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  background-color:rgb(36,99,235);
  color:white;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
#in9ef{
  font-size:1.5rem;
}
#i8isa{
  padding:10px;
  padding-left:0px;
  padding-right:0px;
}
#ica43q{
  font-size:1.5rem;
}
#ickn3f{
  padding:10px;
  padding-left:0px;
  padding-right:0px;
}
#ieu6p6{
  font-size:1.5rem;
}
#izqkf7{
  padding:10px;
  padding-left:0px;
  padding-right:0px;
}
@media (max-width:992px){
  .gjs-grid-row{
    flex-direction:column;
  }
}
`,
      },
    },
  });


  editor.Blocks.add('feature-four', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Features Grid Images',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-four' },
  });

  Components.addType('feature-four', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Features Grid Images',
        components: `  
  <section class="flex-sect" id="iaxad">
    <div class="container-width" id="izopk">
      <h2 class="flex-title">Flex is the new black
      </h2>
      <p class="flex-desc">With flexbox system you're able to build complex layouts easily and with free responsivity
      </p>
      <div class="cards">
        <div class="card">
        <img class="card-header" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" alt="">
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
           <img class="card-header" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" alt="">
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
          <img class="card-header" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" alt="">
          <div class="card-body">
            <h3 class="card-title">Title three
            </h3>
            <p class="card-sub-title">Subtitle three
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

};

export default features;