class Billete{
  constructor(valor,cantidad){
    this.valor =valor;
    this.cantidad=cantidad;
  }
}

var caja= [];
caja.push(new Billete(100,50));
caja.push(new Billete(50,50));
caja.push(new Billete(20,350));
caja.push(new Billete(10,1000));

var entregado=[];
var papeles;
var div;

var dinerocliente;
var dinero;

var s=document.getElementById('extr');
s.addEventListener("click",entregarDinero);
var resultado=document.getElementById("resultado");

console.log("En cajero habia:");
console.log(caja);

//En este punto, no deberia haber nada en entregado[], el array esta vacio.
console.log("En mano hay:");
console.log(entregado);

function entregarDinero()
{
  var t=document.getElementById("dinero");
  dinerocliente=parseInt(t.value);
  dinero=dinerocliente;
  for(var b of caja)
  {
      if (dinero>0)
      {

        div=Math.floor(dinero/b.valor);
        if (div>b.cantidad)
        {
          papeles=b.cantidad;
          b.cantidad-=papeles;
        }

        else
        {
          papeles=div;
          b.cantidad-=papeles;
        }
        entregado.push(new Billete(b.valor,papeles));
        dinero=dinero-(b.valor*papeles);

    }
  }

  if (dinero>0)
  {
    resultado.innerHTML="Soy un cajero pobre y no tengo dinero :("
  }

  else
  {
    for (var e of entregado)
    {
      resultado.innerHTML+= resultado.innerHTML+e.cantidad + " billetes de $" + e.valor + "<br />";
    }
  }
  console.log("En cajero habia:");
  console.log(caja);

  console.log("En mano hay:");
  console.log(entregado);

  entregado=[];

  console.log("En mano hay:");
  console.log(entregado);
}
