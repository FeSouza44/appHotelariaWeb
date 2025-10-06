import Navbar from "../components/Navbar.js";
import HeroSlide from "../components/HeroSlide.js";
import Footer from "../components/Footer.js";
import card from "../components/Card.js";
import DateSelector from "../components/DateSelector.js";
import { listAvaibleQuartosRequest} from  "../api/quartosAPI.js";

export default function renderHomePage(){
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
   
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);


    const hero = HeroSlide();
    divRoot.appendChild(hero);

    const dateSelector = DateSelector();
    divRoot.appendChild(dateSelector); 
    
    const btnDateSelec = dateSelector.querySelector('button');

    btnDateSelec.addEventListener("click", async (evento) =>{
        evento.preventDefault();
        const inicio = "2025-10-05";
        const fim = "2025-12-30";
        const qtd = 2;
        try{
            const quartos = await listAvaibleQuartosRequest({inicio, fim, qtd});
            //Após intervalo: prencher as infos dos quartos nos cards ou avisar ao cliente que nao há quarto disponivel
        }catch(erro){
            console.log(erro);
        }
    });
    
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";

    for (let i=0; i < 3; i++) {
        const cards = card(i);
        cardsGroup.appendChild(cards);
    }

    divRoot.appendChild(cardsGroup);

    const foot = document.getElementById('footer');
    foot.className = "footer";
    foot.innerHTML ='';

    const footer = Footer();
    foot.appendChild(footer);
}