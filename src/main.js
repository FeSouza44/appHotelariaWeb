import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";
import renderHomePage from "./pages/home.js";

document.addEventListener('DOMContentLoaded', () => { 
   renderRegisterPage();
   //Novas Páginas aqui adicionadas conforme desenvolvidas
});
const routes = {
   "/login": renderLoginPage,
   "/register": renderRegisterPage,
   "/home": renderHomePage

}

function getPath(){
   //obtem o hash(ex"#/login"), remove o # e tira os espaços
   const url = (location.pathname || "").replace("/FelipeSouza/", "/").trim();
   return url && url.startsWith("/")? url : "/home";
}

function renderRoutes(){
   const url = getPath();
   const render = routes[url] || routes["/home"];
   render();
}
document.addEventListener('DOMContentLoaded', renderRoutes);
