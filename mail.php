<?php
	if( isset($_POST['n']) && isset($_POST['p']) && isset($_POST['e']) && isset($_POST['m']) ){
		$n = $_POST['n']; // HINT: use preg_replace() to filter the data
		$e = $_POST['e'];
		$p = $_POST['p'];
		$m = nl2br($_POST['m']);
		$to = "heshamabdulzaher@gmail.com";	
		$from = $e;
		$subject = 'Contact Form Message From My Site';
		$message = '<b>Name:</b> '.$n.' <br><b>Phone Number:</b> '.$p.' <br><b>Email:</b> '.$e.' <br><p>'.$m.'</p>';
		$headers = "From: $from\n";
		$headers .= "MIME-Version: 1.0\n";
		$headers .= "Content-type: text/html; charset=UTF-8;\n";
		
		if( mail($to, $subject, $message, $headers) ){
			echo "Sent";
		} else {
			echo "Something went worng!";
		}
	}
?>