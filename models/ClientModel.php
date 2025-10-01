<?php 

class ClientModel{

    public static function ClientValidation($conn, $email, $password) {
            $sql = "SELECT clientes.id, clientes.email, clientes.senha, clientes.nome, clientes.fk_cargo AS cargo FROM clientes WHERE clientes.email = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();
    
            if($client = $result->fetch_assoc()) {
            
                if(PasswordController::validateHash($password, $client['senha'])) {
                    unset($client['senha']);
                    return $client;  
                }

            return false;
        }
    }

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