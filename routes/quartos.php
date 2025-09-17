<?php 
require_once __DIR__ . "/../controllers/QuartosController.php";

if($_SERVER['REQUEST_METHOD'] === "GET"){
    $id = $segments[2] ?? null; 
        QuartosController::getById($conn,$id);
    if(isset($id)){
        QuartosController::getById($conn, $id);
    } else {
        QuartosController::getAll($conn);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST"){
    $data = json_decode(file_get_contents('php://input'), true);
    QuartosController::create($conn, $data);
}       

elseif ($_SERVER['REQUEST_METHOD'] === "PUT"){
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    QuartosController::update($conn, $id, $data);

}
elseif($_SERVER['REQUEST_METHOD'] === "DELETE"){

    $id = $segments[2] ?? null;

    if(isset($id)){
    QuartosController::delete($conn, $id);
    
}else{
    jsonResponse(['message' => 'ID do quarto é obrigatório'],400);
    }        
}
else{
    jsonResponse(
    ['status'=>'erro','message'=>
    'Método não permitido']
    ,405);
}
?>