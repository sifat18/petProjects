<?php

if(isset($_POST['submit'])){

	$name=$_POST['name'];
	$mail=$_POST['email'];

	$content="From: name";
	$recipent="sifat1802@gmail.com";
	$email_header="From: $email \r\n";
	mail($recipent, $content, $email_header) or die("Error!");
	echo "email sent";
}




?>