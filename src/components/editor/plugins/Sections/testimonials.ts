import type { Editor } from 'grapesjs';

const testimonials = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('testimonial-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Image, Quote and Rating',
    category: 'sections-testimonials',
    select: true,
    content: { type: 'testimonial-one' },
  });

  Components.addType('testimonial-one', {
    model: {
      defaults: {
        name: 'Testimonial With Image, Quote and Rating',
        components: `  
   <div id="ifjmk">
    <div id="iegcj" class="block">
      <span id="iqujl" class="material-icons material-symbols-outlined star-filled">star</span>
      <span id="iemjs" class="material-icons material-symbols-outlined star-filled">star</span>
      <span id="im35v" class="material-icons material-symbols-outlined star-filled">star</span>
      <span id="isgss" class="material-icons material-symbols-outlined star-filled">star</span>
      <span id="iydsg" class="material-icons material-symbols-outlined star-filled">star</span>
    </div>
    <p id="irzj2" class="paragraph">
      <b>HUGE
      </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites.
    </p>
    <div id="i2cti" class="block">
      <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="ir7qp"/>
      <div id="i2h12" class="block">
        <p id="ihfmp" class="paragraph">Person Name
        </p>
        <p id="ichu5" class="paragraph">10k followers on X/Twitter, Founder, Ceo
        </p>
      </div>
    </div>
  </div>`,
        styles: `
     #ifjmk{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  margin-top:2rem;
  margin-bottom:2rem;
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
}
.block{
  height:fit-conten;
  max-height:100%;
  width:100%;
}
#iegcj{
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  width:255px;
  height:fit-t;
}
.material-icons.material-symbols-outlined.star-filled{
  color:rgb(250, 199, 30);
  height:24px;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
#irzj2{
  text-align:center;
  width:496px;
}
#i2cti{
  height:fit-content;
  margin-bottom:2rem;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
}
#ir7qp{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#i2h12{
  height:fit-content;
  width:357px;
}
#ihfmp{
  font-weight:700;
}
@media (max-width: 600px){
  #irzj2{
    width:100%;
  }
}

`,
      },
    },
  });

  editor.Blocks.add('testimonial-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Avatar Group and Rating',
    category: 'sections-testimonials',
    select: true,
    content: { type: 'testimonial-two' },
  });

  Components.addType('testimonial-two', {
    model: {
      defaults: {
        name: 'Testimonial With Avatar Group and Rating',
        components: `  
 <div id="ifjmk" class="container">
    <div id="i2cti" class="testimonial-container">
      <div id="iab5f" class="block">
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="ir7qp" class="testimonail-image-group"/>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="inw1h" class="testimonail-image-group"/>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="ilqup" class="testimonail-image-group"/>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="i495a" class="testimonail-image-group"/>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="i88fu" class="testimonail-image-group"/>
      </div>
      <div id="i2h12" class="block">
        <div id="iegcj" class="block">
          <span id="iqujl" class="material-icons material-symbols-outlined star-filled">star</span>
          <span id="iemjs" class="material-icons material-symbols-outlined star-filled">star</span>
          <span id="im35v" class="material-icons material-symbols-outlined star-filled">star</span>
          <span id="isgss" class="material-icons material-symbols-outlined star-filled">star</span>
          <span id="iydsg" class="material-icons material-symbols-outlined star-filled">star</span>
        </div>
        <p id="ichu5" class="paragraph">100+ people use this app
        </p>
      </div>
    </div>
  </div>`,
        styles: `
    #ifjmk{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  margin-top:2rem;
  margin-bottom:2rem;
  width:90%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
}
#i2cti{
  height:fit-content;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  width:fit-content;
}
.block{
  height:fit-conten;
  max-height:100%;
  width:99%;
}
#iab5f{
  height:fit-content;
  display:flex;
  justify-content:center;
  align-items:center;
  width:fit-content;
}
#ir7qp{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
.testimonail-image-group{
  margin-left:-10px;
}
#inw1h{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#ilqup{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#i495a{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#i88fu{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#i2h12{
  height:fit-content;
  width:fit-content;
}
#iegcj{
  display:flex;
  flex-direction:row-reverse;
  justify-content:start;
  width:fit-content;
  height:f;
}
.material-icons.material-symbols-outlined.star-filled{
  color:rgb(250, 199, 30);
  height:24px;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
`,
      },
    },
  });

  editor.Blocks.add('testimonial-three', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Grid',
    category: 'sections-testimonials',
    select: true,
    content: { type: 'testimonial-three' },
  });

  Components.addType('testimonial-three', {
    model: {
      defaults: {
        name: 'Testimonial Grid',
        components: `  
  <div class="container" id="i3lg">
    <div class="grid-block-container">
      <div id="iegcj">
        <span id="iqujl" class="material-icons material-symbols-outlined star-filled">star</span>
        <span id="iemjs" class="material-icons material-symbols-outlined star-filled">star</span>
        <span id="im35v" class="material-icons material-symbols-outlined star-filled">star</span>
        <span id="isgss" class="material-icons material-symbols-outlined star-filled">star</span>
        <span id="iydsg" class="material-icons material-symbols-outlined star-filled">star</span>
      </div>
      <p id="irzj2" class="paragraph italic">
        <span>"</span>
        <b draggable="true">HUGE
        </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites."
      </p>
      <div id="i2cti">
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="ir7qp"/>
        <div id="i2h12">
          <p id="ihfmp" class="paragraph">Person Name
          </p>
          <p id="ichu5" class="paragraph">10k followers on X/Twitter, Founder, Ceo
          </p>
        </div>
      </div>
    </div>
    <div class="grid-block-container">
      <div id="injjcp">
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
      </div>
      <p class="paragraph italic" id="iuiaby">
        <span>"</span>
        <b draggable="true">HUGE
        </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites."
      </p>
      <div id="ig8ff6">
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="israhy"/>
        <div id="i7p13p">
          <p class="paragraph" id="ihx1ht">Person Name
          </p>
          <p class="paragraph">10k followers on X/Twitter, Founder, Ceo
          </p>
        </div>
      </div>
    </div>
    <div class="grid-block-container">
      <div id="igx0cl">
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
      </div>
      <p class="paragraph italic" id="itlsob">
        <span>"</span>
        <b draggable="true">HUGE
        </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites."
      </p>
      <div id="i1yx05">
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="iy6jt7"/>
        <div id="i25gai">
          <p class="paragraph" id="ih5hoc">Person Name
          </p>
          <p class="paragraph">10k followers on X/Twitter, Founder, Ceo
          </p>
        </div>
      </div>
    </div>
    <div class="grid-block-container">
      <div id="iksny9">
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
      </div>
      <p class="paragraph italic" id="i601az">
        <span>"</span>
        <b draggable="true">HUGE
        </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites."
      </p>
      <div id="i7bcn1">
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="iad3jm"/>
        <div id="ishnt2">
          <p class="paragraph" id="ildy09">Person Name
          </p>
          <p class="paragraph">10k followers on X/Twitter, Founder, Ceo
          </p>
        </div>
      </div>
    </div>
  </div>`,
        styles: `
 #i3lg{
  display:grid;
  grid-template-columns:1fr 1fr ;
  column-gap:1rem;
  row-gap:1rem;
}
.container{
  margin-top:2rem;
  margin-bottom:2rem;
  max-width:1200px;
  width:90%;
  margin-right:auto;
  margin-left:auto;
  grid-template-columns:1fr 1fr ;
}
.grid-block-container{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  height:243px;
  grid-column:span 1;
  font-style:italic;
}
#iegcj{
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  width:255px;
  height:fit-t;
}
.material-icons.material-symbols-outlined.star-filled{
  color:rgb(250, 199, 30);
  height:24px;
}
.paragraph{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  font-style:normal;
}
#irzj2{
  text-align:center;
  width:100%;
}
.paragraph.italic{
  font-style:italic;
}
#i2cti{
  height:fit-content;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
}
#ir7qp{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#i2h12{
  height:fit-content;
  width:357px;
}
#ihfmp{
  font-weight:700;
}
#injjcp{
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  width:255px;
  height:fit-t;
}
#iuiaby{
  text-align:center;
  width:100%;
}
#ig8ff6{
  height:fit-content;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
}
#israhy{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#i7p13p{
  height:fit-content;
  width:357px;
}
#ihx1ht{
  font-weight:700;
}
#igx0cl{
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  width:255px;
  height:fit-t;
}
#itlsob{
  text-align:center;
  width:100%;
}
#i1yx05{
  height:fit-content;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
}
#iy6jt7{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#i25gai{
  height:fit-content;
  width:357px;
}
#ih5hoc{
  font-weight:700;
}
#iksny9{
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  width:255px;
  height:fit-t;
}
#i601az{
  text-align:center;
  width:100%;
}
#i7bcn1{
  height:fit-content;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
}
#iad3jm{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
#ishnt2{
  height:fit-content;
  width:357px;
}
#ildy09{
  font-weight:700;
}
@media (max-width: 600px){
  #irzj2{
    width:100%;
  }
  #iuiaby{
    width:100%;
  }
  #itlsob{
    width:100%;
  }
  #i601az{
    width:100%;
  }
}
`,
      },
    },
  });



}

export default testimonials;