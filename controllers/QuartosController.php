<?php
    require_once __DIR__ . "/../models/QuartosModel.php";
    require_once __DIR__ . "/ValidatorController.php";
    require_once __DIR__ . "/../models/FotosModel.php";
    

    class QuartosController{


        public static function create($conn, $data){
        ValidatorController::validate_data($data, ["nome", "numero", "qtd_casal", "qtd_solteiro", "preco", "disponivel"]);

        $result = QuartosModel::create($conn, $data);
        if ($result){
            if ($data['fotos']){
                $pictures = UploadController::uploadImagem($data['fotos']);
                foreach($pictures['saves'] as $name){
                    $idPhoto = FotosModel::create($conn, $name['name']);
                    if ($idPhoto){
                        FotosModel::createRelationRoom($conn, $result, $idPhoto);
                    }
                }
            }
            return jsonResponse(['message'=>"Quarto criado com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao criar o quarto"], 400);
        }
    }
        
        public static function getAll($conn) {
            $roomList = QuartosModel::getAll($conn);
            return jsonResponse($roomList);
        }

        public static function getById($conn, $id) {
            $result = QuartosModel::getById($conn, $id);
            return jsonResponse($result);
        }

        public static function delete($conn, $id){
            $result = QuartosModel::delete($conn, $id);

            if($result){
                return jsonResponse(['message'=> 'Quarto deletado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function update($conn, $id, $data){
            $result = QuartosModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Quarto atualizado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        public static function disponivel($conn, $data ){
           ValidatorController::validate_data($data, ["inicio", "fim", "qtd"]);

            $data["inicio"] = ValidatorController::fix_dateHour($data["inicio"], 14);
            $data["fim"] = ValidatorController::fix_dateHour($data["fim"], 12);
            
            $result = QuartosModel::disponivel($conn, $data);
            if($result){
                foreach ($result as &$quarto) {
                    $quarto['fotos'] = FotosModel::getById($conn, $quarto['id']);
                }
                return jsonResponse(['Quartos'=> $result]);
            }else{
                return jsonResponse(['message'=> 'não tem quartos disponiveis'], 400);
            }
        }

}
?>