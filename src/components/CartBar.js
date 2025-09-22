import Navbar from "../components/Navbar.js";
import Footer from "./Footer.js";
//Importar componente Footer

export default function renderCartPage() {
    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    //Root (corpo da página)
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';


    //Footer
    const footer = document.getElementById('footer')
    footer.innerHTML = '';

}