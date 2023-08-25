//

let numeros = [1, 2, 3]
numeros.push (4,5)
console.log(numeros)

//

let frutas = ["manzanas", "bananas", "uvas"]
let ultimaf = frutas.pop();
console.log(ultimaf)
console.log(frutas)

//

let colores = ["verde", "Morado"]
colores.unshift("morado", "rojo")
console.log(colores)

//

let paises = ["El Salvador", "Peru", "Rusia"]
let primerp = paises.shift()
console.log(primerp)
console.log(paises)

//

let array1=[1,2]
let array2=[3,4]
let combinArray = array1.concat(array2)
let combinArray2 = array1.concat(array1)
console.log(combinArray2)
console.log(combinArray)

//

let Arrayoriginal = [1, 2, 3, 4, 5]
let copiaArray = Arrayoriginal.slice(1,4) 
console.log(copiaArray)

//

let  Frutas = ["bananas", "naranga", "Kiwi", "pera", "manzana"]
let removerFrutas = frutas.splice(2,1,"uva")
console.log(frutas);
console.log(removerFrutas);


