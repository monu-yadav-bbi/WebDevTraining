<?php 
    
$showAlert = false;  
$showError = false;  
$exists=false; 
    
if($_SERVER["REQUEST_METHOD"] == "POST") { 
      
    // Include file which makes the 
    // Database Connection. 
    include 'Controller/dbconnect.php';    
    
    $username = $_POST["username"];  
    $password = $_POST["password"];  
    $cpassword = $_POST["cpassword"]; 
            
    
    $sql = "Select * from user_details where username='$username'"; 
    
    $result = mysqli_query($conn, $sql); 
    
    $num = mysqli_num_rows($result);  
    
    // This sql query is use to check if 
    // the username is already present  
    // or not in our Database 
    if($num == 0) { 
        if(($password == $cpassword) && $exists==false) { 
    
            $hash = password_hash($password,  
                                PASSWORD_DEFAULT); 
                
            // Password Hashing is used here.  
            $sql = "INSERT INTO `user_details` ( `username`,  
                `password`) VALUES ('$username',  
                '$hash')"; 
    
            $result = mysqli_query($conn, $sql); 
    
            if ($result) { 
                $showAlert = true;  
            } 
        }  
        else {  
            $showError = "Passwords do not match";  
        }       
    }// end if  
    
   if($num>0)  
   { 
      $exists="Username not available";  
   }  
    
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signup</title>
  </head>
  <body>
    
    <section>
      <form action="signUp.php" method ="POST" style="border: 1px solid #ccc">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="fname"><b>FirstName</b></label>
          <input type="text" placeholder="Enter FirstName" name="fname" required />

          <label for="lname"><b>LastName</b></label>
          <input type="text" placeholder="Enter LastName" name="lname" required />

          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter UserName" name="username" required />

          <label for="password"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <label for="cpassword"><b>Repeat Password</b></label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="cpassword"
            required
          />

          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn" href="login.php">Sign Up </button>
          </div>
        </div>
      </form>
    </section>
  </body>
</html>
