<?php
require_once __DIR__ . "/../controllers/AdicionaisController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $data['id'] ?? null;

    if (isset($id)) {
        AdicionaisController::getById($conn, $id);
    } else {
        AdicionaisController::getAll($conn);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    AdicionaisController::create($conn, $data);
}

elseif ($_SERVER['REQUEST_METHOD'] === "PUT" ) {
    $data = json_decode( file_get_contents('php://input'), true );
    $id = $data['id'];
    AdicionaisController::update($conn, $id, $data);
}

elseif ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    $id = $data['id'];

    if (isset($id)) {
        AdicionaisController::delete($conn, $id);
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