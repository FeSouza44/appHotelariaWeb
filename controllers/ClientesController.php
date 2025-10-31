<?php 
require_once __DIR__ ."/../controllers/PasswordController.php";
require_once __DIR__ ."/../helpers/token_jwt.php";
require_once __DIR__ ."/../controllers/AuthController.php";
require_once __DIR__ . "/../models/ClientesModel.php";

class ClientesController{

    public static function create($conn, $data) {
        $login = [
            "email" => $data['email'],
            "senha" => $data['senha'],
        ];

        $data['senha'] = PasswordController::generateHash($data['senha']);
        $result = ClientesModel::create($conn, $data);
        if ($result) {
            AuthController::loginCliente($conn, $login);
        } else {
            return jsonResponse(['message' => 'Erro inesperado'], 400);
        }
    }

    public static function getAll($conn) {
        $sql = "SELECT * FROM clientes";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM clientes WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function delete($conn, $id) {
        $sql = "DELETE FROM clientes WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE clientes SET nome=?, cpf=?, telefone=?, email=?, senha=? WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssii",
            $data["nome"],
            $data["cpf"],
            $data["telefone"],
            $data["email"],
            $data["senha"],
            $id
        );
        return $stmt->execute();
    }
  

}

?>