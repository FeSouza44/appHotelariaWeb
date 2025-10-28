<?php 

class ValidatorController{

    public static function validate_data($data, $labels){
        $pendets = [];
        foreach ($labels as $lbl){
            if(!isset($data[$lbl]) && empty($data[$lbl]) ){
                $pendets[] = $lbl;
            }
        }
        if(!empty($pendets)){
            $pendets = implode(",", $pendets);
            jsonResponse(['message'=>"Erro, Falta o campo: ", $pendets], 400);
            exit;
        }
    }

    public static function fix_dateHour($date, $hour){
        $datehour = new DateTime($date);
        $datehour->setTime($hour, 0, 0);
        return $datehour->format ('Y-m-d H:i:s');
    }
}
?>