var vp=document.getElementById("villaPlatzi"); //Inicializamos en objeto Canvas del HTML
var papel=vp.getContext("2d"); //Agregamos contexto 2d

//Se definen los objetos de los animales y sus atributos.
var vaca={
  url:"vaca.png",
  cargaOk:false};

var pollo={
  url:"pollo.png",
  cargaOk:false};

var cerdo={
  url:"cerdo.png",
  cargaOk:false};

var lobo={
  url:"lobo.png",
  cargaOk:false};

var fondo={
  url:"villa.png",
  cargaOk:false};

//Se definen los objetos y valores de cada tecla
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39};

//Variables globales necesarias para controlar el movimiento del lobo
  var x=150;
  var y=150;
  var velocidad = 10;

//Se define el evento para escuhar cuando se preciona una tecla en el teclado con el evento de precionar.
document.addEventListener("keydown",dibujarTeclado);

//Se define un Array de 6x6 para guardar la posicion "aleatoria de los animales"
// 0 vaca, 1 pollo, 2 cerdo y 3 nada

var array6x6 = new Array(6);
for (var i = 0; i < 6; i++) {
  array6x6[i] = new Array(6);
}

//Asigna aleatoreamente un animal a cada posicion del array de 6x6
//Es importa por que el canvas se redibuja cada movimiento del lobo y debemos guardar la posicion de cada animal en la grilla
for(var i=0; i < 6; i++){
  for(var j=0; j < 6; j++){
    array6x6[i][j]=aleatorio(0,3);
  }
}

console.log(array6x6);

//Definicion de un OBJETO. Es una buena practiva que el nombre comienze por mayus.
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load" , cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load" , cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load" , cargarCerdo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load" , cargarLobo);


function cargarFondo(){
fondo.cargaOk = true;
dibujar();
}

function cargarVaca(){
vaca.cargaOk = true;
dibujar();
}

function cargarCerdo(){
cerdo.cargaOk = true;
dibujar();
}

function cargarPollo(){
pollo.cargaOk = true;
dibujar();
}

function cargarLobo(){
lobo.cargaOk = true;
dibujar();
}

function dibujar(){
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen,0,0);
  }

  if(vaca.cargaOk){
    for(var i=0; i < 6; i++){
      for(var j=0; j < 6; j++){
        if(array6x6[j][i] == 0){
          papel.drawImage(vaca.imagen,80*i,80*j);
        }
      }
    }
  }

  if(pollo.cargaOk){
    for(var i=0; i < 6; i++){
      for(var j=0; j < 6; j++){
        if(array6x6[j][i] == 1){
          papel.drawImage(pollo.imagen,80*i,80*j);
        }
      }
    }
  }

  if(cerdo.cargaOk){
    for(var i=0; i < 6; i++){
      for(var j=0; j < 6; j++){
        if(array6x6[j][i] == 2){
          papel.drawImage(cerdo.imagen,80*i,80*j);
        }
      }
    }
  }

  if(lobo.cargaOk){
          papel.drawImage(lobo.imagen,x,y);
          console.log(x+","+y);
  }
}

function dibujarTeclado(evento)
{
  if (evento.keyCode == teclas.UP) {

    dibujar();
    y -= velocidad;
    //console.log(x +","+ y);
  }

  if (evento.keyCode == teclas.DOWN) {
    dibujar();
    y += velocidad;
    //console.log(y);
  }

  if (evento.keyCode == teclas.LEFT) {
    dibujar();
    x -=velocidad;
  }

  if (evento.keyCode == teclas.RIGHT) {
    dibujar();
    x += velocidad;
  }

}

function aleatorio(min, max){
  var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
