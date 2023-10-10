<?php
include '../Controller/dbconnect.php';
// $login = false;
// $showError = false;

if($_SERVER["REQUEST_METHOD"] == "POST"){
    // include 'Controller/dbconnect.php';
    $username = $_POST["username"];
    $password = $_POST["password"]; 
    // echo $username;
    // echo $password;
    
    //  echo $conn;
    $sql = "Select * from users where username='$username'";
    // echo $sql;
    $result = mysqli_query($conn, $sql);
    // echo $result;
    $num = mysqli_num_rows($result);
    // echo $num;
    if ($num == 1){
        while($row=mysqli_fetch_assoc($result)){
            if (password_verify($password, $row['password'])){ 
                session_start();
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        $_SESSION['status']="Active";
        header("location: todolist.php");
            }
            else{
                echo "invalid credentials";
            }
        }
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
     <h1 class="text-center">Login to our ToDoList</h1>
     <form action="login.php" method="post">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" aria-describedby="emailHelp">
            
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
       
         
        <button type="submit" class="btn btn-primary">Login</button>
        <p class="form__text">
                <a class="form__link" href="signUp.php" id="linkCreateAccount">Don't have an account? Create account</a>
        </p>
        <p class="form__text">
                <a class="form__link" href="forgetPassword.php" id="linkCreateAccount">Forget Password</a>
        </p>
     </form>
     
    </div>

    
  </body>
</html>
