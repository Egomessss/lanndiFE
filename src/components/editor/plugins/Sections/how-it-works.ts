import type { Editor } from 'grapesjs';

const features = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('how-it-works-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'How It Works Simple',
    category: 'sections-how-it-works',
    select: true,
    content: { type: 'how-it-works-one' },
  });

  Components.addType('how-it-works-one', {
    model: {
      defaults: {
        // script: script,
        name: 'How It Works Simple',
        components: `  
    <div id="ivkk" class="block">
    <div id="irfb9" class="block">
      <h2 id="i2ol" class="heading-two">It's easy as 1, 2, 3
      </h2>
      <p id="iq6h" class="paragraph">Insert your description text here
      </p>
    </div>
    <p id="i0et" class="paragraph">
    </p>
    <div id="idok1" class="block">
      <div id="i6fok" class="block">
        <p id="izseg" class="paragraph">
        </p>
        <h3 id="iwkqj" class="how-it-works-h3">Step 1
        </h3>
        <p id="i9fm7" class="paragraph">Insert your description text here
        </p>
      </div>
      <span id="iyezo" class="material-icons material-symbols-outlined rotate">arrow_forward_ios</span>
      <div id="isctl" class="block">
        <p id="i3qgg" class="paragraph">
        </p>
        <h3 id="iyxsk" class="how-it-works-h3">Step 2
        </h3>
        <p id="ii6v9" class="paragraph">Insert your description text here
        </p>
      </div>
      <span class="material-icons material-symbols-outlined rot rotate">arrow_forward_ios</span>
      <div id="ik0hy" class="block">
        <p id="ik16f" class="paragraph">
        </p>
        <h3 id="ix8bt" class="how-it-works-h3">Step 3
        </h3>
        <p id="ivn4y" class="paragraph">Insert your description text here
        </p>
      </div>
    </div>
  </div>`,
        styles: `
      .block{
  height:80px;
  max-height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:2re;
}
#ivkk{
  height:359px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
}
#irfb9{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
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
#idok1{
  height:173px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:2rem;
}
#i6fok{
  width:588px;
  text-align:center;
}
.how-it-works-h3{
  margin-left:0;
  padding-top:0;
  padding-left:0;
  margin-top:0;
}
#isctl{
  width:588px;
  text-align:center;
}
#ik0hy{
  width:588px;
  text-align:center;
}
@media (max-width: 600px){
  #ivkk{
    height:601px;
  }
  #irfb9{
    height:144px;
  }
  #idok1{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
  }
  #i6fok{
    width:100%;
  }
  .material-icons.material-symbols-outlined.rotate{
    transform:rotate(90deg);
  }
  #isctl{
    width:100%;
  }
  #ik0hy{
    width:100%;
  }
}

`,
      },
    },
  });

  editor.Blocks.add('how-it-works-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'How It Works With Steps',
    category: 'sections-how-it-works',
    select: true,
    content: { type: 'how-it-works-two' },
  });

  Components.addType('how-it-works-two', {
    model: {
      defaults: {
        // script: script,
        name: 'How It Works With Steps',
        components: `  
     <div id="ivkk" class="block">
      <div id="irfb9" class="block">
        <h2 id="i2ol" class="heading-two">It's easy as 1, 2, 3
        </h2>
        <p id="iq6h" class="paragraph">Insert your description text here
        </p>
      </div>
      <p id="i0et" class="paragraph">
      </p>
      <div id="idok1" class="block">
        <div id="i6fok" class="how-it-works-card">
          <p id="izseg" class="paragraph">
          </p>
          <p id="i8vll" class="paragraph">
          </p>
          <div id="i405k" class="step">
            <p id="ic9jd" class="paragraph">1.
            </p>
          </div>
          <h3 id="iwkqj" class="how-it-works-h3">How It Works Subtitle
          </h3>
          <p id="i9fm7" class="paragraph">Insert your description text here
          </p>
        </div>
        <div id="ihf6d" class="how-it-works-card">
          <p class="paragraph">
          </p>
          <p class="paragraph">
          </p>
          <div id="iy13i" class="step">
            <p id="i2rdr" class="paragraph">2.
            </p>
          </div>
          <h3 class="how-it-works-h3">How It Works Subtitle
          </h3>
          <p class="paragraph">Insert your description text here
          </p>
        </div>
        <div id="i31k4" class="how-it-works-card">
          <p class="paragraph">
          </p>
          <p class="paragraph">
          </p>
          <div id="ixmsl" class="step">
            <p id="is3ur" class="paragraph">3.
            </p>
          </div>
          <h3 class="how-it-works-h3">How It Works Subtitle
          </h3>
          <p class="paragraph">Insert your description text here
          </p>
        </div>
      </div>
    </div>`,
        styles: `
   .block{
  height:80px;
  max-height:100%;
  width:100%;
}
#ivkk{
  height:359px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
}
#irfb9{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
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
#idok1{
  height:173px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:2rem;
}
#i6fok{
  width:588px;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}
.how-it-works-card{
  row-gap:1rem;
  width:460px;
  height:154px;
}
#i405k{
  display:flex;
  justify-content:center;
  align-items:center;
}
.step{
  width:40px;
  height:40px;
  border-style:solid;
  border-color:rgba(102, 151, 225, 1);
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
}
#ic9jd{
  height:fit-content;
  width:fit-content;
  font-size:1.5rem;
}
.how-it-works-h3{
  padding-top:0;
  padding-left:0;
  margin-top:0;
  margin-bottom:0;
}
#ihf6d{
  width:588px;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}
#iy13i{
  display:flex;
  justify-content:center;
  align-items:center;
}
#i2rdr{
  height:fit-content;
  width:fit-content;
  font-size:1.5rem;
}
#i31k4{
  width:588px;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}
#ixmsl{
  display:flex;
  justify-content:center;
  align-items:center;
}
#is3ur{
  height:fit-content;
  width:fit-content;
  font-size:1.5rem;
}
@media (max-width: 810px){
  #idok1{
    column-gap:1rem;
  }
}
@media (max-width: 600px){
  #ivkk{
    height:fit-content;
    row-gap:3rem;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  #irfb9{
    height:144px;
  }
  #idok1{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
  }
  #i6fok{
    width:100%;
  }
  #ihf6d{
    width:100%;
  }
  #i31k4{
    width:100%;
  }
}

`,
      },
    },
  });


  editor.Blocks.add('how-it-works-three', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'How It Works With Images',
    category: 'sections-how-it-works',
    select: true,
    content: { type: 'how-it-works-three' },
  });

  Components.addType('how-it-works-three', {
    model: {
      defaults: {
        // script: script,
        name: 'How It Works With Images',
        components: `  
    <div class="block" id="i1yli">
    <div id="irfb9" class="block">
      <h2 id="i2ol" class="heading-two">It's easy as 1, 2, 3
      </h2>
      <p id="iq6h" class="paragraph">Insert your description text here
      </p>
    </div>
    <div id="idok1" class="block">
      <div id="i6fok" class="how-it-works-card">
        <p id="izseg" class="paragraph">
        </p>
        <div class="image-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="iyali"/>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 8h.01" />
            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
          </svg>
        </div>
        <p id="i8vll" class="paragraph">
        </p>
        <h3 id="iwkqj" class="how-it-works-h3">How It Works Subtitle
        </h3>
        <p id="i9fm7" class="paragraph">Insert your description text here
        </p>
      </div>
      <div class="how-it-works-card" id="ipo4p">
        <p class="paragraph">
        </p>
        <div class="image-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="iajzd"/>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 8h.01" />
            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
          </svg>
        </div>
        <p class="paragraph">
        </p>
        <h3 class="how-it-works-h3">How It Works Subtitle
        </h3>
        <p class="paragraph">Insert your description text here
        </p>
      </div>
      <div class="how-it-works-card" id="igcul">
        <p class="paragraph">
        </p>
        <div class="image-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="ipgp7"/>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 8h.01" />
            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
          </svg>
        </div>
        <p class="paragraph">
        </p>
        <h3 class="how-it-works-h3">How It Works Subtitle
        </h3>
        <p class="paragraph">Insert your description text here
        </p>
      </div>
    </div>
  </div>`,
        styles: `
    .block{
  height:80px;
  max-height:100%;
  width:100%;
}
#i1yli{
  height:fit-content;
  max-width:1200px;
  width:90%;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
}
#irfb9{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  height:153px;
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
#idok1{
  height:fit-content;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:2rem;
  padding-top:2rem;
  padding-bottom:2rem;
}
#i6fok{
  width:588px;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}
.how-it-works-card{
  row-gap:1rem;
  width:460px;
  height:fit-content;
  padding-top:1rem;
  padding-bottom:1rem;
}
.image-container{
  height:144px;
  width:100%;
}
#iyali{
  width:100%;
  height:100%;
}
.how-it-works-h3{
  padding-top:0;
  padding-left:0;
  margin-top:0;
  margin-bottom:0;
}
#ipo4p{
  width:588px;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}
#iajzd{
  width:100%;
  height:100%;
}
#igcul{
  width:588px;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}
#ipgp7{
  width:100%;
  height:100%;
}
@media (max-width: 810px){
  #idok1{
    column-gap:1rem;
  }
}
@media (max-width: 600px){
  #irfb9{
    height:144px;
  }
  #idok1{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
  }
  #i6fok{
    width:100%;
  }
  #ipo4p{
    width:100%;
  }
  #igcul{
    width:100%;
  }
}
`,
      },
    },
  });

}

export default features;