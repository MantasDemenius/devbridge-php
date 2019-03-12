<?php

//These two lines pick up the POST
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

//just adds them to these variables
$username = $_POST['username'];
$password = $_POST['password'];

echo json_encode("works new shit");

 ?>
