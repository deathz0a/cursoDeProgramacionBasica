//alert("Todo bien!");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39};
  var x=150;
  var y=150;
  var velocidad = 10;

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
console.log(cuadrito);


function dibujarTeclado(evento)
{
  if (evento.keyCode == teclas.UP) {

    dibujarLinea(x , y, x, y-velocidad);
    y -= velocidad;
    //console.log(x +","+ y);
  }

  if (evento.keyCode == teclas.DOWN) {
    dibujarLinea(x , y, x, y+velocidad);
    y += velocidad;
    //console.log(y);
  }

  if (evento.keyCode == teclas.LEFT) {
    dibujarLinea(x-velocidad , y, x, y);
    x -=velocidad;
  }

  if (evento.keyCode == teclas.RIGHT) {
    dibujarLinea(x+velocidad , y, x, y);
    x += velocidad;
  }

}

function dibujarLinea(xInicial, yInicial, xFinal, yFinal){
  papel.beginPath();
  papel.moveTo(xInicial,yInicial);
  papel.lineTo(xFinal,yFinal);
  papel.stroke();
  papel.closePath();
}
