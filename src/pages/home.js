import Navbar from "../components/Navbar.js";
import HeroSlide from "../components/HeroSlide.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";

export default function renderHomePage(){
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

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