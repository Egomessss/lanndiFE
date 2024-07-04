import type { Editor } from 'grapesjs';

const footers = (editor: Editor) => {
  const { Components } = editor;

  editor.Blocks.add('footer-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Multi-column',
    category: 'sections-footers',
    select: true,
    content: { type: 'footer-one' },
  });

  Components.addType('footer-one', {
    model: {
      defaults: {
        droppable: false,
        name: 'Footer Multi-column',
        attributes: { class: 'footer-one' },
        components: `<footer class="footer-container" id="iv2o">
      <div class="block" id="ibn4f">
        <div class="footer-links" id="iecim">
          <svg id="ihalr" class="svg">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-border-all">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M4 12l16 0" />
              <path d="M12 4l0 16" />
            </svg>
          </svg>
          <h3 class="footer-heading">Footer heading
          </h3>
          <p class="paragraph">
          Insert your text here
          </p>
      </div>
      <div class="footer-links" id="i99qc">
        <h3 class="footer-heading">Footer heading
        </h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div class="footer-links" id="iiwz9">
        <h3 class="footer-heading">Footer heading
        </h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div class="footer-links" id="i0s05">
        <h3 class="footer-heading">Footer heading
        </h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <p id="ioy3" class="paragraph">© 2024 lanndi. All rights reserved.
    </p>
  </footer>
    `,
        styles: `.footer-container{
  height:250px;
  max-height:100%;
  width:90%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
}
#iv2o{
  height:380px;
}
.block{
  height:139px;
  max-height:100%;
  width:100%;
  justify-content:center;
}
#ibn4f{
  height:fit-content;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-top:2rem;
  padding-bottom:2rem;
}
.footer-links{
  height:80px;
  max-height:100%;
  width:20%;
  flex-direction:column;
  justify-content:start;
  align-items:start;
  display:flex;
  column-gap:2rem;
}
#iecim{
  height:fit-content;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  row-gap:1rem;
}
#ihalr{
  height:24px;
  width:24px;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#i99qc{
  height:fit-content;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  row-gap:1rem;
}
#iiwz9{
  height:fit-content;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  row-gap:1rem;
}
#i0s05{
  height:fit-content;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  row-gap:1rem;
}
@media (max-width: 880px){
  #imnf{
    height:fit-content;
  }
  #iv2o{
    height:fit-content;
  }
  .footer-container{
    margin-top:2rem;
    margin-bottom:2rem;
  }
  #ibn4f{
    flex-direction:column;
  }
  .block{
    height:fit-content;
  }
  .footer-links{
    width:90%;
  }
  .paragraph{
    margin-top:2rem;
    margin-bottom:2rem;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('footer-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Simple',
    category: 'sections-footers',
    select: true,
    content: { type: 'footer-two' },
  });

  Components.addType('footer-two', {
    model: {
      defaults: {
        name: 'Footer One',
        // attributes: { class: 'footer-one' },
        components: `<div class="footer-container" data-gjs-resizable="true">
    <div class="footer-links" data-gjs-resizable="true">
      <a id="i4d5" href="#">Privacy Policy</a>
      <a id="i4d5" href="#">Terms & Conditions</a>
      <a id="is0m9" href="#">Pricing</a>
      <a id="ivkdr" href="#">About</a>
      <a id="iklqy" href="#">Contact</a>
    </div>
    <p id="ioy3" class="paragraph">© 2024 lanndi. All rights reserved.
    </p>
  </div>`,
        styles: `.footer-container{
  height:250px;
  max-height:100%;
  width:90%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
}
.footer-links{
  height:80px;
  max-height:100%;
  width:100%;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  display:flex;
  column-gap:2rem;
}
`,
      },
    },
  });

}

export default footers;