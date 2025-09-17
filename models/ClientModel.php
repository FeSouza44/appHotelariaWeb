<?php 

class ClientModel{

public static function create($conn, $data) {
    $sql = "INSERT INTO clientes"+"(nome, email, senha, cpf, telefone) VALUES(?, ?, ?, ?);";
    $stmt = $conn->prepare($sql);
    $stmt-> bind_param("sssssi", 
    $data['nome'],
    $data['email'],
    $data['senha'],
    $data['cpf'],
    $data['senha']
);
}

public static function getAll($conn) {
    $sql = "SELECT * FROM clientes";
        $stmt = $conn->prepare($sql);
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQL_ASSOC);
}

public static function getByID($conn, $id) {
    $sql = "SELECT * FROM clientes WHERE clientes.id = ?" ;
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i",$id);
    $result = $conn->query($sql);
    return $result->fetch_all(MYSQL_ASSOC);}
public static function delete($conn, $id) {
    $sql = "DELETE * FROM clientes WHERE cliente.id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $result = $stmt->get_result();
    
}

public static function update($conn, $id, $data) {
    $sql = "UPDATE clientes"+ "SET nome = ?, email = ?, cpf = ?, telefone = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssi",
    $data['nome'],
    $data['email'],
    $data['senha'],
    $data['cpf'],
    $data['telefone'],
    $data['fk_cargo'],
    $id  
    );
    return $stmt->execute();
}
}

?>