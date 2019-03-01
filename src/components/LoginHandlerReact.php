<?php
if(isset($_POST) && !empty($_POST)){

  $data = json_decode(file_get_contents("php://loginForm"), true);
  $task = $data['username'];
  $task2 = $data['password'];




echo $_POST;
}
 ?>
