<?php
  if(isset( $_POST['name']))
  $name = $_POST['name'];
  if(isset( $_POST['email']))
  $email = $_POST['email'];
  if(isset( $_POST['message']))
  $message = $_POST['message'];
  if(isset( $_POST['phone']))
  $phone = $_POST['phone'];

  if ($name === '') {
    print json_encode(array('message' => 'Name cannot be empty', 'code' => 0));
    exit();
  }
  if ($email === '') {
    print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
    exit();
  } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
        exit();
    }
  }
  if ($phone === '') {
    print json_encode(array('message' => 'Phone cannot be empty', 'code' => 0));
    exit();
  }
  if ($message === '') {
    print json_encode(array('message' => 'Message cannot be empty', 'code' => 0));
    exit();
  }

  $content="From: $name \n Email: $email \n Phone: $phone \n\n Message: $message";
  $subject="Question about Villa Sofia Apartments"
  $recipient = "john-das@hotmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
  echo "Email sent!";
?>