<?php 
require_once __DIR__ ."/../controllers/PasswordController.php";
require_once "models/PedidoModel.php";

class PedidoModel{
    public static function create($conn,$data){
        $sql = "INSERT INTO pedidos (usuario_id, cliente_id, pagamento) VALUES (?,?,?)";
        $stmt = $conn->prepare($sql); 
        $stmt->bind_param("iis",
        $data["usuario_id"],
        $data["cliente_id"],
        $data["pagamento"],
    );
    
        $resultado = $stmt->execute();
        if($resultado){
        return $conn->insert_id;          
    }
    return false;
    } 

    public static function getById($conn, $id){
        $sql = "SELECT * FROM pedidos WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
    }

    public static function getAll($conn){
        $sql = "SELECT * FROM pedidos";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }
     public static function createPedido($conn, $data){
        $cliente_id = $data['cliente_id'];
        $pagamento = $data['pagamento'];
        $usuario_id = $data['usuario_id'];
        $reservou = false;

        $conn->begin_transaction(MYSQLI_TRANS_START_READ_WRITE);
        try {
            $pedido_id = self::create($conn,[
                "usuario_id" => $usuario_id,
                "cliente_id" => $cliente_id,
                "pagamento" => $pagamento
            ]);
            if(!$pedido_id){
                throw new RuntimeException("Erro ao criar o pedido.");
            }
            foreach($data['quartos'] as $quarto){
                $id = $quarto["id"];
                $inicio = $quarto["inicio"];
                $fim = $quarto["fim"];

                if(!QuartosModel::lockById($conn,$id) ){
                    $reservas[] = "Quarto {$id} indisponivel!";
                    continue;
                }
                //Criar um método pra averiguar 
                // se o quarto está disponivel 
                // num intervalo de datas!!!!
                    if(!QuartosModel::lockById($conn, $id)) {
                        $reservas[] = "Quarto {$id} já está reservado!";
                        continue;
                    }

                $reserverModel = ReservaModel::create($conn, [
                    ["pedido_id"]=> $pedido_id,
                    ["quarto_id"] => $id,
                    ["adicional_id"] => null,
                    ["inicio"]=> $inicio,
                    ["fim"] => $fim
                ]);
                $reservou = true;
            }
            if($reservou == true){
                $conn->commit();
                return [
                    "pedido_id" => $pedido_id,
                    "reservas"=> $reservas,
                    "message" => "Reserva Realizada com sucesso" 
                ];
            }
            else{
                throw new RuntimeException("Pedido nao realizado, nenhum quarto realizado");
            }   
        } catch (Throwable $th) {
        try {
            $conn->rollback();
        } catch (\Throwable $th1) {
           throw $th;
        }
        }
    }
}

?>