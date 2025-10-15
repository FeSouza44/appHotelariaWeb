import Navbar from "../components/Navbar.js";
import HeroSlide from "../components/HeroSlide.js";
import Footer from "../components/Footer.js";
import card from "../components/Card.js";
import DateSelector from "../components/DateSelector.js";
import { listAvaibleQuartosRequest} from  "../api/quartosAPI.js";
import cardLounge from "../components/CardLounge.js";

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

    const cardsLounge = cardLounge();

    const dateToday = new Date().toISOString().split("T");

    const [dateChekin, dateCheckout] = dateSelector.querySelectorAll('input[type="date"]');
    dateChekin.min = dateToday;
    dateCheckout.min = dateToday;
   
    const qtdHospedes = dateSelector.querySelector('select');
    const btnDateSelec = dateSelector.querySelector('button');

    function getMinDateCheck(dateCheckin){
        const minDaily = new Date(dateCheckin);
        minDaily.setDate(minDaily.getDate()+ 1);

        return minDaily.toISOString().split('T')[0];
    }

        dateChekin.addEventListener("change", async(e)=>{
            //se o valor for válido
            if(this.value){
                const minDateCheckcout = getMinDateCheck(this.value)
                dateCheckout.min = minDateCheckcout;
            }
            //se já houbver uma data de checkout selecionada e que seja inválida
            if(dateCheckout.value && dateCheckout.value <= this.value) {
                dateCheckout.value= "";
                alert = ""; //fazer modal pra isso

            }
        });

            // dateCheckout.addEventListener("change", async(e)=> {
            //     if(dateChekin.value && dateCheckout.value){
            //         const checkInValue = new Date(dateChekin.value);
            //         const checkOutValue = new Date(dateCheckout.value);

            //         if(checkOutValue <= checkInValue){
            //             this.value= "";
            //             alert("a data de Check-Out deve ser posterior ao Check-In!")
            //         }
            //     }        
            // });
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

    const cardsGroupLounge = document.createElement('div');
    cardsGroupLounge.id = "cardsInfra";
    const titleInfra = document.createElement('h2');
    titleInfra.textContent = "Conheça nosso Hotel";
    divRoot.appendChild(titleInfra);
    titleInfra.style.textAlign = "center";

    const loungeItem = [
        {path: "quartoHotel.jpg",
        title:"Restaurante",
        text: "Nosso restaurante é um espaço agradável e familiar"
    },
        {title:"Restaurante",
        text: "Nosso restaurante é um espaço agradável e familiar"
        }   
    
    ];

    for(let i = 0; i<loungeItem.length; i++){
        const cardLounge= cardsLounge(loungeItem[i], i);
        cardsGroupLounge.appendChild(cardLounge);
        
    }
    
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";


    cardsGroup.appendChild(cardsLounge);
    divRoot.appendChild(cardsGroup);

    const foot = document.getElementById('footer');
    foot.className = "footer";
    foot.innerHTML ='';

    const footer = Footer();
    foot.appendChild(footer);
}