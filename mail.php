<?php

$data = $_POST;
$errors = array();

if (isset($data['do'])) {
  if (isset($data['name']) && $data['name'] == '') {
    $errors[] = 'Введите имя';
  }
  if (isset($data['phone']) && $data['phone'] == '') {
    $errors[] = 'Введите номер телефона';
  }
  if (isset($data['textarea']) && $data['textarea'] == '') {
    $errors[] = 'Введите вопрос';
  }
  if (! empty($errors)) {
    $err = '<script language="javascript">alert("'.array_shift($errors).'")</script>';
  }else{
  $to      = 'mark_us@mail.ru';
  $subject =  "$data[name] обратный звонок ramford.ru";
  $message = "
  Заказ обратного звонка от $data[name]
  Номер телефона: $data[phone]
  Вопрос: @$data[textarea]
  ";
  $headers = 'From: webmaster@example.com' . "\r\n" .
      'Reply-To: webmaster@example.com' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
  $ok = '<script language="javascript">alert("Ваше письмо отправленно!")</script>';
  }}

?>
