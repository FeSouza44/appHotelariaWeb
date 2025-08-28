<?php 

class ClientModel{

public static function ListAll($conn) {
    $sql = "SELECT * FROM clientes";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s");
        $result = $stmt->get_result();
}

public static function SearchByID($conn) {
    $sql = "SELECT * FROM clientes WHERE clientes.id = ?" ;
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s");
        $result = $stmt->get_result();
}
public static function Delete($conn) {
    $sql = "DELETE * FROM clientes WHERE cliente.id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
}
public static function Create($conn) {
    $sql = "INSERT INTO clientes"+"(nome, email, cpf, telefone) VALUES(?, ?, ?, ?);";
}
public static function Update($conn) {
    $sql = "UPDATE clientes"+ "SET nome = ?, email = ?, cpf = ?, telefone = ?";
}
}
?>