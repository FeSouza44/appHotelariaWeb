<?php
require_once __DIR__ . "/../controllers/AuthController.php";
require_once __DIR__ ."/../helpers/token_jwt.php";


if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $data = json_decode(file_get_contents('php://input'), true);
        $client = AuthController::loginCliente($conn, $data);

        if ($client) {
            $token = createToken($client); 
            return jsonResponse(["token" => $token, "tipoUsuario" => $client['cargo']], 200);

        } else {
            $usuario = AuthController::loginUsuario($conn, $data);

            if ($usuario) {
                $token = createToken($usuario);
                return jsonResponse(["token" => $token, "tipoUsuario" => $usuario['cargo_id']], 200);

            } else {
                return jsonResponse([
                    "status" => "erro",
                    "message" => "Credenciais inválidas!"
                ], 401);
            }
        }
    }
?>