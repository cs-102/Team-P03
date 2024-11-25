class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<style>
      nav{background-color: #000}
   nav a{
     position: relative;
     font-size: 1.5em;
     font-weight: 500;
     color: #c9c3c3;
     text-decoration: none;
     padding: 6px 20px;
     transition: .5s;
     font-family: 'Baloo Bhai', cursive;
 
   }
   nav a:hover{
     color: #0ef;
   }
   nav a span{
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     z-index: -1;
     border-bottom: 2px solid #0ef;
     border-radius: 15px;
     transform: scale(0) translateY(50px);
     opacity: 0;
     transition: .5s;
   }
   nav a:hover span{
     transform: scale(1) translateY(0);
     opacity: 1;
   }
  
   #logo{
     margin: 10px 34px;
 }
 
 #logo img{
     height: 59px;
     margin: 3px 6px;
 }
 #navbar{
     display: flex;
     align-items: center;
     position: sticky;
     top: 0px;
 }
 </style>
 <header>
  <nav id="navbar">
    <div id="logo">
        <img src="images/logo.png" alt="">
    </div>

    <a href="vehicles.html">Home <span></span></a>
    <a href="churches.html">Churches <span></span></a>
    <a href="beaches.html">Beaches <span></span></a>
    <a class="contact" href="#">Contact <span></span></a>
    <a style="left:32%" href="signup.html">Signup<span></span></a>
    

  </nav>
 </header>
 `;
}
}
customElements.define('header-component', Header);