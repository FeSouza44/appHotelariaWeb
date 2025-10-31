<?php
    require_once __DIR__ . "/../models/AdicionalModel.php";

    class AdicionaisController{
        public static function create($conn, $data){

            $result = AdicionalModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicional criado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function getAll($conn) {
            $list = AdicionalModel::getAll($conn);
            return jsonResponse($list);
        }

        public static function getById($conn, $id) {
            $result = Adicionalodel::getById($conn, $id);
            return jsonResponse($result);
        }

        public static function delete($conn, $id){
            $result = AdicionalModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Adicional deletado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function update($conn, $id, $data){
                validateTokenAPI("Usuario");

            $result = AdicionalModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicional atualizado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
}
?>