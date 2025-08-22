import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";

<<<<<<< HEAD
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
=======
//Configuraçao de rotas mapeadas
const routes = {
   "/login": renderLoginPage,
   "/register": renderRegisterPage
   //Novas páginas aqui adicionadas conforme desenvolvidas
};

//Obtém o caminho atual a partir do hash da URL
function getPath() {
   //obtém o hash (ex. "#/login"), remove o # e tira espaços
   const url = (location.hash || "").replace(/^#/, "").trim();
   //retorna url se começar com "/", se não, retorna "/login" como padrão
   return url && url.startsWith("/") ? url : "/login";         
}

//Decide o que renderizar com base na rota atual
function renderRoutes() {
   const url = getPath();  //Lê a rota atual, ex. "/register"
   const render = routes[url] || routes["/login"]; //Busca esta rota no mapa
   render(); //Executa a função de render na página atual
}

window.addEventListener("hashchange", renderRoutes);
//Renderizacao
document.addEventListener('DOMContentLoaded', renderRoutes);
>>>>>>> 1b2ec3bd7e5bb2e16720f0164efa4b62f156fff6
