


<?php

session_start();
session_destroy();
$_SESSION = array();
header("location:login.php");

// unset($_SESSION["loggedin"]);
// unset($_SESSION["username"]);
// session_destroy();

// header("Location:login.php");
?>




