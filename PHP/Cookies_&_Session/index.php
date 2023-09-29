<?php
$cookie_name = "category";
$cookie_value = "Book";
setcookie($cookie_name,$cookie_value,time() + (86400 *30),"/");  //86400 = 1 day , time() :- manual time since  the unix Epoch (1 jan 1970) //return the current time 
?>

<html>
    <head>
        <?php
        if(!isset($_COOKIE[$cookie_name])){
            echo "cookie name " . $cookie_name . "not set";
        }
        else{
            echo "cookie name" . $cookie_name . "is set<br>";
            echo "value is " . $_COOKIE[$cookie_name];
            
        }
        ?>
    </head>
</html>
