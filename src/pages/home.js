import Navbar from "../components/Navbar.js";
import HeroSlide from "../components/HeroSlide.js";

export default function renderHomePage(){
    const nav = document.createElement('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const hero = HeroSlide();
    divRoot.appendChild(hero);
}