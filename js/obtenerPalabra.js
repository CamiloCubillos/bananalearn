var generadorFuncionando = false;
var segundos;
var intervaloGeneradorID;
var idUsados = [];
var iteradorAuxiliar = 0;

$(document).ready(function () {
  $("#botonGenerar").click(function (e) {
    e.preventDefault();
    generadorFuncionando = true;
    segundos = parseInt($("#segundos").val(), 10);
    intervaloGeneradorID = setInterval(function () {
      if (generadorFuncionando) {
        verificarRepeticionID();

        $.ajax({
          type: "post",
          url: "php/obtenerPalabra.php",
          data: { id },
          dataType: "json",
          complete: function (response) {
            /*Guardamos en la variable "jsonRecibido" el valor de responseJSON que retorna PHP. 
          Luego agregamos a la pagina el valor de la clave "palabra" de dicho objeto*/

            let jsonRecibido = response["responseJSON"];
            $("#palabra").html(jsonRecibido["palabra"]);
          },
        });

        establecerCronometro();
      }
    }, segundos * 1000);
  });

  $("#botonDetener").click(function (e) {
    e.preventDefault();
    if (generadorFuncionando) {
      generadorFuncionando = false;
      clearInterval(intervaloGeneradorID);
    }
  });
});

function verificarRepeticionID() {
  while (true) {
    id = Math.round(Math.random() * 10);
    if (idUsados.indexOf(id) == -1 && id != 0) {
      console.log(id);
      iteradorAuxiliar = 0;
      idUsados.push(id);
      break;
    } else {
      id = null;
    }

    //El código presentado a continuación es utilizado para escapar del While una vez se hayan utilizado todos los datos de la BD.

    iteradorAuxiliar++;
    if (iteradorAuxiliar == 100) {
      console.log("No hay mas registros en la BD");
      clearInterval(intervaloGeneradorID);
      idUsados = [];
      break;
    }
  }
}

function establecerCronometro() {
  var segundosRestantes = segundos;

  $("#tiempoRestante").html(segundosRestantes);

  var intervaloCronometroID = setInterval(function () {
    segundosRestantes -= 1;
    if (segundosRestantes == 0) {
      clearInterval(intervaloCronometroID);
    } else if (generadorFuncionando) {
      $("#tiempoRestante").html(segundosRestantes);
    }
  }, 1000);
}
