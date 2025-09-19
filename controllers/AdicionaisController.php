<?php
    require_once __DIR__ . "/../models/AdicionalModel.php";

    class AdicionaisController{
        public static function create($conn, $data){
            $result = AdicionaisModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicional criado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function getAll($conn) {
            $list = AdicionaisModel::getAll($conn);
            return jsonResponse($list);
        }

        public static function getById($conn, $id) {
            $result = AdicionaisModel::getById($conn, $id);
            return jsonResponse($result);
        }

        public static function delete($conn, $id){
            $result = AdicionaisModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Adicional deletado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function update($conn, $id, $data){
            $result = AdicionaisModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicional atualizado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
}
?>