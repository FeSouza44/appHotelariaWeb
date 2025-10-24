<?php 
require_once __DIR__ ."/../controllers/PasswordController.php";

class FotosModel{
    public static function create($conn, $name) {
        $sql = "INSERT INTO fotos (nome) VALUES (?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s",
        $name
        );
        return $stmt->execute();
    }

    public static function getAll($conn) {
        $sql = "SELECT * FROM imagens";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM imagens WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function delete($conn, $id) {
        $sql = "DELETE FROM imagens WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

     public static function searchById($conn, $id) {
        $sql = "SELECT f.nome 
        FROM imagens WHERE id= ?";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $result = $stmt->execute();
        
        $fotos = [];
        while( $row = $result->fetch_assoc()){
            $fotos[] = $row['nome'];
        }
        return $fotos;
    }

    public static function createRelationRoom($conn, $idRoom, $idPhoto){
        $sql = "INSERT INTO imagens (quarto_id, foto_id) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $idRoom, $idPhoto);
        if ($stmt->execute()){
            return $conn->insert_id;
        }
        return false;
    }

    public static function update($conn, $id, $name) {
        $sql = "UPDATE fotos SET nome=? WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si",
            $name,
            $id
        );
        return $stmt->execute();
    }
}
?>