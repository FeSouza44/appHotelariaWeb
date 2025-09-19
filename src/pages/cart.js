import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function cart(){

    const navbar = Navbar();
    nav.appendChild(navbar);
    
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const foot = document.getElementById('footer');
    foot.className = "footer";
    foot.innerHTML ='';
    
    const footer = Footer();
    foot.appendChild(footer);

}
