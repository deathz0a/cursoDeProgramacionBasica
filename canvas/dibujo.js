//Obtiene la etiqueta id y lo asgina a la variable 'd'
var d = document.getElementById("dibujito");
// Asigna el objeto canvas y se pasa el parametro para un lienzo de dos dimensiones.
var lienzo = d.getContext("2d");
var user_xInicial = document.getElementById("txt_xInicial");
var user_yInicial = document.getElementById("txt_yInicial");
var user_spaceBetween = document.getElementById("txt_spaceBetween");
var user_spin = document.getElementById("txt_spin");
btn_boton.addEventListener("click",dibujoPorClick);

function dibujoPorClick()
{
  lienzo.clearRect(0,0,300,300);
espiral(parseFloat(user_xInicial.value), parseFloat(user_yInicial.value), parseFloat(user_spaceBetween.value), parseInt(user_spin.value));
}
function espiral(xInicial, yInicial, spaceBetween, spin)
{
  var numero = 0;
  var color;
  var x=xInicial;
  var y=yInicial;
  u= spaceBetween;
  for (var i = 0; i <=spin; i++) {
    lienzo.beginPath();

    if (numero<=3) {
      switch (numero) {
        case 0:
        color = "#6EB33D";
          break;
        case 1:
        color = "#96FF4A";
          break;
        case 2:
        color = "#FF3E52";
          break;
        case 3:
        color = "#19B393";
          break;
        default:

      }
    }

    else {
      numero = 0;
      color = "#30FFD4"
    }

    lienzo.strokeStyle = color;
    lienzo.moveTo(x,y);

    y = y - u;
    lienzo.lineTo(x,y);


    x = x - u;
    lienzo.lineTo(x,y);
    u= u + spaceBetween;

    y = y + u;
    lienzo.lineTo(x,y);
    x = x + u;
    lienzo.lineTo(x,y);
    u= u +spaceBetween;

    lienzo.stroke();
    lienzo.closePath();

    numero++;
  }
}





//Espira Cuadratica
/*

var u = 10;
var x = 150;
var y = 150;
var numero = 0;


for (var i = 0; i <=30; i++) {

  if (numero<=3) {
    switch (numero) {
      case 0:
      color = "#6EB33D";
        break;
      case 1:
      color = "#96FF4A";
        break;
      case 2:
      color = "#FF3E52";
        break;
      case 3:
      color = "#19B393";
        break;
      default:

    }
  }

    else {
      numero = 0;
      color = "#30FFD4";
    }
  dibujarLinea( i*10 , Math.sin(i)*50+150, 10, 0, color);
  dibujarLinea( i*10 , Math.sin(i)*50+150, -10, 0, color);
  numero++;
}

//direccion = 0

function dibujarLinea(xInicial, yIncial, tamano, direccion, color)
{
  x = xInicial;
  y = yIncial;
  u = tamano;


  for (var i = 0; i <=1; i++) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x,y);

    y = y - u;
    lienzo.lineTo(x,y);


    x = x - u;
    lienzo.lineTo(x,y);
    u= u + u;

    y = y + u;
    lienzo.lineTo(x,y);
    x = x + u;
    lienzo.lineTo(x,y);
    u= u * u;

    lienzo.stroke();
    lienzo.closePath();
  }

  console.log(lienzo);

}
*/
