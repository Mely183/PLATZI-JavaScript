//Más metodos que podemos aplicar a los Arrays
//Array inicial

let numArray = [1,2,3,4,5]

//función

function newNum(){
numArray.push(6,7);

//Reviso el array que ahoraa tiene los números
//agregados

console.log(numArray);
}

//RESULTADO

[1,2,3,4,5,6,7]


//Ejemplo con strings
//Array inicial

let txtArray = ["Ana","Juan","Melissa","Karen"]

//función para agregar elementos

function addCharacters(){
txtArray.push("Jessica","Victor")
console.log(txtArray)
};

//RESULTADO

["Ana", "Juan","Melissa","Karen","Jessica", "Victor"]

//Con el metodo de shift eliminamos el ultimo elemento 
//de nuestro array

let shifttxtArray = txtArray.shift()
