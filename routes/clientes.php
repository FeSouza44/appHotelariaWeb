<?php
require_once __DIR__ . "/../controllers/ClientesController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $segments[2] ?? null;q

    if (isset($id)) {
        ClientesController::getById($conn, $id);
    } else {
        ClientesController::getAll($conn);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    ClientesController::($conn, $data);
}

elseif ($_SERVER['REQUEST_METHOD'] === "PUT" ) {
    $data = json_decode( file_get_contents('php://input'), true );
    $id = $data['id'] ?? null;
    ClientesController::update($conn, $id, $data);
}

elseif ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    $id = $data['id'] ?? null;

    if (isset($id)) {
        ClientesController::delete($conn, $id);
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