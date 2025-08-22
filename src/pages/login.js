import { createElement } from "react";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";

export default function renderLoginPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
    const contentForm = formulario.querySelector('form');

    const texto = createElement('p');
    texto = "Não tem uma conta cadastre-se!";
    texto.className = "texto";

    const linkRegister = createElement('a');
    linkRegister.href = "#/register";
    linkRegister.textContent = "Cadastre-se!";

    texto.appendChild(linkRegister);
    co
}
