<?php 
require_once __DIR__ ."/../controllers/PasswordController.php";

class AdicionalModel{
    public static function listarTodos($conn){
        $sql = "SELECT * FROM adicionais";
    }

    public static function buscarPorId($conn){
        $sql = "SELECT * FROM adicionais WHERE id = ?";
    }

    public static function criar($conn){
    }

    public static function atualizar($conn){
    }

    public static function deletar($conn){
    }    
}
?>