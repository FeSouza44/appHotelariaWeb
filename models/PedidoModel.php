<?php 
require_once __DIR__ ."/../controllers/PasswordController.php";

class PedidoModel{
    public static function criar($conn){
    }

    public static function buscarPorId($conn){
        $sql = "SELECT * FROM pedidos WHERE id = ?";
    }

    public static function listarTodos($conn){
        $sql = "SELECT * FROM pedidos";
    }
    
}
?>