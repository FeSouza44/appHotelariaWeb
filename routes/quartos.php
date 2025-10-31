<?php
require_once __DIR__ . "/../controllers/QuartosController.php";
 
if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $segments[2] ?? null;
 
    if (isset($id)) {
        if (is_numeric($id)) {
            QuartosController::getById($conn, $id);
        } else {
            $inicio = isset($_GET['inicio']) ? $_GET['inicio'] : null;
            $fim = isset($_GET['fim']) ? $_GET['fim'] : null;
            $qtd = isset($_GET['qtd']) ? $_GET['qtd'] : null;
            QuartosController::disponivel($conn, ["inicio" => $inicio, "fim" => $fim, "qtd" => $qtd]);
        }
    }
    else {
        QuartosController::getAll($conn);
    }
}
 
elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    validateTokenAPI("Usuario");

    $data = json_decode(file_get_contents('php://input'), true);
    QuartosController::create($conn, $data);
}
 
elseif ($_SERVER['REQUEST_METHOD'] === "PUT" ) {
    validateTokenAPI("Usuario");
    $data = json_decode( file_get_contents('php://input'), true );
    $id = $data['id'] ?? null;
    QuartosController::update($conn, $id, $data);
}
 
elseif ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    validateTokenAPI("admin");
    $id = $data['id'] ?? null;
 
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