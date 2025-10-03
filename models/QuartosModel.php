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
        return $stmt->execute();
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

    public static function disponivel($conn, $fim, $inicio, $qtd  ){
        $sql = "SELECT
        q.id,
        q.nome,
        q.qtd_cama_casal,
        q.qtd_cama_solteiro,
        q.preco,
        q.disponivel
        FROM
        quartos q
        WHERE
        id NOT IN (
        SELECT
        reservas.quarto_id
        FROM
        reservas 
        WHERE
        (reservas.fim > ? AND reservas.inicio < ?)
    AND q.disponivel = 1
    AND ( (q.qtd_cama_casal * 2) + q.qtd_cama_solteiro ) >= 3";
    $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssi",
            $fim,
            $inicio,
            $qtd
    );
    $result = $stmt->get_result();
    return $result->fetch_all(MYSQLI_ASSOC);
    } 
}
?>