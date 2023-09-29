<?php
$age = array("peter"=>35,"Ben"=>37,"joe"=>43);
echo json_encode($age);
echo "<br>";
?>

<?php
// echo json_encode($age); we can access $age variable inside another php
$age = '{"peter":35,"Ben":37,"joe":43}';

$obj = json_decode($age);

foreach($obj as $key => $value){
    echo $key . "=" . $value. "<br>";
}
// var_dump (json_decode($age));
?>