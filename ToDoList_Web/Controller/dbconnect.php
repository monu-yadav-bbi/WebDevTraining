<?php 
   
    $servername = "localhost";  
    $username = "root";  
    $password = ""; 
   
    $database = "user"; 
   
     // Create a connection  
     $conn = mysqli_connect($servername,  
         $username, $password, $database); 
   
    if($conn) { 
        echo "success";  
    }  
    else { 
        die("Error". mysqli_connect_error());  
    }  
?> 