<?php 

class PasswordController{
    public static function generateHash($password){
        return password_hash($password, PASSWORD_BCRYPT);
    }
        public static function verifyHash($password, $hash){
            return password_verify($password, $hash);
    }
}
?>