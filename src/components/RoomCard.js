export default function RoomCard(){
  
    const roomCard = document.createElement('div');
    roomCard.className = 'RoomCard'
    roomCard.innerHTML = `
<div class="card" style="width: 18rem;">
 
    <div class = "heroContainer-frame w-100">

    <div id="carouselExample-RoomCard" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExample-RoomCard" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExample-RoomCard" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExample-RoomCard" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample-RoomCard" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample-RoomCard" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`

return roomCard;

}