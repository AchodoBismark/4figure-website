<?php
include('Mail.php'); // includes the PEAR Mail class, already on your server.

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// // Create the email and send the message
// $to = 'info@4figure.ng'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
// $email_subject = "Website Contact Form:  $name";
// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\n Email: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
// $headers = "From: noreply@4figure.ng\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
// $headers .= "Reply-To: $email_address";   
// mail($to,$email_subject,$email_body,$headers);
// return true;     

$username = 'noreply@4figure.ng'; // your email address
$password = '.%[3lo5WIk9~'; // your email address password

$from = "noreply@4figure.ng";
$to = "info@4figure.ng";
$subject = "Website Contact Form:  $name";
$body= "You have received a new message from your website contact form.\n\n"."Here are the details:\n\n Name: $name\n\n Email: $email_address\n\n Phone: $phone\n\n Message:\n$message";

$headers = array ('From' => $from, 'To' => $to, 'Subject' => $subject); // the email headers
$smtp = Mail::factory('smtp', array ('host' =>'localhost', 'auth' => true, 'username' => $username, 'password' => $password, 'port' => '25')); // SMTP protocol with the username and password of an existing email account in your hosting account
$mail = $smtp->send($to, $headers, $body); // sending the email

if (PEAR::isError($mail)) {
echo("<p>" . $mail->getMessage() . "</p>");
}
else {
echo("<p>Message successfully sent!</p>");
// header("Location: http://www.example.com/"); // you can redirect page on successful submission.
}

?>
