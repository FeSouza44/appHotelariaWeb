import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { createRequest } from "../api/clienteAPI.js";

export default function renderRegisterPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
    
    const titulo = formulario.querySelector('h1');
    titulo.textContent = "Cadastre-se";

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta";

    //Seleciono o elemento form que está presente em ./components/Form.js
    const contentForm = formulario.querySelector('form');

    const inputSenha = formulario.querySelector('input[type = "password"]')
    //Criar o input para nome e adicionar em contentForm
    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = "Digite seu nome";

    const inputCpf = document.createElement('input');
    inputCpf.type = 'text';
    inputCpf.placeholder = "Digite seu cpf";

    const inputTelefone = document.createElement('input');
    inputTelefone.type = 'text';
    inputTelefone.placeholder = "Digite seu telefone";

    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = "Confirme sua senha";

    /*Para adicionar input nome ao contentForm, localizo onde está input email pois
    quero necessariamente adicionar anteriormente a ele */
    const inputEmail = formulario.querySelector('input[type="email"]');
    contentForm.insertBefore(inputNome, inputEmail);
    contentForm.insertBefore(inputCpf, contentForm.children[1]);
    contentForm.insertBefore(inputTelefone, contentForm.children[2]);
    contentForm.insertBefore(confSenha, contentForm.children[5]);


    //Criar o input para confirmar senha


    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = inputNome.value.trim();
        const cpf = inputCpf.value.trim();
        const telefone = inputEmail.value.trim();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();
    try{
        const result = createRequest(nome,cpf, telefone, email, senha)

    }catch{
        console.log("erro inesperado!");
    }
    }
);
    /*Adicionar confSenha como "child" de form que já contém
        4 elementos: input nome[0] recém adicionado, input email[1],
        input password[2], button btn[3], ao adicionar confSenha antes de btn[3],
        portanto utilizar insertBefore() e identificar a posição de btn[3] como uma
        "child" do elemento pai form
    */

    const foot = document.getElementById('footer');
    foot.innerHTML ='';

    const footer = Footer();
    foot.appendChild(footer);

}
