

var jf = require("johnny-five");
var circuito = new jf.Board({port: 'COM5'});
circuito.on("ready", prender);

function prender(){

    var led1 = new jf.Led(13);
    led1.blink(500);

    var led2 = new jf.Led(9);
    led2.blink(500);
}
