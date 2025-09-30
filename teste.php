<?php 
require_once __DIR__ ."/Controllers/AuthController.php";
require_once __DIR__ ."/controllers/PasswordController.php";
require_once __DIR__ ."/helpers/token_jwt.php";
require_once __DIR__ ."/controllers/QuartosController.php";


$data = [
    "inicio"=> "2025-09-24 14:00",
    "fim"=> "2025-09-25 12:00"
];

$inicio = $data['inicio'];
$fim = $data['fim'];
QuartosController::disponivel($conn,$inicio, $fim, $qtdPessoas);
?>