import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from './index';

export default (editor: Editor) => {
  const { Components } = editor;

  editor.Blocks.add('footer-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Footer Multi-column',
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
        components: ` <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">lanndi</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212<br>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2024 Something. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with lanndi</span>
    </div>
  </div>
</footer>
    `,
        styles: `.footer {
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: #2f2f2f;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}

.footer > * {
  flex:  1 100%;
}

.footer__addr {
  margin-right: 1.25em;
  margin-bottom: 2em;
}

.footer__logo {
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  text-transform: lowercase;
  font-size: 1.5rem;
}

.footer__addr h2 {
  margin-top: 1.3em;
  font-size: 15px;
  font-weight: 400;
}

.nav__title {
  font-weight: 400;
  font-size: 15px;
}

.footer address {
  font-style: normal;
  color: #999;
}

.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgb(33, 33, 33, 0.07);
  border-radius: 100px;
  color: #2f2f2f;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
  flex-flow: row wrap;
}

.footer__nav > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.nav__ul a {
  color: #999;
}

.nav__ul--extra {
  column-count: 2;
  column-gap: 1.25em;
}

.legal {
  display: flex;
  flex-wrap: wrap;
  color: #999;
}
  
.legal__links {
  display: flex;
  align-items: center;
}

.heart {
  color: #2f2f2f;
}

@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
  }
  
  .nav__item--extra {
    flex-grow: 2;
  }
  
  .footer__addr {
    flex: 1 0px;
  }
  
  .footer__nav {
    flex: 2 0px;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('footer-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Footer Simple',
    category: 'sections-footers',
    select: true,
    content: { type: 'footer-two' },
  });

  Components.addType('footer-two', {
    model: {
      defaults: {
        droppable: false,
        name: 'Footer One',
        attributes: { class: 'footer-one' },
        components: `  <!-- footer section start -->
   <footer class="footer">
  <div class="footer__redes">
    <ul class="footer__redes-wrapper">
      <li>
        <a href="#" class="footer__link">
      
        <span>facebook</span>  
        </a>
      </li>
      <li>
        <a href="#" class="footer__link">
        
            <span>twitter</span>  
        </a>
      </li>
      <li>
        <a href="#" class="footer__link">
    
            <span>instagram</span>  
        </a>
      </li>
      <li>
        <a href="#" class="footer__link">
     
           <span>youtube</span>  
        </a>
      </li>
    </ul>
  </div>
  <div class="separador"></div>
  <p class="footer__texto">Copyright @ 2024</p>
</footer>
    <!-- footer copy right section end -->`,
        styles: `img {
\t width: 100%;
\t vertical-align: top;
}
 a {
\t text-decoration: none;
\t color: inherit;
}
 .footer {
\t margin-top: 80px;
}
 .footer__redes-wrapper {
\t display: flex;
\t justify-content: center;
\t gap: 40px;
\t flex-wrap: wrap;
\t max-width: 600px;
\t margin: 45px auto;
}
 .footer__redes-wrapper li {
\t display: inline-block;
}
 .footer__redes-wrapper li:hover {
\t color: var(--gray);
}
 .footer__link {
\t text-transform: uppercase;
\t font-family: var(--title-font);
\t font-size: rem(14);
display:flex;
align-items:center;
gap:2;
}
 .footer .fab {
\t margin-right: 8px;
}
 .footer__texto {
\t color: var(--light-gray);
\t text-align: center;
}
 .gallery__grid {
\t display: grid;
\t grid-template-columns: repeat(6, 1fr);
}
 .gallery__photo {
\t position: relative;
\t display: inline-block;
}
 .gallery__fade {
\t position: absolute;
\t top: 0;
\t left: 0;
\t width: 100%;
\t height: 100%;
\t background-color: var(--dark-fade);
\t display: flex;
\t justify-content: center;
\t align-items: center;
\t opacity: 0;
}
 .gallery__fade:hover {
\t opacity: 1;
}
 .gallery__icon {
\t color: #fff;
\t width: 50px;
\t height: 50px;
}
 .separador {
\t background-color: gray;
\t height: 2px;
\t max-width: 30px;
\t margin: 15px auto 20px;
}
 .footer__redes-wrapper li, .gallery__fade {
\t transition: all ease 0.3s;
}
 
`,
      },
    },
  });


}