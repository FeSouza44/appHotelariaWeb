import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";

export default function renderLoginPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();

    const linkVoltar = document.createElement('a');

    linkVoltar.textContent= "Não possui uma conta? Cadastre-se!";
    linkVoltar.href = "register";
    linkVoltar.style.textAlign = 'center';
    linkVoltar.style.fontSize = '16px';
    linkVoltar.style.padding = '15px';

    const contentForms = formulario.querySelector('form')
    contentForms.insertBefore(linkVoltar, contentForms.children[3]);
}
