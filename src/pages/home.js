import Navbar from "../components/Navbar.js";
import HeroSlide from "../components/HeroSlide.js";
import Footer from "../components/Footer.js";
import card from "../components/card.js";
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
    


    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";

    for (var i=0; i < 3; i++) {
        const cards = card();
        cards.className= "uniqueCard";
        cardsGroup.appendChild(cards);
    }

    divRoot.appendChild(cardsGroup);

    const foot = document.getElementById('footer');
    foot.innerHTML ='';

    const footer = Footer();
    foot.appendChild(footer);
}