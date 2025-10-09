<?php
class QuartosModel{
    public static function create($conn, $data) {
        $sql = "INSERT INTO quartos (nome, numero, qtd_cama_casaL, qtd_cama_solteiro, preco, disponivel) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidi",
            $data["nome"],
            $data["numero"],
            $data["qtd_cama_casal"],
            $data["qtd_cama_solteiro"],
            $data["preco"],
            $data["disponivel"]
        );
        return $stmt->execute(MYSQL_ASSOC);
    }

    public static function getAll($conn) {
        $sql = "SELECT * FROM quartos";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM quartos WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function delete($conn, $id) {
        $sql = "DELETE FROM quartos WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE quartos SET nome=?, numero=?, qtd_cama_casal=?, qtd_cama_solteiro=?, preco=?, disponivel=? WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidii",
            $data["nome"],
            $data["numero"],
            $data["qtd_cama_casal"],
            $data["qtd_cama_solteiro"],
            $data["preco"],
            $data["disponivel"],
            $id
        );
        return $stmt->execute();
    }

    public static function disponivel($conn, $data){
       $sql = " SELECT q.*,
            (q.qtd_cama_casal * 2 + q.qtd_cama_solteiro) AS qtd
            FROM quartos q WHERE q.disponivel = 1
            AND (q.qtd_cama_casal * 2 + q.qtd_cama_solteiro) >= ?
            AND q.id NOT IN (
            SELECT r.quarto_id
            FROM reservas r
            WHERE r.fim > ?  
            AND r.inicio < ?
        );";
 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iss",
            $data["qtd"],
            $data["inicio"],
            $data["fim"]
        );
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
    public static function lockById($conn, $id): bool{
        $sql = "SELECT id FROM quartos WHERE id =? FOR UPDATE";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i",$id);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result && $result->num_rows>0;
        $stmt->close();
        return $row;
    }
} 

?>