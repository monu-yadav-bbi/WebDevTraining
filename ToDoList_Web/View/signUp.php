<?php
include '../Controller/dbconnect.php';
// $showAlert = false;
// $showError = false;
if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    $username = $_POST["username"];
    echo $username;
    $password = $_POST["password"];
    echo $password;
    $cpassword = $_POST["cpassword"];
    echo $cpassword;
    
    if($password == $cpassword){
      $hash = password_hash($password,PASSWORD_DEFAULT);
      
        $sql = "INSERT INTO `users` ( `username`, `password`, `date`) VALUES ('$username', '$hash', current_timestamp())";
        // echo $sql;
        
        $result = mysqli_query($conn, $sql);
        // echo $result;
        header('location: login.php');
       
    }
    else{
        echo "Passwords do not match";
    }
}
    
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>SignUp</title>
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

    <div class="container">
     <h1 class="text-center">Signup to our website</h1>
     <form action="signUp.php" method="post">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
        <div class="form-group">
            <label for="cpassword">Confirm Password</label>
            <input type="password" class="form-control" id="cpassword" name="cpassword">
            <small id="emailHelp" class="form-text text-muted">Make sure to type the same password</small>
        </div>
    
         
        <button type="submit" class="btn btn-primary">SignUp</button>
        <p class="form__text">
                <a class="form__link" href="login.php" id="linkCreateAccount">if you have already anaccount</a>
        </p>  
      </form>
    </div> 
  </body>
</html>
