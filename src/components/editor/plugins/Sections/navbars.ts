import type { Editor } from 'grapesjs';


const navbars = (editor: Editor) => {

  const id = 'navbar';
  const label = 'Navbar';

  const { Components } = editor;

  const script = function() {
    const hamburger = document.querySelector('.nb-hamburger-btn');
    const navMenu = document.querySelector('.nb-nav-menu');

    if(hamburger && navMenu) {
      hamburger.addEventListener('click', ()=>{
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
        styles: `
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