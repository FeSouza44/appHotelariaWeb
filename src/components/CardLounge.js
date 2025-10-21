function calculoDiarias(checkIn, checkOut){
  const checkIn = "2026-01-01";
  const checkOut = "2026-01-08";

  const [yi, mi, di] = String(checkIn).split("-").map(Number);
  const [yout, mout, dout] = String(checkOut).split("-").map(Number);
  
  const tzin = Date.UTC(yi,mi -1,di);
  const tzout = Date.UTC(yout, mout -1, dout);

  console.log("tzin"+ "tzout")
 
  return Math.floor((tzin- tzout) /(100*60*60*24));
}

export default function cardLounge(cardLoungeitem, index){
  const{ path,
     title,
      text
    } = cardLoungeitem || {}
    const cardLounge = document.createElement('div');

    cardLounge.innerHTML=
    `
    <div class="card" style="width: 18rem; height: 17rem;">
  <img src="public/assets/images/${path}" class="card-img-top" alt="...">
      <div class="btn-group dropup">
          <button type="button" class="btn" data-bs-toggle="dropdown"
           aria-expanded="false" style="border: none";>
              <h3 class="card-text" style="font-size: 1rem; font-family:"Arial";
              font-weight: 700;"${title}</h3.
          </button>
          <ul class="dropdown-menu" style="border-radius: 0.375rem 0.375rem 0 0;">
              <p class="card-text" style="text-align: center";>${text}</p>
          </u<
  </div>
</div>
`
return cardLounge;

calculoDiarias();
}