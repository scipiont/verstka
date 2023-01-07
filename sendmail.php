<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('scipiont@gmail.com','Yandex');
$mail->addAddress('mukonin@mail.com');
$mail->Subject = 'Приве';
$mail->SMTPDebug = 3 
// $hand = "Правая";
// if ($_POST['hand'] == "left") {
//     $hand="Левая";
// }

$body = '<h1>dsfsdfsfsdf</h1>';

if (trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
// if (trim(!empty($_POST['hand']))) {
//     $body.='<p><strong>Рука:</strong> '.$_POST['hand'].'</p>';
// }
// if (trim(!empty($_POST['age']))) {
//     $body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
// }
if (trim(!empty($_POST['message']))) {
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}

// if (!empty($_FILES['images']['tmp_name'])) {
//     $filePath = __DIR__ . "/files/" . $_FILES['images']['name'];
//     if(copy($_FILES['images']['tmp_name'],$filePath)) {
//         $fileAttach = $filePath;
//         $body.='<p><strong>Фото в приложении</strong></p>';
//         $mail->addAttachment($fileAttach);
//         }
// }

$mail->Body = $body;

if (!$mail->send()){
    $message = 'Ошибка';

}else{
    $message = 'Данные отправлены';

}
$response = ['Message' => $message];

header('Content-type: application/json');
echo json_encode($response);


?>