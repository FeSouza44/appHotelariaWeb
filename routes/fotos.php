<?php
require_once __DIR__ . "/../controllers/UploadController.php";

if($_SERVER['REQUEST_METHOD'] === "POST"){
    $data = $_FILES['fotos'] ?? null;
    UploadController::uploadImagem($data);
}
else{
    jsonResponse(['message' => 'Método não permitido']);
}