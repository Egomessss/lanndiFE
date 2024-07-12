import type { Editor } from 'grapesjs';

const footers = (editor: Editor) => {
  const { Components } = editor;

  editor.Blocks.add('footer-one', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20215416.png',
    label: 'Multi-column',
    category: 'sections-footers',
    select: true,
    content: { type: 'footer-one' },
  });

  Components.addType('footer-one', {
    model: {
      defaults: {
        name: 'Footer Multi-column',
        components: `<footer class="fmc-container" >
      <div class="fmc-links-container" >
        <div class="fmc-footer-links" >
          <svg  class="fmc-svg">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-border-all">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M4 12l16 0" />
              <path d="M12 4l0 16" />
            </svg>
          </svg>
          <h3 class="fmc-footer-heading">Footer heading
          </h3>
          <p class="fmc-paragraph">
          Insert your text here
          </p>
      </div>
      <div class="fmc-footer-links" >
        <h3 class="fmc-footer-heading">Footer heading
        </h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div class="fmc-footer-links" >
        <h3 class="fmc-footer-heading">Footer heading
        </h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div class="fmc-footer-links" >
        <h3 class="fmc-footer-heading">Footer heading
        </h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <p  class="fmc-paragraph">© 2024 lanndi. All rights reserved.
    </p>
  </footer>
    `,
        styles: `.fmc-container{
  height:250px;
  max-height:100%;
  width:90%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-top:2rem;
  margin-bottom:2rem;
  margin-right:auto;
  margin-left:auto;
   height:380px;
   border:solid;
   border-top-width:1px;
   border-right-width:0;
   border-bottom-width:0;
   border-left-width:0;
   border-color:gray;
}

.fmc-links-container{
  height:fit-content;
  display:flex;
  align-items:center;
  padding-top:2rem;
  padding-bottom:2rem;
  width:100%;
  justify-content:space-between;
}
.fmc-footer-links{
  width:20%;
  flex-direction:column;
  justify-content:start;
  align-items:start;
  display:flex;
  column-gap:2rem;
   height:fit-content;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  row-gap:1rem;
}

.fmc-svg{
  height:24px;
  width:24px;
}
.fmc-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}

@media (max-width: 880px){

  .ftm-container{
    height:fit-content;
  }
  .fmc-container{
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .fmc-links-container{
    flex-direction:column;
  }

  .fmc-footer-links{
    width:90%;
  }
  .fmc-paragraph{
    margin-top:2rem;
    margin-bottom:2rem;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('footer-two', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20215412.png',
    label: 'Simple Centered',
    category: 'sections-footers',
    select: true,
    content: { type: 'footer-two' },
  });

  Components.addType('footer-two', {
    model: {
      defaults: {
        name: 'Footer Simple Centered',
        // attributes: { class: 'footer-one' },
        components: `<div class="fsc-footer-container" >
    <div class="fsc-footer-links" >
      <a id="i4d5" href="#">Privacy Policy</a>
      <a id="i4d5" href="#">Terms & Conditions</a>
      <a id="is0m9" href="#">Pricing</a>
      <a id="ivkdr" href="#">About</a>
      <a id="iklqy" href="#">Contact</a>
    </div>
    <p id="ioy3" class="paragraph">© 2024 lanndi. All rights reserved.
    </p>
  </div>`,
        styles: `.fsc-footer-container{
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
.fsc-footer-links{
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