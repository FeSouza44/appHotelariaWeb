import Navbar from "../components/Navbar.js";
import HeroSlide from "../components/HeroSlide.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import Checkin from "../components/Checkin.js";

export default function renderHomePage(){
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
   
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);
    
    const checkin = Checkin();
    divRoot.appendChild(checkin);
    
    const hero = HeroSlide();
    divRoot.appendChild(hero);
    
   
        
    const roomCard = document.getElementById('cards');
    roomCard.innerHTML = '';

    const cardRoom = Card();
    roomCard.appendChild(cardRoom);
    
    const foot = document.getElementById('footer');
    foot.innerHTML ='';

    const footer = Footer();
    foot.appendChild(footer);

    
    
}