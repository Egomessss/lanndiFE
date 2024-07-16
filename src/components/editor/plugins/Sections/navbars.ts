import type { Editor } from 'grapesjs';


const navbars = (editor: Editor) => {

    const id = 'navbar';
    const label = 'Navbar';

    const { Components } = editor;


    // editor.Blocks.add('navbar-burger', {
    //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    //   label: 'W/Burger And Dropdown',
    //   category: 'sections-navbars',
    //   select: true,
    //   content: { type: 'navbar-burger' },
    // });
    //
    Components.addType('navbar-burger', {
        model: {
          defaults: {
            script: function() {
              const hamburger = document.querySelector('.nb-hamburger-btn');
              const navMenu = document.querySelector('.nb-nav-menu');

              if (hamburger && navMenu) {
                hamburger.addEventListener('click', () => {
                  hamburger.classList.toggle('active');
                  navMenu.classList.toggle('active');
                });
              }

              // const navLink = document.querySelectorAll(".nav-link");
              //
              // navLink.forEach(n => n.addEventListener("click", closeMenu));
              //
              // function closeMenu() {
              //   hamburger?.classList.remove("active");
              //   navMenu?.classList.remove("active");
              // }
            },
            name: 'Navbar W/Burger Menu',
            components:
              `  
   <header class="nb-header">
        <nav class="nb-navbar">
            <a href="#" class="nb-nav-logo">lanndi</a>
            <div data-gjs-removable="false" class="nb-nav-menu">
                    <a href="#" class="nb-nav-link">Services</a>
               
                    <a href="#" class="nb-nav-link">Blog</a>
              
                    <a href="#" class="nb-nav-link">About</a>
             
                    <a href="#" class="nb-nav-link">Contact</a>
            </div>
            <div data-gjs-removable="false"  class="nb-hamburger-btn">
                <span data-gjs-selectable="false" data-gjs-badgable="false" data-gjs-hoverable="false" data-gjs-removable="false" data-gjs-copyable="false" class="nb-bar"></span>
                <span data-gjs-selectable="false" data-gjs-badgable="false" data-gjs-hoverable="false" data-gjs-removable="false" data-gjs-copyable="false"  class="nb-bar"></span>
                <span data-gjs-selectable="false" data-gjs-badgable="false" data-gjs-hoverable="false" data-gjs-removable="false" data-gjs-copyable="false"  class="nb-bar"></span>
            </div>
        </nav>
</header>`,
            styles:
              `
      .nb-header{
  border-bottom:1px solid #E2E8F0;
}
.nb-navbar{
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
a{
  text-decoration:none;
}
.nb-nav-logo{
  font-size:1.5rem;
  font-weight:500;
  color:#482ff7;
}
.nb-nav-menu{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  width:fit-content;
  column-gap:2rem;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
  z-index:1000;
  background-color:#fff;
}

.nb-nav-link{
  font-size:1rem;
  font-weight:400;
  color:#475569;
}
.nb-nav-link:hover{
  color:#482ff7;
}
.nb-hamburger-btn{
  display:none;
}
.nb-bar{
  display:block;
  width:25px;
  height:3px;
  margin:5px auto;
  -webkit-transition:all 0.3s ease-in-out;
  transition:all 0.3s ease-in-out;
  background-color:#101010;
}

@media only screen and (max-width: 880px){
  .nb-nav-menu{
    position:fixed;
    left:-100%;
    top:3rem;
    flex-direction:column;
    row-gap:1rem;
    background-color:#fff;
    width:100%;
    border-radius:10px;
    text-align:center;
    transition:0.3s;
    box-shadow:0 10px 27px rgba(0, 0, 0, 0.05);
  }
  
  .nb-nav-menu.active {
        left: 0;
    }
    
  .nb-hamburger-btn{
    display:block;
    cursor:pointer;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
    z-index: 1000;
  }
  
    .nb-hamburger-btn.active .nb-bar:nth-child(2) {
        opacity: 0;
    }

    .nb-hamburger-btn.active .nb-bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .nb-hamburger-btn.active .nb-bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

}
`,
          },
        },
      },
    )
    ;

    // editor.Blocks.add('navbar-burger-two', {
    //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    //   label: 'W/Burger And Sidebar',
    //   category: 'sections-navbars',
    //   select: true,
    //   content: { type: 'navbar-burger-two' },
    // });

    Components.addType('navbar-burger-two', {
      model: {
        defaults: {
          script: function() {
            const mobileNav = document.querySelector('.hamburger');
            const navbar = document.querySelector('.menubar');

            const toggleNav = () => {
              navbar?.classList.toggle('active');
              mobileNav?.classList.toggle('hamburger-active');
            };
            mobileNav?.addEventListener('click', () => toggleNav());
          },
          name: 'Navbar W/Burger Menu',
          components: `  
   <nav>
      <div class="logo">
        <img src="assets/Logo64x64.png" alt="logo" />
        <h1>LOGO</h1>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </nav>
    <div class="menubar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>`,
          styles: `
      nav {
  padding: 5px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 1;
}
nav .logo {
  display: flex;
  align-items: center;
}
nav .logo img {
  height: 25px;
  width: auto;
  margin-right: 10px;
}
nav .logo h1 {
  font-size: 1.1rem;
  background: linear-gradient(to right, #b927fc 0%, #2c64fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav ul {
  list-style: none;
  display: flex;
}
nav ul li {
  margin-left: 1.5rem;
}
nav ul li a {
  text-decoration: none;
  color: #000;
  font-size: 95%;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 5px;
}

nav ul li a:hover {
  background-color: #f5f5f5;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger .line {
  width: 25px;
  height: 1px;
  background-color: #1f1f1f;
  display: block;
  margin: 7px auto;
  transition: all 0.3s ease-in-out;
}
.hamburger-active {
  transition: all 0.3s ease-in-out;
  transition-delay: 0.6s;
  transform: rotate(45deg);
}

.hamburger-active .line:nth-child(2) {
  width: 0px;
}

.hamburger-active .line:nth-child(1),
.hamburger-active .line:nth-child(3) {
  transition-delay: 0.3s;
}

.hamburger-active .line:nth-child(1) {
  transform: translateY(12px);
}

.hamburger-active .line:nth-child(3) {
  transform: translateY(-5px) rotate(90deg);
}

.menubar {
  position: absolute;
  top: 0;
  left: -60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  height: 100vh;
  padding: 20% 0;
  background: rgba(255, 255, 255);
  transition: all 0.5s ease-in;
  z-index: 2;
}
.active {
  left: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.menubar ul {
  padding: 0;
  list-style: none;
}
.menubar ul li {
  margin-bottom: 32px;
}

.menubar ul li a {
  text-decoration: none;
  color: #000;
  font-size: 95%;
  font-weight: 400;
  padding: 5px 10px;
  border-radius: 5px;
}

.menubar ul li a:hover {
  background-color: #f5f5f5;
}
@media screen and (max-width: 880px) {
  .hamburger {
    display: block;
  }
  nav ul {
    display: none;
  }
}
`,
        },
      },
    });


    editor.Blocks.add('navbar-simple', {
      media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/navbar-cta.png',
      label: 'W/Cta',
      category: 'sections-navbars',
      select: true,
      content: { type: 'navbar-simple' },
    });

    Components.addType('navbar-simple', {
      model: {
        defaults: {
          name: 'Navbar W/Cta',
          components: `  
   <header class="nwa-header">
        <nav class="nwa-navbar">
            <a href="#" class="nwa-nav-logo">lanndi</a>
            <a class="nwa-link-box"><button class="nwa-button"><p class="nwa-button-text">Button
</p></button></a>
        </nav>
</header>`,
          styles: `
      .nwa-header{
  border-bottom:1px solid #E2E8F0;
}
.nwa-navbar{
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

.nwa-button{
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
.nwa-button:hover{
opacity:0.9;
}
.nwa-button-text{
margin-top:0;
margin-right:0;
margin-bottom:0;
margin-left:0;
width:fit-content;
height:fit-content;
}

.nwa-nav-logo{
  font-size:1.5rem;
  font-weight:500;
  color:#482ff7;
}

.nwa-link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding:10px;
  max-width:100%;
  text-decoration:none;
  cursor:pointer;
}
.nwa-link-box:empty{
  text-decoration:none;
  padding:5px;
}
.nwa-link-box:empty:before{
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



`,
        },
      },
    });

  editor.Blocks.add('navbar', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-16%20162949.png',
    label: 'W/Burger Menu',
    category: 'sections-navbars',
    select: true,
    content: { type: 'navbar' },
  });


  const navbarPfx = 'navbar';
    const idContainer = `${id}-container`;
    const idNavMenu = `${id}-nav-menu`;
    const idNavMenuLink = `${id}-nav-menu-link`;
    const idBurgerMenu = `${id}-burger-menu`;
    const idBurgerMenuLine = `${id}-burger-menu-line`;

    Components.addType(id, {
      model: {
        defaults: {
          // droppable: false,
          name: label,
          attributes: { class: navbarPfx },
          components: { type: idContainer },
          styles: `
          .${navbarPfx} {
           max-width: 1200px;
            min-height: 50px;
            width: 100%;
          }

          .${navbarPfx}-container {
            width:90%;
            margin-right:auto;
            margin-left:auto;
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            align-items: center;
          }

          .${navbarPfx}-items-c {
            display: flex;
         justify-content: space-between;
            align-items: center;
            column-gap: 10px;
          }

          .${navbarPfx}-container::after {
            clear: both;
            display: block;
          }

          .${navbarPfx}-brand-link-box {
            
            height: fit-content;
            width: fit-content;
       text-decoration: none;
       color: inherit;
    
            padding: 10px 10px 10px 10px;
              display: flex;
         justify-content: space-between;
            align-items: center;
            column-gap: 10px;
          }
          
           .${navbarPfx}-brand-img{
            
            height: 25px;
            width: 25px;
          }

          .${navbarPfx}-menu {
            padding: 10px 0;
            display: flex;
         justify-content: space-between;
            align-items: center;
            column-gap: 10px;
            margin: 0;
          }

          .${navbarPfx}-menu-link {
            margin: 0;
            color: inherit;
            text-decoration: none;
            display: inline-block;
            padding: 10px 15px;
          }

          .${navbarPfx}-burger {
            margin: 10px 0;
            width: 45px;
            padding: 5px 10px;
            display: none;
            cursor: pointer;
          }

          .${navbarPfx}-burger-line {
           display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
          }

          @media (max-width: 880px) {
  .${navbarPfx}-items-c {
    display: none; /* Hide by default */
    position: fixed; /* Make it fixed to cover the whole screen */
    top: 4rem;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: white; /* Semi-transparent background */
    z-index: 1050; /* Ensure it's above other content */
    overflow-y: auto; /* Enable scroll if content is taller than the screen */
    padding: 1rem 1rem 1rem 1rem;
  }
  
   .${navbarPfx}-menu {
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: flex-start; /* Align items to the top */
    align-items: center; /* Center items horizontally */
    row-gap: 1rem; /* Remove the gap between items */
    background-color: white; /* Semi-transparent background */
    z-index: 1050; /* Ensure it's above other content */
    overflow-y: auto; /* Enable scroll if content is taller than the screen */
    padding-top: 2rem; /* Add some space at the top */
    padding-bottom: 2rem; /* Add some space at the top */
  }
  

  .${navbarPfx}-burger {
    display: block; /* Ensure burger menu is always displayed */
  }

  .${navbarPfx}-menu-link {
    display: block; /* Stack links vertically */
    width: 100%; /* Full width links */
    text-align: center; /* Center text */
    padding: 15px; /* Increase padding */
    border-bottom: 1px solid #ddd; /* Add a separator between links */
  }
   .${navbarPfx}-burger-line:nth-child(2).active {
    opacity: 0;
}

 .${navbarPfx}-burger-line:nth-child(1).active {
    transform: translateY(8px) rotate(45deg);
    
}

 .${navbarPfx}-burger-line:nth-child(3).active {
    transform: translateY(-8px) rotate(-45deg);
}
}
        `,
        },
      },
    });

    Components.addType(idContainer, {
      model: {
        defaults: {
          attributes: { class: `${navbarPfx}-container`, 'data-gjs': 'navbar' },
          name: 'Navbar Container',
          // droppable: false,
          // draggable: false,
          removable: false,
          copyable: false,
          highlightable: false,
          components: [
              '<a class="navbar-brand-link-box" href="/"><img src="https://pub-f5a07b52c95f477cb476a4dbda31ebbe.r2.dev/assets/UxiMLsmmatQxFMdpnmdGr2QFqOMcagbkchqEoyG8.png" class="navbar-brand-img"/><p  class="paragraph">lanndi</p></a>'
            ,
            { type: idBurgerMenu },
            {
              attributes: { class: `${navbarPfx}-items-c`, 'data-gjs': 'navbar-items' },
              components: { type: idNavMenu },
            },
          ],
        },
      },
    });

    Components.addType(idNavMenu, {
      model: {
        defaults: {
          name: 'Navbar Menu',
          tagName: 'nav',
          attributes: { class: `${navbarPfx}-menu` },
          components: [
            { type: idNavMenuLink, components: 'Pricing' },
            { type: idNavMenuLink, components: 'About' },
            { type: idNavMenuLink, components: 'Contact' },
          ],
        },
      },
    });

    Components.addType(idNavMenuLink, {
      extend: 'link',
      model: {
        defaults: {
          name: 'Menu link',
          draggable: `[data-gjs-type="${idNavMenu}"]`,
          attributes: { class: `${navbarPfx}-menu-link` },
        },
      },
    });

    Components.addType(idBurgerMenu, {
      model: {
        defaults: {
          name: 'Burger',
          draggable: false,
          droppable: false,
          copyable: false,
          removable: false,
          script: function() {
            const burgerMenu = document.querySelector('.navbar-burger');

            // Step 2: Add an event listener to the burger menu
            burgerMenu?.addEventListener('click', () => {
              console.log('click');
              // Step 4: Select all burger lines within the burger menu
              const burgerLines = burgerMenu.querySelectorAll('.navbar-burger-line');
              console.log('burger lines',burgerLines);
              // Step 5: Iterate over each burger line and toggle the 'active' class
              burgerLines.forEach(line => {
                line.classList.toggle('active');
              });
            });

            // @ts-ignore
            const currentEl = this as HTMLElement;
            const stringCollapse = 'gjs-collapse';
            const clickEvent = 'click';
            const transitProp = 'max-height';
            let transEndAdded: any;
            let isAnimating = 0;

            const getTransitionEvent = function() {
              const el = document.createElement('void');
              const transitions: Record<string, string> = {
                'transition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd',
              };

              for (let t in transitions) {
                // @ts-ignore
                if (el.style[t] !== undefined) {
                  return transitions[t];
                }
              }
            };

            const transitEndEvent = getTransitionEvent();

            var getElHeight = function(el: HTMLElement): number {
              const style = window.getComputedStyle(el);
              const elDisplay = style.display;
              // @ts-ignore
              const elMaxHeight = parseInt(style[transitProp]);

              if (elDisplay !== 'none' && elMaxHeight !== 0) {
                return el.offsetHeight;
              }

              el.style.height = 'auto';
              el.style.display = 'block';
              el.style.position = 'absolute';
              el.style.visibility = 'hidden';
              const height = el.offsetHeight;
              el.style.height = '';
              el.style.display = '';
              el.style.position = '';
              el.style.visibility = '';

              return height;
            };

            var toggleSlide = function(el: HTMLElement) {
              isAnimating = 1;
              var elMaxHeight = getElHeight(el);
              var elStyle: any = el.style;
              elStyle.display = 'block';
              elStyle.transition = `${transitProp} 0.25s ease-in-out`;
              elStyle.overflowY = 'hidden';


              if (elStyle[transitProp] == '') {
                elStyle[transitProp] = 0;
              }

              if (parseInt(elStyle[transitProp]) == 0) {
                elStyle[transitProp] = '0';
                setTimeout(function() {
                  elStyle[transitProp] = elMaxHeight + 'px';
                }, 10);
              } else {
                elStyle[transitProp] = '0';
              }
            };

            const toggle = function(ev: Event) {
              ev.preventDefault();
              if (isAnimating) return;

              const navParent = currentEl.closest(`[data-gjs=navbar]`);
              const navItems = navParent?.querySelector(`[data-gjs=navbar-items]`) as HTMLElement;


              navItems && toggleSlide(navItems);

              if (!transEndAdded) {
                // @ts-ignore
                navItems?.addEventListener(transitEndEvent, function() {
                  isAnimating = 0;
                  const itemsStyle: any = navItems.style;
                  if (parseInt(itemsStyle[transitProp]) == 0) {
                    itemsStyle.display = '';
                    itemsStyle[transitProp] = '';
                  }
                });
                transEndAdded = 1;
              }
            };

            if (!(stringCollapse in currentEl)) {
              currentEl.addEventListener(clickEvent, toggle);
            }

            // @ts-ignore
            currentEl[stringCollapse] = 1;
          },
          attributes: { class: `${navbarPfx}-burger` },
          components: [
            { type: idBurgerMenuLine },
            { type: idBurgerMenuLine },
            { type: idBurgerMenuLine },
          ],
        },
      },
    });

    Components.addType(idBurgerMenuLine, {
      model: {
        defaults: {
          name: 'Burger Line',
          droppable: false,
          draggable: false,
          selectable: false,
          copyable: false,
          removable: false,
          highlightable: false,
          hoverable: false,
          attributes: { class: `${navbarPfx}-burger-line` },
        },
      },
    });
  }
;
export default navbars;