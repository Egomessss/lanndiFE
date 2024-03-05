import type {Editor} from 'grapesjs';
import {RequiredPluginOptions} from './index';

export default (editor: Editor) => {
    const {Components} = editor;

    editor.Blocks.add('footer-one', {
        media: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-bottombar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>`,
        label: 'Footer Simple',
        category: 'sections-footers',
        select: true,
        content: {type: 'footer-one'},
    });

    Components.addType('footer-one', {
        model: {
            defaults: {
                droppable: false,
                name: 'Footer One',
                attributes: {class: 'footer-one'},
                components: `  <!-- footer section start -->
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <a href="index.html"><img src="https://logo-download.com/wp-content/data/images/2021/08/Levi_Strauss__Co.-Logo.png" alt="" class="img-fluid logo-footer"></a>
                      <div class="footer-about">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                      </div>

          </div>
          <div class="col-md-3">
            <div class="useful-link">
              <h2>Useful Links</h2>
              <img src="./assets/images/about/home_line.png" alt="" class="img-fluid">
              <div class="use-links">
                <li><a href="index.html"><i class="fa-solid fa-angles-right"></i> Home</a></li>
                <li><a href="about.html"><i class="fa-solid fa-angles-right"></i> About Us</a></li>
                <li><a href="gallery.html"><i class="fa-solid fa-angles-right"></i> Gallery</a></li>
                <li><a href="contact.html"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
              </div>
            </div>

          </div>
                    <div class="col-md-3">
                        <div class="social-links">
              <h2>Follow Us</h2>
              <img src="./assets/images/about/home_line.png" alt="">
              <div class="social-icons">
                <li><a href=""><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                <li><a href=""><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
              </div>
            </div>
                    

                    </div>
          <div class="col-md-3">
            <div class="address">
              <h2>Address</h2>
              <img src="./assets/images/about/home_line.png" alt="" class="img-fluid">
              <div class="address-links">
                <li class="address1"><i class="fa-solid fa-location-dot"></i> Kolathur ramankulam-
                  Malappuram Dt 
                   Kerala 679338</li>
                   <li><a href=""><i class="fa-solid fa-phone"></i> +91 90904500112</a></li>
                   <li><a href=""><i class="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
              </div>
            </div>
          </div>
                  
        </div>
      </div>

    </footer>
    <!-- footer section end -->
    <!-- footer copy right section start -->
    <section id="copy-right">
      <div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>  
        lorem ispum lorem ispum 2022 Powerd By <a href="#">lorem ispum</a> 


      </div>

    </section>
    <!-- footer copy right section end -->`,
                styles: `*{
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  -o-box-sizing:border-box;
  -ms-box-sizing:border-box;
  box-sizing:border-box;
}
body{
  font-size:14px;
  background: #fff;
    max-width:1920px;
    margin:0 auto;
  overflow-x:hidden;
  font-family: poppins;
  

}
#footer{
  background: #f7f7f7;
    padding: 3rem;
  /* padding-top: 5rem; */
  padding-top: 7rem;
    padding-bottom: 80px;
  background-image: url(https://arena.km.ua/wp-content/uploads/3538533.jpg);
}
#footer2{
  background: #f7f7f7;
    padding: 3rem;
    margin-top: 0px;
  /* padding-top: 5rem; */
  padding-top: 7rem;
    padding-bottom: 80px;
  background-image: url(../images/cards/v748-toon-111.png);
}
.logo-footer{
  /* max-width: 300px; */
}
.social-links{
  /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

}
.social-links h2{
  padding-bottom: 15px;
  font-size: 20px;
    font-weight: 600;
}
.social-links img{
  padding-bottom: 25px;
}
.social-icons{
  /* display: flex;
    gap: 3rem; */
  display: flex;
    flex-direction: column;
    gap: 1rem;
  color: #777777;
}
.social-icons a{
  /* font-size: 18px; */
    /* background: #ffffff; */
    /* box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
    padding: 0.4rem 1rem 0.4rem 1rem;
    border-radius: 3px;
  color: #82074a; */
  /* margin-right: 18px; */
  color: #777777;
}
.social-icons a:hover{
  color: #000;
}
.social-icons a i{
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
    padding: 0.4rem 1rem 0.4rem 1rem;
    border-radius: 3px;
    color: #82074a;
  font-size: 16px;
  margin-right: 12px;
}
li{
  list-style: none;
}
.useful-link h2{
  padding-bottom: 15px;
  font-size: 20px;
    font-weight: 600;
}
.useful-link img{
  padding-bottom: 15px;
}
.use-links{
  line-height: 32px;
}
.use-links li i{
  font-size: 14px;
    padding-right: 8px;
    color: #898989;
}
.use-links li a{
  color: #303030;
    font-size: 15px;
    font-weight: 500;
  color: #777777;
}
.use-links li a:hover{
  color: #000;
}
.address h2{
  padding-bottom: 15px;
  font-size: 20px;
    font-weight: 600;
}
.address img{
  padding-bottom: 15px;
}
.address-links li a{
  color: #303030;
    font-size: 15px;
    font-weight: 500;
  color: #777777;

}
.address-links li i{
  font-size: 16px;
    padding-right: 8px;
  color: #82074a;

}
.address-links li i:nth-child(1){
  padding-top: 9px;
}
.address-links .address1{
  font-weight: 500;
    font-size: 15px;
  display: flex;
}
.address-links{
      line-height: 32px;
    color: #777777;
}
.copy-right-sec{
  padding: 1.8rem;
    background: #82074a;
    color: #fff;
    text-align: center;
}
.copy-right-sec a{
  color: #fcd462;
    font-weight: 500;
}
a{
  text-decoration:none;
}
`,
            }
        }
    });

}