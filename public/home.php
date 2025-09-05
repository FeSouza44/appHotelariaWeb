<?php 
    require_once "../config/database.php";
    require_once "../controllers/AuthController.php";
    require_once "src/components/Footer.js";
    $titulo = "teste1";

    $data = ["email"=>"felipe@gmail.com", "password"=>"1234"];
    
    AuthController::login($conn, $data);
?>

<h1>Home</h1>

<?php 

?>