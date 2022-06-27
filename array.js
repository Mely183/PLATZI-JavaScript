//Recuerda agregar al final de cada variable
//o funcion ";" para buenas practicas
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
//.push funciona para agregar un objeto al final 
//de la lista
var masFrutas = frutas.push("Uvas");

var ultimo = frutas.pop("Uvas");
//Con .pop lo que hacemos es eliminar un objeto 
//de la lista.

var nuevaLongitud = frutas.unshift("Guayaba");
//con .unshift agregamos un objeto al inicio
//de la lista.

var borrarFruta = frutas.shift("Guayaba");
//sirve para eliminar el primer objeto de la
//lista.

var posicion = frutas.indexOf("Cereza")
//con .indexOf podemos saber el número de un
//objeto.
