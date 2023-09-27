//ejercicio 1

function saludar () {
    console.log("Hola , soy una funcion");
}

function sumar (a,b){
    return a + b;
}

console.log(sumar(5,3));


//ejercicio 3

function resta (a, b){
    return a - b ;    
}

console.log(resta(18, 4));


//ejercicio 4
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(5, 10));

//ejercicio 5
function calcularAreaRectangulo(longitud, anchura){
    return longitud * anchura;
}

console.log(calcularAreaRectangulo(5, 4));

//ejercicio 6

function esNumeroPar(numero){
    return numero % 2 == 0;
}

console.log(esNumeroPar(6));
console.log(esNumeroPar(7));

//ejercicio 7
function obtenerCalificacion(puntuacion){
    if ((puntuacion >= 9 && puntuacion <= 10)){
    return "Excelente";
    }else if (puntuacion  >= 8 && puntuacion < 9){
    return"Muy Bueno";
    } else if (puntuacion >= 7 && puntuacion < 8){
    return "Bueno";
    } else if (puntuacion >= 6 && puntuacion < 7){
    return"Regular";
    } else if (puntuacion >= 1 && puntuacion < 6){
    return"Deficiente";
    } else {
        return "Puntuacion no valida";   
    }
}

console.log(obtenerCalificacion(8.5));
console.log(obtenerCalificacion(4));
console.log(obtenerCalificacion(9.5));