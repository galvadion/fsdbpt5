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

let valueA = 2 //parseInt(prompt("Ingrese el número de A"))
let valueB = 2 //parseInt(prompt("Ingrese el número de B"))
let valueC = 2 //parseInt(prompt("Ingrese el número de C"))

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

excersiseNumber++;
console.log(`--- Excercise number ${excersiseNumber} ---`)

let isNotOver = true;
do {
    let inputOfKey ="d"// prompt("Ingrese una opción")
    switch (inputOfKey){
        case 'a':
            console.log("Tocar opción a")
            break
        case 'b':
            console.log("Tocar opción b")
            break
        case 'c':
            console.log("Tocar opción c")
            break
        case 'd':
            console.log("Terminar")
            isNotOver= false;
            break
        default:
            console.log("Cualca")
    }
}while(isNotOver)

excersiseNumber++;
console.log("--- Excercise number "+excersiseNumber+ " ---")
console.log(`--- Excercise number ${excersiseNumber} ---`)
console.log("--- Excercise number ",excersiseNumber, " ---")

let numberForExcercise4 = 116// parseInt(prompt("Ingrese un número"))
let maxPosibleDivisible = numberForExcercise4/2

let divisibiles = []

while(maxPosibleDivisible>=0){
    if(numberForExcercise4%maxPosibleDivisible==0){
        divisibiles.push(maxPosibleDivisible);
       // divisibiles=divisibiles.concat(maxPosibleDivisible)
    }
    maxPosibleDivisible--
}
console.log(divisibiles)
