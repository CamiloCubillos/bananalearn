<?php

  include("abrirconexion.php");

  $id = $_POST['id'];

  $resultadoConsulta = $conexion->query("SELECT * FROM palabras WHERE id = '$id'");

  #Creamos un objeto

  $jsonRespuesta = new stdClass();

  while ($row = mysqli_fetch_array($resultadoConsulta)) {

    #Asignamos a cada clave del objeto su valor correspondiente de la BD.    

    $jsonRespuesta->id = $row['id'];
    $jsonRespuesta->palabra = $row['palabra'];
  }

  #Devolvemos a JQuery el objeto.

  echo json_encode($jsonRespuesta);

  

  include("cerrarconexion.php");

?>