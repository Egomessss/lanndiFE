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
  <div class="ftri-container" >
    <div class="ftri-text-container" >
      <p class="ftri-paragraph bolden" >
     Subheading
      </p>
    <h2 class="ftri-heading-two">Feature Heading
    </h2>
    <p class="ftri-paragraph">
    Insert your text here
    </p>
  </div>
<div class="ftri-content" >
  <div class="ftri-feature-container">
    <span class="material-icons material-symbols-outlined">
      home
    </span>
    <h4 class="ftri-heading-four">Heading
    </h4>
    <p class="ftri-paragraph">
    Insert your feature or benefit text here
    </p>
</div>
<div class="ftri-feature-container">
  <span class="material-icons material-symbols-outlined">
    home
  </span>
  <h4 class="ftri-heading-four">Heading
  </h4>
  <p class="ftri-paragraph">Insert your feature or benefit text here
  </p>
</div>
<div class="ftri-feature-container">
  <span class="material-icons material-symbols-outlined">
    home
  </span>
  <h4 class="ftri-heading-four">Heading
  </h4>
  <p class="ftri-paragraph">Insert your feature or benefit text here
  </p>
</div>
</div>
</div>`,
        styles: `
      
.ftri-container{
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
.ftri-text-container{
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
.ftri-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.bolden{
  font-weight:700;
}
.ftri-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.ftri-content{
  height:257px;
  display:flex;
  flex-direction:row-reverse;
  justify-content:space-between;
  align-items:center;
  column-gap:2rem;
}
.ftri-feature-container{
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
.ftri-heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
@media (max-width: 600px){
  .ftri-container{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .ftri{
    height:165px;
  }
  .ftri-content{
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
   <div  class="fbig-container">
    <div  class="fbig-text-content">
      <p class="bolden">
     Subheading  
      </p>
    <h2  class="fbig-heading-two">Feature Heading
    </h2>
    <p  class="fbig-paragraph">Insert your text here
    </p>
  </div>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="fbig-image" />
<div class="fbig-features-container" >
  <div  class="feature-container">
    <span class="material-icons material-symbols-outlined">home</span>
    <h4 class="fbig-heading-four">Heading
    </h4>
    <p class="fbig-paragraph">
    Insert your feature or benefit text here
    </p>
</div>
<div id="iqbmj" class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="fbig-heading-four">Heading
  </h4>
  <p class="fbig-paragraph">
  Insert your feature or benefit text here
  </p>
</div>
<div  class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="fbig-heading-four">Heading
  </h4>
  <p class="fbig-paragraph">
  Insert your feature or benefit text here
  </p>
</div>
<div  class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="fbig-heading-four">Heading
  </h4>
  <p class="fbig-paragraph">
  Insert your feature or benefit text here
  </p>
</div>
<div  class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="fbig-heading-four">Heading
  </h4>
  <p class="fbig-paragraph">
  Insert your feature or benefit text here
  </p>
</div>
<div  class="feature-container">
  <span class="material-icons material-symbols-outlined">home</span>
  <h4 class="fbig-heading-four">Heading
  </h4>
  <p class="fbig-paragraph">
  Insert your feature or benefit text here
  </p>
</div>
</div>
</div>`,
        styles: ` 
.fbig-container{
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
.fbig-text-content{
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
.fbig-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.bolden{
  font-weight:700;
}
.fbig-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.fbig-image{
  width:671px;
  height:343px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  box-shadow:0 0 20p 20px;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
}
.fbig-features-container{
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
.fbig-feature-container{
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
.fbig-heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
@media (max-width: 600px){
  .fbig-container{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .fbig-text-content{
    height:165px;
  }
  .fbig-image{
    width:100%;
    height:220px;
  }
  .fbig-features-container{
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
    <div class="fil-container">
        <div class="fil-text-container">
          <p class="bolden">Subtitle
          </p>
          <h2 class="fil-heading-two">Feature Heading
          </h2>
          <p class="fil-paragraph">
          </p>
          <p class="fil-paragraph">lanndi helps you create launch and share your beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
            <br/>
            <br/>
          </p>
          <div class="fil-features-container">
            <div class="fil-feature-container">
              <span class="material-icons material-symbols-outlined">
                home
              </span>
              <div class="fil-feature-text-container">
                <p class="fil-paragraph fil-feature-text-bolden">Feature title
                </p>
                <p class="fil-paragraph">Insert your feature description text here
                </p>
              </div>
            </div>
            <div class="fil-feature-container">
              <span class="material-icons material-symbols-outlined">
                home
              </span>
              <div class="fil-feature-text-container">
                <p class="fil-paragraph fil-feature-text-bolden">Feature title
                </p>
                <p class="fil-paragraph">Insert your feature description text here
                </p>
              </div>
            </div>
            <div class="fil-feature-container">
              <span class="material-icons material-symbols-outlined">
                home
              </span>
              <div class="fil-feature-text-container">
                <p class="fil-paragraph fil-feature-text-bolden">Feature title
                </p>
                <p class="fil-paragraph">Insert your feature description text here
                </p>
              </div>
            </div>
          </div>
          <p class="fil-paragraph">
          </p>
        </div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="fil-image"/>
      </div>
    </div>
  </div>`,
        styles: `
     .fil-container{
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
.fil-text-container{
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
.bolden{
  font-weight:700;
}
.fil-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.fil-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.fil-features-container{
  height:fit-content;
  margin-top:1rem;
  margin-bottom:1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  width:100%;
}
.fil-feature-container{
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:start;
  align-items:start;
  height:fit-content;
}
.fil-feature-text-container{
  width:100%;
}
.fil-feature-text-bolden{
  font-weight:600;
  font-size:1.2rem;
}
.fil-image{
  width:441px;
  height:561px;
}
@media (max-width: 880px){
  .fil-container{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
    padding-top:2rem;
    padding-bottom:2rem;
  }
  .fil-image{
    width:100%;
    height:327px;
  }
}
@media (max-width: 810px){
  .fil-container{
    height:809px;
    flex-direction:column;
  }
  .fil-text-container{
    width:100%;
  }
}
@media (max-width: 600px){
  .fil-container{
    height:fit-content;
  }
  .fil-text-container{
    width:100%;
    height:fit-content;
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
     <div class="fig-container">
      <div  class="fig-text-container">
        <h2  class="fig-heading-two">Feature Heading
        </h2>
        <p  class="fig-paragraph">Insert your text here
        </p>
      </div>
      <div class="fig-features-container">
        <div  class="fig-feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="fig-image"/>
          <div class="fig-feature-text-container" >
            <h4 class="fig-heading-four">Heading
            </h4>
            <p class="fig-paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="fig-feature-container" >
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="fig-image"/>
          <div class="fig-feature-text-container" >
            <h4 class="fig-heading-four">Heading
            </h4>
            <p class="fig-paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="fig-feature-container" >
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="fig-image"/>
          <div class="fig-feature-text-container" >
            <h4 class="fig-heading-four">Heading
            </h4>
            <p class="fig-paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="fig-feature-container" >
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="fig-image"/>
          <div class="fig-feature-text-container" >
            <h4 class="fig-heading-four">Heading
            </h4>
            <p class="fig-paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="fig-feature-container" >
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="fig-image"/>
          <div class="fig-feature-text-container" >
            <h4 class="fig-heading-four">Heading
            </h4>
            <p class="fig-paragraph">
              Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="fig-feature-container" >
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="fig-image"/>
          <div class="fig-feature-text-container">
            <h4 class="fig-heading-four">Heading
            </h4>
            <p class="fig-paragraph">
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
.fig-container{
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
.fig-text-container{
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
.fig-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.fig-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.fig-features-container{
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
.fig-feature-container{
  width:100%;
  height:fit-content;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  row-gap:0.7rem;
   padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
}

.fig-image{
  width:100%;
  height:167px;
}
.fig-feature-text-container{
  height:fit-content;
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
.fig-heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}



@media (max-width: 880px){
  .fig-features-container{
    grid-template-columns:1fr 1fr;
  }
}
@media (max-width: 600px){
  .fig-container{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .fig-text-container{
    height:165px;
  }
  .fig-features-container{
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
    <div id="izpcyt" class="block">
      <div id="irf4qwe" class="block">
        <h2 id="ilin15" class="heading-two">Feature Heading
        </h2>
        <p id="iqpclq" class="paragraph">Insert your text here
        </p>
      </div>
      <div id="i1viloy" class="block">
        <div id="imqcmwq" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="i7c2ofgs" class="grid-image"/>
          <div id="ii7jva" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div id="iao4qlky" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
          <div id="iggbk" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div id="icrktoxz" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
          <div id="i2p5j7" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div id="i9l9xzw" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
          <div id="ijxkn" class="container-text">
            <h4 class="heading-four">Heading
            </h4>
            <p class="paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div id="iihcjmnst" class="feature-container">
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
#izpcyt{
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
#irf4qwe{
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
#i1viloy{
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
#imqcmwq{
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
#iao4qlky{
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
#icrktoxz{
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
#i9l9xzw{
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
#iihcjmnst{
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
  #i1viloy{
    grid-template-columns:1fr 1fr 1fr 1fr;
  }
  .feature-container{
    grid-column:span 1;
  }
  #imqcmwq{
    grid-column:span 2;
  }
  #iao4qlky{
    grid-column:span 2;
  }
  #icrktoxz{
    grid-column:span 4;
  }
  #iihcjmnst{
    grid-column:span 2;
  }
}
@media (max-width: 600px){
  #izpcyt{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  #irf4qwe{
    height:165px;
  }
  #i1viloy{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr;
  }
  #imqcmwq{
    grid-column:span 4;
  }
  #iao4qlky{
    grid-column:span 4;
  }
  #i9l9xzw{
    grid-column:span 4;
  }
  #iihcjmnst{
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
      <div id="irf4ikr" class="block">
        <h2 id="ilin11" class="heading-two">Feature Heading
        </h2>
        <p id="iqpclr" class="paragraph">Insert your text here
        </p>
      </div>
      <div id="i1vilah" class="block">
        <div id="imqcmer" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="i7c2ofly" class="grid-image"/>
        </div>
        <div id="iao4q" class="feature-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="grid-image"/>
        </div>
        <div id="icrktotee" class="feature-container">
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
#irf4ikr{
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
#i1vilah{
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
#imqcmer{
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
#i7c2ofly{
  height:100px;
}
#iao4q{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
#icrktotee{
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
  #i1vilah{
    grid-template-columns:1fr 1fr 1fr 1fr;
  }
  .feature-container{
    grid-column:span 1;
  }
  #imqcmer{
    grid-column:span 2;
  }
  #iao4q{
    grid-column:span 2;
  }
  #icrktotee{
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
  #irf4ikr{
    height:165px;
  }
  #i1vilah{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr;
  }
  #imqcmer{
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