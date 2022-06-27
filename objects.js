//¿Qué son los objetos?
// Cuando iniciamos un objeto colocamos {}

var objeto = {}; //---->llaves


var miAuto = {
    marca: "Mazda",
    modelo: "3",
    annio: 2008,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ·{this.annio}`);
    }
};

// cuando nosotros activemos la función de "detalleDelAuto"
//nos dara como resultado el modelo y el año

//            FUNCIÓN CONSTRUCTORA
//Para realizar objetos de forma dinamica y más rápida
//lo haremos de esta forma.

