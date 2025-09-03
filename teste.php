<?php 
require_once __DIR__ ."/Controllers/AuthController.php";
require_once __DIR__ ."/controllers/PasswordController.php";
// require_once __DIR__ ."/models/ClientModel.php";
require_once __DIR__ ."/helpers/token_jwt.php";

$data = [
    "email" =>"felipe@gmail.com", "password"=>"1234"
];

// AuthController::login($conn,$data);
// echo PasswordController::generateHash($data['password'], $conn);
// $tokenInvalido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJGZWxpcGVTb3V6YSIsImlhdCI6MTc1NjkyNzcyMSwiZXhwIjoxNzU2OTMxMzIxLCJzdWIiOnsiaWQiOjksIm5vbWUiOiJGZWxpcGUgQW1hcmFsIiwiZW1haWwiOiJmZWxpcGVAZ21haWwuY29tIiwiY2FyZ29zIjoiR2VyZW50ZSJ9fQ.q2nW9cObRPV5E9ITh40voKQaGdrRHZ1li5j6NlPI2GE";
$tokenValido ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJGZWxpcGVTb3V6YSIsImlhdCI6MTc1NjkzMDM2OCwiZXhwIjoxNzU2OTMzOTY4LCJzdWIiOnsiaWQiOjksIm5vbWUiOiJGZWxpcGUgQW1hcmFsIiwiZW1haWwiOiJmZWxpcGVAZ21haWwuY29tIiwiY2FyZ29zIjoiR2VyZW50ZSJ9fQ.Jc_lfduGeT2iCPEKsy0Wa84NkHMjJOkPwXdOQ0Mmsrw";
echo var_dump(validateToken($tokenValido));

?>