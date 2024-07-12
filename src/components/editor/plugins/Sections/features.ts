import type { Editor } from 'grapesjs';

const features = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('feature-one', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214516.png',
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
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214533.png',
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
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214549.png',
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
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214601.png',
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
   <div class="bg-container">
      <div class="bg-text-container">
        <h2 class="bg-heading-two">Feature Heading
        </h2>
        <p class="bg-paragraph">Insert your text here
        </p>
      </div>
      <div class="bg-features-container">
        <div class="bg-feature-container bg-feature-one">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bg-feature-grid-image"/>
          <div class="bg-feature-container-text">
            <h4 class="bg-heading-four">Heading
            </h4>
            <p class="bg-paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="bg-feature-container bg-feature-two">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bg-feature-grid-image"/>
          <div class="bg-feature-container-text">
            <h4 class="bg-heading-four">Heading
            </h4>
            <p class="bg-paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="bg-feature-container bg-feature-three">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bg-feature-grid-image"/>
          <div class="bg-feature-container-text">
            <h4 class="bg-heading-four">Heading
            </h4>
            <p class="bg-paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="bg-feature-container bg-feature-four">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bg-feature-grid-image"/>
          <div class="bg-feature-container-text">
            <h4 class="bg-heading-four">Heading
            </h4>
            <p class="bg-paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
        <div class="bg-feature-container bg-feature-five">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bg-feature-grid-image"/>
          <div class="bg-feature-container-text">
            <h4 class="bg-heading-four">Heading
            </h4>
            <p class="bg-paragraph">Insert your feature or benefit text here
            </p>
          </div>
        </div>
      </div>
    </div>`,
        styles: `
 .bg-container{
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
.bg-text-container{
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
.bg-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.bg-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.bg-features-container{
  height:fit-content;
  display:grid;
  flex-direction:row-reverse;
  align-items:center;
  column-gap:2rem;
  grid-template-columns:1fr 1fr 1fr;
  row-gap:2rem;
  margin-top:2rem;
  margin-bottom:2rem;
  grid-template-rows:1fr 1fr 1fr ;
}
.bg-feature-container{
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
.bg-feature-container.bg-feature-one{
  grid-column:span 1;
  grid-row: span 1;
}
.bg-feature-grid-image{
  width:100%;
  height:75%;
}
.bg-feature-container-text{
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
.bg-heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.bg-feature-two{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
.bg-feature-container.bg-feature-two{
  grid-column:span 2;
  grid-row:span 1;
}
.bg-feature-container.bg-feature-three{
  grid-column:span 3;
  grid-row:span 1;
}
.bg-feature-four{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
.bg-feature-container.bg-feature-four{
  grid-row:span 1;
}
.bg-feature-container.bg-feature-five{
  grid-column:span 1;
  grid-row:span 1;
}
@media (max-width: 880px){
  .bg-features-container{
    grid-template-columns:1fr 1fr 1fr;
  }
  .bg-feature-container{
    grid-column:span 1;
  }
  .bg-feature-two{
    grid-column:span 2;
  }
  .bg-feature-container.bg-feature-two{
    grid-column:span 2;
  }
  .bg-feature-container.bg-feature-five{
    grid-column:span 2;
  }
}
@media (max-width: 600px){
  .bg-container{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .bg-text-container{
    height:165px;
  }
  .bg-features-container{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr;
  }
  .bg-feature-container.bg-feature-one{
    grid-row: span 1;
    grid-column:span 4;
  }
  .bg-feature-two{
    grid-column:span 4;
  }
  .bg-feature-container.bg-feature-two{
    grid-column:span 4;
  }
  .bg-feature-container.bg-feature-three{
    grid-column:span 4;
  }
  .bg-feature-four{
    grid-column:span 4;
  }
  .bg-feature-container.bg-feature-five{
    grid-column:span 4;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('feature-five', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214619.png',
    label: 'Bento Grid',
    category: 'sections-features',
    select: true,
    content: { type: 'feature-five' },
  });



  editor.Blocks.add('feature-six', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214631.png',
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
   <div class="bgwi-container">
      <div class="bgwi-text-container">
        <h2 class="bgwi-heading-two">Feature Heading
        </h2>
        <p class="bgwi-paragraph">Insert your text here
        </p>
      </div>
      <div class="bgwi-features-container">
        <div class="bgwi-feature-container bgwi-feature-one">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bgwi-feature-grid-image"/>
        </div>
        <div class="bgwi-feature-container bgwi-feature-two">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bgwi-feature-grid-image"/>
        </div>
        <div class="bgwi-feature-container bgwi-feature-three">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bgwi-feature-grid-image"/>
        </div>
        <div class="bgwi-feature-container bgwi-feature-four">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bgwi-feature-grid-image"/>
        </div>
        <div class="bgwi-feature-container bgwi-feature-five">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="bgwi-feature-grid-image"/>
        </div>
      </div>
    </div>`,
        styles: `
 .bgwi-container{
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
.bgwi-text-container{
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
.bgwi-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.bgwi-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.bgwi-features-container{
  height:fit-content;
  display:grid;
  flex-direction:row-reverse;
  align-items:center;
  column-gap:2rem;
  grid-template-columns:1fr 1fr 1fr;
  row-gap:2rem;
  margin-top:2rem;
  margin-bottom:2rem;
  grid-template-rows:1fr 1fr 1fr ;
}
.bgwi-feature-container{
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
.bgwi-feature-container.bgwi-feature-one{
  grid-column:span 1;
  grid-row: span 1;
}
.bgwi-feature-grid-image{
  width:100%;
  height:100%;
}

.bgwi-heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.bgwi-feature-two{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
.bgwi-feature-container.bgwi-feature-two{
  grid-column:span 2;
  grid-row:span 1;
}
.bgwi-feature-container.bgwi-feature-three{
  grid-column:span 3;
  grid-row:span 1;
}
.bgwi-feature-four{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  padding-left:0;
  grid-column:span 2;
  grid-row:span 2;
}
.bgwi-feature-container.bgwi-feature-four{
  grid-row:span 1;
}
.bgwi-feature-container.bgwi-feature-five{
  grid-column:span 1;
  grid-row:span 1;
}
@media (max-width: 880px){
  .bgwi-features-container{
    grid-template-columns:1fr 1fr 1fr;
  }
  .bgwi-feature-container{
    grid-column:span 1;
  }
  .bgwi-feature-two{
    grid-column:span 2;
  }
  .bgwi-feature-container.bgwi-feature-two{
    grid-column:span 2;
  }
  .bgwi-feature-container.bgwi-feature-five{
    grid-column:span 2;
  }
}
@media (max-width: 600px){
  .bgwi-container{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .bgwi-text-container{
    height:165px;
  }
  .bgwi-features-container{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr;
  }
  .bgwi-feature-container.bgwi-feature-one{
    grid-row: span 1;
    grid-column:span 4;
  }
  .bgwi-feature-two{
    grid-column:span 4;
  }
  .bgwi-feature-container.bgwi-feature-two{
    grid-column:span 4;
  }
  .bgwi-feature-container.bgwi-feature-three{
    grid-column:span 4;
  }
  .bgwi-feature-four{
    grid-column:span 4;
  }
  .bgwi-feature-container.bgwi-feature-five{
    grid-column:span 4;
  }
}
`,
      },
    },
  });


};

export default features;