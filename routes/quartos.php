<?php
require_once __DIR__ . "/../controllers/QuartosController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $data = json_decode(file_get_contents('php://input'),true);
    $id = $data['id'] ?? null;
    $qtd = $data['qtd'] ?? null;
    $fim = $data['fim'] ?? null;
    $inicio = $data['inicio'] ?? null;

    if (isset($id)) {
        QuartosController::getById($conn, $id);
        
    elseif (isset($data)){
        QuartosController::disponivel($conn,$qtd, $fim, $inicio);    } 
    } else {
        QuartosController::getAll($conn);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    QuartosController::create($conn, $data);
}

elseif ($_SERVER['REQUEST_METHOD'] === "PUT" ) {
    $data = json_decode( file_get_contents('php://input'), true );
    $id = $data['id'];
    QuartosController::update($conn, $id, $data);
}

elseif ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    $id = $data['id'];

    if (isset($id)) {
        QuartosController::delete($conn, $id);
    } else {
        jsonResponse(['message' => 'ID do quarto é obrigatorio'], 400);
    }
}

else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Metodo não permitido',
    ], 400);
}
?>