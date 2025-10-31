<?php 
require_once __DIR__ ."/../controllers/PedidosController.php";


if ( $_SERVER['REQUEST_METHOD'] == "POST" ){
    // $cliente = validateTokenAPI("clientes");
    $opcao = $segments[2] ?? null;
    $data = json_decode( file_get_contents('php://input'), true );
    // $data ['cliente_id'] = $cliente['id'];

    if ( $opcao == "reservar" ) {
        PedidosController::createPedido($conn, $data);
    } else{
        PedidosController::create($conn, $data);
    }
    
} else{
jsonResponse(['status'=>'erro','message'=> 'Método não permitido'], 405);   
}

?>