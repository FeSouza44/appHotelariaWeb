<?php 

class UploadController{
    static $maxSize = 1024*1024 * 5;
    static $filestype = [
        "image/png" => "png",
        "image/jpeg" => "jpg"
    ];
    static $path = __DIR__ . "/../uploads/";

    public static function normalizeFotos($fotos){
        $files = [];
        if(is_array($fotos['name'])){
            foreach($fotos['name'] as $index => $name){
                $files[] = [
                    "name" => $fotos['name'][$index],
                    "type" => $fotos['type'][$index],
                    "tmp_name" => $fotos['tmp_name'][$index],
                    "error" => $fotos['error'][$index],
                    "size" => $fotos['size'][$index]
                ]; 
            }
        }else{
            $files[] = $fotos;
        }
        return $files;
    }

    public static function randomizeName($extension){
        $name = bin2hex(random_bytes(16));
        return $name . "." . $extension;

    }
    public static function uploadImagem($fotos){
        $files = [];
        $errors = [];
        $saves = [];
        
        if($fotos){
            $files = self::normalizeFotos($fotos);
        }
        foreach($files as $index => $photo){

            $err = $photo['error'] ?? UPLOAD_ERR_NO_FILE;

            if($err === UPLOAD_ERR_NO_FILE) continue;

            if($err !== UPLOAD_ERR_OK) {
                $errors[] = "ERRO NO UPLOAD (photo {$index})";
                continue;
            }

            if(($photo['size'] ?? 0) > self::$maxSize){
                $errors[] = "excedeu o limite da foto!" . self::$maxSize . "mb -(photo: {$index}";
                continue;
            }

            $info = new \finfo(FILEINFO_MIME_TYPE);
            $mime = $info->file($photo['tmp_name']) ?: ($photo['type'] ?? "application/octet-stream");
           
            if (!isset(self::$filestype[$mime])){
                $errors[] = "tipo do arquivo não é permitido";
                continue;
            }
        
            $photoName = self::randomizeName(self::$filestype[$mime]);
            $destPath = self::$path . $photoName;

            if (!move_uploaded_file($photo['tmp_name'], $destPath) ) {
                $errors[] = "Falha ao mover Arquivo";
                continue;
            }
            $saves[] = $photoName;
    }
    jsonResponse([$files, $errors, $saves]);
    }
}

?>