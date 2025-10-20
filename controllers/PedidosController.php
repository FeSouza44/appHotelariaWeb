<?php
    require_once __DIR__ . "/../models/PedidoModel.php";

    class PedidosController{
        public static function create($conn, $data){
            $result = PedidoModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Pedido criado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function getAll($conn) {
            $list = PedidoModel::getAll($conn);
            return jsonResponse($list);
        }

        public static function getById($conn, $id) {
            $result = PedidoModel::getById($conn, $id);
            return jsonResponse($result);
        }

        public static function createPedido($conn, $data){
            $data['usuario_id'] = isset($data['usuario_id']) ? $data ['usuario_id']: null;

            ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);
            foreach($data['quartos'] as $quarto){
                ValidatorController::validate_data($quarto,["id", "inicio", "fim"]);
            }

            if(count($data['quartos']) ==0){
                return jsonResponse(['message'=> 'Não existe reservas'], 400);
            }
            
            try{
                $resultado = PedidoModel::createPedido($conn, $data);
                return jsonResponse(['message'=> $resultado]);
            }
            catch(\Throwable $erro){
                return jsonResponse(['message'=>$erro->getMessage()]);
            }
            
        }
}
?>