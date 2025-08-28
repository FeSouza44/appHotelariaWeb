<?php
require_once "models/UserModel.php";
require_once "PasswordController.php";

class AuthController
{
    public static function login($conn, $data){
        $data['email'] = trim($data['email']);
        $data['password'] = trim($data['password']);

        if (empty($data['email']) || empty($data['password'])) {
            return jsonResponse(["Status"=>"Erro",
                "message"=>"Preencha todos os campos!"]);
        }
        $user = UserModel::validarUsuario($conn, $data['email'], $data['password']);
        if ($user) {
            return jsonResponse([
                "id"=>$user['id'],
                "nome"=>$user['nome'],
                "email"=>$user['email'],
                "cargo"=>$user['cargos']

            ],);

        } else {
            return jsonResponse(["resposta" => "deu bosta"]);
        }
    }
}

?>