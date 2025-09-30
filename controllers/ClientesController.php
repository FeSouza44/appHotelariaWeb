<?php 
require_once __DIR__ ."/../controllers/PasswordController.php";

class ClientesModel{
 public static function create($conn, $data) {
        $sql = "INSERT INTO clientes (nome, cpf, telefone, email, senha) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss",
            $data["nome"],
            $data["cpf"],
            $data["telefone"],
            $data["email"],
            $data["senha"]
        );
        return $stmt->execute();
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




    public static function validateClient($conn, $email, $password){
        $sql = "SELECT
                clientes.id,
                clientes.nome,
                clientes.email,
                clientes.senha,
                cargos.nome AS cargo 
                FROM clientes
                INNER JOIN cargos
                ON cargos.id = clientes.cargo_id
                WHERE clientes.email = ?
                ;";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($user = $result->fetch_assoc()){
            if(PasswordController::validateHash($password, $user['senha'])){
                unset($user['senha']);
                return $user;
            }
        }
        return false;
    }
}
?>