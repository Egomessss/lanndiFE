import type { Editor } from 'grapesjs';

const pricings = (editor: Editor) => {
  const { Components } = editor;
  // const script = function(props:any) {
  //   const myLibOpts = {
  //     pricingBasicMonthly: props.pricingBasicMonthly,
  //     pricingBasicAnnual: props.pricingBasicAnnual,
  //     pricingProfessionalMonthly: props.pricingProfessionalMonthly,
  //     pricingProfessionalAnnual: props.pricingProfessionalAnnual,
  //     pricingMasterMonthly: props.pricingMasterMonthly,
  //     pricingMasterAnnual: props.pricingMasterAnnual,
  //   };
  //
  //   const checkbox = document.getElementById('checkbox');
  //   const professional = document.getElementById('professional');
  //   const master = document.getElementById('master');
  //   const basic = document.getElementById('basic');
  //
  //   checkbox.addEventListener('click', () => {
  //     const basicPrice = myLibOpts.pricingBasicMonthly;
  //     const professionalPrice = myLibOpts.pricingProfessionalMonthly;
  //     const masterPrice = myLibOpts.pricingMasterMonthly;
  //
  //     const basicAnnual = myLibOpts.pricingBasicAnnual;
  //     const professionalAnnual = myLibOpts.pricingProfessionalAnnual;
  //     const masterAnnual = myLibOpts.pricingMasterAnnual;
  //
  //     basic.textContent = basic.textContent === `$${basicPrice}` ? `$${basicAnnual}` : `$${basicPrice}`;
  //     professional.textContent = professional.textContent === `$${professionalPrice}` ? `$${professionalAnnual}` : `$${professionalPrice}`;
  //     master.textContent = master.textContent === `$${masterPrice}` ? `$${masterAnnual}` : `$${masterPrice}`;
  //
  //     // basic.textContent = basic.textContent === '$199.99' ? '$19.99' : '$199.99';
  //     // professional.textContent =
  //     //   professional.textContent === '$249.99' ? '$24.99 ' : '$249.99';
  //     // master.textContent = master.textContent === '$399.99' ? '$39.99' : '$399.99';
  //   });
  // };

  editor.Blocks.add('pricing-simple', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Pricing Simple',
    category: 'sections-pricing',
    select: true,
    content: { type: 'pricing-simple' },
  });

  Components.addType('pricing-simple', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Pricing Simple',
        // Define default values for your custom properties
        components: `<div class="pricing-container">
   <div class="pricing-header">
    <h1>Our Pricing</h1>
  </div>
  <div class="cards">
    <div   class="card active">
      <ul>
        <li class="pack">Professional</li>
        <li id="professional" class="price bottom-bar">&dollar;249.99</li>
        <li class="bottom-bar">1 TB Storage</li>
        <li class="bottom-bar">5 Users Allowed</li>
        <li class="bottom-bar">Send up to 10 GB</li>
        <li class="bottom-bar">Unlimited Email Accounts</li>
        <li><button class="btn active-btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
      </ul>
    </div>
  </div>
</div>`,
        styles: `
        .pricing-container {
  max-width: 1440px;
  margin: 2rem auto 6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  }
        
        
       .pricing-header {
  color: #1970C2;
  margin: 3.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.sub {
  background: linear-gradient(
    135deg,
    rgba(163, 168, 240, 1) 0%,
    rgba(105, 111, 221, 1) 100%
  );
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 1.6rem;
  width: 3.3rem;
  border-radius: 1.6rem;
  padding: 0.3rem;
}
.circle {
  background-color: #fff;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  background: #fff;
  color: hsl(233, 13%, 49%);
  border-radius: 0.8rem;
}
.card.active:hover{
  box-shadow: rgba(255, 188, 0, 0.8) 0px 0px 0px 3px;
}

.cards .card.active {
  background:  #1970C2;
  color: #fff;
  display: flex;
  align-items: center;
  transform: scale(1.1);
  z-index: 1;
}
ul {
  margin: 2.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
ul li {
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
}
ul li.price {
  font-size: 3rem;
  color: hsl(232, 13%, 33%);
  padding-bottom: 2rem;
}


.card.active .price {
  color: #fff;
}

.btn {
  margin-top: 1rem;
  height: 2.6rem;
  width: 13.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background:  #1970C2;
  color: #fff;
  outline: none;
  border: 0;
  font-weight: bold;
}
.btn:hover{
  cursor: pointer;
  border: 1px solid #white;
}
.active-btn {
  background: #fff;
  color: hsl(237, 63%, 64%);
}
.active-btn:hover{
  background: #1970C2;
  color: white;
  border: 1px solid white;
  cursor: pointer;
}
.bottom-bar {
  border-bottom: 2px solid hsla(240, 8%, 85%, 0.582);
}
.card.active .bottom-bar {
  border-bottom: 2px solid hsla(240, 8%, 85%, 0.253);
}
.pack {
  font-size: 1.1rem;
}

@media (max-width: 280px) {
  ul {
    margin: 1rem;
  }
  h1 {
    font-size: 1.2rem;
  }
  .toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80px;
  }
  .cards {
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .card {
    transform: scale(0.8);
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(0.8);
  }
}

@media (min-width: 280px) and (max-width: 320px) {
  ul {
    margin: 20px;
  }
  .cards {
    display: flex;
    flex-direction: column;
  }
  .card {
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}

@media (min-width: 320px) and (max-width: 414px) {
  .cards {
    display: flex;
    flex-direction: column;
  }
  .card {
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}
@media (min-width: 414px) and (max-width: 768px) {
  .card {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}
@media (min-width: 768px) and (max-width: 1046px) {
  .cards {
    display: flex;
  }
  .card {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}
`,
      },
    },
  });


  editor.Blocks.add('pricing-three-rows', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Pricing Multi-column',
    category: 'sections-pricing',
    select: true,
    content: { type: 'pricing-three-rows' },
  });

  Components.addType('pricing-three-rows', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Pricing 3 Columns',
        // Define default values for your custom properties
        components: `<div class="pricing-container">
   <div class="pricing-header">
    <h1>Our Pricing</h1>
  </div>
  <div class="cards">
    <div  class="card shadow">
      <ul>
        <li class="pack">Basic</li>
        <li id="basic" class="price bottom-bar">&dollar;199.99</li>
        <li class="bottom-bar">500 GB Storage</li>
        <li class="bottom-bar">2 Users Allowed</li>
        <li class="bottom-bar">Send up to 3 GB</li>
        <li class="bottom-bar">50 Email Accounts</li>
        <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
      </ul>
    </div>
    <div   class="card active">
      <ul>
        <li class="pack">Professional</li>
        <li id="professional" class="price bottom-bar">&dollar;249.99</li>
        <li class="bottom-bar">1 TB Storage</li>
        <li class="bottom-bar">5 Users Allowed</li>
        <li class="bottom-bar">Send up to 10 GB</li>
        <li class="bottom-bar">Unlimited Email Accounts</li>
        <li><button class="btn active-btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
      </ul>
    </div>
    <div   class="card shadow">
      <ul>
        <li class="pack">Master</li>
        <li id="master" class="price bottom-bar">&dollar;399.99</li>
        <li class="bottom-bar">2 TB Storage</li>
        <li class="bottom-bar">10 Users Allowed</li>
        <li class="bottom-bar">Send up to 20 GB</li>
        <li class="bottom-bar">Unlimited Email Accounts</li>
        <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
      </ul>
    </div>
  </div>
</div>`,
        styles: `
        .pricing-container {
  max-width: 1440px;
  margin: 2rem auto 6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  }
        
        
       .pricing-header {
  color: #1970C2;
  margin: 3.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.sub {
  background: linear-gradient(
    135deg,
    rgba(163, 168, 240, 1) 0%,
    rgba(105, 111, 221, 1) 100%
  );
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 1.6rem;
  width: 3.3rem;
  border-radius: 1.6rem;
  padding: 0.3rem;
}
.circle {
  background-color: #fff;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  background: #fff;
  color: hsl(233, 13%, 49%);
  border-radius: 0.8rem;
}
.card.active:hover{
  box-shadow: rgba(255, 188, 0, 0.8) 0px 0px 0px 3px;
}

.cards .card.active {
  background:  #1970C2;
  color: #fff;
  display: flex;
  align-items: center;
  transform: scale(1.1);
  z-index: 1;
}
ul {
  margin: 2.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
ul li {
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
}
ul li.price {
  font-size: 3rem;
  color: hsl(232, 13%, 33%);
  padding-bottom: 2rem;
}
.shadow {
  box-shadow: -5px 5px 15px 1px rgba(0, 0, 0, 0.1);
}

.card.active .price {
  color: #fff;
}

.btn {
  margin-top: 1rem;
  height: 2.6rem;
  width: 13.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background:  #1970C2;
  color: #fff;
  outline: none;
  border: 0;
  font-weight: bold;
}
.btn:hover{
  cursor: pointer;
  border: 1px solid #white;
}
.active-btn {
  background: #fff;
  color: hsl(237, 63%, 64%);
}
.active-btn:hover{
  background: #1970C2;
  color: white;
  border: 1px solid white;
  cursor: pointer;
}
.bottom-bar {
  border-bottom: 2px solid hsla(240, 8%, 85%, 0.582);
}
.card.active .bottom-bar {
  border-bottom: 2px solid hsla(240, 8%, 85%, 0.253);
}
.pack {
  font-size: 1.1rem;
}

@media (max-width: 280px) {
  ul {
    margin: 1rem;
  }
  h1 {
    font-size: 1.2rem;
  }
  .toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80px;
  }
  .cards {
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .card {
    transform: scale(0.8);
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(0.8);
  }
}

@media (min-width: 280px) and (max-width: 320px) {
  ul {
    margin: 20px;
  }
  .cards {
    display: flex;
    flex-direction: column;
  }
  .card {
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}

@media (min-width: 320px) and (max-width: 414px) {
  .cards {
    display: flex;
    flex-direction: column;
  }
  .card {
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}
@media (min-width: 414px) and (max-width: 768px) {
  .card {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}
@media (min-width: 768px) and (max-width: 1046px) {
  .cards {
    display: flex;
  }
  .card {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}
`,
      },
    },
  });

  // editor.Blocks.add('pricing', {
  //   media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
  //   label: 'Pricing Simple',
  //   category: 'sections-pricing',
  //   select: true,
  //   content: { type: 'pricing' },
  // });

//   Components.addType('pricing', {
//     model: {
//       defaults: {
//         script: script,
//         droppable: false,
//         name: 'Pricing Two',
//         // Define default values for your custom properties
//         pricingBasicMonthly: '19.99',
//         pricingBasicAnnual: '199.99',
//         pricingProfessionalMonthly: '24.99',
//         pricingProfessionalAnnual: '249.99',
//         pricingMasterMonthly: '39.99',
//         pricingMasterAnnual: '399.99',
//         // Define traits, in order to change your properties
//         traits: [
//           {
//             type: 'number',
//             name:'pricingBasicMonthly', // 'myprop1'
//             label: 'Basic Monthly',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingBasicAnnual', // 'myprop1'
//             label: 'Basic Annual',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingProfessionalMonthly', // 'myprop1'
//             label: 'Professional Monthly',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingProfessionalAnnual', // 'myprop1'
//             label: 'Professional Annual',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingMasterMonthly', // 'myprop1'
//             label: 'Master Monthly',
//             changeProp: true,
//           },
//           {
//             type: 'number',
//             name:'pricingMasterAnnual', // 'myprop1'
//             label: 'Master Annual',
//             changeProp: true,
//           }
//
//         ],
//         'script-props': ['pricingBasicMonthly', 'pricingBasicAnnual', 'pricingProfessionalMonthly', 'pricingProfessionalAnnual', 'pricingMasterMonthly', 'pricingMasterAnnual'],
//         components: `<div class="pricing-container">
//    <div class="pricing-header">
//     <h1>Our Pricing</h1>
//     <div class="toggle">
//       <label>Annually </label>
//       <div class="toggle-btn">
//         <input type="checkbox" class="checkbox" id="checkbox" />
//         <label class="sub" id="sub" for="checkbox">
//           <div class="circle"></div>
//         </label>
//       </div>
//       <label> Monthly</label>
//     </div>
//   </div>
//   <div class="cards">
//     <div data-gjs-copyable="false" class="card shadow">
//       <ul>
//         <li class="pack">Basic</li>
//         <li id="basic" class="price bottom-bar">&dollar;199.99</li>
//         <li class="bottom-bar">500 GB Storage</li>
//         <li class="bottom-bar">2 Users Allowed</li>
//         <li class="bottom-bar">Send up to 3 GB</li>
//         <li class="bottom-bar">50 Email Accounts</li>
//         <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
//       </ul>
//     </div>
//     <div data-gjs-copyable="false"  class="card active">
//       <ul>
//         <li class="pack">Professional</li>
//         <li id="professional" class="price bottom-bar">&dollar;249.99</li>
//         <li class="bottom-bar">1 TB Storage</li>
//         <li class="bottom-bar">5 Users Allowed</li>
//         <li class="bottom-bar">Send up to 10 GB</li>
//         <li class="bottom-bar">Unlimited Email Accounts</li>
//         <li><button class="btn active-btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
//       </ul>
//     </div>
//     <div data-gjs-copyable="false"  class="card shadow">
//       <ul>
//         <li class="pack">Master</li>
//         <li id="master" class="price bottom-bar">&dollar;399.99</li>
//         <li class="bottom-bar">2 TB Storage</li>
//         <li class="bottom-bar">10 Users Allowed</li>
//         <li class="bottom-bar">Send up to 20 GB</li>
//         <li class="bottom-bar">Unlimited Email Accounts</li>
//         <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
//       </ul>
//     </div>
//   </div>
// </div>`,
//         styles: `
//         .pricing-container {
//          background: #f7f7ff;
//   width: 80%;
//   max-width: 1440px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow: hidden;
//   }
//
//
//        .pricing-header {
//   color: hsl(233, 13%, 49%);
//   margin: 3.3rem 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
// .toggle {
//   margin-top: 2rem;
//   color: hsl(234, 14%, 74%);
//   display: flex;
//   align-items: center;
// }
// .toggle-btn {
//   margin: 0 1rem;
// }
// .checkbox {
//   display: none;
// }
//
// .sub {
//   background: linear-gradient(
//     135deg,
//     rgba(163, 168, 240, 1) 0%,
//     rgba(105, 111, 221, 1) 100%
//   );
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 1.6rem;
//   width: 3.3rem;
//   border-radius: 1.6rem;
//   padding: 0.3rem;
// }
// .circle {
//   background-color: #fff;
//   height: 1.4rem;
//   width: 1.4rem;
//   border-radius: 50%;
// }
// .checkbox:checked + .sub {
//   justify-content: flex-end;
// }
//
// .cards {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// }
//
// .card {
//   background: #fff;
//   color: hsl(233, 13%, 49%);
//   border-radius: 0.8rem;
// }
// .card.active:hover{
//   box-shadow: rgba(255, 188, 0, 0.8) 0px 0px 0px 3px;
// }
//
// .cards .card.active {
//   background: linear-gradient(
//     135deg,
//     rgba(163, 168, 240, 1) 0%,
//     rgba(105, 111, 221, 1) 100%
//   );
//   color: #fff;
//   display: flex;
//   align-items: center;
//   transform: scale(1.1);
//   z-index: 1;
// }
// ul {
//   margin: 2.6rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
// }
// ul li {
//   list-style-type: none;
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   padding: 1rem 0;
// }
// ul li.price {
//   font-size: 3rem;
//   color: hsl(232, 13%, 33%);
//   padding-bottom: 2rem;
// }
// .shadow {
//   box-shadow: -5px 5px 15px 1px rgba(0, 0, 0, 0.1);
// }
//
// .card.active .price {
//   color: #fff;
// }
//
// .btn {
//   margin-top: 1rem;
//   height: 2.6rem;
//   width: 13.3rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 4px;
//   background: linear-gradient(
//     135deg,
//     rgba(163, 168, 240, 1) 0%,
//     rgba(105, 111, 221, 1) 100%
//   );
//   color: #fff;
//   outline: none;
//   border: 0;
//   font-weight: bold;
// }
// .btn:hover{
//   cursor: pointer;
//   color: #1970C2;
//   background: white;
//   border: 1px solid #1970C2;
// }
// .active-btn {
//   background: #fff;
//   color: hsl(237, 63%, 64%);
// }
// .active-btn:hover{
//   background: #1970C2;
//   color: white;
//   border: 1px solid white;
//   cursor: pointer;
// }
// .bottom-bar {
//   border-bottom: 2px solid hsla(240, 8%, 85%, 0.582);
// }
// .card.active .bottom-bar {
//   border-bottom: 2px solid hsla(240, 8%, 85%, 0.253);
// }
// .pack {
//   font-size: 1.1rem;
// }
//
// @media (max-width: 280px) {
//   ul {
//     margin: 1rem;
//   }
//   h1 {
//     font-size: 1.2rem;
//   }
//   .toggle {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: center;
//     height: 80px;
//   }
//   .cards {
//     margin: 0;
//     display: flex;
//     flex-direction: column;
//   }
//
//   .card {
//     transform: scale(0.8);
//     margin-bottom: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(0.8);
//   }
// }
//
// @media (min-width: 280px) and (max-width: 320px) {
//   ul {
//     margin: 20px;
//   }
//   .cards {
//     display: flex;
//     flex-direction: column;
//   }
//   .card {
//     margin-bottom: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(1);
//   }
// }
//
// @media (min-width: 320px) and (max-width: 414px) {
//   .cards {
//     display: flex;
//     flex-direction: column;
//   }
//   .card {
//     margin-bottom: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(1);
//   }
// }
// @media (min-width: 414px) and (max-width: 768px) {
//   .card {
//     margin-bottom: 1rem;
//     margin-right: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(1);
//   }
// }
// @media (min-width: 768px) and (max-width: 1046px) {
//   .cards {
//     display: flex;
//   }
//   .card {
//     margin-bottom: 1rem;
//     margin-right: 1rem;
//   }
//   .cards .card.active {
//     transform: scale(1);
//   }
// }
// `,
//       },
//     },
//   });

};

export default pricings;