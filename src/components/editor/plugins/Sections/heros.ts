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
        name: 'Hero Image Bottom',
        components: `<div class="block" id="ixrq">
    <div class="block" id="i68h">
      <h1 class="heading-one" id="i3pn">Create, launch and share your dream website in minutes
      </h1>
      <p class="paragraph">
      <p class="paragraph">lanndi helps you create launch and share your beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
        <br/>
        <br/>
      </p>
      </p>
    <div class="button">
      <button class="button">Button</button>
    </div>
  </div>
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="ictil"/>
  </div>`,
        styles: `
     .block{
  height:80px;
  max-height:100%;
  width:100%;
}
#ixrq{
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
#i68h{
  height:338px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:662px;
  row-gap:1rem;
  text-align:center;
}
.heading-one{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#i3pn{
  font-size:3rem;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
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
#ictil{
  width:858px;
  height:391px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
}
@media (max-width: 810px){
  #ixrq{
    height:809px;
  }
  #ictil{
    width:662px;
    height:302px;
  }
}
@media (max-width: 600px){
  #ixrq{
    height:699px;
  }
  #i68h{
    width:100%;
    height:285px;
  }
  #i3pn{
    font-size:1.5rem;
    width:100%;
  }
  #ictil{
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
        components: `
    <div id="ixrq" class="block">
      <div id="i68h" class="block">
        <h1 id="i3pn" class="heading-one">Create, launch and share your dream website in minutes
        </h1>
        <p class="paragraph">
        </p>
        <p class="paragraph">lanndi helps you create launch and share your beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
          <br/>
          <br/>
        </p>
        <p class="paragraph">
        </p>
        <div class="button">
          <button class="button">Button</button>
        </div>
      </div>
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" id="ictil"/>
    </div>
  `,
        styles: `.block{
  height:80px;
  max-height:100%;
  width:100%;
}
#ixrq{
  height:710px;
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
#i68h{
  height:394px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:788px;
  row-gap:1rem;
  text-align:center;
}
.heading-one{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#i3pn{
  font-size:3rem;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
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
#ictil{
  width:704px;
  height:395px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
}
@media (max-width: 810px){
  #ixrq{
    height:809px;
    flex-direction:column;
  }
  #i68h{
    width:100%;
  }
  #ictil{
    width:100%;
    height:302px;
  }
}
@media (max-width: 600px){
  #ixrq{
    height:699px;
  }
  #i68h{
    width:100%;
    height:285px;
  }
  #i3pn{
    font-size:1.5rem;
    width:100%;
  }
  #ictil{
    width:100%;
    height:177px;
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

        name: 'Hero No Image',
        // attributes: { class: 'hero-three' },
        components: `<div id="ixrq" class="block">
      <div id="i68h" class="block">
        <h1 id="i3pn" class="heading-one">Create, launch and share your dream website in minutes
        </h1>
        <p class="paragraph">
        </p>
        <p class="paragraph">lanndi helps you create launch and share your beautiful and responsive website effortlessly, with a super easy-to-use editor without needing code or design skills
          <br/>
          <br/>
        </p>
        <p class="paragraph">
        </p>
        <div class="button">
          <button class="button">Button</button>
        </div>
      </div>
    </div>`,
        styles: `.block{
  height:10px;
  max-height:100%;
  width:100%;
}
#ixrq{
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
#i68h{
  height:394px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:788px;
  row-gap:1rem;
  text-align:center;
}
.heading-one{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#i3pn{
  font-size:3rem;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
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
@media (max-width: 810px){
  #ixrq{
    height:597px;
    flex-direction:column;
  }
  #i68h{
    width:100%;
  }
}
@media (max-width: 600px){
  #ixrq{
    height:526px;
  }
  #i68h{
    width:100%;
    height:285px;
  }
  #i3pn{
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