<?php	
	if (empty($_POST['name_8884']) && strlen($_POST['name_8884']) == 0 || empty($_POST['email_8884']) && strlen($_POST['email_8884']) == 0 || empty($_POST['message_8884']) && strlen($_POST['message_8884']) == 0)
	{
		return false;
	}
	
	$name_8884 = $_POST['name_8884'];
	$email_8884 = $_POST['email_8884'];
	$input_775 = $_POST['input_775'];
	$message_8884 = $_POST['message_8884'];
	$optin_8884 = $_POST['optin_8884'];
	
	$to = 'r.richards@ecmny.org'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Name_8884: $name_8884 \nEmail_8884: $email_8884 \nInput_775: $input_775 \nMessage_8884: $message_8884 \nOptin_8884: $optin_8884 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\n";
	$headers .= "Reply-To: $email_8884";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>