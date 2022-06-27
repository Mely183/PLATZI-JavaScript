// Ejercicio

var articulos [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo:10000},
    {nombre: "Laptop", costo:20000},
    {nombre: "Teclado", costo:500},
    {nombre: "Audifonos", costo: 1700},
];

//Metodo .filter te agrega a un nuevo array todos
//los articulos que cumplán con la función

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
//Se agrega a un nuevo array todos los elementos
//que cumplan con los valores
//**EJEMPLO 
// 0: {nombre: "Libro", costo: 320}
// 1: {nombre: "Teclado", costo: 500}


//Metodo de .map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
};)

//con este metodo nos regresa el nombre de todos los 
//articulos. genera un nuevo array donde solo se 
//incluyen los nombre 
//**EJEMPLO["Bici","Tv","Libro","Celular","Laptop","Teclado","Audifonos"]

// Metodo de .find

var encuentraArticulos = articulos.find(function(articulos){
    return articulo.nombre === "Laptop"
});

//al colocar "===" estamos indicando que queremos
//que el resultado sea estrictamente igual
//EJEMPLO
//** {nombre: "Laptop", costo:20000}


// metodo de .forEach
//esto no genera un nuevo array, solo realiza
//un filtrado de lo que ya tenemos
//por eso utilizamos console.log para que
//imprima el resultado


articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
//Con esto estamos indicando que solo queremos
//que se impriman los nombres de los articulos
//Bici,Tv,Libro,Celular,Laptop,Teclado,Audifonos.



//metodo .some
//Aqui solo nos mostrara verdadero o falso
//si cuenta con la información que estamos 
//solicitando

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

//Dara como resultado "True", porque existen articulos
//que tienen un costo menor o igual a $700
//**EJEMPLO
//True
