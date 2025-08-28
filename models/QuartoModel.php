<?php 

class QuartoModel{

public static function ListAll($conn) {
    $sql = "SELECT * FROM quartos";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s");
        $result = $stmt->get_result();
}

public static function SearchByID($conn) {
    $sql = "SELECT * FROM quartos WHERE quartos.id = ?" ;
       
}
public static function Delete($conn) {
    $sql = "DELETE * FROM quartos WHERE quartos.id = ?";
}
public static function Create($conn) {
    $sql = "INSERT INTO quartos"+"(nome, numero, qtd_cama_casal, qtd_cama_solteiro, preco, disponivel)";
}
public static function Update($conn) {
    $sql = "UPDATE quartos"+ "SET nome = ?, numero = ?, cpf = ?, telefone = ?";
}
}
?>