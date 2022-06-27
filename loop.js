//ejemplo para colocar un bucle y ver como funciona
var estudiantes = ["Melissa","Daniel","Karen","Monica"];
function = saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

//Utilizamos for para realizar repeticiones
//se establecen 3 parametros, priemro que i = 0
// después que mientras i sea menor a la cantidad
//de nombres de estudiantes, se seguira repitiendo
// y por  ultimo "i++" que se ira sumando, hasta 
//completar todos los nombres de los estudiantes
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes [i]);

}

//otra forma de realizar esta actividad es de la 
//siguiente forma.
for var(estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//loops con while

//En este ejemplo podemos ver que While
//es mientras el numero de estudiantes(estudiantes.length)
//sea mayor a 0, se imprimira el saludo del estudiante.
// al colocar estudiantes.shift(); lo que hacemos es
// indicar que cada vez que se ejecute el código se eliminara
//un elemento de la lista hasta que se eliminen toso
// y el resultado sea cero(0).

while(estudiantes.length > 0){
 //   console.log(estudiantes); ---> con esto vemos como la lista va disminuyendo
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}