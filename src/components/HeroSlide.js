
export default function HeroSlide(){
  
    const heroSlide = document.createElement('div');
    heroSlide.className = 'heroSlide w-100 d-flex justify-content-center';
    heroSlide.style.backgroundColor = "red";
    heroSlide.innerHTML = `

<div class = "hero-frame w-100">
    <div id="carouselExample" class="carousel slide">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
`
    return heroSlide;
}