<?php 
require_once __DIR__ ."/Controllers/AuthController.php";
require_once __DIR__ ."/controllers/PasswordController.php";

$data = [
    "email" =>"felipe@gmail.com", "password"=>"1234"
];

AuthController::login($conn,$data);
?>