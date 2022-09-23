
//diccionario de pokimanes y imagenes.
//Arrays asociativo = diccionario de difiniciones. Esta estructura no existe naturalmente en js.
var imagenes=[];
imagenes["Cauchin"]="vaca.png";
imagenes["Pokacho"]="pollo.png";
imagenes["Tocinauro"]="cerdo.png";


var coleccion = [];
coleccion.push( new Pakiman( "Cauchin" , 100, 30 ));
coleccion.push(new Pakiman( "Pokacho" , 80, 50));
coleccion.push(new Pakiman( "Tocinauro" , 120, 40));
console.log(coleccion);

for (var i = 0; i < coleccion.length; i++) {
  console.log(i);
  coleccion[i].mostrar();
}

//in muestra la instancia
for(var indiceDelArray in coleccion){
  console.log(indiceDelArray);
  coleccion[indiceDelArray].mostrar();
}

//of muestra el objeto
for(var indiceDelArray of coleccion){
  console.log(indiceDelArray);
  indiceDelArray.mostrar();
}
