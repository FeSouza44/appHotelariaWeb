import { addItemToCart } from "../store/carrinhoStore.js";

function calculoDiarias(checkIn, checkOut){
    // const checkIn = "2026-01-01";
    // const checkOut = "2026-01-08";

    const [yin, min, din] = String(checkIn).split("-").map(Number);
    const [yout, mout, dout] = String(checkOut).split("-").map(Number);

    const tzin = Date.UTC(yin, min -1, din);
    const tzout = Date.UTC(yout, mout -1, dout);

    console.log("Milissegundos desde 2026-01-01 00:00:00: " + tzin);
    return Math.floor((tzout - tzin) / (100 * 60*60*24));
}

export default function CardQuarto(itemCard, index= 0){
    const {
        id,
        nome,
        numero,
        qtd_cama_casal,
        qtd_cama_solteiro,
        preco
    } = itemCard || {};

    const title = nome;
    const camas = [
        (qtd_cama_casal != null ? `${qtd_cama_casal} cama(s) de casal`: null),
        (qtd_cama_solteiro != null ? `${qtd_cama_solteiro} cama(s) de solteiro` : null),
    ].filter(Boolean).join(' - ');

    const roomcard = document.createElement('div');
    roomcard.innerHTML = 
    `
    <div class="card" style="width: 18rem;">

        <div id="carouselExampleIndicators-${index}" class="carousel slide">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner shadow">
                <div class="carousel-item active">
                    <img src="public/assets/images/CardQuarto.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/images/lobbyHotel.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/images/hotelEntrada.jpg" class="d-block w-100" alt="...">
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="next">
                <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>

        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <ul class=list-unstyled mb-2">
                ${camas? `li>${camas}` : ""}
                ${preco != null ? `<li>Preco diária: R$ ${Number(preco).toFixed(2)}</li>` : ""}
            </ul>
            <a href="#" class="btn btn-primary btn-reservar">Reservar!</a>
        </div>
    </div>
`;

    roomcard.querySelector(".btn-reservar").addEventListener('click', async (e) =>{
    e.preventDefault();

    const idDateCheckIn = document.getElementById("id-dateCheckIn")
    const idDateCheckOut = document.getElementById("id-dateCheckOut")
    const idQtdHospedes = document.getElementById("id-Hospedes")

        const inicio = (idDateCheckIn?.value || "");
        const fim = (idDateCheckOut?.value || "");

        const qtd = (idQtdHospedes?.value || "");
        if (!inicio || !fim || Number.isNaN(qtd || qtd <= 0)) {
            console.log("Preencha todos os campos!")
            return;
        }
        const daily = calculoDiarias(inicio, fim);
        const subtotal = parseFloat(preco) * daily;

        const novoItemReserva = {
            id,
            nome,
            checkIn: inicio,
            checkOut: fim,
            guest: qtd,
            daily, 
            subtotal
        }
        
        addItemToCart(novoItemReserva);
        alert(`Reserva do quarto adicionado: ${nome} - Preço/diária ${preco} - 
            Nº de diárias ${daily}- SubTotal ${subtotal}`);
    });
return roomcard;
}
