<?php
$mysqli = mysqli_connect("localhost", "username", "password", "dbname");
if(!$mysqli){
    die("Conexión fallida: " . mysqli_connect_error());
}

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];

$sql = "INSERT INTO usuarios(nombre,correo) VALUES ('$nombre', '$correo')";
if($mysqli->query($sql)){
    echo "Usuario añadido correctamente.";
}
else{
    echo "Error al añadir usuario: " . $mysqli->error;
}

$mysqli->close();
?>