<?php
session_start(); //start the session
?>

<!DOCTYPE html>
<html>
<body>

<?php
$_SESSION["name"] = "monu";
$_SESSION["password"] = "asdfjkl";
echo " Session variable are set.";
?>
</body>
</html>

    
