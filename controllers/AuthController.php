<?php
    require_once __DIR__ . "/../models/UserModel.php";
    require_once __DIR__ . "/../models/ClientesModel.php";
    require_once "PasswordController.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";

    class AuthController{
        public static function loginUsuario($conn, $data){

            $data['email'] = trim($data['email']);
            $data['senha'] = trim($data['senha']);
            
            //Verificar campos vazios
            if (empty($data['email']) || empty($data['senha'])) {
                return jsonResponse([
                    "status"=>"erro",
                    "message"=>"Preencha todos os campos!"
                ], 401);
            }

            //Valida a informação
            $user = UserModel::validateUser($conn, $data['email'], $data['senha']);
            if ($user) {
                $token = createToken($user);
                return jsonResponse(["token" => $token]);
            } else {
                return jsonResponse([
                    "status"=>"erro",
                    "message"=>"Credenciais invalidas"
                ], 401);
            }
        }

        public static function loginCliente($conn, $data){
            $data['email'] = trim($data['email']);
            $data['senha'] = trim($data['senha']);
    
            if (empty($data['email']) || empty($data['senha'])) {
                return null; 
            }
    
            $client = ClientesModel::validateClient($conn, $data['email'], $data['senha']);
            if ($client) {
                $client['role'] = 'client'; 
                return $client; 
            } 

            return null;
        
        }
    }
?>