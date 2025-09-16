
export default function HeroSlide(){
  
    const heroSlide = document.createElement('div');
    heroSlide.className = 'heroSlide w-100 d-flex justify-content-center';
    heroSlide.style.backgroundColor = "red";
    heroSlide.innerHTML = `
    <div class = "heroContainer-frame w-100">

    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="public/assets/images/quartoHotel.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="public/assets/images/CardQuarto2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="public/assets/images/CardQuarto3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>`;


    return heroSlide;
}