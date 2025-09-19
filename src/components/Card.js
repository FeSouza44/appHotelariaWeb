export default function card(index) {
    const cardQuarto = document.createElement('div');
    cardQuarto.className = 'cardQuarto';
    cardQuarto.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="hero-frame w-100">
                <div id="carouselExample_${index}" class="carousel slide">
                    <div class="carousel-inner shadow">
                        <div class="carousel-item active">
                            <img src="public/assets/images/quartoHotel.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="public/assets/images/lobbyHotel.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="public/assets/images/hotelEntrada.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample_${index}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample_${index}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">Card title${index+1}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
    return cardQuarto;
}