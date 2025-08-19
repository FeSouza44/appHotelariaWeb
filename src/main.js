import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";

document.addEventListener('DOMContentLoaded', () => { 
   renderRegisterPage();
   //Novas Páginas aqui adicionadas conforme desenvolvidas
});

function getPath(){
   //obtem o hash(ex"#/login"), remove o # e tira os espaços
   const url = (location.hash || "").replace(/^ #,"").trim();

   return url && url.startsWith("/")? url : "/login";
}

function renderRouter(){
   const url = getPath();
   const render = routes[url] || routes["/login"];
}