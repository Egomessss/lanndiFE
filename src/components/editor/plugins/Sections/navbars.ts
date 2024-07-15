import type { Editor } from 'grapesjs';


const navbars = (editor: Editor) => {

  const id = 'navbar';
  const label = 'Navbar';

  const { Components } = editor;

  const script = function () {
    const hamburger = document.querySelector(".hamburger-btn");
    const navMenu = document.querySelector(".nav-menu");

    hamburger?.addEventListener("click", mobileMenu);
    hamburger?.addEventListener("ontouchstart", mobileMenu);

    function mobileMenu() {
      hamburger?.classList.toggle("active");
      navMenu?.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));
    navLink.forEach(n => n.addEventListener("ontouchstart", closeMenu));

    function closeMenu() {
      hamburger?.classList.remove("active");
      navMenu?.classList.remove("active");
    }
  }

  editor.Blocks.add('navbar-burger', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'W/Burger',
    category: 'sections-navbars',
    select: true,
    content: { type: 'navbar-burger' },
  });
  Components.addType('navbar-burger', {
    model: {
      defaults: {
        script: script,
        name: 'Navbar W/Burger Menu',
        components: `  
   <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo">lanndi</a>
            <div data-gjs-removable="false" class="nav-menu">
                    <a href="#" class="nav-link">Services</a>
               
                    <a href="#" class="nav-link">Blog</a>
              
                    <a href="#" class="nav-link">About</a>
              
                    <a href="#" class="nav-link">Contact</a>
            </div>
            <button type="button" data-gjs-removable="false"  class="hamburger-btn">
                <span data-gjs-selectable="false" data-gjs-removable="false" class="bar"></span>
                <span data-gjs-selectable="false" data-gjs-removable="false" class="bar"></span>
                <span data-gjs-selectable="false" data-gjs-removable="false" class="bar"></span>
            </button>
        </nav>
</header>`,
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
a{
  text-decoration:none;
}
.nav-logo{
  font-size:1.5rem;
  font-weight:500;
  color:#482ff7;
}
.nav-menu{
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
}

.nav-link{
  font-size:1rem;
  font-weight:400;
  color:#475569;
}
.nav-link:hover{
  color:#482ff7;
}
.hamburger-btn{
  display:none;
}
.bar{
  display:block;
  width:25px;
  height:3px;
  margin:5px auto;
  -webkit-transition:all 0.3s ease-in-out;
  transition:all 0.3s ease-in-out;
  background-color:#101010;
}

@media only screen and (max-width: 880px){
  .nav-menu{
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
  
  .nav-menu.active {
        left: 0;
    }
    
 
  .hamburger-btn{
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
  
    .hamburger-btn.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger-btn.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger-btn.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

}
`,
      },
    },
  });


  editor.Blocks.add('navbar-simple', {
    media:'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/navbar-cta.png',
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



  // editor.Blocks.add('navbar', {
  //   media: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-navbar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 9l16 0" /></svg>`,
  //   label: 'Navbar',
  //   category: 'sections-navbar',
  //   select: true,
  //   content: { type: id },
  // });





  const navbarPfx = id;
  const idContainer = `${id}-container`;
  const idNavMenu = `${id}-nav-menu`;
  const idNavMenuLink = `${id}-nav-menu-link`;
  const idBurgerMenu = `${id}-burger-menu`;
  const idBurgerMenuLine = `${id}-burger-menu-line`;

  Components.addType(id, {
    model: {
      defaults: {
        droppable: false,
        name: label,
        attributes: { class: navbarPfx },
        components: { type: idContainer },
        styles: `
          .${navbarPfx} {
            background-color: #222;
            color: #ddd;
            min-height: 50px;
            width: 100%;
          }

          .${navbarPfx}-container {
            max-width: 950px;
            margin: 0 auto;
            width: 95%;
          }

          .${navbarPfx}-items-c {
            display: inline-block;
            float: right;
          }

          .${navbarPfx}-container::after {
            content: "";
            clear: both;
            display: block;
          }

          .${navbarPfx}-brand {
            vertical-align: top;
            display: inline-block;
            padding: 5px;
            min-height: 50px;
            min-width: 50px;
            color: inherit;
            text-decoration: none;
          }

          .${navbarPfx}-menu {
            padding: 10px 0;
            display: block;
            float: right;
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
            float: right;
            cursor: pointer;
          }

          .${navbarPfx}-burger-line {
            padding: 1px;
            background-color: white;
            margin: 5px 0;
          }

          @media (max-width: 768px) {
            .${navbarPfx}-items-c {
              display: none;
              width: 100%;
            }

            .${navbarPfx}-burger {
              display: block;
            }

            .${navbarPfx}-menu {
              width: 100%;
            }

            .${navbarPfx}-menu-link {
              display: block;
            }
          }
        `,
      },
    }
  });

  Components.addType(idContainer, {
    model: {
      defaults: {
        attributes: { class: `${navbarPfx}-container`, 'data-gjs': 'navbar' },
        name: 'Navbar Container',
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
        components: [
          {
            type: 'link',
            attributes: { class: `${navbarPfx}-brand`, href: '/' },
          },
          { type: idBurgerMenu },
          {
            attributes: { class: `${navbarPfx}-items-c`, 'data-gjs': 'navbar-items' },
            components: { type: idNavMenu },
          }
        ]
      }
    }
  });

  Components.addType(idNavMenu, {
    model: {
      defaults: {
        name: 'Navbar Menu',
        tagName: 'nav',
        attributes: { class: `${navbarPfx}-menu` },
        components: [
          { type: idNavMenuLink, components: 'Home' },
          { type: idNavMenuLink, components: 'About' },
          { type: idNavMenuLink, components: 'Contact' },
        ]
      }
    }
  });

  Components.addType(idNavMenuLink, {
    extend: 'link',
    model: {
      defaults: {
        name: 'Menu link',
        draggable: `[data-gjs-type="${idNavMenu}"]`,
        attributes: { class: `${navbarPfx}-menu-link` },
      }
    }
  });

  Components.addType(idBurgerMenu, {
    model: {
      defaults: {
        name: 'Burger',
        draggable: false,
        droppable: false,
        copyable: false,
        removable: false,
        script: function () {
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
              'WebkitTransition': 'webkitTransitionEnd'
            }

            for (let t in transitions) {
              // @ts-ignore
              if (el.style[t] !== undefined){
                return transitions[t];
              }
            }
          }

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
          }

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

          if ( !(stringCollapse in currentEl) ) {
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
        ]
      },
    },
  });

  Components.addType(idBurgerMenuLine, {
    model: {
      defaults: {
        name: 'Burger Line',
        droppable: false,
        draggable: false,
        highlightable: false,
        attributes: { class: `${navbarPfx}-burger-line` },
      },
    },
  });
}
export default navbars;