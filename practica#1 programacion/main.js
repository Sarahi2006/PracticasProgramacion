 let nombre = `Itamar Medrano`
 let edad = 17

 console.log(`Mi nombre es ${nombre} y mi edad es ${edad} años`)

 alert("alert")

 const num = parseInt(prompt('ingrese un numero para generar la tabla de multiplicar'))
 for (let i=0;i<=5 ;++i){
   // const = resultado = num * i
    console.log(`${num} * ${i} = ${resultado}`)
 }

 const number = prompt("ingrese un numero")

 if (number == 0){
    console.log("el numero es cero")
 }else if (number > 0){
    console.log ("el numero ingresado es positivo")
 }else if (number < 0){
    console.log ("el numero ingresado es negativo")
 }else{
    console.log ("el dato ingresado no es un numero")
 }