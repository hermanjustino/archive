<?php


//get data from form  
$name = $_POST['name'];
$email= $_POST['mail'];
$message= $_POST['message'];
$to = "justino.herman@yahoo.ca";
$subject = $_POST['subject'];
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>
