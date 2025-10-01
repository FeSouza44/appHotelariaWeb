<?php
require_once __DIR__ . "/../controllers/AuthController.php";

if($_SERVER['REQUEST_METHOD'] === "POST"){
  $opcao = $segments[2] ?? null;
    $data = json_decode( file_get_contents('php://input'), true );
  if($opcao == "cliente"{//login do cliente
    AuthController::loginCliente($conn, $data);
  })
  if($opcao == "employee"){
    AuthController::loginUsuario($conn,$data);
  }
}else{
    jsonResponse(['status'=>'erro','message'=>'Método não permitido'],405);
}
    
?>