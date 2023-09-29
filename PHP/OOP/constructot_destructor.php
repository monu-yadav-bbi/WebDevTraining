<?php
class Myclass{
 function show(){
    echo "Created function call after construct function <br> ";
    // echo $this -> x=50; we call x variable that is created in construct function 
    
 }
 function __construct(){
    echo "This is constructor calling automatically while just creating object <br> ";
    echo $this-> x= 100;
 }
 function __destruct(){
    echo "This is destruct calling at last automatically while just creating object";
 }
}
$obj = new MyClass();
$obj -> show();
?>