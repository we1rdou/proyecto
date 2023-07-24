<?php
//datos coneccion
$ipservidor = "212.1.208.199";
$basedato = "u312507976_db8";
$usuario = "u312507976_db8";
$clave = "5Ag823-1";
$coneccion = mysqli_connect($ipservidor, $usuario, $clave, $basedato);
// Verificar error en la conexión
if (!$coneccion) {die("Conección fallida" . mysqli_connect_error());}
?>
