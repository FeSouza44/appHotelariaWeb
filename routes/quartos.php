<?php 
require_once __DIR__ . "/../controllers/QuartosController.php";

if($_SERVER['REQUEST_METHOD'] === "GET"){
    if($id = $segments[2] ?? null){ 
    QuartosController::getById($conn,$id);
    
}else{
    QuartosController::getAll($conn);        

}elseif($_SERVER['REQUEST_METHOD'] === "DELETE")
    if(isset($id)){
        QuartosController::delete($conn, $id);
    } else{
        
    }
}
else{
    jsonResponse(
    ['status'=>'erro','message'=>
    'Método não permitido']
    ,405);
}
?>