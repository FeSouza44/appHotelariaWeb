import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import DataSelector from "../components/DateSelector.js";
import { listAvaibleQuartosRequest } from "../api/quartosAPI.js";
import CardLounge from "../components/CardLounge.js";
import HeroSlide from "../components/HeroSlide.js";

export default function renderHomePage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const hero = HeroSlide();
    divRoot.appendChild(hero);

    // CRIAÇÃO DO SELETOR PARA OS QUARTOS //

    const selector = DataSelector();
    divRoot.appendChild(selector);

    /*Criar uma constante que armazena o valor da data de hoje*/
    const dateToday = new Date().toISOString().split("T")[0];

    const [dateCheckIn, dateCheckout] = selector.querySelectorAll('input[type="date"]');
    dateCheckIn.min = dateToday;
    dateCheckout.min = dateToday;

    const qtdHospedes = selector.querySelector('select');
    qtdHospedes.id = 'id-qtdHospedes'
    dateCheckIn.id = 'id-dateCheckIn';
    dateCheckout.id = 'id-dateCheckOut';

    const btnDateSelec = selector.querySelector('button');


    function getMinDateCheckout(dateCheckIn) {
        const minDaily = new Date(dateCheckIn);
        minDaily.setDate(minDaily.getDate() + 1);
        return minDaily.toISOString().split('T')[0];
    }

    /*Evento para monitorar a alteração da data de check-in para mudar a data da check-out*/
    dateCheckIn.addEventListener("change", async (e) => {
        if (dateCheckIn.value){
            const minDateCheckout = getMinDateCheckout(dateCheckIn.value);
            dateCheckout.min = minDateCheckout;
        }
        //se já houbver uma data de checkout selecionada e que seja inválida
            if(dateCheckout.value && dateCheckout.value <= dateCheckIn.value) {
                dateCheckout.value = "";
                alert("A data do check-out tem que ser maior que a de check-in"); //fazer modal pra isso
            }
    });

    dateCheckout.addEventListener("change", async (e) => {
        if (dateCheckIn.value && dateCheckout.value){
            const checkInValue = new Date(dateCheckIn.value);
            const checkOutValue = new Date(dateCheckout.value);
            
            if (checkOutValue <= checkInValue) {
                dateCheckout.value = "";
                alert("A data de check-out deve ser posterior ao check-in!");
            }
        }
    });
 
    btnDateSelec.addEventListener("click", async (evento) =>{
        evento.preventDefault();
        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckout?.value || "").trim();
        const qtd = parseInt(qtdHospedes?.value || "0", 10);
        try{
            const quartos = await listAvaibleQuartosRequest({inicio, fim, qtd});
            if ( ! quartos.length) {
                return;
            }
            divCard.innerHTML = '';
            quartos.forEach((itemCard, i) => {
                divCard.appendChild(RoomCard(itemCard, i));
            });
            //Após intervalo: prencher as infos dos quartos nos cards ou avisar ao cliente que nao há quarto disponivel
        }catch(erro){
            console.log(erro);
        }
    });

    // CRIAÇÃO DOS CARDS SOBRE O HOTEL //

    const divCard = document.createElement('div');
    divCard.className ="divCard";
    divCard.id = "cards-result";

    const cardGroupInfra = document.createElement('div');
    cardGroupInfra.className = "cards";

    const tituloInfra = document.createElement('h2');
    tituloInfra.textContent = "Conheça nosso Hotel";
    tituloInfra.style.textAlign = "center";

    const lougeItems = [
        {
            path: "lobbyHotel.jpg", title:"Restaurante", text: "Nosso restaurante é um espaço agradável e familiar!",
        },
    ];

    for (let i = 0; i< lougeItems.length; i++){
        const cardLounge = CardLounge(lougeItems[i], i);
        cardGroupInfra.appendChild(cardLounge);
    }

    divRoot.appendChild(divCard);
    divRoot.appendChild(tituloInfra);
    divRoot.appendChild(cardGroupInfra);

    const footer = document.getElementById('footer');
    footer.innerHTML = '';
    
    const footers = Footer();
    footer.appendChild(footers);
}