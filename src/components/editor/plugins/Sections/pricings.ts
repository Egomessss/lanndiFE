import type { Editor } from 'grapesjs';

const pricings = (editor: Editor) => {
  const { Components } = editor;
  const script = function() {
    const checkbox = document.getElementById("checkbox");
    const professional = document.getElementById("professional");
    const master = document.getElementById("master");
    const basic = document.getElementById("basic");

    checkbox.addEventListener("click", () => {
      basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
      professional.textContent =
        professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
      master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
    });
  };

  editor.Blocks.add('pricing-one', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Pricing Simple',
    category: 'sections-pricing',
    select: true,
    content: { type: 'pricing-one' },
  });

  Components.addType('pricing-one', {
    model: {
      defaults: {
        script: script,
        droppable: false,
        name: 'Pricing One',
        components: `  
  <div class="pricing-container">
   <div class="top-banner">
        <p class="current-plan"> Your current Plan</p>
        <p class="plan-type"> Starter Trial . 500MAUs</p>
    </div>

    <div class="pricing-container">
      <h1 class="title">Choose a plan</h1>
      <div class="toggle-switch">
            <span>Billed anually </span>
            <input type="checkbox" class="toggler">
            <span> Billed monthly</span>
      </div>

      <div class="cards">

        <!-- Starter Plan -->
          <div class="card" id="card-1">
            <h1 class="card-title">Starter</h1>
            <h2 class="card-price" id="starter-price"> $19 <span> / month</span> </h2>
            <ul class="card-plan">
                <li> 500MAUs</li>
                <li> 3 projects</li>
                <li>Unlimted guides</li>
                <li>Unlimted flows</li>
                <li>Unlimted branded thems</li>
                <li>Email Support</li>
            </ul>
            <button type="button" class="card-btn"> Choose Plan</button>
          </div>

          <!-- Pro Plan -->
          <div class="card active" id="card-2">
            <h1 class="card-title">Pro</h1>
            <h2 class="card-price" id="pro-price"> $99 <span> / month</span> </h2>
          
            <select  id="maus">
                <option value="500">500 MAUS</option>
                <option value="100">1000 MAUS</option>
                <option value="1500">1500 MAUS</option>
                <option value="2000">2000 MAUS</option>
                <option value="2500">2500 MAUS</option>
            </select>
            <span class="note"> Monthely active users </span>
          
            <ul class="card-plan">
                <li> All starter featured ,Plus : </li>
                <li> Unlimted projects</li>
                <li>Unlimted fully customizable themes</li>
                <li>A dedicated customer Success Manager</li>
            </ul>
            <button type="button" class="card-btn"> Choose Plan</button>
          </div>

          <!-- Enterpise Card -->
          <div class="card" id="card-3">
            <h1 class="card-title">Enterprise</h1>
            <h2 class="card-price"> Let's Talk! </h2>
            <ul class="card-plan">
                <li> All pro featured</li>
                <li> Unlimted MAUs</li>
                <li> Detected enviroment</li>
                <li> Enterprise account administration</li>
                <li> Premium account and services</li>
            </ul>
            <button type="button" class="card-btn"> Contact Us</button>
          </div>
      </div>
    </div></div>`,
        styles: `
     pricing-container {
  background: #f7f7ff;
  font-family: "Montserrat", sans-serif;
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}

.top-banner {
  background-color: #bc1e4a;
  position: absolute;
  padding: 1.5rem 4rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  border-radius: 0 0 10px 10px;
}

p.current-plan {
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
}

p.plan-type {
  font-size: 1rem;
  font-weight: 900;
}

.pricing-container {
  text-align: center;
  width: 1100px;
  height: 60%;
}

h1.title {
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.toggle-switch{
    display: flex;
    height: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
}

.toggler{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 50px;
    height: 25px;
    background-color: #bc1e4a;
    border-radius: 25px;
    margin: 0 1rem;
    position: relative;
}

.toggler::before{
    content: "";
    width: 16px;
    height: 16px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
    top:50%;
    transform: translateY(-50%);
    right:4px;
}

.toggler:checked:before{
    right: 55%;
}

.cards{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
}

.card{
   height: 500px;
   width: 32%;
   background-color: #22262C; 
   border-radius: 15px;
   padding: 2rem;
   text-align: center;
}

.card-title{
    font-size: 1.5rem;
    font-weight: lighter;
    margin-bottom: 1rem;
}

.card-price{
    font-size: 3rem;
    text-align: center;
}

h2>span{
    font-size: 1rem;
}

#card-3 .card-price{
    font-size: 2rem;
} 

#card-1 .card-price{
    margin-bottom: 4rem;
}
.card ul{
    text-align: left;
    font-size: 0.9rem;
    font-weight: lighter;
}

.card ul li:before{
    content:"•";
    margin-right: 0.5rem;
    color:#bc1e4a;
    font-size: 1.5rem;
}

.card ul li{
    margin-bottom: 0.5rem;
}

.card-btn{
    margin-top: 1rem;
    width: 100%;
    background-color: transparent;
    border: 1px solid #bc1e4a;
    color:white;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 5px;
}

#card-1 .card-btn:hover, 
#card-3 .card-btn:hover, 
.active .card-btn
{
    background-color: #bc1e4a;
}

#maus{
  background: transparent;
  color:white;
  border-color: #545c5c;
  margin-top: 1rem;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
}

option{
    font-size: 1.2rem;
    background-color: #333;
}

.note{
    color:#bc1e4a;
    font-size: 0.75rem;
    text-align: left;
    display: block;
    margin-top: 5px;
}

#card-2 ul{
    margin-top: 3rem;
}

#card-3 ul{
    margin-top: 7.5rem;
}

@media (max-width:1112px){
    .cards{
        justify-content: center;
    }

    .card{
        width: 40%;
    margin: 2rem;
    }
}

@media (max-width:848px){
    .card{
        width:50%
    }
}

@media (max-width:674px){
    .top-banner{
        width: 70%;
    }
    .card{
        width: 70%;
    }
}

@media (max-width:500px){
    .top-banner{
        width: 90%;
    }



    .card{
        width: 90%;
    }
}
`,
      },
    },
  });editor.Blocks.add('pricing-two', {
    media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
    label: 'Pricing Simple',
    category: 'sections-pricing',
    select: true,
    content: { type: 'pricing-two' },
  });

  Components.addType('pricing-two', {
    model: {
      defaults: {
        // script: script,
        droppable: false,
        name: 'Pricing Two',
        components: `  
   <header>
    <h1>Our Pricing</h1>
    <div class="toggle">
      <label>Annually </label>
      <div class="toggle-btn">
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label class="sub" id="sub" for="checkbox">
          <div class="circle"></div>
        </label>
      </div>
      <label> Monthly</label>
    </div>
  </header>
  <div class="cards">
    <div class="card shadow">
      <ul>
        <li class="pack">Standard</li>
        <li id="basic" class="price bottom-bar">&dollar;199.99</li>
        <li class="bottom-bar">500 GB Storage</li>
        <li class="bottom-bar">2 Users Allowed</li>
        <li class="bottom-bar">Send up to 3 GB</li>
        <li class="bottom-bar">50 Email Accounts</li>
        <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
      </ul>
    </div>
    <div class="card active">
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
    <div class="card shadow">
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
  </div>`,
        styles: `
        header {
  color: hsl(233, 13%, 49%);
  margin: 3.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.toggle {
  margin-top: 2rem;
  color: hsl(234, 14%, 74%);
  display: flex;
  align-items: center;
}
.toggle-btn {
  margin: 0 1rem;
}
.checkbox {
  display: none;
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
  /* height: 25px;
  width: 50px; */
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
.checkbox:checked + .sub {
  justify-content: flex-end;
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
  background: linear-gradient(
    135deg,
    rgba(163, 168, 240, 1) 0%,
    rgba(105, 111, 221, 1) 100%
  );
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
  background: linear-gradient(
    135deg,
    rgba(163, 168, 240, 1) 0%,
    rgba(105, 111, 221, 1) 100%
  );
  color: #fff;
  outline: none;
  border: 0;
  font-weight: bold;
}
.btn:hover{
  cursor: pointer;
  color: #9499eb;
  background: white;
  border: 1px solid #9499eb;
}
.active-btn {
  background: #fff;
  color: hsl(237, 63%, 64%);
}
.active-btn:hover{
  background: #9499eb;
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

}

export default pricings;