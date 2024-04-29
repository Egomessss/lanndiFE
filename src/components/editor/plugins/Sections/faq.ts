import type { Editor } from 'grapesjs';

const faqs = (editor: Editor) => {
  const { Components } = editor;
  // const script = function() {
  //   const accordionContent = document.querySelectorAll(".accordion-content");
  //
  //   accordionContent.forEach((item, index) => {
  //     let header = item.querySelector("header");
  //     header.addEventListener("click", () =>{
  //       item.classList.toggle("open");
  //
  //       let description = item.querySelector(".description");
  //       if(item.classList.contains("open")){
  //         description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
  //         item.querySelector("i").classList.replace("fa-plus", "fa-minus");
  //       }else{
  //         description.style.height = "0px";
  //         item.querySelector("i").classList.replace("fa-minus", "fa-plus");
  //       }
  //       removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  //     })
  //   })
  //
  //   function removeOpen(index1){
  //     accordionContent.forEach((item2, index2) => {
  //       if(index1 != index2){
  //         item2.classList.remove("open");
  //
  //         let des = item2.querySelector(".description");
  //         des.style.height = "0px";
  //         item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
  //       }
  //     })
  //   }
  // };

  // editor.Blocks.add('faq-one', {
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
  //   label: 'FAQ Simple',
  //   category: 'sections-faqs',
  //   select: true,
  //   content: { type: 'faq-one' },
  // });

  Components.addType('faq-one', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'FAQ One',
        // attributes: { class: 'faq-one' },
        components: `  
<div class="faq-header">
<h1>Frequently Asked Questions</h1>
</div>
<div class="faq-content">
  <div class="faq-question">
    <input id="q1" type="checkbox" class="panel">
    <div class="plus">+</div>
    <label for="q1" class="panel-title">What is the meaning of life?</label>
    <div class="panel-content">42</div>
  </div>
  
  <div class="faq-question">
    <input id="q2" type="checkbox" class="panel">
    <div class="plus">+</div>
    <label for="q2" class="panel-title">How much wood would a woodchuck chuck?</label>
    <div class="panel-content">A woodchuck would chuck all the wood he could chuck, if a woodchuck could chuck wood!</div>
  </div>
  
  <div class="faq-question">
    <input id="q3" type="checkbox" class="panel">
    <div class="plus">+</div>
    <label for="q3" class="panel-title">What happens if Pinocchio says, "my nose will grow now"?</label>
    <div class="panel-content">Certain questions are better left &nbsp; <a href="https://en.wikipedia.org/wiki/The_Unanswered_Question" target="_blank">unanswered</a></div>
  </div>
</div>`,
        styles: `
     .faq-header{
  font-size: 42px;
  border-bottom: 1px dotted #ccc;
  padding: 24px;
}

.faq-content {
  margin: 0 auto 0 auto;
}

.faq-question {
  padding: 20px 0;
  border-bottom: 1px dotted #ccc;
}

.panel-title {
  font-size: 24px;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 10px 10px 0 48px;
  display: block;
  cursor: pointer;
}

.panel-content {
  font-size: 20px;
  padding: 0px 14px;
  margin: 0 40px;
  height: 0;
  overflow: hidden;
  z-index: -1;
  position: relative;
  opacity: 0;
  -webkit-transition: .4s ease;
  -moz-transition: .4s ease;
  -o-transition: .4s ease;
  transition: .4s ease;
}

.panel:checked ~ .panel-content{
  height: auto;
  opacity: 1;
  padding: 14px;
}

.plus {
  position: absolute;
  margin-left: 20px;
  margin-top: 4px;
  z-index: 5;
  font-size: 42px;
  line-height: 100%;
  -webkit-user-select: none;    
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-transition: .2s ease;
  -moz-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;
}

.panel:checked ~ .plus {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.panel {
  display: none;
}
`,
      },
    },
  });

//   editor.Blocks.add('faq-one', {
//     media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
//     label: 'FAQ Simple',
//     category: 'sections-faqs',
//     select: true,
//     content: { type: 'faq-one' },
//   });
//
//   Components.addType('faq-one', {
//     model: {
//       defaults: {
//         script: script,
//         droppable: false,
//         name: 'FAQ One',
//         // attributes: { class: 'faq-one' },
//         components: `
//  <div class="accordion">
//         <div class="accordion-content">
//             <header>
//                 <span class="title">What do you mean by Accordion?</span>
//                 <i class="fa-solid fa-plus"></i>
//             </header>
//
//             <p class="description">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
//             </p>
//         </div>
//
//         <div class="accordion-content">
//             <header>
//                 <span class="title">What do you mean by Accordion?</span>
//                 <i class="fa-solid fa-plus"></i>
//             </header>
//
//             <p class="description">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
//             </p>
//         </div>
//         <div class="accordion-content">
//             <header>
//                 <span class="title">What do you mean by Accordion?</span>
//                 <i class="fa-solid fa-plus"></i>
//             </header>
//
//             <p class="description">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto neque, sed inventore illum ut quis ducimus deleniti temporibus maiores? At nisi sed pariatur cupiditate quidem quod adipisci aut, eos quis minima voluptates non veniam ipsam quasi architecto ducimus error eum id ab, suscipit doloribus, ut accusantium consequuntur voluptate! Unde, hic sed rerum officia totam id libero officiis nihil rem sequi porro labore praesentium repudiandae a blanditiis molestias nisi beatae natus! Ea, ut voluptates, natus harum nesciunt odio hic eveniet reprehenderit veritatis, possimus tempora magni soluta eaque quidem neque maxime nostrum sapiente commodi? Earum ex cumque cupiditate dicta, tempora temporibus quaerat.
//             </p>
//         </div>
//         <div class="accordion-content">
//             <header>
//                 <span class="title">What do you mean by Accordion?</span>
//                 <i class="fa-solid fa-plus"></i>
//             </header>
//
//             <p class="description">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
//             </p>
//         </div>
//     </div>`,
//         styles: `
//      .accordion{
//     max-width: 530px;
//     width: 100%;
//     background: #FFF;
//     margin: 0 15px;
//     padding: 15px;
//     border-radius: 8px;
//     box-shadow:  0 0 4px rgba(0,0,0,0.2);
// }
// .accordion .accordion-content{
//     margin: 10px 0;
//     border-radius: 4px;
//     background: #FFF7F0;
//     border: 1px solid #FFD6B3;
//     overflow: hidden;
// }
// .accordion-content:nth-child(2){
//     background-color: #F0FAFF;
//     border-color: #CCEEFF;
// }
// .accordion-content:nth-child(3){
//     background-color: #FFF0F3;
//     border-color: #FFCCD6;
// }
// .accordion-content:nth-child(4){
//     background-color: #F0F0FF;
//     border-color: #CCCCFF;
// }
// .accordion-content.open{
//     padding-bottom: 10px;
// }
// .accordion-content header{
//     display: flex;
//     min-height: 50px;
//     padding: 0 15px;
//     cursor: pointer;
//     align-items: center;
//     justify-content: space-between;
//     transition: all 0.2s linear;
// }
// .accordion-content.open header{
//     min-height: 35px;
// }
// .accordion-content header .title{
//     font-size: 14px;
//     font-weight: 500;
//     color: #333;
// }
// .accordion-content header i{
//     font-size: 15px;
//     color: #333;
// }
// .accordion-content .description{
//     height: 0;
//     font-size: 12px;
//     color: #333;
//     font-weight: 400;
//     padding: 0 15px;
//     transition: all 0.2s linear;
// }
// `,
//       },
//     },
//   });

};

export default faqs;