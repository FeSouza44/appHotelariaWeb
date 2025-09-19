<?php
require_once __DIR__ . "/../controllers/PedidosController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $data['id'] ?? null;

    if (isset($id)) {
        PedidosController::getById($conn, $id);
    } else {
        PedidosController::getAll($conn);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    PedidosController::create($conn, $data);
}

else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Metodo não permitido',
    ], 400);
}
?>