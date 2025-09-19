<?php
    require_once __DIR__ . "/../models/ClientModel.php";
    require_once __DIR__ . "../PasswordController.php";

    class ClientesController{
        public static function create($conn, $data){
            $data['senha'] = PasswordController::generateHash($data['senha']);

            $result = ClientModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Cliente criado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function getAll($conn) {
            $list = ClientModel::getAll($conn);
            return jsonResponse($list);
        }

        public static function getById($conn, $id) {
            $result = ClientModel::getById($conn, $id);
            return jsonResponse($result);
        }

        public static function delete($conn, $id){
            $result = ClientModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Cliente deletado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function update($conn, $id, $data){
            $result = ClientModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Cliente atualizado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
}
?>