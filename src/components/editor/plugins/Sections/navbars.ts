import type { Editor } from 'grapesjs';


const navbars = (editor: Editor) => {

  const id = 'navbar';
  const label = 'Navbar';

  const { Components } = editor;

  const script = function() {

    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger?.addEventListener('click', () => {
      navMenu?.classList.toggle('hide');
      hamburger.classList.toggle('active');
    });
  };

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
   <header>
        <nav class="navbar">
            <div class="logo">
                <a href="/">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"
                         alt="gfg_logo">
                </a> 
            </div>
            <div class="hamburger-menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span> 
            </div>
            <div class="nav-menu hide">
                <a href="#">Home</a>
                <a href="#">Career</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    </header>`,
        styles: `
     a{
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: bold;
}
 
/* navbar styling */
.navbar{
    display: flex;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-bottom: 2px solid rgb(223, 251, 219);
}
 
/* logo style  */
.logo img{
    width: 4rem;
    height: 4rem;
    margin-left:1rem;
}
 
.hamburger-menu{
    padding-right: 1.5rem;
    cursor: pointer;
}
 
.hamburger-menu .line {
  display: block;
  width: 2.5rem;
  height: 2px;
  margin-bottom: 5px;
  background-color: black;
 -webkit-transition:all 0.3s ease-in-out;
  transition:all 0.3s ease-in-out;
}

.hamburger-menu.active .line:nth-child(1) {
  transform: translateY(7px) rotate(45deg); /* Move down and rotate */
}

.hamburger-menu.active .line:nth-child(2) {
  opacity: 0; /* Fade out */
}

.hamburger-menu.active .line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg); /* Move up and rotate */
}
 
.nav-menu{
    position: fixed;
    width: 94%;
    top: 6rem;
    left: 18px;
    background-color: rgb(255, 255, 255);
    font-weight: 600;
 
}
.nav-menu a{
    display: block;
    text-align: center;
    padding: 5px 0;
}
.nav-menu a:hover{
    background-color: rgb(223, 251, 219);
}
 
.hide{
    display: none;
}
 
/* for Desktop view  */
@media screen and (min-width:880px){
    .navbar{
        justify-content: space-around;
    }
    .nav-menu{
        display: block;
        position: static;
        width: auto;
        margin-right:20px;
        background: none;
    }
    .nav-menu a{
        display: inline-block;
        padding: 15px 20px;
    }
    .nav-menu a:hover{
        background-color: rgb(223, 251, 219);
        border-radius: 5px;
    }
    .hamburger-menu{
        display: none;
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


  // editor.Blocks.add('navbar', {
  //   media: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-navbar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 9l16 0" /></svg>`,
  //   label: 'Navbar',
  //   category: 'sections-navbar',
  //   select: true,
  //   content: { type: 'navbar' },
  // });


  const idNavMenu = `${id}-nav-menu`;
  const idNavMenuLink = `${id}-nav-menu-link`;
  const idBurgerMenu = `${id}-burger-menu`;
  const idBurgerMenuLine = `${id}-burger-menu-line`;

  Components.addType('navbar', {
    model: {
      defaults: {
        name: 'Navbar',
        attributes: { class: 'navbar' },
        removable: false,
        copyable: false,
        components: [
          {
            type: 'link',
            components:'lanndi',
            attributes: { class: `navbar-brand`, href: '/' },
          },
          { type: idBurgerMenu },
          {
            attributes: { class: `navbar-items-c`, 'data-gjs': 'navbar-items' },
            components: { type: idNavMenu },
          },
        ],
        styles: `
          .navbar {
            height: fit-content;
            padding-top: 0.5rem;
            padding-right: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            max-width: 1200px;
            width:100%;
            margin-right: auto;
            margin-left: auto;
            display:flex;
            justify-content: space-between;
            align-items: center;
          }

          .navbar-items-c {
            display: inline-block;
         
          }

          .navbar-container::after {
            content: "";
            clear: both;
            display: block;
          }

          .navbar-brand {
                       height: fit-content;
            width: fit-content;
            color:inherit;
                     text-decoration: none;
          }

          .navbar-menu {
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 2rem;
            margin: 0 0 0 0 ;
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
          }

          .navbar-menu-link {
            
            text-decoration: none;
           
          }
          
           .navbar-menu-link:hover {
           
            text-decoration: underline;
         
          }

          
          @media (max-width: 880px) {
            .navbar-items-c {
              display: none;
              width: 100%;
            }

          
            .navbar-menu {
              width: 100%;
            }

            .navbar-menu-link {
              display: block;
            }
          }
        `,
      },
    },
  });


  Components.addType(idNavMenu, {
    model: {
      defaults: {
        name: 'Navbar Menu',
        tagName: 'nav',
        attributes: { class: `navbar-menu` },
        components: [
          { type: idNavMenuLink, components: 'Home' },
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
        attributes: { class: `navbar-menu-link` },
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
        attributes: { class: `navbar-burger` },
        components: [
          { type: idBurgerMenuLine },
          { type: idBurgerMenuLine },
          { type: idBurgerMenuLine },
        ],
        styles:`.navbar-burger {
            margin: 10px 0;
            width: 45px;
            padding: 5px 10px;
            display: none;
            cursor: pointer;
          }
            @media (max-width: 880px) {

            .navbar-burger {
              display: block;
            }
            
            .navbar-burger-line {
            padding: 1px;
            background-color: black;
            margin: 5px 0;
          }
            
            }
          `
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
        highlightable: false,
        attributes: { class: `navbar-burger-line` },
      },
    },
  });
};
export default navbars;