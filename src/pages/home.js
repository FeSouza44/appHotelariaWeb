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

    const [dateChekin, dateCheckout] = dateSelector.querySelectorAll('input[type="date"]');
    const qtdHospedes = dateSelector.querySelector('select');
    const btnDateSelec = dateSelector.querySelector('button');


    btnDateSelec.addEventListener("click", async (evento) =>{
        evento.preventDefault();
        const inicio = (dateChekin?.value || "").trim();
        const fim = (dateCheckout?.value || "").trim();
        const qtd = parseInt(qtdHospedes?.value || "0", 10);

        if(!inicio || !fim || Number.isNaN(qtd) || qtd <= 0) {
            console.log("Preencha todos os campos!");
            return;
        }

        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);
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