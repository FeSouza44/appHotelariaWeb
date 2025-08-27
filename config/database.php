<?php
require_once "config/config.php";

$erroDB = false;
//-> modo de acessar um objr
try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME); // váriavel q representa a conexao com o banco de dados
    if($conn->connect_error){
    $erroDB = true;
}
} catch (mysqli_sql_exception $erro){
    $erroDB = true;
}
?>