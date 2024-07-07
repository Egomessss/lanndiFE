import type { Editor } from 'grapesjs';

const heros = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('hero-one', {
    label: 'Image Bottom',
    category: 'sections-heros',
    select: true,
    content: { type: 'hero-one' },
  });

  Components.addType('hero-one', {
    model: {
      defaults: {
        name: 'Hero Image Bottom',
        components: `<div class="hib-container">
    <div class="hib-text-container" >
      <h1 class="hib-heading-one" >Create, launch and share your dream website in minutes
      </h1>
      <p class="hib-paragraph">lanndi helps you create launch and share your beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
          </p>
    <div class="hib-button">
      <button class="hib-button">Button</button>
    </div>
  </div>
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="hib-image"/>
  </div>`,
        styles: `
   
.hib-container{
  height:1009px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:2rem;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
}
.hib-text-container{
  height:338px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:662px;
  row-gap:1rem;
  text-align:center;
}

.hib-heading-one{
  font-size:3rem;
   margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hib-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hib-button{
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
.hib-button:hover{
  opacity:0.9;
}
.hib-image{
  width:858px;
  height:391px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
}
@media (max-width: 810px){
  .hib-container{
    height:809px;
  }
  .hib-image{
    width:662px;
    height:302px;
  }
}
@media (max-width: 600px){
  .hib-container{
    height:699px;
  }
  .hib-text-container{
    width:100%;
    height:285px;
  }
  .hib-heading-one{
    font-size:1.5rem;
    width:100%;
     margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  }
  .hib-image{
    width:100%;
    height:177px;
  }
}
`,
      },
    },
  });


  Components.addType('hero-two', {
    model: {
      defaults: {
        name: 'Hero Image Side',
        // attributes: { class: 'hero-three' },
        components: ` <div class="his-container">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="his-image"/>
      <div class="his-text-container">
        <h1 class="his-heading-one">Create, launch and share your dream website in minutes
        </h1>
        <p class="his-paragraph">lanndi helps you create launch and share your beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
        </p>
        <div class="his-button">
          <button type="button" class="his-button">Button</button>
        </div>
      </div>
    </div>`,
        styles: `
   
.his-container{
  height:fit-content;
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
  column-gap:2rem;
  margin-top:4rem;
  margin-bottom:4rem;
}
.his-image{
  width:858px;
  height:391px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
}
.his-text-container{
  height:338px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:799px;
  row-gap:1rem;
  text-align:center;
}
.his-heading-one{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.his-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.his-button{
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
.his-button:hover{
  opacity:0.9;
}
@media (max-width: 880px){
  .his-container{
    flex-direction:column-reverse;
    row-gap:2rem;
  }
  .his-text-container{
    height:338px;
    width:fit-content;
  }
}
@media (max-width: 810px){
  .his-container{
    height:809px;
  }
  .his-image{
    width:662px;
    height:302px;
  }
}
@media (max-width: 600px){
  .his-container{
    height:699px;
  }
  .his-image{
    width:100%;
    height:177px;
  }
  .his-text-container{
    width:100%;
    height:285px;
  }
}

`,
      },
    },
  });

  editor.Blocks.add('hero-two', {
    label: 'Image Side',
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

        name: 'Hero No Image',
        // attributes: { class: 'hero-three' },
        components: `<div  class="hni-container">
      <div class="hni-text-content">
        <h1 class="hni-heading-one">Create, launch and share your dream website in minutes
        </h1>
        <p class="hni-paragraph">
        </p>
        <p class="hni-paragraph">lanndi helps you create launch and share your beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
        </p>
        <p class="hni-paragraph">
        </p>
        <div class="hni-button">
          <button class="hni-button">Button</button>
        </div>
      </div>
    </div>`,
        styles: `.block{
  height:10px;
  max-height:100%;
  width:100%;
}
.hni-container{
  height:644px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
  width:90%;
  column-gap:02rem;
}

.hni-text-content{
  height:394px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:788px;
  row-gap:1rem;
  text-align:center;
}
.hni-heading-one{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  font-size:3rem;
}

.hni-paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.hni-button{
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
.hni-button:hover{
  opacity:0.9;
}
@media (max-width: 810px){
  .hni-container{
    height:597px;
    flex-direction:column;
  }
  .hni-text-content{
    width:100%;
  }
}
@media (max-width: 600px){
  .hni-container{
    height:526px;
  }
  .hni-text-content{
    width:100%;
    height:285px;
  }
  hni-heading-one{
    font-size:1.5rem;
    width:100%;
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
  //
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