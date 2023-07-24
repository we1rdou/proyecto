<?php
require_once "db.php";

$nombres = utf8_decode($_POST['nombres']);
$apellidos = utf8_decode($_POST['apellidos']);
$telefono = utf8_decode($_POST['telef']);
$correo =  utf8_decode($_POST['correo_inst']);
$contrasena =  utf8_decode($_POST['contra']);
$confirma_contrasena =  utf8_decode($_POST['confirma_contra']);

if ($contrasena !== $confirma_contrasena) {
    die("Las contraseñas no coinciden");
}

$sql=mysqli_query($coneccion, "select * from registro where correo=".$correo);
if (mysqli_num_rows($sql)>0) 
{echo '<script> alert("<REGISTRO EXISTE>");window.location.href="registro.html"</script>';}

else {
    $sql="insert into registro(nombres, apellidos, telef, correo_inst, contra,confirma_contra) 
    values ('$nombres', '$apellidos', '$telefono', '$correo', '$contrasena', '$confirma_contrasena')";
    if (mysqli_query($coneccion, $sql))
    {echo '<script> alert("<REGISTRADO>");window.location.href="registro.html"</script>';} }
    mysqli_close($coneccion);

?>