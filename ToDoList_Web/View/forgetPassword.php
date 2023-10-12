<?php
// echo "hi";
include '../Controller/dbconnect.php';


if($_SERVER["REQUEST_METHOD"] == "POST"){
    // include 'Controller/dbconnect.php';
    $username = $_POST["username"];
    $password = $_POST["password"]; 
    // echo $username;
    // echo $password;
    $sql = "Select * from users where username='$username'";
    // echo $sql;
    $result = mysqli_query($conn, $sql);
    // echo $result;
    $num = mysqli_num_rows($result);
    // echo $num;
    if ($num == 1){
        $updatePass = "UPDATE users SET `password`=$password where `username` = '$username'";
        
                session_start();
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        header("location: login.php");
        }
    
    else{
        echo "Invalid Credentials";
    }


    if ($num == 1){
        // while($row=mysqli_fetch_assoc($result)){
            $updatePass = "UPDATE users SET `password`=$password where `username` = '$username'";

        $result1 = mysqli_query($conn, $updatePass);
        //     if (password_verify($password, $row['password'])){ 
        //         session_start();
        // $_SESSION['loggedin'] = true;
        // $_SESSION['username'] = $username;
        // header("location: todolist.php");
        //     }
        //     else{
        //         echo "invalid credentials";
        //     }
        
    }
    else{
        echo "Invalid Credentials";
    }
}

    
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Login</title>
    <style>
      
      body
        {
            margin-top: 150px;
    background-color: burlywood;
    /* align-items: center; */
    text-align: center;
    padding:20px;
      }
      .container{
        /* display: flex; */
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
      background-color: wheat;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: aqua; 
      }
      .form-group{
        padding:10px;
      }
      
    </style>
  </head>
  <body>

    <div class="container ">
     <h1 class="text-center">Forget Password</h1>
     <form action="forgetPassword.php" method="post">

        <div class="form-group">
        <input id="username" type="text" name="username" placeholder="Enter your username"><br>
        <input id="password" type="password" name="password" placeHolder="Enter new Password"><br>
        <button id="confirm" type="submit">Confirm</button><br>
            
        
        </p>
     </form>
     
    </div>

    
  </body>
</html>
