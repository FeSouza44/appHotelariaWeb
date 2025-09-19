import Navbar from "../components/Navbar.js";
import HeroSlide from "../components/HeroSlide.js";
import Footer from "../components/Footer.js";
import card from "src/components/Card.js";
import Checkin from "../components/DateSelector.js";

export default function renderHomePage(){
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
   
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);


    const hero = HeroSlide();
    divRoot.appendChild(hero);

    const checkin = Checkin();
    divRoot.appendChild(checkin);   
    
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";

    for (let i=0; i < 5; i++) {
        const cards = card(i);
        cardsGroup.appendChild(cards);
    }

    divRoot.appendChild(cardsGroup);

    const foot = document.getElementById('footer');
    foot.className = "footer";
    foot.innerHTML ='';

    const footer = Footer();
    foot.appendChild(footer);
}