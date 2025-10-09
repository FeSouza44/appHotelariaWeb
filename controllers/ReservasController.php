<?php
    require_once __DIR__ . "/../models/ReservaModel.php";
    require_once "ValidatorController.php";

    class ReservasController{
        public static function create($conn, $data){
            ValidatorController::validate_data($data, ["pedido_id", "quarto_id", "adicional_id", "inicio", "fim"]);

            $data["inicio"] = ValidatorController::fix_dateHour($data['inicio'], 14);
            $data["fim"] = ValidatorController::fix_dateHour($data['fim'], 12);

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