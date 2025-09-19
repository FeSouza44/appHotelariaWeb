<?php
    require_once __DIR__ . "/../models/ReservaModel.php";

    class ReservasController{
        public static function create($conn, $data){
            $result = ReservaModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Reserva criada com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function getByPedido($conn, $id) {
            $result = ReservaModel::getByPedido($conn, $id);
            return jsonResponse($result);
        }
}
?>