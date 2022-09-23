//alert("Todo bien!");
document.addEventListener("mousedown",presionarMouse);
document.addEventListener("mouseup",soltarMouse);
document.addEventListener("mousemove",dibujarMouse);

var cuadrito = document.getElementById("canvasDibujo");
var papel = cuadrito.getContext("2d");

var x=0;
var y=0;
var enMovimiento;


function presionarMouse(evento){
  x = evento.offsetX; //obtiene la posiccion relativa del mouse sobre un elemento.
  y = evento.offsetY;
  enMovimiento = 1; //Bandera logica que indica si el click del mouse esta presionado y en movimiento
  console.log(x+","+y);
}

function soltarMouse(evento){
  enMovimiento = 0; //Si el click no esta precionado, no hara nada.

}

function dibujarMouse(evento){

  if (enMovimiento == 1) {
    dibujarLinea(x,y,evento.offsetX,evento.offsetY);
    x = evento.offsetX;
    y = evento.offsetY;
  }
}


function dibujarLinea(xInicial, yInicial, xFinal, yFinal){
  papel.beginPath();
  papel.lineWidth = 2;
  papel.moveTo(xInicial,yInicial);
  papel.lineTo(xFinal,yFinal);
  papel.stroke();
  papel.closePath();
}
