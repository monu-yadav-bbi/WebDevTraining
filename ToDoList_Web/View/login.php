<?php
$msg="Enter Username and Password";

?>
<html> 
<head> 
<title>Login Form Test</title> 
<body> 
<?php echo $msg; ?><br/> 


<form action="index.php" method="post"> 
<label>Username</label><input type="text" length="25" name="username" /><br/> 
<label>Password</label><input type="password" length="25" name="password" /> <br/> 
<input type="submit" value="Login" /><input type="reset" value="Reset" /> 

            <p class="form__text">
                <a href="#" class="form__link">Forgot your password?</a>
            </p>
            <p class="form__text">
                <a class="form__link" href="signUp.php" id="linkCreateAccount">Don't have an account? Create account</a>
            </p>
</form> 

</body> 
</html> 
