<?php

    
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$email=$_POST['email'];
$asunto=$_POST['asunto'];
$mensaje=$_POST['mensaje'];


use PHPMailer\PHPMailer\PHPMailer; //Los 2 primeros son el namespace y ultimo es la clase que quiero usar
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
    
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/PHPMailer.php';


$mail = new PHPMailer(true);



try {
    //Server settings
  
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'richarpachecobrum505@gmail.com';                     //SMTP username
    $mail->Password   = 'xdreogzeimlauzbj';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('from@example.com', "$email");
    $mail->addAddress('richarpachecobrum@gmail.com');     //Add a recipient
    $message="Nombre:" . $nombre . "<br>" . "Apellido:" . $apellido . "<br>" . "Email:" . $email . "<br>" . "Mensaje:" .$mensaje;


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Asunto:".$asunto;
    $mail->Body    = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    header('Location:index.html');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}












