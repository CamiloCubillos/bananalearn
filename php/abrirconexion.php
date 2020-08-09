<?php

  $conexion = new mysqli("127.0.0.1","root","Marioloco456","bananalearn");

  if($conexion->connect_errno){
    echo "<h2>Hubo un error al contactar con la base de datos...</h2>";
  }

?>
      