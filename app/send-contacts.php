<?php

function mail_utf8($to, $from, $subject='(No subject)', $message='', $add_header='') {
    $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/plain; charset=UTF-8\r\n" . "From: $from\r\n" . $add_header;
    mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $headers);
}

$recepient = 'shelltown@gmail.com';  //*self Email*/
$sitename = "europe-control";

// f-name
// l-name
// job
// company
// location
// in-type
// phone
// email
// comment

$f_name = trim($_POST["f-name"]);
$l_name = trim($_POST["l-name"]);
$tel = trim($_POST["phone"]);
$from = trim($_POST["email"]);
$company = trim($_POST["company"]);
$job = trim($_POST["job"]);
$location = trim($_POST["location"]);
$in_type = trim($_POST["in-type"]);
$message = trim($_POST["comment"]);
$subject = "New contact";
$ip = $_SERVER["REMOTE_ADDR"];

$message = "I wish to contact you, $subject \nFirst Name: $f_name \nLast Name: $l_name \nTel: $tel \nE-mail: $from \nCompany: $company \nJob: $job \nLocation: $location \nInquiry Type: $in_type \nMessage: $message \n(User IP:  $ip)";

$pagetitle = 'have a new contact with the site "'.$sitename.'"';

mail_utf8($recepient, $from, $pagetitle, $message, "Reply-To: $from\r\n");

?>