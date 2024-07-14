import type { Editor } from 'grapesjs';

const templates = (editor: Editor) => {
  const { Components } = editor;

  editor.Blocks.add('template-one', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/template-one.png',
    label: 'One',
    category: 'templates-starter',
    content: { type: 'template-one' },
  });

  Components.addType('template-one', {
    model: {
      defaults: {
        name: 'Template One',
        components: `
<div id="i04ddc">
      <header class="header">
        <nav class="navbar">
          <a class="link-box"><img src="https://assets.lanndi.com/assets/NHYnkERJGUr2p4uHAidW10djWzaUg6Bx8PJFO6NF.webp" id="is8han" class="nav-logo"/></a>
          <div id="itiy0d" class="nav-menu">
            <a href="https://app.lanndi.com/demo" class="link-box"><button class="button secondary-btn">Login</button></a>
            <a href="https://app.lanndi.com/demo" class="link-box"><button class="button main-cta">Create your Website
              </button></a>
          </div>
        </nav>
      </header>
    </div>
    <div id="ibxxje" class="container hero-container">
      <h1 class="heading-one">Create, publish and share your website in 30 minutes
      </h1>
      <p id="ie87v" class="paragraph hero-description">Create your beautiful, fast and responsive website in 30 minutes
        or less with a super intuitive no-code editor that doesn't limit you or your vision
      </p>
      <div id="iyqed8" class="cta-container">
        <a href="https://app.lanndi.com/demo" class="link-box"><button class="button main-cta">Create your Website
          </button></a>
        <p class="cta-p">Start for free, no credit card required!
          <!--notionvc: bccc3ffc-4b64-4d65-88bf-c266960fa0ba-->
        </p>
      </div>
      <img src="https://assets.lanndi.com/assets/ixFFWi7V6TM8IIrbwp4dzuwwSGniksdnfgoXum3Q.webp" id="ikurmg" alt="lanndi no code website builder editor" class="hero-image"/>
    </div>
    <div id="iyrrzp" class="container benefits-container">
      <h2 class="heading-two">With lanndi you can
      </h2>
      <div id="ixmh99" class="benefit-container white-container">
        <div id="itpu0b" class="benefit-text-container">
          <h3 id="iz84b" class="heading-three benefit-h3">Build a free website
          </h3>
          <p class="paragraph with-white-bg">Build a one-page website and use all of lanndi's core features – for free!
          </p>
        </div>
      </div>
      <div id="ilxhlw" class="benefit-container">
        <div id="ijpard" class="benefit-text-container">
          <h3 class="heading-three benefit-h3 with-blue-bg">Design and publish a website in record time
          </h3>
          <p class="paragraph with-blue-bg">You don't need to spend dozens of hours watching tutorials to create and
            publish your website, you can get it done in 30 minutes or less with dozens of super customizable pre-made
            blocks and a super intuitive editor.
            <!--notionvc: 47d57c8a-c26c-4c18-a23c-9e08e91787d3-->
          </p>
        </div>
        <img src="https://assets.lanndi.com/assets/4BzykNm8BAB3xUEhYR2l6aXyxeoZAophntpcRKVj.gif" alt="lanndi editor" loading="lazy" class="image benefit-image"/>
      </div>
      <div id="ipsr7h" class="benefit-container wh white-container">
        <div id="ic9uih" class="benefit-text-container">
          <h3 class="heading-three benefit-h3">Load and index your pages faster
            <!--notionvc: e3cdc20e-8b3d-47c3-b157-bead59755f06-->
          </h3>
          <p class="paragraph with-white-bg">Build a super faster loading and responsive website on every device,
            reducing bounce rates and improving conversion which is also SEO optimized to help you index your pages and rank
            them all on the top search engines
            <!--notionvc: 6b500f16-7a88-4128-b8da-3431cd04da95-->
            <!--notionvc: 47d57c8a-c26c-4c18-a23c-9e08e91787d3-->
          </p>
        </div>
        <img src="https://assets.lanndi.com/assets/XxpYNlDIpbsgjXHtbPGTI42nQZg5iNZXy2VvDij2.webp" alt="lanndi erfomace and seo optimization" loading="lazy" class="image ben benefit-image"/>
      </div>
      <div id="io7gei" class="benefit-container">
        <div id="ilfjpl" class="benefit-text-container">
          <h3 class="heading-three benefit-h3 with-blue-bg">Customize without limits
          </h3>
          <p class="paragraph with-blue-bg">lanndi’s editor provides unlimited ways to style your website to make sure
            your vision comes to life on every single device
            <!--notionvc: 47d57c8a-c26c-4c18-a23c-9e08e91787d3-->
          </p>
        </div>
        <img src="https://assets.lanndi.com/assets/4MFKrhGIukmjb1kVmPvmnUqVKMm1HiCBQql2YC8g.webp" alt="lanndi unlimited styling options" loading="lazy" class="image benefit-image"/>
      </div>
      <div id="ibp6w7" class="benefit-container white-container">
        <div id="i1n50d" class="benefit-text-container">
          <h3 class="heading-three benefit-h3">Publish more websites and pay less
            <!--notionvc: 35ae9ff0-3535-418b-8280-998bd5e54cd9-->
          </h3>
          <p class="paragraph with-white-bg">No more overpaying for multiple websites, you create and publish multiple
            websites with a plan that costs less than your netflix subscription
            <!--notionvc: cdc9b7c1-7f9d-480e-9034-96afdccececd-->
          </p>
        </div>
      </div>
    </div>
    <div id="i1dmoa">
      <div class="cta-simple-container">
        <div class="cta-simple-content-box">
          <h2 class="cta-simple-heading-one">Create Your Free Website Now
          </h2>
          <a href="https://app.lanndi.com/demo" class="link-box"><button class="button main-cta"><div type="button" autocomplete="off" class="cta-button blue-cta">Create your Website
            </div></button></a>
        </div>
      </div>
    </div>
    <div id="i04fwr">
      <div id="iudab" class="ftri-container">
        <div class="ftri-text-container">
          <h2 id="izgxzn" class="heading-two">Everything you need for success
          </h2>
        </div>
        <div id="ig6nl" class="ftri-content">
          <div id="ifyfle" class="ftri-feature-container white-feature-container">
            <h3 class="heading-three">Custom domains &amp; SSL
            </h3>
            <p id="io97k" class="ftri-paragraph">Every website is published and secured with a free SSL certificate,
              with the option to publish your site with any custom domain you own our free sub-domain.
            </p>
          </div>
          <div id="iq0meu" class="ftri-feature-container white-feature-container">
            <h3 class="heading-three">Custom code
              <!--notionvc: c60578ec-5c25-4be0-b2e4-ea70e35bfc86-->
            </h3>
            <h4 id="ittws" class="ftri-heading-four">
              <!--notionvc: 52869e49-82b2-4ebd-84c6-1a92d041997c-->
            </h4>
            <p id="i8216" class="ftri-paragraph">Add your own custom code and widgets from third-party services like
              Stripe, Lemonsqueezy , Gumroad, Typeform and so much more.
              <!--notionvc: 02029b58-3355-40ee-b913-a73a1d974277-->
            </p>
          </div>
          <div id="igd9r8" class="ftri-feature-container white-feature-container">
            <h3 class="heading-three">Code editor
              <!--notionvc: c60578ec-5c25-4be0-b2e4-ea70e35bfc86-->
            </h3>
            <p id="ich2ji" class="ftri-paragraph">Use the css and javascript code editor to take your website
              functionality into the next level.
              <!--notionvc: 315d248a-d2b5-4069-8c8a-d0f1ee24a402-->
            </p>
          </div>
          <div id="im92wi" class="ftri-feature-container white-feature-container">
            <h3 class="heading-three">
              <span data-token-index="0" class="notion-enable-hover">Website Icons</span>
              <!--notionvc: e5d3ebe8-b805-4940-a0bf-ea1e71a8ee40-->
            </h3>
            <p id="ix2vot" class="ftri-paragraph">Show custom icons (aka "favicons") in the address bar when anyone
              visits your sites.
              <!--notionvc: 25cb6c31-cbfe-4bd7-b86c-9ab8f283a89e-->
              <!--notionvc: a81b0a7c-9a36-4206-85b4-efca2a5931c6-->
            </p>
          </div>
          <div id="i9huw8" class="ftri-feature-container white-feature-container">
            <h3 class="heading-three">SEO optimized
              <!--notionvc: 407e4b67-8176-464a-a5df-9c0452107f88-->
            </h3>
            <p id="iwht8b" class="ftri-paragraph">Social media share links, meta tags and custom head code so you can
              share and index your pages faster and grow organically
              <!--notionvc: 6a35bb91-d6b4-4555-854a-e6e3954c0dad-->
            </p>
          </div>
          <div id="iea0uf" class="ftri-feature-container white-feature-container">
            <h3 class="heading-three">Click or drag and drop
              <!--notionvc: 4e1a37b3-5bb4-4fa7-8654-4c04a1bb73cb-->
            </h3>
            <p id="is1z6j" class="ftri-paragraph">We provide both the option to drag and drop any block wherever you
              want or just click to drop them on the canvas.
              <!--notionvc: 8a005ea3-1f36-40a4-bfc9-0dbe76d9cc15-->
            </p>
          </div>
        </div>
      </div>
      <div id="i5gn51">
      </div>
    </div>
    <div id="ih6jb4">
      <div id="iks5g4" class="pws-container">
        <h2 class="heading-two">Simple no tricks pricing
        </h2>
        <p class="pws-heading-subtext">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste.
          Soluta rerum quidem minus ut molestiae velit error quod.
        </p>
        <div class="pws-pricing-option">
          <label class="pws-input-label"><input type="checkbox" id="pws-togglePricing" autocomplete="off"/><span class="pws-annual-text">Annual 20% off</span></label>
        </div>
        <div id="i5k7z9" class="pws-pricing-container">
          <div class="pws-pricing-text-container white-pricing-container">
            <h3 class="pws-heading-three">Free
            </h3>
            <p id="ichm13" class="pws-column-p">
              <span id="ia3jnj">For those testing the waters</span>
            </p>
            <p class="pws-price-monthly">€0/month
            </p>
            <p class="pws-price-annual">€0/year
            </p>
            <div class="pws-features-container">
              <div id="iq39i-3" class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p id="ijita-3" class="pws-feature-p">1 website
                </p>
              </div>
              <div id="i4bsr-3" class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p id="in8kg-3" class="pws-feature-p">1 page max
                </p>
              </div>
              <div id="il9cg-3" class="pws-feature-box">
                <span id="ifbec-3" class="material-icons material-symbols-outlined">check</span>
                <p id="ivs1l-3" class="pws-feature-p">lanndi subdomain
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">lanndi branding
                </p>
              </div>
            </div>
            <a href="https://app.lanndi.com/register" class="pws-link-box"><button type="button" id="idixzl" class="pws-button">Buy Now</button></a>
          </div>
          <div class="pws-highlighted pws-pricing-text-container blue-pricing-container">
            <h3 class="pws-heading-three">Pro
            </h3>
            <p id="i4ro5h" class="pws-column-p">For those that want and need more
            </p>
            <p class="pws-price-monthly">€15/month
            </p>
            <p class="pws-price-annual">€150/year
            </p>
            <div class="pws-features-container">
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">5 websites
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">10 pages max
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">Custom domain
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">Preview domain
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">Custom code
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">FavIcons
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">No lanndi branding
                </p>
              </div>
            </div>
            <a href="https://app.lanndi.com/register" class="pws-link-box"><button type="button" class="main-cta button pricing-button">Buy Now</button></a>
          </div>
          <div class="pws-pricing-text-container white-pricing-container">
            <h3 class="pws-heading-three">Basic
            </h3>
            <p class="pws-price-monthly">€5/month
            </p>
            <p id="i2l06y" class="pws-column-p">
              <span id="iufnzg">For building your first simple dream site</span>
            </p>
            <p class="pws-price-annual">€50/year
            </p>
            <div class="pws-features-container">
              <div id="i7bv6i-3" class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p id="ir35pq-3" class="pws-feature-p">1 website
                </p>
              </div>
              <div id="ivy0u4-3" class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p id="iryct6-3" class="pws-feature-p">10 pages max
                </p>
              </div>
              <div id="izlff6-3" class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p id="i58igh-3" class="pws-feature-p">Custom domain
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p id="ifh2c7-3" class="pws-feature-p">Preview domain
                </p>
              </div>
              <div id="i9o5tl-3" class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p id="ial8lb-3" class="pws-feature-p">Custom code
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">FavIcons
                </p>
              </div>
              <div class="pws-feature-box">
                <span class="material-icons material-symbols-outlined">check</span>
                <p class="pws-feature-p">No lanndi branding
                </p>
              </div>
            </div>
            <a href="https://app.lanndi.com/register" class="pws-link-box"><button type="button" class="pws-button">Buy Now</button></a>
          </div>
        </div>
        <div class="pws-links-container">
          <a href="https://lanndi.com/terms-and-conditions" id="i5g04n" target="_blank" class="priicng-links">Terms</a>
          <a href="https://lanndi.com/privacy-policy" id="i4w96u" target="_blank" class="links priicng-links">Privacy
            Policy</a>
        </div>
      </div>
      <div id="ioenwa">
        <div class="ltp-container">
          <h2 class="heading-two">Lifetime deal
          </h2>
          <p class="ltp-subheading-text">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste.
            Soluta rerum quidem minus ut molestiae velit error quod.
          </p>
          <div class="ltp-pricing-columns-container ltd-blue-container">
            <div class="ltp-features-text">
              <h3 class="ltp-heading-three">Simply the best deal you are going to get
              </h3>
              <div class="ltp-features-container">
                <div class="ltp-feature-box">
                  <span class="material-icons material-symbols-outlined">check</span>
                  <p class="ltp-paragraph ltp-text-size">Access to all of lanndi's features
                  </p>
                </div>
                <div class="ltp-feature-box">
                  <span class="material-icons material-symbols-outlined">check</span>
                  <p class="ltp-paragraph ltp-text-size">Access to all upcoming updates
                  </p>
                </div>
                <div class="ltp-feature-box">
                  <span class="material-icons material-symbols-outlined">check</span>
                  <p class="ltp-paragraph ltp-text-size">Unlimited websites
                  </p>
                </div>
                <div class="ltp-feature-box">
                  <span class="material-icons material-symbols-outlined">check</span>
                  <p class="ltp-paragraph ltp-text-size">Priority support
                  </p>
                </div>
              </div>
            </div>
            <div class="ltp-price-container">
              <p class="ltp-paragraph ltp-price-deal">Lifetime deal
              </p>
              <p id="." class="ltp-paragraph ltp-price">$299
              </p>
              <a href="https://app.lanndi.com/register" class="link-box"><div class="pws-button">
                <button id="io0ahk" class="pws pws-button">Buy Now</button>
                </div></a>
              <div class="ltp-links">
                <a href="https://lanndi.com/terms-and-conditions" id="igxwpi">Terms</a>
                <a href="https://lanndi.com/privacy-policy" id="inripe">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="i0scfq">
      <div class="fsc-footer-container">
        <div class="fsc-footer-links">
          <a id="i4d5" href="https://lanndi.com/privacy-policy">Privacy Policy</a>
          <a id="i4d5-2" href="https://lanndi.com/terms-and-conditions" target="_blank">Terms &amp; Conditions</a>
          <a id="iklqy" href="mailto:help@lanndi.com">Contact</a>
          <a href="https://x.com/TecEdSocial" id="izif8y">X/twitter</a>
        </div>
        <p id="ioy3" class="paragraph">© 2024 lanndi. All rights reserved.
        </p>
      </div>
    </div>
`,
          styles: `
.header{
  border-bottom:1px solid #E2E8F0;
}
.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-top:0.5rem;
  padding-right:0;
  padding-bottom:0.5rem;
  padding-left:0;
  width:90%;
  height:fit-content;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
}
.link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  max-width:100%;
  text-decoration:none;
  cursor:pointer;
}
.link-box:empty{
  text-decoration:none;
  padding:5px;
}
.link-box:empty:before{
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
.nav-logo{
  font-size:1.5rem;
  font-weight:500;
  color:#482ff7;
  width:30px;
  height:30px;
}
.nav-menu{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
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
.button.secondary-btn{
  background:rgba(208, 235, 255, 1);
  padding-top:6px;
  padding-bottom:6px;
  padding-right:12px;
  padding-left:12px;
}
.button.secondary-btn:hover{
  color:rgba(28, 126, 214, 1);
  border-style:solid;
  border-color:rgba(28, 126, 214, 1);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
}
.button.main-cta{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  background:rgb(255, 255, 255);
  color:rgba(0,0,0,1);
}
.button.main-cta:hover{
  color:rgba(28, 126, 214, 1);
}
.container{
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
  flex-direction:column;
  row-gap:2rem;
  height:fit-conten;
}
.container.hero-container{
  background:rgba(28, 126, 214, 1);
  margin-top:2rem;
  margin-bottom:2rem;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  padding-top:4rem;
  padding-left:10px;
  padding-bottom:2rem;
  height:fit-content;
}
.heading-one{
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
  width:fit-content;
}
.paragraph.hero-description{
  text-align:center;
  color:rgba(255, 255, 255, 1);
}
.cta-container{
  width:400px;
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:0.3rem;
}
.cta-p{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  row-gap:0.5rem;
  color:rgb(255, 255, 255);
  font-size:0.8rem;
}
.hero-image{
  width:800px;
  height:400px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
}
.heading-two{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.benefit-container{
  width:100%;
  height:400px;
  padding-top:1rem;
  padding-right:2rem;
  padding-bottom:1rem;
  padding-left:2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
  background:rgba(28, 126, 214, 1);
  box-shadow:5px 5px 20px rgb(169, 166, 169);
}
.benefit-container.white-container{
  background:rgba(255, 255, 255, 1);
}
#ixmh99{
  column-gap:2rem;
}
.benefit-text-container{
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  text-align:center;
  color:rgba(255, 255, 255, 1);
  width:50%;
}
.heading-three{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.heading-three.benefit-h3{
  font-size:2.5rem;
  width:100%;
  color:rgb(1, 1, 1);
}
.paragraph.with-white-bg{
  color:rgb(1, 1, 1);
}
#ilxhlw{
  column-gap:2rem;
}
.heading-three.benefit-h3.with-blue-bg{
  color:rgba(255, 255, 255, 1);
}
.image{
  flex-grow:1;
  width:30px;
  height:30px;
}
.image.benefit-image{
  width:50%;
  height:57%;
  object-fit:cover;
  background:rgba(28, 126, 214, 1);
  border-top-width:10p;
  border-right-width:0;
  border-bottom-width:0;
  border-left-width:0;
}
#ipsr7h{
  column-gap:2rem;
}
.image.ben.benefit-image{
  object-fit:cover;
}
#io7gei{
  column-gap:2rem;
}
#ibp6w7{
  column-gap:2rem;
}
.cta-simple-container{
  height:fit-content;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 10px 10px 10px;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  margin-top:2rem;
  margin-bottom:2rem;
  padding-top:2rem;
  padding-right:2rem;
  padding-bottom:2rem;
  padding-left:2rem;
}
.cta-simple-content-box{
  height:268px;
  max-height:100%;
  width:100%;
  border-style:solid;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  border-color:rgba(70, 111, 250, 1);
  box-shadow:5px 5px 10px rgba(169, 166, 169, 1);
}
.cta-simple-heading-one{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
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
.ftri-feature-container.white-feature-container{
  align-items:start;
  justify-content:start;
  box-shadow:5px 5px 10px rgba(169, 166, 169, 1);
}
.ftri-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.ftri-heading-four{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
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
  border-style:solid;
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
  box-shadow:5px 5px 10px rgba(169, 166, 169, 1);
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
#ia3jnj{
  color:rgb(61, 61, 61);
  font-family:"Bricolage Grotesque", sans-serif;
  font-size:14px;
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
#iufnzg{
  color:rgb(61, 61, 61);
  font-family:"Bricolage Grotesque", sans-serif;
  font-size:14px;
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
.ltp-pricing-columns-container.ltd-blue-container{
  box-shadow:5px 5px 10px rgba(169, 166, 169, 1);
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
.ltp-features-container{
  display:grid;
  width:515px;
  height:100%;
  grid-template-columns:1fr 1fr;
  row-gap:1rem;
  column-gap:1rem;
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
.ltp-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:193px;
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
.ltp-links{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  height:fit-content;
  width:fit-content;
}
.fsc-footer-container{
  height:185px;
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
@media (max-width: 1536px){
  .link-box{
    width:fit-content;
    height:50p;
  }
  .button.secondary-btn{
    color:rgba(0,0,0,1);
  }
  .button.main-cta{
    padding-top:6px;
    padding-bottom:6px;
    padding-right:12px;
    padding-left:12px;
  }
  .container.hero-container{
    margin-bottom:2rem;
    padding-bottom:4rem;
  }
  .heading-one{
    font-size:5em;
    width:794px;
    line-height:4.4rem;
    color:rgba(255,255,255, 1);
    text-align:center;
  }
  .paragraph.hero-description{
    width:769px;
  }
  .hero-image{
    width:948px;
    height:474px;
  }
  .container.benefits-container{
    row-gap:4rem;
  }
  .heading-two{
    font-size:3rem;
  }
  .benefit-container.white-container{
    box-shadow:5px 5px rgb(218, 213, 213) 0 0;
  }
  .image{
    border-top-left-radius:1rem;
    border-top-right-radius:1rem;
    border-bottom-left-radius:1rem;
    border-bottom-right-radius:1rem;
    width:50%;
    height:100;
  }
  .image.benefit-image{
    height:298px;
    width:542px;
  }
  .cta-simple-container{
    padding-left:0;
    padding-right:0;
  }
  .cta-simple-content-box{
    background:rgba(28, 126, 214, 1);
    color:rgba(255,255,255, 1);
    row-gap:2rem;
    max-width:1200px;
    height:fit-content;
    padding-top:2rem;
    padding-bottom:2rem;
  }
  .cta-simple-heading-one{
    font-size:4em;
    width:589px;
    text-align:center;
    padding-top:2rem;
    padding-bottom:2rem;
  }
  .cta-button.blue-cta:hover{
    text-decoration:underline;
  }
  .ftri-container{
    height:fit-content;
    margin-top:4rem;
    margin-bottom:2rem;
    row-gap:4rem;
  }
  .ftri-content{
    display:grid;
    width:fit-content;
    height:fit-content;
    grid-template-columns:1fr 1fr 1fr;
    row-gap:2rem;
    align-items:start;
  }
  .ftri-feature-container{
    grid-template-columns:span 1;
  }
  #ifyfle{
    grid-template-rows:1;
  }
  .ftri-feature-container.white-feature-container{
    background:rgba(255, 255, 255, 1);
    border-top-left-radius:1rem;
    border-top-right-radius:1rem;
    border-bottom-left-radius:1rem;
    border-bottom-right-radius:1rem;
    height:170px;
    padding-right:2rem;
    padding-left:2rem;
    padding-top:2rem;
    padding-bottom:2rem;
  }
  .pws-container{
    margin-top:4rem;
    margin-bottom:4rem;
  }
  .pws-pricing-container{
    grid-template-columns:1fr 1fr 1fr;
    justify-items:center;
    align-items:end;
    column-gap:1rem;
  }
  .pws-pricing-text-container.white-pricing-container{
    background:rgba(255,255,255, 1);
    width:100%;
  }
  .pws-features-container{
    column-gap:1rem;
    row-gap:0;
  }
  .pws-button{
    background:rgba(28, 126, 214, 1);
  }
  .pws-highlighted.pws-pricing-text-container.blue-pricing-container{
    background:rgba(28, 126, 214, 1);
    color:rgba(255, 255, 255, 1);
    width:100%;
  }
  .main-cta.button.pricing-button{
    width:100%;
  }
  .priicng-links{
    color:rgba(0,0,0,1);
    text-decoration:none;
  }
  .priicng-links:hover{
    text-decoration:underline;
    text-decoration-color:rgba(28, 126, 214, 1);
  }
  #i4w96u{
    color:rgba(0,0,0,1);
    text-decoration:none;
  }
  .ltp-pricing-columns-container.ltd-blue-container{
    background:rgba(28, 126, 214, 1);
    color:rgba(255, 255, 255, 1);
    width:100%;
    padding-top:2rem;
    padding-bottom:2rem;
  }
  .ltp-paragraph.ltp-text-size{
    width:133px;
  }
  .ltp-price-container{
    color:rgba(0,0,0,1);
    background:rgba(255, 255, 255, 1);
    padding-top:1rem;
    padding-bottom:1rem;
  }
  .fsc-footer-links{
    height:100;
  }
}
@media (max-width: 1080px){
  .hero-image{
    width:843px;
    height:420px;
  }
  .image.benefit-image{
    width:480px;
  }
  .ftri-feature-container.white-feature-container{
    height:190px;
  }
}
@media (max-width: 880px){
  .nav-menu{
    height:fit-content;
    top:4rem;
  }
  .heading-one{
    font-size:4rem;
    width:611px;
    line-height:3.5rem;
  }
  .paragraph.hero-description{
    font-size:1rem;
    width:441px;
  }
  .paragraph{
    font-size:0.8rem;
  }
  .hero-image{
    width:592px;
    height:295px;
  }
  .benefit-container{
    flex-direction:row;
    height:238px;
  }
  .heading-three.benefit-h3{
    font-size:1.5rem;
  }
  .heading-three.benefit-h3.with-blue-bg{
    font-size:1.rem;
  }
  .image.benefit-image{
    width:147px;
    height:146px;
  }
  .cta-simple-content-box{
    height:fit-content;
  }
  .ftri-content{
    grid-template-columns:1fr 1fr;
  }
  .pws-pricing-container{
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr;
    row-gap:2rem;
  }
  .ltp-pricing-columns-container{
    grid-template-columns:1fr 1fr;
    row-gap:2rem;
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
  .container.hero-container{
    height:fit-content;
    padding-top:4rem;
    padding-bottom:1rem;
    min-height:600px;
    margin-top:0;
  }
  .heading-one{
    font-size:2.5rem;
    width:321px;
    line-height:2.4rem;
  }
  .paragraph.hero-description{
    font-size:0.6rem;
    width:286px;
    line-height:0.8rem;
  }
  .cta-container{
    width:100%;
  }
  .hero-image{
    width:100%;
    height:100%;
    border-top-left-radius:0.5rem;
    border-top-right-radius:0.5rem;
    border-bottom-left-radius:0.5rem;
    border-bottom-right-radius:0.5rem;
  }
  .heading-two{
    font-size:2rem;
  }
  .benefit-container{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
  }
  .benefit-container.white-container{
    padding-top:2rem;
    padding-bottom:2rem;
  }
  .benefit-text-container{
    width:100%;
  }
  .image{
    width:278px;
    height:156px;
  }
  .image.benefit-image{
    width:100%;
  }
  .cta-simple-container{
    padding-top:0;
    padding-right:0;
    padding-bottom:0;
    padding-left:0;
  }
  .cta-simple-content-box{
    height:fit-content;
    row-gap:2em;
  }
  .cta-simple-heading-one{
    font-size:1.5em;
    width:74%;
  }
  .ftri-container{
    height:fit-content;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  .ftri-content{
    flex-direction:column;
    height:fit-content;
    row-gap:2rem;
    grid-template-columns:1fr;
  }
  .pws-heading-subtext{
    width:fit-content;
  }
  .pws-pricing-container{
    grid-template-columns:1fr;
    border-style:none;
  }
  .ltp-subheading-text{
    width:fit-content;
  }
  .ltp-features-container{
    grid-template-columns:1fr;
  }
  .fsc-footer-links{
    flex-wrap:wrap;
  }
}

`,
      },
    },
  });


//   editor.Blocks.add('template-two', {
//     media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214835.png',
//     label: 'Two',
//     category: 'templates-starter',
//     content: { type: 'template-two' },
//   });
//
//   Components.addType('template-two', {
//     model: {
//       defaults: {
//         name: 'Template Two',
//         components: `
//  <div id="i6po" class="lnd-grid-row">
//     <div id="itjq" class="lnd-grid-column">
//       <div id="iyd2" class="lnd-grid-row navbar">
//         <a class="link-box"><img src="https://assets.lanndi.com/assets/NHYnkERJGUr2p4uHAidW10djWzaUg6Bx8PJFO6NF.webp" id="iiemz9" loading="lazy" alt="lanndi logo" class="image"/><h2 id="iuedda" class="heading-two">lanndi
//           </h2></a>
//         <div id="imxz0j">
//           <a href="https://app.lanndi.com/login" id="id0d6n" class="card-container"><button id="iw7fys" class="button btn-secondary sec">Login</button></a>
//           <a href="https://app.lanndi.com/demo" id="iamtqj" class="card-container"><button id="igdl6k" class="button">Create Your Website Now</button></a>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div id="rndom" class="block">
//     <h1 id="ilmalz" class="heading-one">Create, publish and share your dream website
//       <span id="i8jhar">in 30 minutes</span>
//       <!--notionvc: 7ce014f5-3029-4305-aabb-b3044b508ea8-->
//     </h1>
//     <p id="i9rwd8" class="paragraph">lanndi helps you create, publish and share your beautiful, fast and responsive website in 30 minutes or less with a super intuitive no-code editor without hiring developers or designers.
//     </p>
//     <div id="i89wh" class="btn-block">
//       <div id="i47cqm" class="enum-container">
//         <div id="isvihu" class="hero-enum">
//           <span class="material-icons material-symbols-outlined hero hero-icons">check</span>
//           <p class="paragraph">
//           <p class="paragraph">Lead Magnets
//           </p>
//           </p>
//       </div>
//       <div id="izmydh" class="hero-enum">
//         <span class="material-icons material-symbols-outlined her hero-icons">check</span>
//         <p class="paragraph">
//         <p class="paragraph">Links in Bio
//         </p>
//         </p>
//     </div>
//     <div id="it776f" class="hero-enum">
//       <span class="material-icons material-symbols-outlined her hero-icons">check</span>
//       <p class="paragraph">
//       <p class="paragraph">Portfolios
//       </p>
//       </p>
//   </div>
//   <div id="i22o8i" class="hero-enum">
//     <span id="iv270w" class="material-icons material-symbols-outlined hero-icons">check</span>
//     <p class="paragraph">
//     <p class="paragraph">Landing Pages
//     </p>
//     </p>
//   </div>
// </div>
// <p id="ib5538" class="paragraph">
// </p>
// <div id="i3yikv" class="block">
//   <a href="https://app.lanndi.com/demo" id="i2lj76" class="card-container"><button id="ift6lj" class="button">Create Your Website Now</button></a>
//   <a href="https://app.lanndi.com/login" id="iggrp" class="card-container"></a>
// </div>
// <p id="if3rnu" class="paragraph">Start For Free, No Credit Card Required!
// </p>
// </div>
// <img src="https://assets.lanndi.com/assets/ixFFWi7V6TM8IIrbwp4dzuwwSGniksdnfgoXum3Q.webp" id="i7yli9" loading="lazy" alt="lanndi website editor" class="image"/>
// </div>
// <div id="iqibtb" class="container">
//   <h2 id="iej3yp" class="secondary-heading">How it works
//     <!--notionvc: 39322634-2353-4a86-b9b7-9c54a1cd3a49-->
//   </h2>
//   <div id="itimp" class="columns">
//     <div id="idb316" class="how-it-works-section">
//       <h3 id="in964h" class="heading-one">1. Create
//       </h3>
//     </div>
//     <div id="idcga8" class="how-it-works-section">
//       <h3 id="ij1ia3" class="heading-one">2. Launch
//       </h3>
//     </div>
//     <div id="i39l0n" class="null how-it-works-section">
//       <h3 id="ib5fnj" class="heading-one">3. Share
//       </h3>
//     </div>
//   </div>
// </div>
// <div id="iwulci" class="block">
//   <h2 id="irvjy1" class="secondary-heading">Benefits, benefits and more benefits!
//     <!--notionvc: 39322634-2353-4a86-b9b7-9c54a1cd3a49-->
//   </h2>
//   <div id="iqequd" class="containers">
//     <h3 id="i1lpk6" class="heading-three">Free
//       <!--notionvc: d2b7887f-c47e-4106-ab78-5e3d84a88617-->
//     </h3>
//     <div id="ij4gye" class="text-main-content">Build a one-page website and use all of lanndi's core features – for free!
//       <!--notionvc: 357367fa-8db8-44c5-8b0d-3b805d60a712-->
//       <!--notionvc: 2f8f675a-0992-49e9-99f7-a0ea930503e0-->
//     </div>
//     <a href="https://app.lanndi.com/demo" id="i2dvj" class="card-container"><button id="ieyml" class="button button-primary">Test Demo For Free</button></a>
//   </div>
//   <div id="i7dixa" class="containers">
//     <div id="iuxgon" class="containers">
//       <img src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2)%20(2).gif" id="ixr715" alt="lanndi intuitive editor" class="image"/>
//     </div>
//     <div id="itwzeg" class="containers">
//       <h3 id="ipmnzc" class="heading-three">From concept to published website in less time
//         <!--notionvc: bfd1fd79-c34c-4e8e-a0b2-cd3605a29cdf-->
//         <!--notionvc: f0d795b9-9072-4d33-850a-4c64e97f0a31-->
//         <!--notionvc: fdd4e962-8cc6-427b-aee4-90adad5f1ccf-->
//       </h3>
//       <div id="iw9u8y" class="text-main-content">You don't need to spend dozens of hours watching tutorials to create and publish your dream website, you can get it done in 30 minutes or less with dozens of super customizable pre-made blocks and a super intuitive editor.
//         <!--notionvc: 7400e546-d22b-4c81-b8b6-ac6c82098700-->
//         <!--notionvc: 55a5e84d-500c-4d76-b001-a9b0a945b3ec-->
//       </div>
//       <a href="https://app.lanndi.com/demo" id="iyqkt" class="card-container"><button class="button button-primary">Test Demo For Free</button></a>
//     </div>
//   </div>
//   <div id="i9p7ng" class="containers">
//     <div id="invveh" class="containers">
//       <h2 id="iuk6zq" class="lnd-heading">
//         <h3 id="icuzyk" class="heading-three">Performant and SEO optimized
//           <!--notionvc: 8aa2ed44-7c64-4f5c-bc1e-e7c63e7321a2-->
//           <br/>
//         </h3>
//         <!--notionvc: bfd1fd79-c34c-4e8e-a0b2-cd3605a29cdf-->
//         <!--notionvc: f0d795b9-9072-4d33-850a-4c64e97f0a31-->
//         <!--notionvc: fdd4e962-8cc6-427b-aee4-90adad5f1ccf-->
//       </h2>
//       <div id="isbu0f" class="text-main-content">Build a super-performant website on every device that reduces bounce rates, improves conversion and is optimized to help you index and rank in the top search engines
//         <!--notionvc: da06ef69-0c1d-433d-bad0-0803f270bd3b-->
//         <!--notionvc: 7400e546-d22b-4c81-b8b6-ac6c82098700-->
//         <!--notionvc: 55a5e84d-500c-4d76-b001-a9b0a945b3ec-->
//       </div>
//       <a href="https://app.lanndi.com/demo" id="i2avof" class="card-container"><button class="button button-primary">Test Demo For Free</button></a>
//     </div>
//     <div id="io9fmg" class="containers">
//       <img src="https://assets.lanndi.com/assets/wfO44HeYzXCdaGuSk0Xyf2uC27yk4b5CqQTX2bX4.webp" id="iehq5j" alt="lanndi helps you convert more with a faster website" class="image"/>
//     </div>
//   </div>
//   <div id="ipq4bt" class="containers">
//     <div id="i2d17i" class="containers">
//       <img src="https://assets.lanndi.com/assets/qBXPeVwbI6yXsPgkiHZOieg9oWCaqDSZC9WAJwkz.webp" id="iusbd6" alt="lanndi limiteless cusomization options" class="image"/>
//     </div>
//     <div id="i6hige" class="containers">
//       <h3 id="ihv05b" class="heading-three">Unlimited power to customize
//       </h3>
//       <div id="iz8hdk" class="text-main-content">lanndi’s editor provides unlimited ways to style your website to make sure your vision comes to life on every single device.
//         <!--notionvc: 7400e546-d22b-4c81-b8b6-ac6c82098700-->
//         <!--notionvc: 55a5e84d-500c-4d76-b001-a9b0a945b3ec-->
//       </div>
//       <a href="https://app.lanndi.com/demo" id="i6dewc" class="card-container"><button id="isox75" class="button button-primary">Test Demo For Free</button></a>
//     </div>
//   </div>
//   <div id="is498f" class="containers">
//     <h3 id="itzobz" class="heading-three">Publish more websites  and pay less
//     </h3>
//     <div id="iadspi" class="text-main-content">No more overpaying for multiple websites, you create and publish multiple websites  with a plan that costs less than your netflix subscription
//       <!--notionvc: 7400e546-d22b-4c81-b8b6-ac6c82098700-->
//       <!--notionvc: 55a5e84d-500c-4d76-b001-a9b0a945b3ec-->
//     </div>
//     <a href="https://app.lanndi.com/demo" class="card-container"><button class="button button-primary">Test Demo For Free</button></a>
//   </div>
// </div>
// <div id="ioyxg" class="lnd-grid-row">
//   <div id="i8w4i-3" class="lnd-grid-column">
//     <h2 id="ikxk81" class="secondary-heading">Everything you need to succed
//     </h2>
//     <div id="irebnv" class="grid">
//       <div id="ilpi3-3" class="lnd-grid-column feature-item">
//         <div id="ipmqo6-3" class="lnd-icon lnd-feature-icon">
//           <span class="material-icons material-symbols-outlined">check</span>
//         </div>
//         <h3 id="in9ef-3" class="lnd-heading features-title">Custom domains with free SSL
//           <!--notionvc: 2e362b76-5b0f-414d-ad18-ccfbf8e15328-->
//           <!--notionvc: 0cc471e1-cd17-4944-86db-c225c0777e75-->
//         </h3>
//         <div id="i8isa-3" class="text-main-content">Every page is published and secured with a free SSL certificate, with the option to publish your site with any custom domain you own!
//           <!--notionvc: 5ce48c56-fc46-4dce-a2e7-5f1df862c4b0-->
//         </div>
//       </div>
//       <div id="ic57kq-3" class="lnd-grid-column feature-item">
//         <div id="ibdusm" class="lnd-icon lnd-feature-icon">
//           <span id="ivzepv" class="material-icons material-symbols-outlined">check</span>
//         </div>
//         <h3 id="ica43q-3" class="lnd-heading features-title">
//           <span data-token-index="0" id="ietg0g" class="features-title">Custom code</span>
//           <!--notionvc: 8505194a-9ed1-4970-874e-b7b8ed5d1e6e-->
//         </h3>
//         <div id="ickn3f-3" class="text-main-content">Add further functionality with your custom HTML, CSS and JavaScript code.
//           <!--notionvc: 8c434ec2-d4c8-4929-b4e6-b5b3a5da3d0d-->
//           <!--notionvc: 75d9d4f5-55a8-47d6-99d7-b048ec76c0e3-->
//         </div>
//       </div>
//       <div class="lnd-grid-column feature-item">
//         <div class="lnd-icon lnd-feature-icon">
//           <span id="ig4hti" class="material-icons material-symbols-outlined">check</span>
//         </div>
//         <h3 class="lnd-heading features-title">Website Icons
//           <!--notionvc: b364eb5b-7d15-4083-8b62-8c6fd3ddc694-->
//         </h3>
//         <div class="text-main-content">Show custom icons (aka "favicons") in the address bar when visiting your sites.
//           <!--notionvc: 714577a0-3e58-4842-b1ee-147b217cdd1b-->
//         </div>
//       </div>
//       <div id="idv32l-3" class="lnd-grid-column feature-item">
//         <div id="ipmept" class="lnd-icon lnd-feature-icon">
//           <span id="iv37of" class="material-icons material-symbols-outlined">check</span>
//         </div>
//         <h3 id="ieu6p6-3" class="lnd-heading features-title">SEO ready
//           <!--notionvc: b364eb5b-7d15-4083-8b62-8c6fd3ddc694-->
//         </h3>
//         <div id="izqkf7-3" class="text-main-content">Every page is optimized so that search engines can find it, and index it so you can grow organically
//           <!--notionvc: 714577a0-3e58-4842-b1ee-147b217cdd1b-->
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div id="i4xreo">
// </div>
// <div id="iiqptj">
// </div>
// <div id="ixzh1-3" class="feature-grid">
// </div>
// <div id="ik8xdr">
// </div>
// <div id="ivw03p" class="block">
//   <h2 id="ia9tjy" class="secondary-heading">Our Pricing
//   </h2>
//   <div id="ix4n9i" class="containers">
//     <div id="iogqps" class="pricing-card-container">
//       <div id="ihqpw3" class="price-container">
//         <p id="ikvtx4" class="paragraph">Free
//         </p>
//         <h3 id="iz0shq" class="heading-three price">0€/m
//         </h3>
//       </div>
//       <div id="io8orq" class="block">
//         <span id="i2ppvn" class="material-icons material-symbols-outlined">check</span>
//         <p id="ij9ivp" class="paragraph">1 website
//         </p>
//       </div>
//       <div id="ipwwjb" class="block">
//         <span id="ia3gp2" class="material-icons material-symbols-outlined">check</span>
//         <p id="ij3e2x" class="paragraph">1 page max
//         </p>
//       </div>
//       <div id="izzs96" class="block">
//         <span id="ih12sd" class="material-icons material-symbols-outlined">check</span>
//         <p id="iwlxre" class="paragraph">lanndi branding
//         </p>
//       </div>
//       <div id="iilm2w" class="block">
//         <span id="ilsgzh" class="material-icons material-symbols-outlined">check</span>
//         <p id="iyztck" class="paragraph">lanndi subdomain
//         </p>
//       </div>
//       <a href="https://app.lanndi.com/register" id="iff11h" class="card-container"><button id="iuwumr" class="button button-primary">Start Now For Free</button></a>
//     </div>
//     <div id="it4fml" class="pricing-card-container indie-card">
//       <div id="i2pyp9" class="block">
//         <p id="iibi96" class="paragraph">Indie
//         </p>
//         <h3 id="iqo1tt" class="heading-three price">15€/m
//         </h3>
//       </div>
//       <div id="i7o7o9" class="block">
//         <span id="iczlsn" class="material-icons material-symbols-outlined">check</span>
//         <p id="inxlcr" class="paragraph">5 websites
//         </p>
//       </div>
//       <div id="invaqn" class="block">
//         <span id="i1wlxi" class="material-icons material-symbols-outlined">check</span>
//         <p id="ij5oe7" class="paragraph">10 pages max
//         </p>
//       </div>
//       <div id="ij51vd" class="block">
//         <span id="i4xbyz" class="material-icons material-symbols-outlined">check</span>
//         <p id="ia03jl" class="paragraph">lNo lanndi branding
//         </p>
//       </div>
//       <div id="ijdna3" class="block">
//         <span id="i5qjhw" class="material-icons material-symbols-outlined">check</span>
//         <p id="i6prfp" class="paragraph">Custom domain
//         </p>
//       </div>
//       <div id="ixm94a" class="block">
//         <span id="iutsel" class="material-icons material-symbols-outlined">check</span>
//         <p id="isdltg" class="paragraph">Preview Domain
//         </p>
//       </div>
//       <div id="ikck93" class="block">
//         <span id="i998wk" class="material-icons material-symbols-outlined">check</span>
//         <p id="iqe23l" class="paragraph">Custom code
//         </p>
//       </div>
//       <div id="irwauh" class="block">
//         <span id="is6zdb" class="material-icons material-symbols-outlined">check</span>
//         <p id="i9927r" class="paragraph">Image uploads
//         </p>
//       </div>
//       <div id="iulch6" class="block">
//         <span id="i0lie1" class="material-icons material-symbols-outlined">check</span>
//         <p id="imt8qk" class="paragraph">Favicons
//         </p>
//       </div>
//       <a href="https://app.lanndi.com/register" id="igifvu" class="card-container"><button class="button button-primary">Start Now</button></a>
//     </div>
//     <div id="iq86kv" class="pricing-card-container">
//       <div id="iwav8l" class="block">
//         <p id="iys9wo" class="paragraph">Basic
//         </p>
//         <h3 id="ilbfak" class="heading-three price">5€/m
//         </h3>
//       </div>
//       <div id="i0f9qk" class="block">
//         <span id="i3lnk2" class="material-icons material-symbols-outlined">check</span>
//         <p id="ineomo" class="paragraph">1 websites
//         </p>
//       </div>
//       <div id="itxfwr" class="block">
//         <span id="iy39mx" class="material-icons material-symbols-outlined">check</span>
//         <p id="iyhelc" class="paragraph">10 pages max
//         </p>
//       </div>
//       <div id="ikjohg" class="block">
//         <span id="ipwg22" class="material-icons material-symbols-outlined">check</span>
//         <p id="idkaxa" class="paragraph">lNo lanndi branding
//         </p>
//       </div>
//       <div id="il8q1f" class="block">
//         <span id="ispcxy" class="material-icons material-symbols-outlined">check</span>
//         <p id="itgolu" class="paragraph">Custom domain
//         </p>
//       </div>
//       <div id="ihl8ex" class="block">
//         <span id="ikjrmg" class="material-icons material-symbols-outlined">check</span>
//         <p id="iyiyoy" class="paragraph">Preview Domain
//         </p>
//       </div>
//       <div id="iteh7h" class="block">
//         <span id="iqlt21" class="material-icons material-symbols-outlined">check</span>
//         <p id="ilpyqk" class="paragraph">Custom code
//         </p>
//       </div>
//       <div id="iw7953" class="block">
//         <span id="i4t7bi" class="material-icons material-symbols-outlined">check</span>
//         <p id="i57s9f" class="paragraph">Image uploads
//         </p>
//       </div>
//       <div id="ily70i" class="block">
//         <span id="i8hekr" class="material-icons material-symbols-outlined">check</span>
//         <p id="im7ocv" class="paragraph">Favicons
//         </p>
//       </div>
//       <a href="https://app.lanndi.com/register" id="ibvupf" class="card-container"><button id="i2m5xl" class="button button-primary">Start Now</button></a>
//     </div>
//     <div id="iwh2lc" class="pricing-card-container lifetime">
//       <div id="ia8sxo" class="block">
//         <p id="ieo7mi" class="paragraph">Lifetime deal
//         </p>
//         <h3 id="iknpf5" class="heading-three price">299€
//         </h3>
//       </div>
//       <div id="i9b22g" class="block">
//         <span id="iueos6" class="material-icons material-symbols-outlined">check</span>
//         <p id="ivw9oz" class="paragraph">Unlimited websitse
//         </p>
//       </div>
//       <div id="il0gpd" class="block">
//         <span id="iixvhn" class="material-icons material-symbols-outlined">check</span>
//         <p id="ilx3en" class="paragraph">Access to all lanndi's features
//         </p>
//       </div>
//       <a href="https://app.lanndi.com/register" id="i3glga" class="card-container"><button id="ioe80j" class="button button-primary">Start Now</button></a>
//     </div>
//   </div>
// </div>
// <div id="iz29ek" class="lnd-grid-row">
//   <div id="ik2rdi" class="lnd-grid-column">
//     <h2 id="itszdv" class="heading-two">Create Your Dream Website For Free
//     </h2>
//     <div id="id7x">
//     </div>
//     <a href="https://app.lanndi.com/demo" class="card-container"><button class="button">Test Demo For Free</button></a>
//   </div>
// </div>
// <div id="iv3be5" class="lnd-grid-row">
//   <div id="ilriti" class="lnd-grid-column">
//     <div id="im0rle" class="lnd-grid-row">
//       <div id="i1hx7l" class="lnd-grid-row">
//         <a href="terms-and-conditions" class="link">Terms &amp; Conditions</a>
//         <a href="privacy-policy" class="link">Privacy Policy</a>
//       </div>
//     </div>
//     <div id="it6g1v" class="lnd-text-blue">Copyright © lanndi 2024
//     </div>
//   </div>
// </div>
// `,
//           styles: `#im1g{
//   margin-right:auto;
//   margin-left:auto;
// }
// .lnd-grid-row{
//   display:flex;
//   justify-content:flex-start;
//   align-items:stretch;
//   flex-direction:row;
//   padding:10px 0;
//   padding-top:0;
// }
// .lnd-grid-row{
//   display:flex;
//   justify-content:flex-start;
//   align-items:stretch;
//   flex-direction:row;
//   min-height:auto;
//   padding:10px 0;
// }
// #i6po{
//   justify-content:center;
//   position:sticky;
//   top:15px;
//   padding-top:0px;
//   padding-bottom:0px;
//   padding-left:20px;
//   padding-right:20px;
// }
// .lnd-grid-column{
//   padding:5px 0;
//   row-gap:1rem;
// }
// .lnd-grid-column{
//   padding:5px 0;
// }
// #itjq{
//   width:100%;
//   max-width:1200px;
// }
// #iyd2{
//   align-items:center;
//   justify-content:space-between;
//   padding-top:0px;
//   padding-bottom:0px;
//   background-color:rgba(255,255,255,0.8);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
//   backdrop-filter:blur(13px);
//   box-shadow:0px 2px 7px 0px rgba(0,0,0,0.14);
// }
// .lnd-grid-row.navbar{
//   height:60px;
//   background:rgb(130, 87, 150);
//   justify-content:space-between;
// }
// .link-box:empty:before{
//   background-color:#ddd;
//   color:#000;
//   font-size:16px;
//   font-weight:bold;
//   height:100%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   min-height:30px;
//   padding:0 10px;
//   opacity:0.3;
//   border-radius:3px;
//   white-space:nowrap;
//   overflow:hidden;
//   text-overflow:ellipsis;
//   content:"Link Box";
// }
// .link-box{
//   color:inherit;
//   display:flex;
//   vertical-align:top;
//   padding:10px;
//   max-width:100%;
//   text-decoration:none;
//   cursor:pointer;
//   flex-direction:row;
//   justify-content:center;
//   align-items:center;
//   height:50px;
// }
// .link-box:empty{
//   text-decoration:none;
//   padding:5px;
// }
// #iiemz9{
//   width:30px;
//   height:30px;
// }
//
// .heading-two{
//   margin-top:0;
//   margin-right:0;
//   margin-bottom:0;
//   margin-left:0;
// }
// #imxz0j{
//   display:flex;
//   padding-left:10px;
//   padding-right:10px;
//   justify-content:center;
//   align-items:center;
//   column-gap:4px;
// }
// .card-container:empty{
//   text-decoration:none;
//   padding:5px;
// }
// .card-container{
//   color:inherit;
//   display:inline-block;
//   vertical-align:top;
//   padding:10px;
//   max-width:100%;
//   text-decoration:none;
//   cursor:pointer;
// }
// .button{
//   cursor:pointer;
//   outline:0;
//   color:#fff;
//   background-color:#0d6efd;
//   border-color:#0d6efd;
//   display:inline-block;
//   font-weight:400;
//   line-height:1.5;
//   text-align:center;
//   border:1px solid transparent;
//   padding:4px 12px 4px 12px;
//   font-size:16px;
//   border-radius:.25rem .25rem .25rem .25rem;
// }
// .button:hover{
//   color:#fff;
//   background-color:darken(#0d6efd, 10%);
//   border-color:#0a58ca;
//   opacity:0.9;
// }
// .button.sec.btn-secondary:hover{
//   background:rgba(13, 110, 253, 1);
//   color:rgb(255, 255, 255);
// }
// .button.btn-secondary.sec{
//   padding-right:6px;
//   padding-left:6px;
//   border-top-width:0px;
//   border-right-width:0px;
//   border-bottom-width:0px;
//   border-left-width:0px;
// }
// #rndom{
//   height:940px;
//   max-height:100%;
//   width:100v;
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   background:linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(119,183,224,1) 30%, RGBA(119,183,224,1) 70%, rgba(254,254,254,1) 90%);
//   box-shadow:10px 1;
//   top:70px;
//   left:49%;
//   border-top-left-radius:1rem;
//   border-top-right-radius:1rem;
//   border-bottom-right-radius:1rem;
//   border-bottom-left-radius:1rem;
// }
// .block{
//   max-height:100%;
//   height:246px;
//   top:695px;
//   left:92%;
//   width:100%;
// }
// #ilmalz{
//   height:fit-content;
//   font-size:3rem;
//   width:697px;
//   line-height:3rem;
// }
// .heading-one{
//   font-size:2rem;
//   height:47px;
// }
// #i8jhar{
//   margin-left:10px;
//   color:rgba(70, 111, 250, 1);
//   text-decoration:underline;
// }
// #i9rwd8{
//   text-align:center;
//   width:67%;
// }
// .paragraph{
//   margin-top:0;
//   margin-right:0;
//   margin-bottom:0;
//   margin-left:0;
// }
// #i89wh{
//   height:170px;
//   max-height:100%;
//   width:100%;
//   margin-top:2rem;
//   flex-direction:column;
// }
// .btn-block{
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   height:177px;
// }
// .enum-container{
//   display:flex;
//   flex-direction:row-reverse;
//   justify-content:center;
//   align-items:center;
//   column-gap:1rem;
//   width:fit-content;
//   height:fit-content;
//   padding-top:0.2rem;
//   padding-right:0.2rem;
//   padding-bottom:0.2rem;
//   padding-left:0.2rem;
//   color:rgb(239, 230, 244);
// }
// .hero-enum{
//   width:fit-content;
//   height:40px;
//   padding-top:0.2rem;
//   padding-right:0.2rem;
//   padding-bottom:0.2rem;
//   padding-left:0.2rem;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   align-items:center;
//   border-bottom-width:2px;
//   border-style:solid;
//   border-top-width:0;
//   border-right-width:0;
//   border-left-width:0;
//   border-color:rgb(255, 255, 255);
// }
// .material-icons.material-symbols-outlined.hero-icons{
//   color:rgb(252, 252, 252);
// }
// #i3yikv{
//   display:flex;
//   flex-direction:row-reverse;
//   justify-content:center;
//   align-items:center;
//   height:fit-conten;
//   width:364px;
// }
// #if3rnu{
//   font-size:0.7rem;
//   font-weight:700;
//   color:rgb(248, 245, 251);
// }
// #i7yli9{
//   width:792px;
//   height:363px;
//   margin-top:4rem;
//   margin-bottom:2rem;
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
// }
// .container{
//   height:800px;
//   width:100%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   padding:10px 10px 10px 10px;
// }
// #iqibtb{
//   height:318px;
//   width:90%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   padding:10px 10px 10px 10px;
//   flex-direction:column;
//   max-width:1200px;
//   margin-right:auto;
//   margin-left:auto;
// }
//
// .columns{
//   display:flex;
//   flex-direction:row;
//   width:100%;
//   height:506px;
//   gap:10px 10px;
//   padding:10px 10px 10px 10px;
// }
// .how-it-works-section{
//   border-top-width:0;
//   border-right-width:0;
//   border-bottom-width:0;
//   border-left-width:0;
// }
// #idb316{
//   height:80px;
//   max-height:100%;
//   width:100%;
// }
//
// #idcga8{
//   height:80px;
//   max-height:100%;
//   width:100%;
// }
//
// #i39l0n{
//   height:80px;
//   max-height:100%;
//   width:100%;
// }
//
// #iwulci{
//   height:fit-content;
//   max-height:100%;
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   justify-content:start;
//   row-gap:4rem;
//   max-width:1200px;
//   width:90%;
//   margin-right:auto;
//   margin-left:auto;
// }
//
// .containers{
//   height:8px;
//   width:100%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   flex-direction:column;
//   border-style:solid;
// }
// #iqequd{
//   height:284px;
//   max-height:100%;
//   width:53%;
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   row-gap:1rem;
//   border-style:none;
// }
//
// .heading-three{
//   font-size:2rem;
// }
// .text-main-content{
//   line-height:20px;
//   font-size:1rem;
// }
// #ij4gye{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #i7dixa{
//   height:335px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   column-gap:2rem;
//   border-style:none;
// }
// #iuxgon{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #ixr715{
//   color:black;
//   border-top-left-radius:35px;
//   border-top-right-radius:35px;
//   border-bottom-right-radius:35px;
//   border-bottom-left-radius:35px;
//   max-width:100%;
// }
// #itwzeg{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
//
// #iw9u8y{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #i9p7ng{
//   height:335px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   column-gap:2rem;
//   border-style:none;
// }
// #invveh{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// .lnd-heading{
//   margin:0;
// }
// .lnd-heading{
//   margin:0;
//   color:rgba(29,40,55,1);
// }
// #iuk6zq{
//   font-size:2.5rem;
// }
//
// #isbu0f{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #io9fmg{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #iehq5j{
//   color:black;
//   border-top-left-radius:35px;
//   border-top-right-radius:35px;
//   border-bottom-right-radius:35px;
//   border-bottom-left-radius:35px;
//   max-width:100%;
// }
// #ipq4bt{
//   height:fit-content;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   column-gap:2rem;
//   border-style:none;
// }
// #i2d17i{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #iusbd6{
//   color:black;
//   border-top-left-radius:35px;
//   border-top-right-radius:35px;
//   border-bottom-right-radius:35px;
//   border-bottom-left-radius:35px;
//   max-width:100%;
// }
// #i6hige{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
//
// #iz8hdk{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #is498f{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
//
// #iadspi{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #ioyxg{
//   justify-content:center;
//   padding-top:80px;
//   padding-bottom:80px;
//   padding-left:20px;
//   padding-right:20px;
// }
// #i8w4i-3{
//   width:90%;
//   max-width:1200px;
//   height:fit-content;
//   margin-right:auto;
//   margin-left:auto;
// }
//
// .grid{
//   display:grid;
//   grid-template-columns:1fr 1fr;
//   grid-template-rows:1fr 1fr;
//   gap:10px;
//   padding:10px;
//   height:fit-content;
//   width:100%;
// }
// .lnd-grid-column.feature-item{
//   padding-top:15px;
//   padding-right:15px;
//   padding-bottom:15px;
//   padding-left:15px;
//   display:flex;
//   flex-direction:column;
//   gap:15px;
// }
// .lnd-icon{
//   display:inline-block;
//   text-decoration:none;
//   color:inherit;
//   vertical-align:middle;
//   fill:currentColor;
//   width:50px;
//   height:50px;
// }
// .lnd-icon{
//   display:inline-block;
//   text-decoration:none;
//   color:inherit;
//   vertical-align:middle;
//   fill:currentColor;
//   width:50px;
//   height:50px;
// }
// .lnd-icon.lnd-feature-icon{
//   padding-top:10px;
//   padding-right:10px;
//   padding-bottom:10px;
//   padding-left:10px;
//   background-color:rgb(36,99,235);
//   color:white;
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
// }
// .lnd-heading.features-title{
//   height:60px;
//   font-size:1rem;
// }
// .feature-grid{
//   display:grid;
// }
// #ivw03p{
//   height:fit-content;
//   max-height:100%;
//   width:90%;
//   flex-direction:column;
//   max-width:1200px;
//   margin-right:auto;
//   margin-left:auto;
// }
//
// #ix4n9i{
//   height:fit-content;
//   max-height:100%;
//   padding-top:2rem;
//   padding-bottom:2rem;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   align-items:end;
//   column-gap:1rem;
//   border-color:rgba(89, 112, 247, 1);
//   margin-right:auto;
//   margin-left:auto;
//   border-style:none;
//   width:100%;
// }
// #iogqps{
//   height:fit-content;
//   max-height:100%;
//   width:69%;
//   border-style:solid;
//   border-color:rgb(247, 244, 250);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
// }
// .pricing-card-container{
//   padding-top:1rem;
//   padding-right:1rem;
//   padding-bottom:1rem;
//   padding-left:1rem;
//   width:268px;
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   row-gap:0.5rem;
// }
// #ihqpw3{
//   height:131px;
//   max-height:100%;
//   width:100%;
//   text-align:center;
//   flex-direction:column;
//   border-style:none;
// }
//
//
// .heading-three.price{
//   font-size:3rem;
// }
// #io8orq{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
//   border-style:none;
// }
//
// #ipwwjb{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
//   border-style:none;
// }
//
// #izzs96{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
//   border-style:none;
// }
//
// #iilm2w{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
//   border-style:none;
// }
//
// #it4fml{
//   height:fit-content;
//   max-height:100%;
//   width:69%;
//   border-style:solid;
//   border-color:rgba(70, 111, 250, 1);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
//   border-top-width:2px;
//   border-right-width:2px;
//   border-bottom-width:2px;
//   border-left-width:2px;
//   box-shadow:rgba(70, 111, 250, 1) 5px 5px 10px;
// }
// .pricing-card-container.indie-card{
//   height:536px;
//   border-top-width:5px;
//   border-right-width:5px;
//   border-bottom-width:5px;
//   border-left-width:5px;
// }
// #i2pyp9{
//   height:161px;
//   max-height:100%;
//   width:100%;
//   text-align:center;
//   flex-direction:column;
// }
// #iibi96{
//   width:180px;
// }
//
// #i7o7o9{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
//
// #invaqn{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
//
// #ij51vd{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
//
// #ijdna3{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
//
// #ixm94a{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
//
// #ikck93{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #iqe23l{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #irwauh{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #i9927r{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iulch6{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #imt8qk{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iq86kv{
//   height:fit-content;
//   max-height:100%;
//   width:69%;
//   border-style:solid;
//   border-color:rgb(247, 244, 250);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
// }
// #iwav8l{
//   height:171px;
//   max-height:100%;
//   width:100%;
//   text-align:center;
// }
// #iys9wo{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ilbfak{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// #i0f9qk{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #ineomo{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #itxfwr{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #iyhelc{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ikjohg{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #idkaxa{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #il8q1f{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #itgolu{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ihl8ex{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #iyiyoy{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iteh7h{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #ilpyqk{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iw7953{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #i57s9f{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ily70i{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #im7ocv{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iwh2lc{
//   height:357px;
//   max-height:100%;
//   width:69%;
//   border-style:solid;
//   border-color:rgba(70, 111, 250, 1);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
//   border-top-width:2px;
//   border-right-width:2px;
//   border-bottom-width:2px;
//   border-left-width:2px;
//   box-shadow:rgba(70, 111, 250, 1) 5px 5px 10px;
// }
// .pricing-card-container.lifetime{
//   border-color:rgba(89, 112, 247, 1);
//   border-top-width:5px;
//   border-right-width:5px;
//   border-bottom-width:5px;
//   border-left-width:5px;
// }
// #ia8sxo{
//   height:171px;
//   max-height:100%;
//   width:100%;
//   text-align:center;
// }
//
//
// #i9b22g{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
//
// #il0gpd{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
//
// #iz29ek{
//   justify-content:center;
//   padding-top:80px;
//   padding-bottom:80px;
//   padding-left:20px;
//   padding-right:20px;
// }
// #ik2rdi{
//   max-width:1200px;
//   align-items:center;
//   display:flex;
//   flex-direction:column;
//   padding-top:50px;
//   padding-right:50px;
//   padding-bottom:50px;
//   padding-left:50px;
//   border-top-left-radius:50px;
//   border-top-right-radius:50px;
//   border-bottom-right-radius:50px;
//   border-bottom-left-radius:50px;
//   border-top-width:1px;
//   border-right-width:1px;
//   border-bottom-width:1px;
//   border-left-width:1px;
//   border-top-style:solid;
//   border-right-style:solid;
//   border-bottom-style:solid;
//   border-left-style:solid;
//   border-top-color:rgba(0,0,0,0.06);
//   border-right-color:rgba(0,0,0,0.06);
//   border-bottom-color:rgba(0,0,0,0.06);
//   border-left-color:rgba(0,0,0,0.06);
//   background-image:radial-gradient(515px at 50% 141%,rgba(35,98,235,0.22) 10%,white 90%);
//   background-position:0px 0px;
//   background-size:100% 100%;
//   background-repeat:repeat;
//   background-attachment:scroll;
//   background-origin:padding-box;
//   box-shadow:0px 10px 15px 0 rgba(0,0,0,0.07);
//   width:90%;
//   margin-right:auto;
//   margin-left:auto;
// }
//
// #id7x{
//   display:flex;
//   padding-left:10px;
//   padding-right:10px;
//   justify-content:center;
//   align-items:center;
//   column-gap:4px;
// }
// #iv3be5{
//   justify-content:center;
//   padding-top:80px;
//   padding-left:20px;
//   padding-right:20px;
//   padding-bottom:80px;
// }
// #ilriti{
//   max-width:1200px;
//   display:flex;
//   flex-direction:column;
// }
// #im0rle{
//   flex-direction:column;
// }
// #i1hx7l{
//   display:flex;
//   gap:30px;
//   justify-content:center;
//   margin-top:30px;
//   margin-bottom:30px;
//   flex-direction:row-reverse;
// }
// #it6g1v{
//   padding:10px;
//   text-align:center;
//   font-size:0.8rem;
//   margin-top:20px;
//   opacity:75%;
// }
// .lnd-text-blue{
//   color:rgb(36,99,235);
// }
// @media (max-width: 1560px){
//   #im1g{
//     height:2000px;
//   }
//   .lnd-grid-column{
//     width:100%;
//     flex-direction:column;
//     justify-content:start;
//   }
//   .button{
//     padding-top:8px;
//     padding-bottom:8px;
//     padding-right:20px;
//     padding-left:20px;
//     color:rgb(247, 247, 247);
//   }
//   .button.btn-secondary{
//     background:rgb(255, 255, 255);
//     border-color:rgb(1, 91, 220);
//     color:rgb(1, 1, 1);
//     border-top-width:2px;
//     border-right-width:2px;
//     border-bottom-width:2px;
//     border-left-width:2px;
//   }
//   .heading-one{
//     font-size:4rem;
//     text-align:center;
//   }
//   #i8jhar{
//     color:rgba(0,0,255,1);
//   }
//   #i89wh{
//     padding-top:1rem;
//     padding-bottom:1rem;
//     padding-right:1rem;
//     padding-left:1rem;
//     column-gap:5px;
//     display:flex;
//   }
//   .container{
//     height:512px;
//     flex-direction:column;
//   }
//   .secondary-heading{
//     font-size:3rem;
//     text-align:center;
//   }
//   .columns{
//     height:fit-content;
//   }
//   .how-it-works-section{
//     width:100%;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     display:flex;
//     border-style:solid;
//     border-color:rgba(25, 113, 194, 1);
//     border-top-left-radius:10px;
//     border-top-right-radius:10px;
//     border-bottom-right-radius:10px;
//     border-bottom-left-radius:10px;
//     max-width:1200px;
//     margin-right:auto;
//     margin-left:auto;
//     height:fit-content;
//   }
//   #in964h{
//     width:146px;
//     height:45px;
//     font-size:2rem;
//   }
//   #ij1ia3{
//     width:146px;
//     height:45px;
//     font-size:2rem;
//   }
//   #ib5fnj{
//     width:146px;
//     height:45px;
//     font-size:2rem;
//   }
//   .containers{
//     column-gap:10px;
//     height:203px;
//     border-color:rgba(25, 112, 194, 1);
//     border-top-width:2px;
//     border-bottom-width:2px;
//     border-right-width:2px;
//     border-left-width:2px;
//     border-top-left-radius:10px;
//     border-top-right-radius:10px;
//     border-bottom-right-radius:10px;
//     border-bottom-left-radius:10px;
//     border-style:solid;
//   }
//   .lnd-icon.lnd-feature-icon{
//     display:flex;
//     justify-content:center;
//     align-items:center;
//   }
//   #ivzepv{
//     --fill:0;
//     --weight:400;
//   }
//   #ig4hti{
//     --fill:0;
//     --weight:400;
//   }
//   #iv37of{
//     --fill:0;
//     --weight:400;
//   }
//   .feature-grid{
//     display:grid;
//     grid-template-columns:1fr 1fr 1fr;
//   }
// }
// @media (max-width: 1536px){
//   #i9rwd8{
//     width:686px;
//   }
// }
// @media (max-width:992px){
//   .lnd-grid-row{
//     flex-direction:column;
//   }
//   .lnd-grid-row{
//     flex-direction:column;
//   }
//   #iyd2{
//     flex-direction:row;
//   }
// }
// @media (max-width: 880px){
//   #im1g{
//     height:fit-content;
//   }
//   #rndom{
//     width:100%;
//     max-width:1200px;
//   }
//   #ilmalz{
//     width:100%;
//   }
//   #i7yli9{
//     width:633px;
//     height:290px;
//   }
//   #ix4n9i{
//     align-items:center;
//   }
// }
// @media (max-width: 844px){
//   #ix4n9i{
//     flex-direction:column;
//     justify-content:end;
//   }
// }
// @media (max-width: 810px){
//   .heading-one{
//     height:229px;
//   }
//   #i7yli9{
//     width:673px;
//     height:308px;
//   }
//   #iqibtb{
//     height:449px;
//   }
//   #ivw03p{
//     height:fit-content;
//   }
//   #ix4n9i{
//     row-gap:2rem;
//   }
// }
// @media (max-width: 768px){
//   .columns{
//     flex-direction:column;
//     height:100%;
//   }
//   .grid{
//     grid-template-columns:repeat(1, 1fr);
//     grid-template-rows:repeat(4, 1fr);
//   }
// }
// @media (max-width: 600px){
//   #im1g{
//     height:fit-content;
//   }
//   .card-container{
//     display:inline;
//   }
//   #iamtqj{
//     display:none;
//   }
//   #rndom{
//     height:811px;
//   }
//   #ilmalz{
//     font-size:2.4rem;
//     width:325px;
//     height:fit-content;
//     line-height:2.5rem;
//   }
//   .heading-one{
//     line-height:rem;
//     width:350px;
//     height:214px;
//     margin-top:4rem;
//   }
//   #i9rwd8{
//     width:83%;
//     text-align:center;
//   }
//   #i89wh{
//     height:254px;
//     column-gap:10px;
//     row-gap:10px;
//   }
//   .enum-container{
//     flex-wrap:wrap;
//   }
//   #i3yikv{
//     height:79px;
//   }
//   #i2lj76{
//     display:inline;
//   }
//   #i7yli9{
//     width:348px;
//     height:159px;
//   }
//   #iqibtb{
//     height:615px;
//   }
//   #itimp{
//     height:313px;
//   }
//   #iwulci{
//     height:fit-content;
//     row-gap:1rem;
//   }
//   #iqequd{
//     width:331px;
//     height:281px;
//   }
//   .heading-three{
//     font-size:2rem;
//   }
//   #i7dixa{
//     flex-direction:column-reverse;
//     height:556px;
//   }
//   #iuxgon{
//     height:464px;
//   }
//   #i9p7ng{
//     flex-direction:column;
//     height:626px;
//   }
//   #invveh{
//     height:794px;
//     justify-content:center;
//     flex-direction:column;
//   }
//   #ipq4bt{
//     height:616px;
//     flex-direction:column-reverse;
//   }
//   #i6hige{
//     height:261px;
//     justify-content:center;
//     flex-direction:column;
//   }
//   #is498f{
//     height:fit-content;
//     justify-content:center;
//     flex-direction:column;
//   }
//   #iogqps{
//     height:439px;
//   }
//   #ihqpw3{
//     height:153px;
//   }
//   #iwav8l{
//     height:167px;
//   }
//   #ia8sxo{
//     height:173px;
//   }
//   #itszdv{
//     text-align:center;
//   }
//   #im0rle{
//     text-align:center;
//   }
// }
// @media (max-width: 430px){
//   .heading-one{
//     font-size:2rem;
//     height:118px;
//   }
//   #i8jhar{
//     color:rgba(13, 110, 253, 1);
//   }
// }
// @media (max-width: 390px){
//   .heading-one{
//     height:128px;
//     font-size:2rem;
//   }
//   .lnd-heading{
//     width:265px;
//     font-size:1rem;
//   }
// }
// @media (max-width: 280px){
//   h1{
//     font-size:1.2rem;
//   }
// }
// `,
//       },
//     },
//   });
//
//   editor.Blocks.add('template-three', {
//     media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214835.png',
//     label: 'Two',
//     category: 'templates-starter',
//     content: { type: 'template-three' },
//   });
//
//   Components.addType('template-three', {
//     model: {
//       defaults: {
//         name: 'Template Two',
//         components: `
//  <div id="i6po" class="lnd-grid-row">
//     <div id="itjq" class="lnd-grid-column">
//       <div id="iyd2" class="lnd-grid-row navbar">
//         <a class="link-box"><img src="https://assets.lanndi.com/assets/NHYnkERJGUr2p4uHAidW10djWzaUg6Bx8PJFO6NF.webp" id="iiemz9" loading="lazy" alt="lanndi logo" class="image"/><h2 id="iuedda" class="heading-two">lanndi
//           </h2></a>
//         <div id="imxz0j">
//           <a href="https://app.lanndi.com/login" id="id0d6n" class="card-container"><button id="iw7fys" class="button btn-secondary sec">Login</button></a>
//           <a href="https://app.lanndi.com/demo" id="iamtqj" class="card-container"><button id="igdl6k" class="button">Create Your Website Now</button></a>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div id="rndom" class="block">
//     <h1 id="ilmalz" class="heading-one">Create, publish and share your dream website
//       <span id="i8jhar">in 30 minutes</span>
//       <!--notionvc: 7ce014f5-3029-4305-aabb-b3044b508ea8-->
//     </h1>
//     <p id="i9rwd8" class="paragraph">lanndi helps you create, publish and share your beautiful, fast and responsive website in 30 minutes or less with a super intuitive no-code editor without hiring developers or designers.
//     </p>
//     <div id="i89wh" class="btn-block">
//       <div id="i47cqm" class="enum-container">
//         <div id="isvihu" class="hero-enum">
//           <span class="material-icons material-symbols-outlined hero hero-icons">check</span>
//           <p class="paragraph">
//           <p class="paragraph">Lead Magnets
//           </p>
//           </p>
//       </div>
//       <div id="izmydh" class="hero-enum">
//         <span class="material-icons material-symbols-outlined her hero-icons">check</span>
//         <p class="paragraph">
//         <p class="paragraph">Links in Bio
//         </p>
//         </p>
//     </div>
//     <div id="it776f" class="hero-enum">
//       <span class="material-icons material-symbols-outlined her hero-icons">check</span>
//       <p class="paragraph">
//       <p class="paragraph">Portfolios
//       </p>
//       </p>
//   </div>
//   <div id="i22o8i" class="hero-enum">
//     <span id="iv270w" class="material-icons material-symbols-outlined hero-icons">check</span>
//     <p class="paragraph">
//     <p class="paragraph">Landing Pages
//     </p>
//     </p>
//   </div>
// </div>
// <p id="ib5538" class="paragraph">
// </p>
// <div id="i3yikv" class="block">
//   <a href="https://app.lanndi.com/demo" id="i2lj76" class="card-container"><button id="ift6lj" class="button">Create Your Website Now</button></a>
//   <a href="https://app.lanndi.com/login" id="iggrp" class="card-container"></a>
// </div>
// <p id="if3rnu" class="paragraph">Start For Free, No Credit Card Required!
// </p>
// </div>
// <img src="https://assets.lanndi.com/assets/ixFFWi7V6TM8IIrbwp4dzuwwSGniksdnfgoXum3Q.webp" id="i7yli9" loading="lazy" alt="lanndi website editor" class="image"/>
// </div>
// <div id="iqibtb" class="container">
//   <h2 id="iej3yp" class="secondary-heading">How it works
//     <!--notionvc: 39322634-2353-4a86-b9b7-9c54a1cd3a49-->
//   </h2>
//   <div id="itimp" class="columns">
//     <div id="idb316" class="how-it-works-section">
//       <h3 id="in964h" class="heading-one">1. Create
//       </h3>
//     </div>
//     <div id="idcga8" class="how-it-works-section">
//       <h3 id="ij1ia3" class="heading-one">2. Launch
//       </h3>
//     </div>
//     <div id="i39l0n" class="null how-it-works-section">
//       <h3 id="ib5fnj" class="heading-one">3. Share
//       </h3>
//     </div>
//   </div>
// </div>
// <div id="iwulci" class="block">
//   <h2 id="irvjy1" class="secondary-heading">Benefits, benefits and more benefits!
//     <!--notionvc: 39322634-2353-4a86-b9b7-9c54a1cd3a49-->
//   </h2>
//   <div id="iqequd" class="containers">
//     <h3 id="i1lpk6" class="heading-three">Free
//       <!--notionvc: d2b7887f-c47e-4106-ab78-5e3d84a88617-->
//     </h3>
//     <div id="ij4gye" class="text-main-content">Build a one-page website and use all of lanndi's core features – for free!
//       <!--notionvc: 357367fa-8db8-44c5-8b0d-3b805d60a712-->
//       <!--notionvc: 2f8f675a-0992-49e9-99f7-a0ea930503e0-->
//     </div>
//     <a href="https://app.lanndi.com/demo" id="i2dvj" class="card-container"><button id="ieyml" class="button button-primary">Test Demo For Free</button></a>
//   </div>
//   <div id="i7dixa" class="containers">
//     <div id="iuxgon" class="containers">
//       <img src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2)%20(2).gif" id="ixr715" alt="lanndi intuitive editor" class="image"/>
//     </div>
//     <div id="itwzeg" class="containers">
//       <h3 id="ipmnzc" class="heading-three">From concept to published website in less time
//         <!--notionvc: bfd1fd79-c34c-4e8e-a0b2-cd3605a29cdf-->
//         <!--notionvc: f0d795b9-9072-4d33-850a-4c64e97f0a31-->
//         <!--notionvc: fdd4e962-8cc6-427b-aee4-90adad5f1ccf-->
//       </h3>
//       <div id="iw9u8y" class="text-main-content">You don't need to spend dozens of hours watching tutorials to create and publish your dream website, you can get it done in 30 minutes or less with dozens of super customizable pre-made blocks and a super intuitive editor.
//         <!--notionvc: 7400e546-d22b-4c81-b8b6-ac6c82098700-->
//         <!--notionvc: 55a5e84d-500c-4d76-b001-a9b0a945b3ec-->
//       </div>
//       <a href="https://app.lanndi.com/demo" id="iyqkt" class="card-container"><button class="button button-primary">Test Demo For Free</button></a>
//     </div>
//   </div>
//   <div id="i9p7ng" class="containers">
//     <div id="invveh" class="containers">
//       <h2 id="iuk6zq" class="lnd-heading">
//         <h3 id="icuzyk" class="heading-three">Performant and SEO optimized
//           <!--notionvc: 8aa2ed44-7c64-4f5c-bc1e-e7c63e7321a2-->
//           <br/>
//         </h3>
//         <!--notionvc: bfd1fd79-c34c-4e8e-a0b2-cd3605a29cdf-->
//         <!--notionvc: f0d795b9-9072-4d33-850a-4c64e97f0a31-->
//         <!--notionvc: fdd4e962-8cc6-427b-aee4-90adad5f1ccf-->
//       </h2>
//       <div id="isbu0f" class="text-main-content">Build a super-performant website on every device that reduces bounce rates, improves conversion and is optimized to help you index and rank in the top search engines
//         <!--notionvc: da06ef69-0c1d-433d-bad0-0803f270bd3b-->
//         <!--notionvc: 7400e546-d22b-4c81-b8b6-ac6c82098700-->
//         <!--notionvc: 55a5e84d-500c-4d76-b001-a9b0a945b3ec-->
//       </div>
//       <a href="https://app.lanndi.com/demo" id="i2avof" class="card-container"><button class="button button-primary">Test Demo For Free</button></a>
//     </div>
//     <div id="io9fmg" class="containers">
//       <img src="https://assets.lanndi.com/assets/wfO44HeYzXCdaGuSk0Xyf2uC27yk4b5CqQTX2bX4.webp" id="iehq5j" alt="lanndi helps you convert more with a faster website" class="image"/>
//     </div>
//   </div>
//   <div id="ipq4bt" class="containers">
//     <div id="i2d17i" class="containers">
//       <img src="https://assets.lanndi.com/assets/qBXPeVwbI6yXsPgkiHZOieg9oWCaqDSZC9WAJwkz.webp" id="iusbd6" alt="lanndi limiteless cusomization options" class="image"/>
//     </div>
//     <div id="i6hige" class="containers">
//       <h3 id="ihv05b" class="heading-three">Unlimited power to customize
//       </h3>
//       <div id="iz8hdk" class="text-main-content">lanndi’s editor provides unlimited ways to style your website to make sure your vision comes to life on every single device.
//         <!--notionvc: 7400e546-d22b-4c81-b8b6-ac6c82098700-->
//         <!--notionvc: 55a5e84d-500c-4d76-b001-a9b0a945b3ec-->
//       </div>
//       <a href="https://app.lanndi.com/demo" id="i6dewc" class="card-container"><button id="isox75" class="button button-primary">Test Demo For Free</button></a>
//     </div>
//   </div>
//   <div id="is498f" class="containers">
//     <h3 id="itzobz" class="heading-three">Publish more websites  and pay less
//     </h3>
//     <div id="iadspi" class="text-main-content">No more overpaying for multiple websites, you create and publish multiple websites  with a plan that costs less than your netflix subscription
//       <!--notionvc: 7400e546-d22b-4c81-b8b6-ac6c82098700-->
//       <!--notionvc: 55a5e84d-500c-4d76-b001-a9b0a945b3ec-->
//     </div>
//     <a href="https://app.lanndi.com/demo" class="card-container"><button class="button button-primary">Test Demo For Free</button></a>
//   </div>
// </div>
// <div id="ioyxg" class="lnd-grid-row">
//   <div id="i8w4i-3" class="lnd-grid-column">
//     <h2 id="ikxk81" class="secondary-heading">Everything you need to succed
//     </h2>
//     <div id="irebnv" class="grid">
//       <div id="ilpi3-3" class="lnd-grid-column feature-item">
//         <div id="ipmqo6-3" class="lnd-icon lnd-feature-icon">
//           <span class="material-icons material-symbols-outlined">check</span>
//         </div>
//         <h3 id="in9ef-3" class="lnd-heading features-title">Custom domains with free SSL
//           <!--notionvc: 2e362b76-5b0f-414d-ad18-ccfbf8e15328-->
//           <!--notionvc: 0cc471e1-cd17-4944-86db-c225c0777e75-->
//         </h3>
//         <div id="i8isa-3" class="text-main-content">Every page is published and secured with a free SSL certificate, with the option to publish your site with any custom domain you own!
//           <!--notionvc: 5ce48c56-fc46-4dce-a2e7-5f1df862c4b0-->
//         </div>
//       </div>
//       <div id="ic57kq-3" class="lnd-grid-column feature-item">
//         <div id="ibdusm" class="lnd-icon lnd-feature-icon">
//           <span id="ivzepv" class="material-icons material-symbols-outlined">check</span>
//         </div>
//         <h3 id="ica43q-3" class="lnd-heading features-title">
//           <span data-token-index="0" id="ietg0g" class="features-title">Custom code</span>
//           <!--notionvc: 8505194a-9ed1-4970-874e-b7b8ed5d1e6e-->
//         </h3>
//         <div id="ickn3f-3" class="text-main-content">Add further functionality with your custom HTML, CSS and JavaScript code.
//           <!--notionvc: 8c434ec2-d4c8-4929-b4e6-b5b3a5da3d0d-->
//           <!--notionvc: 75d9d4f5-55a8-47d6-99d7-b048ec76c0e3-->
//         </div>
//       </div>
//       <div class="lnd-grid-column feature-item">
//         <div class="lnd-icon lnd-feature-icon">
//           <span id="ig4hti" class="material-icons material-symbols-outlined">check</span>
//         </div>
//         <h3 class="lnd-heading features-title">Website Icons
//           <!--notionvc: b364eb5b-7d15-4083-8b62-8c6fd3ddc694-->
//         </h3>
//         <div class="text-main-content">Show custom icons (aka "favicons") in the address bar when visiting your sites.
//           <!--notionvc: 714577a0-3e58-4842-b1ee-147b217cdd1b-->
//         </div>
//       </div>
//       <div id="idv32l-3" class="lnd-grid-column feature-item">
//         <div id="ipmept" class="lnd-icon lnd-feature-icon">
//           <span id="iv37of" class="material-icons material-symbols-outlined">check</span>
//         </div>
//         <h3 id="ieu6p6-3" class="lnd-heading features-title">SEO ready
//           <!--notionvc: b364eb5b-7d15-4083-8b62-8c6fd3ddc694-->
//         </h3>
//         <div id="izqkf7-3" class="text-main-content">Every page is optimized so that search engines can find it, and index it so you can grow organically
//           <!--notionvc: 714577a0-3e58-4842-b1ee-147b217cdd1b-->
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div id="i4xreo">
// </div>
// <div id="iiqptj">
// </div>
// <div id="ixzh1-3" class="feature-grid">
// </div>
// <div id="ik8xdr">
// </div>
// <div id="ivw03p" class="block">
//   <h2 id="ia9tjy" class="secondary-heading">Our Pricing
//   </h2>
//   <div id="ix4n9i" class="containers">
//     <div id="iogqps" class="pricing-card-container">
//       <div id="ihqpw3" class="price-container">
//         <p id="ikvtx4" class="paragraph">Free
//         </p>
//         <h3 id="iz0shq" class="heading-three price">0€/m
//         </h3>
//       </div>
//       <div id="io8orq" class="block">
//         <span id="i2ppvn" class="material-icons material-symbols-outlined">check</span>
//         <p id="ij9ivp" class="paragraph">1 website
//         </p>
//       </div>
//       <div id="ipwwjb" class="block">
//         <span id="ia3gp2" class="material-icons material-symbols-outlined">check</span>
//         <p id="ij3e2x" class="paragraph">1 page max
//         </p>
//       </div>
//       <div id="izzs96" class="block">
//         <span id="ih12sd" class="material-icons material-symbols-outlined">check</span>
//         <p id="iwlxre" class="paragraph">lanndi branding
//         </p>
//       </div>
//       <div id="iilm2w" class="block">
//         <span id="ilsgzh" class="material-icons material-symbols-outlined">check</span>
//         <p id="iyztck" class="paragraph">lanndi subdomain
//         </p>
//       </div>
//       <a href="https://app.lanndi.com/register" id="iff11h" class="card-container"><button id="iuwumr" class="button button-primary">Start Now For Free</button></a>
//     </div>
//     <div id="it4fml" class="pricing-card-container indie-card">
//       <div id="i2pyp9" class="block">
//         <p id="iibi96" class="paragraph">Indie
//         </p>
//         <h3 id="iqo1tt" class="heading-three price">15€/m
//         </h3>
//       </div>
//       <div id="i7o7o9" class="block">
//         <span id="iczlsn" class="material-icons material-symbols-outlined">check</span>
//         <p id="inxlcr" class="paragraph">5 websites
//         </p>
//       </div>
//       <div id="invaqn" class="block">
//         <span id="i1wlxi" class="material-icons material-symbols-outlined">check</span>
//         <p id="ij5oe7" class="paragraph">10 pages max
//         </p>
//       </div>
//       <div id="ij51vd" class="block">
//         <span id="i4xbyz" class="material-icons material-symbols-outlined">check</span>
//         <p id="ia03jl" class="paragraph">lNo lanndi branding
//         </p>
//       </div>
//       <div id="ijdna3" class="block">
//         <span id="i5qjhw" class="material-icons material-symbols-outlined">check</span>
//         <p id="i6prfp" class="paragraph">Custom domain
//         </p>
//       </div>
//       <div id="ixm94a" class="block">
//         <span id="iutsel" class="material-icons material-symbols-outlined">check</span>
//         <p id="isdltg" class="paragraph">Preview Domain
//         </p>
//       </div>
//       <div id="ikck93" class="block">
//         <span id="i998wk" class="material-icons material-symbols-outlined">check</span>
//         <p id="iqe23l" class="paragraph">Custom code
//         </p>
//       </div>
//       <div id="irwauh" class="block">
//         <span id="is6zdb" class="material-icons material-symbols-outlined">check</span>
//         <p id="i9927r" class="paragraph">Image uploads
//         </p>
//       </div>
//       <div id="iulch6" class="block">
//         <span id="i0lie1" class="material-icons material-symbols-outlined">check</span>
//         <p id="imt8qk" class="paragraph">Favicons
//         </p>
//       </div>
//       <a href="https://app.lanndi.com/register" id="igifvu" class="card-container"><button class="button button-primary">Start Now</button></a>
//     </div>
//     <div id="iq86kv" class="pricing-card-container">
//       <div id="iwav8l" class="block">
//         <p id="iys9wo" class="paragraph">Basic
//         </p>
//         <h3 id="ilbfak" class="heading-three price">5€/m
//         </h3>
//       </div>
//       <div id="i0f9qk" class="block">
//         <span id="i3lnk2" class="material-icons material-symbols-outlined">check</span>
//         <p id="ineomo" class="paragraph">1 websites
//         </p>
//       </div>
//       <div id="itxfwr" class="block">
//         <span id="iy39mx" class="material-icons material-symbols-outlined">check</span>
//         <p id="iyhelc" class="paragraph">10 pages max
//         </p>
//       </div>
//       <div id="ikjohg" class="block">
//         <span id="ipwg22" class="material-icons material-symbols-outlined">check</span>
//         <p id="idkaxa" class="paragraph">lNo lanndi branding
//         </p>
//       </div>
//       <div id="il8q1f" class="block">
//         <span id="ispcxy" class="material-icons material-symbols-outlined">check</span>
//         <p id="itgolu" class="paragraph">Custom domain
//         </p>
//       </div>
//       <div id="ihl8ex" class="block">
//         <span id="ikjrmg" class="material-icons material-symbols-outlined">check</span>
//         <p id="iyiyoy" class="paragraph">Preview Domain
//         </p>
//       </div>
//       <div id="iteh7h" class="block">
//         <span id="iqlt21" class="material-icons material-symbols-outlined">check</span>
//         <p id="ilpyqk" class="paragraph">Custom code
//         </p>
//       </div>
//       <div id="iw7953" class="block">
//         <span id="i4t7bi" class="material-icons material-symbols-outlined">check</span>
//         <p id="i57s9f" class="paragraph">Image uploads
//         </p>
//       </div>
//       <div id="ily70i" class="block">
//         <span id="i8hekr" class="material-icons material-symbols-outlined">check</span>
//         <p id="im7ocv" class="paragraph">Favicons
//         </p>
//       </div>
//       <a href="https://app.lanndi.com/register" id="ibvupf" class="card-container"><button id="i2m5xl" class="button button-primary">Start Now</button></a>
//     </div>
//     <div id="iwh2lc" class="pricing-card-container lifetime">
//       <div id="ia8sxo" class="block">
//         <p id="ieo7mi" class="paragraph">Lifetime deal
//         </p>
//         <h3 id="iknpf5" class="heading-three price">299€
//         </h3>
//       </div>
//       <div id="i9b22g" class="block">
//         <span id="iueos6" class="material-icons material-symbols-outlined">check</span>
//         <p id="ivw9oz" class="paragraph">Unlimited websitse
//         </p>
//       </div>
//       <div id="il0gpd" class="block">
//         <span id="iixvhn" class="material-icons material-symbols-outlined">check</span>
//         <p id="ilx3en" class="paragraph">Access to all lanndi's features
//         </p>
//       </div>
//       <a href="https://app.lanndi.com/register" id="i3glga" class="card-container"><button id="ioe80j" class="button button-primary">Start Now</button></a>
//     </div>
//   </div>
// </div>
// <div id="iz29ek" class="lnd-grid-row">
//   <div id="ik2rdi" class="lnd-grid-column">
//     <h2 id="itszdv" class="heading-two">Create Your Dream Website For Free
//     </h2>
//     <div id="id7x">
//     </div>
//     <a href="https://app.lanndi.com/demo" class="card-container"><button class="button">Test Demo For Free</button></a>
//   </div>
// </div>
// <div id="iv3be5" class="lnd-grid-row">
//   <div id="ilriti" class="lnd-grid-column">
//     <div id="im0rle" class="lnd-grid-row">
//       <div id="i1hx7l" class="lnd-grid-row">
//         <a href="terms-and-conditions" class="link">Terms &amp; Conditions</a>
//         <a href="privacy-policy" class="link">Privacy Policy</a>
//       </div>
//     </div>
//     <div id="it6g1v" class="lnd-text-blue">Copyright © lanndi 2024
//     </div>
//   </div>
// </div>
// `,
//         styles: `#im1g{
//   margin-right:auto;
//   margin-left:auto;
// }
// .lnd-grid-row{
//   display:flex;
//   justify-content:flex-start;
//   align-items:stretch;
//   flex-direction:row;
//   padding:10px 0;
//   padding-top:0;
// }
// .lnd-grid-row{
//   display:flex;
//   justify-content:flex-start;
//   align-items:stretch;
//   flex-direction:row;
//   min-height:auto;
//   padding:10px 0;
// }
// #i6po{
//   justify-content:center;
//   position:sticky;
//   top:15px;
//   padding-top:0px;
//   padding-bottom:0px;
//   padding-left:20px;
//   padding-right:20px;
// }
// .lnd-grid-column{
//   padding:5px 0;
//   row-gap:1rem;
// }
// .lnd-grid-column{
//   padding:5px 0;
// }
// #itjq{
//   width:100%;
//   max-width:1200px;
// }
// #iyd2{
//   align-items:center;
//   justify-content:space-between;
//   padding-top:0px;
//   padding-bottom:0px;
//   background-color:rgba(255,255,255,0.8);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
//   backdrop-filter:blur(13px);
//   box-shadow:0px 2px 7px 0px rgba(0,0,0,0.14);
// }
// .lnd-grid-row.navbar{
//   height:60px;
//   background:rgb(130, 87, 150);
//   justify-content:space-between;
// }
// .link-box:empty:before{
//   background-color:#ddd;
//   color:#000;
//   font-size:16px;
//   font-weight:bold;
//   height:100%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   min-height:30px;
//   padding:0 10px;
//   opacity:0.3;
//   border-radius:3px;
//   white-space:nowrap;
//   overflow:hidden;
//   text-overflow:ellipsis;
//   content:"Link Box";
// }
// .link-box{
//   color:inherit;
//   display:flex;
//   vertical-align:top;
//   padding:10px;
//   max-width:100%;
//   text-decoration:none;
//   cursor:pointer;
//   flex-direction:row;
//   justify-content:center;
//   align-items:center;
//   height:50px;
// }
// .link-box:empty{
//   text-decoration:none;
//   padding:5px;
// }
// #iiemz9{
//   width:30px;
//   height:30px;
// }
// #iuedda{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:w;
//   20:o;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:;
//     ;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:}
//   ;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
// }
// .heading-two{
//   margin-top:0;
//   margin-right:0;
//   margin-bottom:0;
//   margin-left:0;
// }
// #imxz0j{
//   display:flex;
//   padding-left:10px;
//   padding-right:10px;
//   justify-content:center;
//   align-items:center;
//   column-gap:4px;
// }
// .card-container:empty{
//   text-decoration:none;
//   padding:5px;
// }
// .card-container{
//   color:inherit;
//   display:inline-block;
//   vertical-align:top;
//   padding:10px;
//   max-width:100%;
//   text-decoration:none;
//   cursor:pointer;
// }
// .button{
//   cursor:pointer;
//   outline:0;
//   color:#fff;
//   background-color:#0d6efd;
//   border-color:#0d6efd;
//   display:inline-block;
//   font-weight:400;
//   line-height:1.5;
//   text-align:center;
//   border:1px solid transparent;
//   padding:4px 12px 4px 12px;
//   font-size:16px;
//   border-radius:.25rem .25rem .25rem .25rem;
// }
// .button:hover{
//   color:#fff;
//   background-color:darken(#0d6efd, 10%);
//   border-color:#0a58ca;
//   opacity:0.9;
// }
// .button.sec.btn-secondary:hover{
//   background:rgba(13, 110, 253, 1);
//   color:rgb(255, 255, 255);
// }
// .button.btn-secondary.sec{
//   padding-right:6px;
//   padding-left:6px;
//   border-top-width:0px;
//   border-right-width:0px;
//   border-bottom-width:0px;
//   border-left-width:0px;
// }
// #rndom{
//   height:940px;
//   max-height:100%;
//   width:100v;
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   background:linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(119,183,224,1) 30%, RGBA(119,183,224,1) 70%, rgba(254,254,254,1) 90%);
//   box-shadow:10px 1;
//   top:70px;
//   left:49%;
//   border-top-left-radius:1rem;
//   border-top-right-radius:1rem;
//   border-bottom-right-radius:1rem;
//   border-bottom-left-radius:1rem;
// }
// .block{
//   max-height:100%;
//   height:246px;
//   top:695px;
//   left:92%;
//   width:100%;
// }
// #ilmalz{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:o;
//   19:n;
//   20:e;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   height:fit-content;
//   font-size:3rem;
//   width:697px;
//   line-height:3rem;
// }
// .heading-one{
//   font-size:2rem;
//   height:47px;
// }
// #i8jhar{
//   margin-left:10px;
//   color:rgba(70, 111, 250, 1);
//   text-decoration:underline;
// }
// #i9rwd8{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   text-align:center;
//   width:67%;
// }
// .paragraph{
//   margin-top:0;
//   margin-right:0;
//   margin-bottom:0;
//   margin-left:0;
// }
// #i89wh{
//   height:170px;
//   max-height:100%;
//   width:100%;
//   margin-top:2rem;
//   flex-direction:column;
// }
// .btn-block{
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   height:177px;
// }
// .enum-container{
//   display:flex;
//   flex-direction:row-reverse;
//   justify-content:center;
//   align-items:center;
//   column-gap:1rem;
//   width:fit-content;
//   height:fit-content;
//   padding-top:0.2rem;
//   padding-right:0.2rem;
//   padding-bottom:0.2rem;
//   padding-left:0.2rem;
//   color:rgb(239, 230, 244);
// }
// .hero-enum{
//   width:fit-content;
//   height:40px;
//   padding-top:0.2rem;
//   padding-right:0.2rem;
//   padding-bottom:0.2rem;
//   padding-left:0.2rem;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   align-items:center;
//   border-bottom-width:2px;
//   border-style:solid;
//   border-top-width:0;
//   border-right-width:0;
//   border-left-width:0;
//   border-color:rgb(255, 255, 255);
// }
// .material-icons.material-symbols-outlined.hero-icons{
//   color:rgb(252, 252, 252);
// }
// #i3yikv{
//   display:flex;
//   flex-direction:row-reverse;
//   justify-content:center;
//   align-items:center;
//   height:fit-conten;
//   width:364px;
// }
// #if3rnu{
//   font-size:0.7rem;
//   font-weight:700;
//   color:rgb(248, 245, 251);
// }
// #i7yli9{
//   width:792px;
//   height:363px;
//   margin-top:4rem;
//   margin-bottom:2rem;
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
// }
// .container{
//   height:800px;
//   width:100%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   padding:10px 10px 10px 10px;
// }
// #iqibtb{
//   height:318px;
//   width:90%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   padding:10px 10px 10px 10px;
//   flex-direction:column;
//   max-width:1200px;
//   margin-right:auto;
//   margin-left:auto;
// }
// #iej3yp{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:o;
//   19:n;
//   20:e;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
// }
// .columns{
//   display:flex;
//   flex-direction:row;
//   width:100%;
//   height:506px;
//   gap:10px 10px;
//   padding:10px 10px 10px 10px;
// }
// .how-it-works-section{
//   border-top-width:0;
//   border-right-width:0;
//   border-bottom-width:0;
//   border-left-width:0;
// }
// #idb316{
//   height:80px;
//   max-height:100%;
//   width:100%;
// }
// #in964h{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:o;
//   19:n;
//   20:e;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
// }
// #idcga8{
//   height:80px;
//   max-height:100%;
//   width:100%;
// }
// #ij1ia3{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:o;
//   19:n;
//   20:e;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
// }
// #i39l0n{
//   height:80px;
//   max-height:100%;
//   width:100%;
// }
// #ib5fnj{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:o;
//   19:n;
//   20:e;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
// }
// #iwulci{
//   height:fit-content;
//   max-height:100%;
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   justify-content:start;
//   row-gap:4rem;
//   max-width:1200px;
//   width:90%;
//   margin-right:auto;
//   margin-left:auto;
// }
// #irvjy1{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:o;
//   19:n;
//   20:e;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
// }
// .containers{
//   height:8px;
//   width:100%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   flex-direction:column;
//   border-style:solid;
// }
// #iqequd{
//   height:284px;
//   max-height:100%;
//   width:53%;
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   row-gap:1rem;
//   border-style:none;
// }
// #i1lpk6{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// .heading-three{
//   font-size:2rem;
// }
// .text-main-content{
//   line-height:20px;
//   font-size:1rem;
// }
// #ij4gye{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #i7dixa{
//   height:335px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   column-gap:2rem;
//   border-style:none;
// }
// #iuxgon{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #ixr715{
//   color:black;
//   border-top-left-radius:35px;
//   border-top-right-radius:35px;
//   border-bottom-right-radius:35px;
//   border-bottom-left-radius:35px;
//   max-width:100%;
// }
// #itwzeg{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #ipmnzc{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// #iw9u8y{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #i9p7ng{
//   height:335px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   column-gap:2rem;
//   border-style:none;
// }
// #invveh{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// .lnd-heading{
//   margin:0;
// }
// .lnd-heading{
//   margin:0;
//   color:rgba(29,40,55,1);
// }
// #iuk6zq{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:w;
//   20:o;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   font-size:2.5rem;
// }
// #icuzyk{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// #isbu0f{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #io9fmg{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #iehq5j{
//   color:black;
//   border-top-left-radius:35px;
//   border-top-right-radius:35px;
//   border-bottom-right-radius:35px;
//   border-bottom-left-radius:35px;
//   max-width:100%;
// }
// #ipq4bt{
//   height:fit-content;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   column-gap:2rem;
//   border-style:none;
// }
// #i2d17i{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #iusbd6{
//   color:black;
//   border-top-left-radius:35px;
//   border-top-right-radius:35px;
//   border-bottom-right-radius:35px;
//   border-bottom-left-radius:35px;
//   max-width:100%;
// }
// #i6hige{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #ihv05b{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// #iz8hdk{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #is498f{
//   height:100%;
//   max-height:100%;
//   width:100%;
//   border-style:none;
// }
// #itzobz{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// #iadspi{
//   padding:10px;
//   max-width:750px;
//   margin-bottom:25px;
//   padding-left:0px;
//   padding-right:0px;
// }
// #ioyxg{
//   justify-content:center;
//   padding-top:80px;
//   padding-bottom:80px;
//   padding-left:20px;
//   padding-right:20px;
// }
// #i8w4i-3{
//   width:90%;
//   max-width:1200px;
//   height:fit-content;
//   margin-right:auto;
//   margin-left:auto;
// }
// #ikxk81{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:o;
//   19:n;
//   20:e;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
// }
// .grid{
//   display:grid;
//   grid-template-columns:1fr 1fr;
//   grid-template-rows:1fr 1fr;
//   gap:10px;
//   padding:10px;
//   height:fit-content;
//   width:100%;
// }
// .lnd-grid-column.feature-item{
//   padding-top:15px;
//   padding-right:15px;
//   padding-bottom:15px;
//   padding-left:15px;
//   display:flex;
//   flex-direction:column;
//   gap:15px;
// }
// .lnd-icon{
//   display:inline-block;
//   text-decoration:none;
//   color:inherit;
//   vertical-align:middle;
//   fill:currentColor;
//   width:50px;
//   height:50px;
// }
// .lnd-icon{
//   display:inline-block;
//   text-decoration:none;
//   color:inherit;
//   vertical-align:middle;
//   fill:currentColor;
//   width:50px;
//   height:50px;
// }
// .lnd-icon.lnd-feature-icon{
//   padding-top:10px;
//   padding-right:10px;
//   padding-bottom:10px;
//   padding-left:10px;
//   background-color:rgb(36,99,235);
//   color:white;
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
// }
// .lnd-heading.features-title{
//   height:60px;
//   font-size:1rem;
// }
// .feature-grid{
//   display:grid;
// }
// #ivw03p{
//   height:fit-content;
//   max-height:100%;
//   width:90%;
//   flex-direction:column;
//   max-width:1200px;
//   margin-right:auto;
//   margin-left:auto;
// }
// #ia9tjy{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:o;
//   19:n;
//   20:e;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:;
//     ;
//     40:null;
//     41:null;
//     42:null;
//     43:null;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:}
//   ;
//   50:null;
//   51:null;
//   52:null;
//   53:null;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
// }
// #ix4n9i{
//   height:fit-content;
//   max-height:100%;
//   padding-top:2rem;
//   padding-bottom:2rem;
//   display:flex;
//   flex-direction:row;
//   justify-content:center;
//   align-items:end;
//   column-gap:1rem;
//   border-color:rgba(89, 112, 247, 1);
//   margin-right:auto;
//   margin-left:auto;
//   border-style:none;
//   width:100%;
// }
// #iogqps{
//   height:fit-content;
//   max-height:100%;
//   width:69%;
//   border-style:solid;
//   border-color:rgb(247, 244, 250);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
// }
// .pricing-card-container{
//   padding-top:1rem;
//   padding-right:1rem;
//   padding-bottom:1rem;
//   padding-left:1rem;
//   width:268px;
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   row-gap:0.5rem;
// }
// #ihqpw3{
//   height:131px;
//   max-height:100%;
//   width:100%;
//   text-align:center;
//   flex-direction:column;
//   border-style:none;
// }
// #ikvtx4{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iz0shq{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// .heading-three.price{
//   font-size:3rem;
// }
// #io8orq{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
//   border-style:none;
// }
// #ij9ivp{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ipwwjb{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
//   border-style:none;
// }
// #ij3e2x{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #izzs96{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
//   border-style:none;
// }
// #iwlxre{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iilm2w{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
//   border-style:none;
// }
// #iyztck{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #it4fml{
//   height:fit-content;
//   max-height:100%;
//   width:69%;
//   border-style:solid;
//   border-color:rgba(70, 111, 250, 1);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
//   border-top-width:2px;
//   border-right-width:2px;
//   border-bottom-width:2px;
//   border-left-width:2px;
//   box-shadow:rgba(70, 111, 250, 1) 5px 5px 10px;
// }
// .pricing-card-container.indie-card{
//   height:536px;
//   border-top-width:5px;
//   border-right-width:5px;
//   border-bottom-width:5px;
//   border-left-width:5px;
// }
// #i2pyp9{
//   height:161px;
//   max-height:100%;
//   width:100%;
//   text-align:center;
//   flex-direction:column;
// }
// #iibi96{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   width:180px;
// }
// #iqo1tt{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// #i7o7o9{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #inxlcr{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #invaqn{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #ij5oe7{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ij51vd{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #ia03jl{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ijdna3{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #i6prfp{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ixm94a{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #isdltg{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ikck93{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #iqe23l{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #irwauh{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #i9927r{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iulch6{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #imt8qk{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iq86kv{
//   height:fit-content;
//   max-height:100%;
//   width:69%;
//   border-style:solid;
//   border-color:rgb(247, 244, 250);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
// }
// #iwav8l{
//   height:171px;
//   max-height:100%;
//   width:100%;
//   text-align:center;
// }
// #iys9wo{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ilbfak{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// #i0f9qk{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #ineomo{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #itxfwr{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #iyhelc{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ikjohg{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #idkaxa{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #il8q1f{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #itgolu{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ihl8ex{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #iyiyoy{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iteh7h{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #ilpyqk{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iw7953{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #i57s9f{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #ily70i{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #im7ocv{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iwh2lc{
//   height:357px;
//   max-height:100%;
//   width:69%;
//   border-style:solid;
//   border-color:rgba(70, 111, 250, 1);
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-bottom-right-radius:10px;
//   border-bottom-left-radius:10px;
//   border-top-width:2px;
//   border-right-width:2px;
//   border-bottom-width:2px;
//   border-left-width:2px;
//   box-shadow:rgba(70, 111, 250, 1) 5px 5px 10px;
// }
// .pricing-card-container.lifetime{
//   border-color:rgba(89, 112, 247, 1);
//   border-top-width:5px;
//   border-right-width:5px;
//   border-bottom-width:5px;
//   border-left-width:5px;
// }
// #ia8sxo{
//   height:171px;
//   max-height:100%;
//   width:100%;
//   text-align:center;
// }
// #ieo7mi{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iknpf5{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:h;
//   20:r;
//   21:e;
//   22:e;
//   23:{
//     ;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:null;
//     32:null;
//     33:m;
//     34:a;
//     35:r;
//     36:g;
//     37:i;
//     38:n;
//     39::;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:null;
//     46:0;
//     47:;
//     ;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:null;
//     56:null;
//     57:}
//   ;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
//   65:null;
//   66:null;
// }
// #i9b22g{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #ivw9oz{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #il0gpd{
//   height:34px;
//   max-height:100%;
//   width:100%;
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   column-gap:1rem;
// }
// #ilx3en{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:p;
//   11:a;
//   12:r;
//   13:a;
//   14:g;
//   15:r;
//   16:a;
//   17:p;
//   18:h;
//   19:{
//     ;
//     20:null;
//     21:null;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:m;
//     30:a;
//     31:r;
//     32:g;
//     33:i;
//     34:n;
//     35::;
//     36:0;
//     37:null;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:;
//     ;
//     44:null;
//     45:null;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:}
//   ;
//   54:null;
//   55:null;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
// }
// #iz29ek{
//   justify-content:center;
//   padding-top:80px;
//   padding-bottom:80px;
//   padding-left:20px;
//   padding-right:20px;
// }
// #ik2rdi{
//   max-width:1200px;
//   align-items:center;
//   display:flex;
//   flex-direction:column;
//   padding-top:50px;
//   padding-right:50px;
//   padding-bottom:50px;
//   padding-left:50px;
//   border-top-left-radius:50px;
//   border-top-right-radius:50px;
//   border-bottom-right-radius:50px;
//   border-bottom-left-radius:50px;
//   border-top-width:1px;
//   border-right-width:1px;
//   border-bottom-width:1px;
//   border-left-width:1px;
//   border-top-style:solid;
//   border-right-style:solid;
//   border-bottom-style:solid;
//   border-left-style:solid;
//   border-top-color:rgba(0,0,0,0.06);
//   border-right-color:rgba(0,0,0,0.06);
//   border-bottom-color:rgba(0,0,0,0.06);
//   border-left-color:rgba(0,0,0,0.06);
//   background-image:radial-gradient(515px at 50% 141%,rgba(35,98,235,0.22) 10%,white 90%);
//   background-position:0px 0px;
//   background-size:100% 100%;
//   background-repeat:repeat;
//   background-attachment:scroll;
//   background-origin:padding-box;
//   box-shadow:0px 10px 15px 0 rgba(0,0,0,0.07);
//   width:90%;
//   margin-right:auto;
//   margin-left:auto;
// }
// #itszdv{
//   0:null;
//   1:null;
//   2:null;
//   3:null;
//   4:null;
//   5:null;
//   6:null;
//   7:null;
//   8:null;
//   9:.;
//   10:h;
//   11:e;
//   12:a;
//   13:d;
//   14:i;
//   15:n;
//   16:g;
//   17:-;
//   18:t;
//   19:w;
//   20:o;
//   21:{
//     ;
//     22:null;
//     23:null;
//     24:null;
//     25:null;
//     26:null;
//     27:null;
//     28:null;
//     29:null;
//     30:null;
//     31:m;
//     32:a;
//     33:r;
//     34:g;
//     35:i;
//     36:n;
//     37::;
//     38:0;
//     39:null;
//     40:0;
//     41:null;
//     42:0;
//     43:null;
//     44:0;
//     45:;
//     ;
//     46:null;
//     47:null;
//     48:null;
//     49:null;
//     50:null;
//     51:null;
//     52:null;
//     53:null;
//     54:null;
//     55:}
//   ;
//   56:null;
//   57:null;
//   58:null;
//   59:null;
//   60:null;
//   61:null;
//   62:null;
//   63:null;
//   64:null;
// }
// #id7x{
//   display:flex;
//   padding-left:10px;
//   padding-right:10px;
//   justify-content:center;
//   align-items:center;
//   column-gap:4px;
// }
// #iv3be5{
//   justify-content:center;
//   padding-top:80px;
//   padding-left:20px;
//   padding-right:20px;
//   padding-bottom:80px;
// }
// #ilriti{
//   max-width:1200px;
//   display:flex;
//   flex-direction:column;
// }
// #im0rle{
//   flex-direction:column;
// }
// #i1hx7l{
//   display:flex;
//   gap:30px;
//   justify-content:center;
//   margin-top:30px;
//   margin-bottom:30px;
//   flex-direction:row-reverse;
// }
// #it6g1v{
//   padding:10px;
//   text-align:center;
//   font-size:0.8rem;
//   margin-top:20px;
//   opacity:75%;
// }
// .lnd-text-blue{
//   color:rgb(36,99,235);
// }
// @media (max-width: 1560px){
//   #im1g{
//     height:2000px;
//   }
//   .lnd-grid-column{
//     width:100%;
//     flex-direction:column;
//     justify-content:start;
//   }
//   .button{
//     padding-top:8px;
//     padding-bottom:8px;
//     padding-right:20px;
//     padding-left:20px;
//     color:rgb(247, 247, 247);
//   }
//   .button.btn-secondary{
//     background:rgb(255, 255, 255);
//     border-color:rgb(1, 91, 220);
//     color:rgb(1, 1, 1);
//     border-top-width:2px;
//     border-right-width:2px;
//     border-bottom-width:2px;
//     border-left-width:2px;
//   }
//   .heading-one{
//     font-size:4rem;
//     text-align:center;
//   }
//   #i8jhar{
//     color:rgba(0,0,255,1);
//   }
//   #i89wh{
//     padding-top:1rem;
//     padding-bottom:1rem;
//     padding-right:1rem;
//     padding-left:1rem;
//     column-gap:5px;
//     display:flex;
//   }
//   .container{
//     height:512px;
//     flex-direction:column;
//   }
//   .secondary-heading{
//     font-size:3rem;
//     text-align:center;
//   }
//   .columns{
//     height:fit-content;
//   }
//   .how-it-works-section{
//     width:100%;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     display:flex;
//     border-style:solid;
//     border-color:rgba(25, 113, 194, 1);
//     border-top-left-radius:10px;
//     border-top-right-radius:10px;
//     border-bottom-right-radius:10px;
//     border-bottom-left-radius:10px;
//     max-width:1200px;
//     margin-right:auto;
//     margin-left:auto;
//     height:fit-content;
//   }
//   #in964h{
//     width:146px;
//     height:45px;
//     font-size:2rem;
//   }
//   #ij1ia3{
//     width:146px;
//     height:45px;
//     font-size:2rem;
//   }
//   #ib5fnj{
//     width:146px;
//     height:45px;
//     font-size:2rem;
//   }
//   .containers{
//     column-gap:10px;
//     height:203px;
//     border-color:rgba(25, 112, 194, 1);
//     border-top-width:2px;
//     border-bottom-width:2px;
//     border-right-width:2px;
//     border-left-width:2px;
//     border-top-left-radius:10px;
//     border-top-right-radius:10px;
//     border-bottom-right-radius:10px;
//     border-bottom-left-radius:10px;
//     border-style:solid;
//   }
//   .lnd-icon.lnd-feature-icon{
//     display:flex;
//     justify-content:center;
//     align-items:center;
//   }
//   #ivzepv{
//     --fill:0;
//     --weight:400;
//   }
//   #ig4hti{
//     --fill:0;
//     --weight:400;
//   }
//   #iv37of{
//     --fill:0;
//     --weight:400;
//   }
//   .feature-grid{
//     display:grid;
//     grid-template-columns:1fr 1fr 1fr;
//   }
// }
// @media (max-width: 1536px){
//   #i9rwd8{
//     width:686px;
//   }
// }
// @media (max-width:992px){
//   .lnd-grid-row{
//     flex-direction:column;
//   }
//   .lnd-grid-row{
//     flex-direction:column;
//   }
//   #iyd2{
//     flex-direction:row;
//   }
// }
// @media (max-width: 880px){
//   #im1g{
//     height:fit-content;
//   }
//   #rndom{
//     width:100%;
//     max-width:1200px;
//   }
//   #ilmalz{
//     width:100%;
//   }
//   #i7yli9{
//     width:633px;
//     height:290px;
//   }
//   #ix4n9i{
//     align-items:center;
//   }
// }
// @media (max-width: 844px){
//   #ix4n9i{
//     flex-direction:column;
//     justify-content:end;
//   }
// }
// @media (max-width: 810px){
//   .heading-one{
//     height:229px;
//   }
//   #i7yli9{
//     width:673px;
//     height:308px;
//   }
//   #iqibtb{
//     height:449px;
//   }
//   #ivw03p{
//     height:fit-content;
//   }
//   #ix4n9i{
//     row-gap:2rem;
//   }
// }
// @media (max-width: 768px){
//   .columns{
//     flex-direction:column;
//     height:100%;
//   }
//   .grid{
//     grid-template-columns:repeat(1, 1fr);
//     grid-template-rows:repeat(4, 1fr);
//   }
// }
// @media (max-width: 600px){
//   #im1g{
//     height:fit-content;
//   }
//   .card-container{
//     display:inline;
//   }
//   #iamtqj{
//     display:none;
//   }
//   #rndom{
//     height:811px;
//   }
//   #ilmalz{
//     font-size:2.4rem;
//     width:325px;
//     height:fit-content;
//     line-height:2.5rem;
//   }
//   .heading-one{
//     line-height:rem;
//     width:350px;
//     height:214px;
//     margin-top:4rem;
//   }
//   #i9rwd8{
//     width:83%;
//     text-align:center;
//   }
//   #i89wh{
//     height:254px;
//     column-gap:10px;
//     row-gap:10px;
//   }
//   .enum-container{
//     flex-wrap:wrap;
//   }
//   #i3yikv{
//     height:79px;
//   }
//   #i2lj76{
//     display:inline;
//   }
//   #i7yli9{
//     width:348px;
//     height:159px;
//   }
//   #iqibtb{
//     height:615px;
//   }
//   #itimp{
//     height:313px;
//   }
//   #iwulci{
//     height:fit-content;
//     row-gap:1rem;
//   }
//   #iqequd{
//     width:331px;
//     height:281px;
//   }
//   .heading-three{
//     font-size:2rem;
//   }
//   #i7dixa{
//     flex-direction:column-reverse;
//     height:556px;
//   }
//   #iuxgon{
//     height:464px;
//   }
//   #i9p7ng{
//     flex-direction:column;
//     height:626px;
//   }
//   #invveh{
//     height:794px;
//     justify-content:center;
//     flex-direction:column;
//   }
//   #ipq4bt{
//     height:616px;
//     flex-direction:column-reverse;
//   }
//   #i6hige{
//     height:261px;
//     justify-content:center;
//     flex-direction:column;
//   }
//   #is498f{
//     height:fit-content;
//     justify-content:center;
//     flex-direction:column;
//   }
//   #iogqps{
//     height:439px;
//   }
//   #ihqpw3{
//     height:153px;
//   }
//   #iwav8l{
//     height:167px;
//   }
//   #ia8sxo{
//     height:173px;
//   }
//   #itszdv{
//     text-align:center;
//   }
//   #im0rle{
//     text-align:center;
//   }
// }
// @media (max-width: 430px){
//   .heading-one{
//     font-size:2rem;
//     height:118px;
//   }
//   #i8jhar{
//     color:rgba(13, 110, 253, 1);
//   }
// }
// @media (max-width: 390px){
//   .heading-one{
//     height:128px;
//     font-size:2rem;
//   }
//   .lnd-heading{
//     width:265px;
//     font-size:1rem;
//   }
// }
// @media (max-width: 280px){
//   h1{
//     font-size:1.2rem;
//   }
// }
// `,
//       },
//     },
//   });


};

export default templates;