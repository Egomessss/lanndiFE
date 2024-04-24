import type { Editor } from 'grapesjs';

const heros = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('hero-one', {
    label: 'Hero Image Bottom',
    category: 'sections-heros',
    select: true,
    content: { type: 'hero-one' },
  });

Components.addType('hero-one', {
    model: {
      defaults: {
        droppable: false,
        name: 'Hero Image Bottom',
        components: ` <div class="hero-one">
    <div class="hero-one-container">
      <div class="hero-text-container">
        <h1 id="irjua" draggable="false" class="gjs-heading">Insert Hero 
          <span id="i4jn1p" draggable="true" class="gjs-text-blue">text here</span>
        </h1>
        <p id="it2f" class="hero-description">
          <span id="i09aq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </p>
        <button class="button">Button
        </button>
        <img src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" class="hero-image"/>
      </div>
      <div class="image-container">
      </div>
    </div>
  </div>`,
        styles: `
        .hero-one-container{
  height:fit-content;
}
.hero-text-container{
  height:833px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
#irjua{
  margin:0px;
  color:rgb(29, 40, 55);
  font-size:3rem;
  font-family:Arial, Helvetica, sans-serif;
}
#i4jn1p{
  color:rgb(36, 99, 235);
}
.hero-description{
  width:462px;
  text-align:center;
  font-size:1rem;
}
#i09aq{
  color:rgb(71, 85, 105);
  font-family:Arial, Helvetica, sans-serif;
  font-size:19.2px;
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
  padding:4px 12px 4px 12px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
}
.button:hover{
  opacity:0.9;
}
.hero-image{
  width:725px;
  height:369px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  margin-top:2rem;
}
.image-container{
  display:flex;
  justify-content:center;
  align-items:center;
  height:fit-content;
}
`,
      },
    },
  });


  Components.addType('hero-two', {
    model: {
      defaults: {
        droppable: false,
        name: 'Hero Image Side',
        // attributes: { class: 'hero-three' },
        components: `<div class="hero-two">
    <div class="hero-two-container">
      <div class="hero-text-container">
        <h1 id="iyi6" class="heading-hero">
        </h1>
        <h1 class="heading-one" id="im2wi">Insert Hero text here
        </h1>
        <p id="it2f" class="hero-description">
          <span id="i09aq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </p>
        <button class="button">Button
        </button>
      </div>
      <img src="https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/placeholder.webp" class="hero-image"/>
    </div>
  </div>`,
        styles: `.hero-two-container{
  display:flex;
  justify-content:center;
  align-items:center;
  column-gap:2rem;
  height:559px;
}
.hero-text-container{
  height:359px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:457px;
}
.heading-hero{
  width:571px;
  text-align:center;
  font-size:3rem;
}

.heading-one{
  font-size:3rem;
}
.hero-description{
  width:100%;
  text-align:center;
  font-size:1rem;
}

#i09aq{
  color:rgb(71, 85, 105);
  font-family:Arial, Helvetica, sans-serif;
  font-size:1rem;
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
  padding:4px 12px 4px 12px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
}
.button:hover{
  opacity:0.9;
}
.image-container{
  display:flex;
  justify-content:center;
  align-items:center;
  height:fit-content;
}
.hero-image{
  width:450px;
  height:361px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  object-fit:cover;
}
@media (max-width: 810px){
  .hero-two-container{
    flex-direction:column;
    row-gap:2rem;
    height:823px;
  }
  .hero-text-container{
    width:649px;
  }
  .hero-image{
    width:645px;
  }
}
@media (max-width: 390px){
  .hero-text-container{
    width:90%;
    text-align:center;
    height:344px;
    align-items:center;
    justify-content:center;
  }
  .heading-one{
    height:88px;
    font-size:2.5rem;
    line-height:2.5rem;
  }
  .hero-image{
    width:90%;
    height:254px;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('hero-two', {
    label: 'Hero Image Side',
    category: 'sections-heros',
    select: true,
    content: { type: 'hero-two' },
  });

  editor.Blocks.add('hero-three', {
    label: 'Hero No Image',
    category: 'sections-heros',
    select: true,
    content: { type: 'hero-three' },
  });

  Components.addType('hero-three', {
    model: {
      defaults: {
        droppable: false,
        name: 'Hero No Image',
        // attributes: { class: 'hero-three' },
        components: ` <div class="hero-three">
    <div class="hero-three-container">
      <div class="hero-text-container">
        <h1 id="iyi6" class="heading-hero">
          Insert Hero 
          <span id="i4jn1p" draggable="true" class="gjs-text-blue">text here</span>
        </h1>
        <p id="it2f" class="hero-description">
          <span id="i09aq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </p>
        <button class="button">Button
        </button>
      </div>
    </div>
  </div>`,
        styles: `.hero-three-container{
  display:flex;
  justify-content:center;
  align-items:center;
  height:569px;
}
.hero-text-container{
  height:359px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:771px;
}
.heading-hero{
  width:571px;
  text-align:center;
  font-size:3rem;
  margin:0px;
  color:rgb(29, 40, 55);
  font-family:Arial, Helvetica, sans-serif;
}

#i4jn1p{
  color:rgb(36, 99, 235);
}
.hero-description{
  width:462px;
  text-align:center;
  font-size:1rem;
}

#i09aq{
  color:rgb(71, 85, 105);
  font-family:Arial, Helvetica, sans-serif;
  font-size:19.2px;
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
  padding:4px 12px 4px 12px;
  font-size:16px;
  border-radius:.25rem .25rem .25rem .25rem;
}
.button:hover{
  opacity:0.9;
}
@media (max-width: 810px){
  .hero-text-container{
    width:728px;
  }
}
@media (max-width: 390px){
  .hero-text-container{
    width:90%;
    height:397px;
  }
  .heading-hero{
    font-size:2rem;
    width:100%;
  }
  .hero-description{
    width:100%;
  }
  #i09aq{
    font-size:1rem;
  }
}

`,
      },
    },
  });



  // editor.Blocks.add('hero-four', {
  //   label: 'Alpine',
  //   category: 'sections-heros',
  //   select: true,
  //   content: { type: 'hero-four' },
  // });
  //
  // Components.addType('hero-four', {
  //   model: {
  //     defaults: {
  //       droppable: false,
  //       name: 'Alpine',
  //       // attributes: { class: 'hero-three' },
  //       components: `  <ul class="block w-11/12 my-4 mx-auto" x-data="{selected:null}">
  //           <li class="flex align-center flex-col">
  //               <h4 @click="selected !== 0 ? selected = 0 : selected = null"
  //                   class="cursor-pointer px-5 py-3 bg-indigo-300 text-white text-center inline-block hover:opacity-75 hover:shadow hover:-mb-3 rounded-t">Accordion item 1</h4>
  //               <p x-show="selected == 0" class="border py-4 px-2">
  //                   This is made with Alpine JS and Tailwind CSS
  //               </p>
  //           </li>
  //           <li class="flex align-center flex-col">
  //               <h4 @click="selected !== 1 ? selected = 1 : selected = null"
  //                   class="cursor-pointer px-5 py-3 bg-indigo-400 text-white text-center inline-block hover:opacity-75 hover:shadow hover:-mb-3">Accordion item 2</h4>
  //               <p x-show="selected == 1" class="border py-4 px-2">
  //                    There's no external CSS or JS
  //               </p>
  //           </li>
  //           <li class="flex align-center flex-col">
  //               <h4 @click="selected !== 2 ? selected = 2 : selected = null"
  //                   :class="{'cursor-pointer px-5 py-3 bg-indigo-500 text-white text-center inline-block hover:opacity-75 hover:shadow hover:-mb-3': true, 'rounded-b': selected != 2}">Accordion item 3</h4>
  //               <p x-show="selected == 2" :class="{'border py-4 px-2': true, 'rounded-b': selected == 2}">
  //                   Pretty cool huh?
  //               </p>
  //           </li>
  //       </ul>`,
  //     },
  //   },
  // });





};

export default heros;