import type { Editor } from 'grapesjs';

const features = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('feature-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: '3 Rows W/Icons',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-one' },
  });

  Components.addType('feature-one', {
    model: {
      defaults: {
        name: 'Features 3 Rows W/Icons',
        components: `  
  <div class="block" id="izpc">
    <div class="block" id="irf4">
      <p class="paragraph" id="ihfmp">
     Subheading
      </p>
    <h2 class="heading-two">Feature Heading
    </h2>
    <p class="paragraph">
    Insert your text here
    </p>
  </div>
<div class="block" id="i1vi">
  <div class="feature-container">
    <span class="material-icons material-symbols-outlined">
      home
    </span>
    <h4 class="heading-four">Heading
    </h4>
    <p class="paragraph">
    Insert your feature or benefit text here
    </p>
</div>
<div class="feature-container">
  <span class="material-icons material-symbols-outlined">
    home
  </span>
  <h4 class="heading-four">Heading
  </h4>
  <p class="paragraph">Insert your feature or benefit text here
  </p>
</div>
<div class="feature-container">
  <span class="material-icons material-symbols-outlined">
    home
  </span>
  <h4 class="heading-four">Heading
  </h4>
  <p class="paragraph">Insert your feature or benefit text here
  </p>
</div>
</div>
</div>`,
        styles: `
       .block{
  height:11px;
  max-height:100%;
  width:100%;
}
#izpc{
  height:453px;
  max-width:1200px;
  width:90%;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
}
#irf4{
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  row-gap:1rem;
  height:fit-content;
  margin-top:2rem;
  margin-bottom:2rem;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#ihfmp{
  font-weight:700;
}
.heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#i1vi{
  height:257px;
  display:flex;
  flex-direction:row-reverse;
  justify-content:space-between;
  align-items:center;
  column-gap:2rem;
}
.feature-container{
  width:100%;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  row-gap:0.7rem;
}
.heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
@media (max-width: 600px){
  #izpc{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  #irf4{
    height:165px;
  }
  #i1vi{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('feature-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Big Image and Grid',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-two' },
  });

  Components.addType('feature-two', {
    model: {
      defaults: {
        name: 'Features With Big Image and Grid',
        components: `  
   <div id="izpc" class="block">
    <div id="irf4" class="block">
      <p id="ihfmp" class="paragraph">
     Subheading  
      </p>
    <h2 id="ilin1" class="heading-two">Feature Heading
    </h2>
    <p id="iqpcl" class="paragraph">Insert your text here
    </p>
  </div>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="iadpd"/>
<div id="i1vi" class="block">
  <div id="imqcm" class="feature-container">
    <span class="material-icons material-symbols-outlined">home</span>
    <h4 class="heading-four">Heading
    </h4>
    <p class="paragraph">
    Insert your feature or benefit text here
    </p>
</div>
<div id="iqbmj" class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="heading-four">Heading
  </h4>
  <p class="paragraph">
  Insert your feature or benefit text here
  </p>
</div>
<div id="izjku" class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="heading-four">Heading
  </h4>
  <p class="paragraph">
  Insert your feature or benefit text here
  </p>
</div>
<div id="iazbj" class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="heading-four">Heading
  </h4>
  <p class="paragraph">
  Insert your feature or benefit text here
  </p>
</div>
<div id="iminn" class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="heading-four">Heading
  </h4>
  <p class="paragraph">
  Insert your feature or benefit text here
  </p>
</div>
<div id="i21q6" class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="heading-four">Heading
  </h4>
  <p class="paragraph">
  Insert your feature or benefit text here
  </p>
</div>
</div>
</div>`,
        styles: `
       .block{
  height:11px;
  max-height:100%;
  width:100%;
}
#izpc{
  height:fit-content;
  max-width:1200px;
  width:90%;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
  margin-top:2rem;
  margin-bottom:2rem;
}
#irf4{
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  row-gap:1rem;
  height:fit-content;
  margin-top:2rem;
  margin-bottom:2rem;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#ihfmp{
  font-weight:700;
}
.heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#iadpd{
  width:671px;
  height:343px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  box-shadow:0 0 20p 20px;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
}
#i1vi{
  height:fit-content;
  display:grid;
  flex-direction:row-reverse;
  justify-content:space-between;
  align-items:center;
  column-gap:2rem;
  grid-template-columns:1fr 1fr 1fr;
  row-gap:2rem;
  margin-top:2rem;
  margin-bottom:2rem;
}
.feature-container{
  width:100%;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  row-gap:0.7rem;
}
.heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
@media (max-width: 600px){
  #izpc{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  #irf4{
    height:165px;
  }
  #iadpd{
    width:100%;
    height:220px;
  }
  #i1vi{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr ;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('feature-three', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Image With List',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-three' },
  });

  Components.addType('feature-three', {
    model: {
      defaults: {
        name: 'Features With Image and List',
        components: `  
    <div id="ixrq" class="block">
      <div id="i68h" class="block">
        <p class="paragraph" id="inolr">Subtitle
        </p>
        <h2 class="heading-two">Feature Heading
        </h2>
        <p class="paragraph">
        </p>
        <p class="paragraph">lanndi helps you create launch and share your beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
          <br/>
          <br/>
        </p>
        <div class="block" id="i97a3">
          <div class="small-feature-container" id="i0jcx">
            <span class="material-icons material-symbols-outlined">
              home
            </span>
            <div class="block">
              <p class="paragraph bolden">Feature title
              </p>
              <p class="paragraph">Insert your feature description text here
              </p>
            </div>
          </div>
          <div class="small-feature-container" id="iq0hd">
            <span class="material-icons material-symbols-outlined">
              home
            </span>
            <div class="block">
              <p class="paragraph bolden">Feature title
              </p>
              <p class="paragraph">Insert your feature description text here
              </p>
            </div>
          </div>
          <div class="small-feature-container" id="imf6o">
            <span class="material-icons material-symbols-outlined">
              home
            </span>
            <div class="block">
              <p class="paragraph bolden">Feature title
              </p>
              <p class="paragraph">Insert your feature description text here
              </p>
            </div>
          </div>
        </div>
        <p class="paragraph">
        </p>
      </div>
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="irqac"/>
    </div>`,
        styles: `
      .block{
  height:80px;
  max-height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
}
#ixrq{
  height:710px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
  column-gap:02rem;
}
#i68h{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  width:788px;
  row-gap:1rem;
  text-align:left;
  padding-top:1rem;
  padding-bottom:1rem;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#inolr{
  font-weight:700;
}
.heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#i97a3{
  height:fit-content;
  margin-top:1rem;
  margin-bottom:1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
}
#i0jcx{
  width:1;
}
.small-feature-container{
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:start;
  align-items:start;
}
.paragraph.bolden{
  font-weight:600;
  font-size:1.2rem;
}
#iq0hd{
  width:1;
}
#imf6o{
  width:1;
}
#irqac{
  width:441px;
  height:561px;
}
@media (max-width: 880px){
  #ixrq{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
    padding-top:2rem;
    padding-bottom:2rem;
  }
  #irqac{
    width:100%;
    height:327px;
  }
}
@media (max-width: 810px){
  #ixrq{
    height:809px;
    flex-direction:column;
  }
  #i68h{
    width:100%;
  }
}
@media (max-width: 600px){
  #ixrq{
    height:699px;
  }
  #i68h{
    width:100%;
    height:285px;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('feature-four', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Image Grid',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-four' },
  });

  Components.addType('feature-four', {
    model: {
      defaults: {
        name: 'Features With Image Grid',
        components: `  
     <div id="izpc" class="block">
      <div id="irf4" class="block">
        <h2 id="ilin1" class="heading-two">Feature Heading
        </h2>
        <p id="iqpcl" class="paragraph">Insert your text here
        </p>
      </div>
      <div id="i1vi" class="block">
        <div id="imqcm" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="i7c2of"/>
          <div class="container-text" id="ii7jva">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="feature-container" id="icrkto">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="ivrf71"/>
          <div class="container-text" id="i2p5j7">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="feature-container" id="i24cem">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="i51qns"/>
          <div class="container-text" id="iq2ip1">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="feature-container" id="iihcj">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="iwz4k"/>
          <div class="container-text" id="imp4c">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="feature-container" id="i4fa8">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="irc6b"/>
          <div class="container-text" id="ilx4k">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="feature-container" id="iylww">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="ivvzh"/>
          <div class="container-text" id="iqsxg">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
      </div>
    </div>`,
        styles: `
     .block{
  height:11px;
  max-height:100%;
  width:100%;
}
#izpc{
  height:fit-content;
  max-width:1200px;
  width:90%;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
  margin-top:2rem;
  margin-bottom:2rem;
}
#irf4{
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  row-gap:1rem;
  height:fit-content;
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
#i1vi{
  height:fit-content;
  display:grid;
  flex-direction:row-reverse;
  justify-content:space-between;
  align-items:center;
  column-gap:2rem;
  grid-template-columns:1fr 1fr 1fr;
  row-gap:2rem;
  margin-top:2rem;
  margin-bottom:2rem;
}
.feature-container{
  width:100%;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  row-gap:0.7rem;
}
#imqcm{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
}
#i7c2of{
  width:100%;
  height:167px;
}
#ii7jva{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
.heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#icrkto{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
}
#ivrf71{
  width:100%;
  height:167px;
}
#i2p5j7{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
#i24cem{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
}
#i51qns{
  width:100%;
  height:167px;
}
#iq2ip1{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
#iihcj{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
}
#iwz4k{
  width:100%;
  height:167px;
}
#imp4c{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
#i4fa8{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
}
#irc6b{
  width:100%;
  height:167px;
}
#ilx4k{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
#iylww{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
}
#ivvzh{
  width:100%;
  height:167px;
}
#iqsxg{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
@media (max-width: 880px){
  #i1vi{
    grid-template-columns:1fr 1fr;
  }
}
@media (max-width: 600px){
  #izpc{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  #irf4{
    height:165px;
  }
  #i1vi{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr;
  }
}
`,
      },
    },
  });



  Components.addType('feature-five', {
    model: {
      defaults: {
        name: 'Features With Bento Grid',
        components: `  
    <div id="izpc" class="block">
      <div id="irf4" class="block">
        <h2 id="ilin1" class="heading-two">Feature Heading
        </h2>
        <p id="iqpcl" class="paragraph">Insert your text here
        </p>
      </div>
      <div id="i1vi" class="block">
        <div id="imqcm" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="i7c2of" class="grid-image"/>
          <div id="ii7jva" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div id="iao4q" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
          <div id="iggbk" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div id="icrkto" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
          <div id="i2p5j7" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div id="i9l9x" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
          <div id="ijxkn" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div id="iihcj" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
          <div id="imp4c" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
      </div>
    </div>`,
        styles: `
     .block{
  height:11px;
  max-height:100%;
  width:100%;
  grid-template-rows:1fr 1fr 1fr 1f;
}
#izpc{
  height:fit-content;
  max-width:1200px;
  width:90%;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
  margin-top:2rem;
  margin-bottom:2rem;
}
#irf4{
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  row-gap:1rem;
  height:fit-content;
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
#i1vi{
  height:fit-content;
  display:grid;
  flex-direction:row-reverse;
  justify-content:space-between;
  align-items:center;
  column-gap:2rem;
  grid-template-columns:1fr 1fr 1fr;
  row-gap:2rem;
  margin-top:2rem;
  margin-bottom:2rem;
  grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr;
}
.feature-container{
  width:100%;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:start;
  row-gap:0.7rem;
  height:400px;
  padding-top:1rem;
}
#imqcm{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 1;
  grid-row:span 2;
  height:800p;
}
.grid-image{
  width:100%;
  height:75%;
}
#ii7jva{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
.heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#iao4q{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
#iggbk{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
#icrkto{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 3;
  grid-row:span 2;
}
#i2p5j7{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
#i9l9x{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
#ijxkn{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
#iihcj{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 1;
  grid-row:span 2;
}
#imp4c{
  height:80px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:start;
  row-gap:1rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
@media (max-width: 880px){
  #i1vi{
    grid-template-columns:1fr 1fr 1fr 1fr;
  }
  .feature-container{
    grid-column:span 1;
  }
  #imqcm{
    grid-column:span 2;
  }
  #iao4q{
    grid-column:span 2;
  }
  #icrkto{
    grid-column:span 4;
  }
  #iihcj{
    grid-column:span 2;
  }
}
@media (max-width: 600px){
  #izpc{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  #irf4{
    height:165px;
  }
  #i1vi{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr;
  }
  #imqcm{
    grid-column:span 4;
  }
  #iao4q{
    grid-column:span 4;
  }
  #i9l9x{
    grid-column:span 4;
  }
  #iihcj{
    grid-column:span 4;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('feature-five', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Bento Grid',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-five' },
  });



  editor.Blocks.add('feature-six', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Image Bento Grid',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-six' },
  });

  Components.addType('feature-six', {
    model: {
      defaults: {
        name: 'Features With Image Bento Grid',
        components: `  
     <div id="izpc" class="block">
      <div id="irf4" class="block">
        <h2 id="ilin1" class="heading-two">Feature Heading
        </h2>
        <p id="iqpcl" class="paragraph">Insert your text here
        </p>
      </div>
      <div id="i1vi" class="block">
        <div id="imqcm" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="i7c2of" class="grid-image"/>
        </div>
        <div id="iao4q" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
        </div>
        <div id="icrkto" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
        </div>
        <div id="i9l9x" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
        </div>
        <div id="iihcj" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
        </div>
      </div>
    </div>`,
        styles: `
     .block{
  height:11px;
  max-height:100%;
  width:100%;
  grid-template-rows:1fr 1fr 1fr 1f;
}
#izpc{
  height:fit-content;
  max-width:1200px;
  width:90%;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
  margin-top:2rem;
  margin-bottom:2rem;
}
#irf4{
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  row-gap:1rem;
  height:fit-content;
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
#i1vi{
  height:fit-content;
  display:grid;
  flex-direction:row-reverse;
  justify-content:space-between;
  align-items:center;
  column-gap:2rem;
  grid-template-columns:1fr 1fr 1fr;
  row-gap:2rem;
  margin-top:2rem;
  margin-bottom:2rem;
  grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr;
}
.feature-container{
  width:100%;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:start;
  row-gap:0.7rem;
  height:400px;
  padding-top:1rem;
}
#imqcm{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 1;
  grid-row:span 2;
  height:800p;
}
.grid-image{
  width:100%;
  height:100%;
}
#i7c2of{
  height:100;
}
#iao4q{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
#icrkto{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 3;
  grid-row:span 2;
}
#i9l9x{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
#iihcj{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 1;
  grid-row:span 2;
}
@media (max-width: 880px){
  #i1vi{
    grid-template-columns:1fr 1fr 1fr 1fr;
  }
  .feature-container{
    grid-column:span 1;
  }
  #imqcm{
    grid-column:span 2;
  }
  #iao4q{
    grid-column:span 2;
  }
  #icrkto{
    grid-column:span 4;
  }
  #iihcj{
    grid-column:span 2;
  }
}
@media (max-width: 600px){
  #izpc{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  #irf4{
    height:165px;
  }
  #i1vi{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr;
  }
  #imqcm{
    grid-column:span 4;
  }
  #iao4q{
    grid-column:span 4;
  }
  #i9l9x{
    grid-column:span 4;
  }
  #iihcj{
    grid-column:span 4;
  }
}
`,
      },
    },
  });


};

export default features;