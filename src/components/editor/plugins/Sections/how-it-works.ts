import type { Editor } from 'grapesjs';

const features = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('how-it-works-one', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/how-simple.png',
    label: 'Simple',
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
    <div class="hws-container">
    <div class="hws-text-container">
      <h2 class="hws-heading-two">It's easy as 1, 2, 3
      </h2>
      <p class="hws-paragraph">Insert your description text here
      </p>
    </div>
    <p  class="hws-paragraph">
    </p>
    <div class="hws-steps-container" >
      <div class="hws-step-container" >
        <p  class="hws-paragraph">
        </p>
        <h3  class="hws-h3">Step 1
        </h3>
        <p  class="hws-paragraph">Insert your description text here
        </p>
      </div>
      <span  class="material-icons material-symbols-outlined rotate">arrow_forward_ios</span>
      <div class="hws-step-container">
        <p  class="hws-paragraph">
        </p>
        <h3 class="hws-h3">Step 2
        </h3>
        <p class="hws-paragraph">Insert your description text here
        </p>
      </div>
      <span class="material-icons material-symbols-outlined rot rotate">arrow_forward_ios</span>
      <div class="hws-step-container" >
        <p  class="hws-paragraph">
        </p>
        <h3  class="hws-h3">Step 3
        </h3>
        <p  class="hws-paragraph">Insert your description text here
        </p>
      </div>
    </div>
  </div>`,
        styles: `
.hws-container{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
}
.hws-text-container{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
}
.hws-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hws-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hws-steps-container{
  height:173px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:2rem;
}
.hws-step-container{
  text-align:center;
}
.hws-h3{
  margin-left:0;
  padding-top:0;
  padding-left:0;
  margin-top:0;
}

@media (max-width: 600px){
  .hws-container{
    height:601px;
  }
  .hws-text-container{
    height:144px;
  }
  .hws-steps-container{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
  }
  .hws-step-container{
    width:100%;
  }
  .material-icons.material-symbols-outlined.rotate{
    transform:rotate(90deg);
  }
  .hws-step-container{
    width:100%;
  }

}

`,
      },
    },
  });

  editor.Blocks.add('how-it-works-two', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/how-w-steps.png',
    label: 'With Steps',
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
      <div class="hwst-container">
      <div class="hwst-text-container">
        <h2 class="hwst-heading-two">It's easy as 1, 2, 3
        </h2>
        <p class="hwst-paragraph">Insert your description text here
        </p>
      </div>
      <div class="hwst-steps-container">
        <div class="hwst-card-container">
          <p class="hwst-paragraph">
          </p>
          <p class="hwst-paragraph">
          </p>
          <div id="i405k" class="hwst-step">
            <p id="ic9jd" class="hwst-paragraph">1.
            </p>
          </div>
          <h3 class="hwst-h3">How It Works Subtitle
          </h3>
          <p class="hwst-paragraph">Insert your description text here
          </p>
        </div>
        <div class="hwst-card-container">
          <p class="hwst-paragraph">
          </p>
          <p class="hwst-paragraph">
          </p>
          <div class="hwst-step" id="ilzfw">
            <p class="hwst-paragraph" id="ig87g">1.
            </p>
          </div>
          <h3 class="hwst-h3">How It Works Subtitle
          </h3>
          <p class="hwst-paragraph">Insert your description text here
          </p>
        </div>
        <div class="hwst-card-container">
          <p class="hwst-paragraph">
          </p>
          <p class="hwst-paragraph">
          </p>
          <div class="hwst-step" id="ifygg">
            <p class="hwst-paragraph" id="isbgv">1.
            </p>
          </div>
          <h3 class="hwst-h3">How It Works Subtitle
          </h3>
          <p class="hwst-paragraph">Insert your description text here
          </p>
        </div>
      </div>
    </div>`,
        styles: `
.hwst-container{
  height:359px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
  margin-top:2rem;
  margin-bottom:2rem;
}
.hwst-text-container{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
}
.hwst-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hwst-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hwst-steps-container{
  height:fit-content;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:2rem;
  width:fit-content;
  margin-top:2rem;
  margin-bottom:2rem;
}
.hwst-card-container{
  row-gap:1rem;
  height:fit-content;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:fit-content;
  padding-right:2rem;
  padding-bottom:2rem;
  padding-left:2rem;
  padding-top:2rem;
}
#i405k{
  display:flex;
  justify-content:center;
  align-items:center;
}
.hwst-step{
  width:40px;
  height:40px;
  border-style:solid;
  border-color:rgba(102, 151, 225, 1);
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
#ic9jd{
  height:fit-content;
  width:fit-content;
  font-size:1.5rem;
}
.hwst-h3{
  padding-top:0;
  padding-left:0;
  margin-top:0;
  margin-bottom:0;
}
#ilzfw{
  display:flex;
  justify-content:center;
  align-items:center;
}
#ig87g{
  height:fit-content;
  width:fit-content;
  font-size:1.5rem;
}
#ifygg{
  display:flex;
  justify-content:center;
  align-items:center;
}
#isbgv{
  height:fit-content;
  width:fit-content;
  font-size:1.5rem;
}
@media (max-width: 810px){
  .hwst-steps-container{
    column-gap:1rem;
  }
}
@media (max-width: 600px){
  .hwst-container{
    height:fit-content;
    row-gap:3rem;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .hwst-text-container{
    height:144px;
  }
  .hwst-steps-container{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
  }
  .hwst-card-container{
    width:100%;
  }
}
`,
      },
    },
  });


  editor.Blocks.add('how-it-works-three', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/how-w-image.png',
    label: 'With Images',
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
    <div>
    <div class="hwwi-container">
      <div class="hwwi-text-container">
        <h2 class="hwwi-heading-two">It's easy as 1, 2, 3
        </h2>
        <p class="hwwi-paragraph">Insert your description text here
        </p>
      </div>
      <div class="hwwi-steps-container">
        <div class="hwwi-card-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="hwwi-image" id="irhsg"/>
          <div class="block hwwi-step-text-container">
            <h3 class="hwwi-h3">How It Works Subtitle
            </h3>
            <p class="hwwi-paragraph">Insert your description text here
            </p>
          </div>
          <p class="hwwi-paragraph">
          </p>
          <p class="hwwi-paragraph">
          </p>
        </div>
        <div class="hwwi-card-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="iow5o" class="hwwi-image"/>
          <div class="block hwwi-step-text-container">
            <h3 class="hwwi-h3">How It Works Subtitle
            </h3>
            <p class="hwwi-paragraph">Insert your description text here
            </p>
          </div>
          <p class="hwwi-paragraph">
          </p>
          <p class="hwwi-paragraph">
          </p>
        </div>
        <div class="hwwi-card-container">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="in7cb" class="hwwi-image"/>
          <div class="block hwwi-step-text-container">
            <h3 class="hwwi-h3">How It Works Subtitle
            </h3>
            <p class="hwwi-paragraph">Insert your description text here
            </p>
          </div>
          <p class="hwwi-paragraph">
          </p>
          <p class="hwwi-paragraph">
          </p>
        </div>
      </div>
    </div>`,
        styles: `
   .hwwi-container{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
  margin-top:2rem;
  margin-bottom:2rem;
}
.hwwi-text-container{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  margin-top:2rem;
}
.hwwi-heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hwwi-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hwwi-steps-container{
  height:fit-content;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:2rem;
  width:fit-content;
  margin-top:2rem;
  margin-bottom:2rem;
}
.hwwi-card-container{
  row-gap:1rem;
  height:fit-content;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:fit-content;
}

.hwwi-image{
  width:100%;
  height:158px;
}

.block.hwwi-step-text-container{
  display:flex;
  flex-direction:column;
  row-gap:1rem;
  height:fit-content;
  padding-bottom:1rem;
  padding-right:1rem;
  padding-left:1rem;
}
.hwwi-h3{
  padding-top:0;
  padding-left:0;
  margin-top:0;
  margin-bottom:0;
}
#
@media (max-width: 810px){
  .hwwi-steps-container{
    column-gap:1rem;
  }
}
@media (max-width: 600px){
  .hwwi-container{
    height:fit-content;
    row-gap:3rem;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .hwwi-text-container{
    height:144px;
  }
  .hwwi-steps-container{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    width:100%;
  }
  .hwwi-card-container{
    width:100%;
  }
}
`,
      },
    },
  });

}

export default features;