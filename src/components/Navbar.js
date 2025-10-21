export default function Navbar() {
    const navbar = document.createElement('div');
    navbar.innerHTML = 
    `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="home"><img src="public/assets/images/LogoHotelBlack.png" style = "width: 30px; height: 30px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            
            
         

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cadastrar
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Quarto</a></li>
                    <li><a class="dropdown-item" href="#">Adicional</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>


                <li class="nav-item">
                <a class="nav-link" href="register">Cadastre-se</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href= "login">Login</a>
                </li>

            </ul>
                <div class="cartDiv">
                    <i class="bi bi-cart-check">
                    <a href="cart"> <img src="public/assets/images/cart-check.svg" width="25"
                    </i>
                </div>

            </div>
        </div>
    </nav>
    `;

    return navbar;
}