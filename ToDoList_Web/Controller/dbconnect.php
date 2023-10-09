<?php
$server = "localhost";
$username = "monu";
$password = "";
$database = "users";
// $str ="hello";

$conn = mysqli_connect($server, $username, $password, $database);
// echo $conn;
if ($conn){
    // echo "success";
}
else{
    die("Error". mysqli_connect_error());
}

?>
