let numbers = [1, 2, 3]
numbers.forEach(function(numbers){
    console.log(numbers *2);
});

const producs = [
    {name: 'Camisa', precio: 20},
    {name: 'Jeans', precio: 25},
    {name: 'Zapatos', precio: 80},
    {name: 'Sombrero', precio: 10},
]

let precioTotal = 0

producs.forEach(function(producto){
    precioTotal += producto.precio;
})

console.log(`precio total a pagar:  ${precioTotal}`);

let numbers1 = [1, 2, 3];
let nuevoArreglo  = numbers1.map(function(number){
    return number * 2
})

console.log(nuevoArreglo);

const Gcelcius = [0, 15, 30, 5, 10];
const Gfarenheith = Gcelcius.map(function(celcius){
    return (celcius * 9/5) * 32;
})

console.log(`Grados celcius: `, Gcelcius);
console.log(`Grados farenheit: `, Gfarenheith);

const nums = [2, 8, 3, 6, 10, 4, 7]
const nums2 = nums.filter(function(number){
    return number > 5
})

console.log(nums2);

const perzonas = [
    {nombre: `Sarahi`, edad: 24},
    {nombre: `Sarahi`, edad: 17},
    {nombre: `Sarahi`, edad: 30},
    {nombre: `Sarahi`, edad: 15},
    {nombre: `Sarahi`, edad: 20},
]

const adultos = perzonas.filter(function(person){
    return person.edad > 18
})

console.log(adultos);

let num = [1, 2, 3, 4];
let sum = num.reduce(function(acumulador, valoractual){
    return acumulador+valoractual
}, 0)

console.log(sum);

let number = [1, 2, 3, 4, 5];
let mayorCero = number.every(function(number){
    return number > 0
})

console.log(mayorCero);

let number2 = [1, 2, 3, 4, 5];
let numeroPar = number2.some (function(number){
    return number % 2 == 0
})

console.log(numeroPar);

let nombres = [`Margarita`, `Alberto`, `cacia`, `santiago`]
nombres.sort();
console.log(nombres);

//ejercicios 1 sort(): 

let numbr2 = [1, 2, 3, 4, 5];
let nmeroPar = number2.some (function(number){
    return number % 2 == 0
})

console.log(numeroPar);

let nombrres = [`ERick`, `Isaias`, `Itamar`, `Sarahi`]
nombres.sort();
console.log(nombres);

//ejercicio 2  forEach()
let nmbers = [1, 2, 3]
numbers.forEach(function(numbers){
    console.log(numbers *2);
});

const produc = [
    {name: 'Audifonos', precio: 30},
    {name: 'Mochilas', precio: 25},
    {name: 'Sandalias', precio: 20},
    {name: 'Tablet', precio: 100},
]

let prcioTotal = 0

producs.forEach(function(producto){
    precioTotal += producto.precio;
})

console.log(`precio total a pagar:  ${precioTotal}`);

//ejercicio 3 map():

let numbs1 = [2, 3, 4];
let NuevoArreglo  = numbers1.map(function(number){
    return number * 2
})

console.log(NuevoArreglo);