<!DOCTYPE html>
<html>
<body>

<?php
function squareArray($n,$m){
    return "$n for $m";
}
$a = [1,2,3,4,5];
$b= ['a','b','v','f','h'];
$newArray = array_map('squareArray', $a,$b);
print_r($newArray);
?>

</body>
</html>
