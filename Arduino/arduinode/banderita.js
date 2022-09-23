var cinco = require("johnny-five");
var circuito = new cinco.Board();
var bombillo, motorcito, celda, turno;
circuito.on("ready",prender);


function prender(){
  var configuracion = {pin:"A0",freq: 50};
  celda = new cinco.Sensor(configuracion);
  bombillo = new cinco.Led(13);
  bombillo.on();

  motorcito = new cinco.Servo(9);
  motorcito.to(90);
  ondear();

}

function ondear(){
  console.log("Luz:" + celda.value);
  var luz= celda.value;
  if (luz > 400) {
    if (turno == 1) {
      turno=0;
      motorcito.to(70);
    }
    else {
      turno=1;
      motorcito.to(110);
    }
  }
  else {
    motorcito.to(15);
  }
  setTimeout(ondear, 1000);
}
