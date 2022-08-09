// ej 1
let excersiseNumber =1;
console.log("--- Excercise number "+excersiseNumber+ " ---")
console.log(`--- Excercise number ${excersiseNumber} ---`)
console.log("--- Excercise number ",excersiseNumber, " ---")
/*
    let userInput = prompt("Ingrese un número")
    let numberFromInput = parseInt(userInput)
*/
//let number = parseInt(prompt("Ingrese un número"))

let number = 15;

let multipleOf3 = false;
let multipleOf5 = false;
if(number%3 ==0 )
    multipleOf3 = true;
if(number%5 == 0)
    multipleOf5 = true;

console.log(`Con 15 se cumple - ${multipleOf3  == true && multipleOf5 == true}`)

let number2 = 30;
if(number2%3 == 0 && number2%5 ==0)  // si se cumple esto 
   console.log("Es múltiplo de ambos") // hacer esto
else if(number2%3 == 0 )  // si no, verificicar si se cumple esto
   console.log("Es múltiplo de 3") // si lo hace-> hacer esto
else if(number2%5 == 0 ) // repeat
   console.log("Es múltiplo de 5") //idem
else console.log("No es múltiplo de ninguno de esos 2") // si no cumple ninguno, caigo acá

excersiseNumber++;
console.log(`--- Excercise number ${excersiseNumber} ---`)

let valueA =  parseInt(prompt("Ingrese el número de A"))
let valueB =  parseInt(prompt("Ingrese el número de B"))
let valueC =  parseInt(prompt("Ingrese el número de C"))

let discriminant = valueB*valueB - 4*valueA*valueC

if(discriminant<0)
    console.log("No hay raices reales")
else if(discriminant>0){
    let rootOne = ((-1)*valueB + Math.sqrt(discriminant))/(2*valueA)
    let rootTwo = ((-1)*valueB - Math.sqrt(discriminant))/(2*valueA)
    console.log(`Las raices son ${rootOne} and ${rootTwo}`)
}else{
    let root = (-1)*valueB/(2*valueA)
    console.log(`La raíz es ${root}`)
}
    
    
