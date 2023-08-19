//crear un arreglo o array

let paises = ["Panama", "Peru", "japon", "El Salvador", "Suecia"]

//mostrar datos

console.log(paises)

//mostrar japon

console.log(paises[2])

//mostrar suecia

//alert(paises[4])

//crear un nuevo arreglo

let numeros =[1, 2, 6, 7]

console.log(numeros)

console.log(numeros[3])

let longitudArreglo = numeros.length;
console.log("El tamaño del arreglo " + numeros +" es: " + longitudArreglo);

console. log('El arreglo contiene ${paises. length} paises')    

let nElemtos = prompt("Ingrese cuantos elementos desea agregar al array")
let elemtos =[]

for (let i = 0; i < nElemtos; i++){
    let elemento =prompt (`ingrese el elemento ${i + 1}`)
    elemtos.push(elemento);

}

console.log(elemtos)

//Crea un arreglo con nombres de animales y muestra el arreglo en consola.
let animales = ["Mariposas", "Gatos", "Conejos", "Pajaritos", "Perritos", "Ardillas"]

console.log(animales)

//Crea un arreglo con tus marcas de carros favoritas y muestra la cuarta marca en la consola.
let marcasCarro = ["toyota", "Izuzu", "Mazda", "Ford", "Ram", "zuzuqui", "HOnda Zibith"]

console.log(marcasCarro[4])
//Crea un arreglo con nombres de frutas y muestra la segunda fruta en un alert.
let frutas = ["cereza", "Banana", "Uvas", "Fresa", "pera"]

alert(frutas[1])

//Crea un arreglo con 5 datos y modifica el tercer dato.
let arreglos = new Array(1, 2, 3, 4, 5);
console.log(arreglos)
console.log(arreglos[2] = 10)

//Crea un arreglo de 5 nombres de colonias, utiliza la propiedad length del arreglo para determinar su tamaño y muestre un mensaje que diga "El arreglo contiene [tamaño] colonias", donde [tamaño] es el valor del tamaño del arreglo.
let colonias = ["Colonia 1", "Colonia 2", "Colonia 3", "Colonia 4", "Colonia 5"];

console.log("El arreglo contiene " + colonias.length + " colonias");

//Pide al usuario que ingrese cuántos elementos desea agregar al arreglo, utiliza un bucle para solicitar al usuario que ingrese cada elemento uno por uno y guárdalos en el arreglo, luego mostrarlos en consola.
let cantidadElementos = prompt("¿Cuántos elementos desea agregar al arreglo?");

let arreglo = new Array();

for (let i = 0; i < cantidadElementos; i++) {
  let elemento = prompt("Ingrese el elemento " + (i + 1) + ":");
  arreglo.push(elemento);
}

console.log(arreglo);
