import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";
import renderHomePage from "./pages/home.js";
import renderCarPage from "./pages/Car.js";
import RenderRegisterRoom from "./pages/CadQuarto.js";

const routes = {
   "/login": renderLoginPage,
   "/cadastro": renderRegisterPage,
   "/home": renderHomePage,
   "/carrinho": renderCarPage,
   "/quartos": RenderRegisterRoom
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
