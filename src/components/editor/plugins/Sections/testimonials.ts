import type { Editor } from 'grapesjs';

const testimonials = (editor: Editor) => {
  const { Components } = editor;


  editor.Blocks.add('testimonial-one', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214713.png',
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
    <div class="twqr-container">
      <div class="twqr-ratings-container">
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
        <span class="material-icons material-symbols-outlined star-filled">star</span>
      </div>
      <p class="twqr-paragraph">
        <b>HUGE
        </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites.
      </p>
      <div class="twqr-rating-container">
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="twqr-image"/>
        <div class="twqr-rating-text-content">
          <p class="twqr-bolden">Person Name
          </p>
          <p class="twqr-person-paragraph">10k followers on X/Twitter, Founder, Ceo
          </p>
        </div>
      </div>
    </div>`,
        styles: `
     .twqr-container{
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
.twqr-ratings-container{
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  width:255px;
}
.material-icons.material-symbols-outlined.star-filled{
  color:rgb(250, 199, 30);
  height:24px;
}
.twqr-paragraph{
  text-align:center;
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  width:498px;
}
.twqr-rating-container{
  height:fit-content;
  margin-bottom:2rem;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
}
.twqr-image{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
.twqr-rating-text-content{
  height:fit-content;
  width:357px;
}
.twqr-bolden{
  font-weight:700;
}
@media (max-width: 600px){
  .twqr-paragraph{
    width:100%;
  }
  .twqr-rating-container{
    width:100%;
  }
}
`,
      },
    },
  });

  editor.Blocks.add('testimonial-two', {
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214722.png',
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
   <div class="tar-container">
      <div class="tar-avatar-group">
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tar-avatar-image"/>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tar-avatar-image"/>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tar-avatar-image"/>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tar-avatar-image"/>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tar-avatar-image"/>
      </div>
      <div class="tar-ratings-container">
        <div class="tar-star-container">
          <spa class="material-icons material-symbols-outlined star-filled">star
          </spa>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
        </div>
        <p class="tar-ratings-paragraph">
          <b>Trusted
          </b> by +100 users
        </p>
      </div>
    </div>
 `,
        styles: `
   .tar-container{
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:2rem;
  margin-bottom:2rem;
  width:19%;
  max-width:1200px;
  margin-right:auto;
  margin-left:auto;
}
.tar-avatar-group{
  height:fit-content;
  display:flex;
  align-items:center;
  width:fit-content;
}
.tar-avatar-image{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
  margin-left:-10px;
}
.tar-ratings-container{
  height:fit-content;
  width:100%;
  text-align:center;
}
.tar-star-container{
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  width:w-full;
  align-items:center;
}
.material-icons.material-symbols-outlined.star-filled{
  color:rgb(250, 199, 30);
  height:10p;
  font-size:1rem;
}
.tar-ratings-paragraph{
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
    media: 'https://pub-692392e7a4934f739c13ac69503cb052.r2.dev/Screenshot%202024-07-12%20214733.png',
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
  <div class="tg-container">
      <div class="tg-grid-block-container">
        <div id=".tg-grid-item-container">
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
        </div>
        <p class="tg-paragraph italic">
          <span>"</span>
          <b draggable="true">HUGE
          </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites."
        </p>
        <div class="tg-person-data-container">
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tg-image"/>
          <div id=".tg-person-text-content">
            <p class="tg-paragraph tg-bolden">Person Name
            </p>
            <p class="tg-paragraph text-left">10k followers on X/Twitter, Founder, Ceo
            </p>
          </div>
        </div>
      </div>
      <div class="tg-grid-block-container">
        <div id=".tg-grid-item-container-2">
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
        </div>
        <p class="tg-paragraph italic">
          <span>"</span>
          <b draggable="true">HUGE
          </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites."
        </p>
        <div class="tg-person-data-container">
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tg-image"/>
          <div id=".tg-person-text-content-2">
            <p class="tg-paragraph tg-bolden">Person Name
            </p>
            <p class="tg-paragraph">10k followers on X/Twitter, Founder, Ceo
            </p>
          </div>
        </div>
      </div>
      <div class="tg-grid-block-container">
        <div id=".tg-grid-item-container-3">
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
        </div>
        <p class="tg-paragraph italic">
          <span>"</span>
          <b draggable="true">HUGE
          </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites."
        </p>
        <div class="tg-person-data-container">
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tg-image"/>
          <div id=".tg-person-text-content-3">
            <p class="tg-paragraph tg-bolden">Person Name
            </p>
            <p class="tg-paragraph">10k followers on X/Twitter, Founder, Ceo
            </p>
          </div>
        </div>
      </div>
      <div class="tg-grid-block-container">
        <div id=".tg-grid-item-container-4">
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
          <span class="material-icons material-symbols-outlined star-filled">star</span>
        </div>
        <p class="tg-paragraph italic">
          <span>"</span>
          <b draggable="true">HUGE
          </b>fan of the lanndi. Less than a month into using lanndi and I've already seen a tangible impact on my ability to produce beautiful, responsive and fast websites."
        </p>
        <div class="tg-person-data-container">
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="tg-image"/>
          <div id=".tg-person-text-content-4">
            <p class="tg-paragraph tg-bolden">Person Name
            </p>
            <p class="tg-paragraph">10k followers on X/Twitter, Founder, Ceo
            </p>
          </div>
        </div>
      </div>
    </div>`,
        styles: `
.tg-container{
  display:grid;
  grid-template-columns:1fr 1fr;
  column-gap:1rem;
  row-gap:1rem;
  margin-top:2rem;
  margin-bottom:2rem;
  max-width:1200px;
  width:90%;
  margin-right:auto;
  margin-left:auto;
}
.tg-grid-block-container{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1rem;
  height:fit-content;
  grid-column:span 1;
  font-style:italic;
  padding-top:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-left:1rem;
}
.material-icons.material-symbols-outlined.star-filled{
  color:rgb(250, 199, 30);
  height:24px;
}
.tg-paragraph{
  text-align:center;
  width:100%;
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
}
.tg-person-data-container{
  height:fit-content;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
  column-gap:1rem;
  padding-right:1rem;
  padding-left:1rem;
}
.tg-image{
  width:30px;
  height:30px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
  object-fit:cover;
}
.tg-bolden{
  font-weight:700;
}
.tg-paragraph.tg-bolden{
  margin-top:0;
  margin-right:0;
  margin-bottom:0;
  margin-left:0;
  text-align:left;
  width:263px;
  height:18px;
}
@media (max-width: 880px){
  .tg-container{
    grid-template-columns:1fr;
  }
  .tg-paragraph.text-left{
    text-align:left;
  }
}
@media (max-width: 600px){
  .tg-grid-block-container{
    grid-column:span 2;
  }
  .tg-paragraph{
    width:100%;
  }
  .tg-person-data-container{
    width:100%;
  }
}
`,
      },
    },
  });



}

export default testimonials;