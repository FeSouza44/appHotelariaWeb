import { loginRequest, saveToken } from "../api/authAPI.js";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderLoginPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const foot = document.getElementById('footer');
    foot.innerHTML ='';

    const footer = Footer();
    foot.appendChild(footer);   
    
    const formulario = Form();

    const contentForms = formulario.querySelector('form')

    const inputEmail = contentForms.querySelector('input[type="email"]');
    const inputSenha = contentForms.querySelector('input[type="password"]');
    // const btn = contentForms.querySelector('button[type"submit"]');

    //Monitora o clique no botão para acionar um evento de submeter os dados do formulario
    contentForms.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();

    try {
        const result = await loginRequest(email, senha);
        if(result.ok){
            console.log("Login realizado com sucesso!", result);
            saveToken(result.token);
        }else{
            console.log("Login invalido");
        }
    } catch {
        console.log("Erro 100% Esperado!");
    }
    

});

    const linkVoltar = document.createElement('a');

    linkVoltar.textContent = "Não possui uma conta? Cadastre-se!";
    linkVoltar.href = "register";
    linkVoltar.style.textAlign = 'center';
    linkVoltar.style.fontSize = '16px';
    linkVoltar.style.padding = '15px';

    contentForms.insertBefore(linkVoltar, contentForms.children[3]);
  
}
