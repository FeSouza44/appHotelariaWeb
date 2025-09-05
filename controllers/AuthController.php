<?php
require_once __DIR__ . "/../models/UserModel.php";
require_once "PasswordController.php";
require_once __DIR__ ."/../helpers/token_jwt.php";

class AuthController
{
    public static function login($conn, $data){
        $data['email'] = trim($data['email']);
        $data['password'] = trim($data['password']);

        if (empty($data['email']) || empty($data['password'])) {
            return jsonResponse(["Status"=>"Erro",
                "message"=>"Preencha todos os campos!"]);
        }
        $user = UserModel::validateUser($conn, $data['email'], $data['password']);
        if ($user) {
            $token = createToken($user);
            return jsonResponse(["token"=> $token]);

        } else {
            return jsonResponse(["resposta" => "deu bosta"]);
        }
    }
}

?>