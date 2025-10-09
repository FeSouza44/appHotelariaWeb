<?php 

if ( $_SERVER['REQUEST_METHOD'] == "POST" ){
    $opcao = $segments[2] ?? null;
    $data = json_decode( file_get_contents('php://input'), true );

    if ( $opcao == "reservar" ) {
        PedidosController::createPedido($conn, $data);
    } else{
        PedidosController::create($conn, $data);
    }
    
}   

?>