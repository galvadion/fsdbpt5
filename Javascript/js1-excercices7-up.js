
/*do {
    var password = prompt("Ingrese su contraseña")
    var confirmPassword = prompt("Reingrese su contraseña")
    
    if(password == confirmPassword) console.log("Tamo chelo")
    else console.log("Pero que escribiste abombao")
    
}while(password != confirmPassword)
*/
let gradeA = getNumberFromPrompt("Nota 1",1)
let gradeB = getNumberFromPrompt("Nota 2",1)

if(gradeA>gradeB){
    console.log(gradeA+gradeB)
    console.log(gradeA-gradeB)
}else {
    console.log(gradeA*gradeB)
    console.log(gradeA/gradeB)
}

let numberA = getNumberFromPrompt("Numero",1)

if(numberA>0 && numberA<10)
    console.log("Es de un solo dígito")
else console.log("Es de más de 1 dígito")



let number1 = getNumberFromPrompt("number1",1)
let number2 = getNumberFromPrompt("number2",1)
let number3 = getNumberFromPrompt("number3",1)

console.log([number1,number2,number3].sort((a,b) => b-a)[0])

let isPositiveQuestionMark = getNumberFromPrompt("positive",1)
if(isPositiveQuestionMark>0) console.log("Es positivo")
else if(isPositiveQuestionMark==0) console.log("Es un zero a la izquierda")
else console.log("Es un número bajonero")

let questionsTotal = getNumberFromPrompt("questionsTotal",1)
let rigthQuestions = getNumberFromPrompt("rigthQuestions",1)

const thresholdForUpperLevel = 0.95
const thresholdForMediumLevel = 0.75
const thresholdForRegularLevel = 0.5


var percentage = rigthQuestions/questionsTotal

if(percentage>=thresholdForUpperLevel) console.log("nivel superior")
else if(percentage>=thresholdForMediumLevel) console.log("nivel medio")
else if(percentage>=thresholdForRegularLevel) console.log("nivel regular")
else console.log("Out of level")

let number4 = getNumberFromPrompt("number4",1)
let number5 = getNumberFromPrompt("number5",1)
let number6 = getNumberFromPrompt("number6",1)

const thresholdValue = 10

if(number4 <thresholdValue || 
    number5 <thresholdValue || number6<thresholdValue){
        console.log("Por lo menos uno es menor")
    }

console.log([number4,number5,number6].some((value)=>value<thresholdValue))

if(number4>number5){
    console.log("El mayor es",number4)
}else if(number5>number4){
    console.log("El mayor es",number5)
}else console.log("Son iguales")

let side = getNumberFromPrompt("side",1)
let width = getNumberFromPrompt("width",1)
let heigth = getNumberFromPrompt("heigth",1)

console.log(side*width*heigth)


function getNumberFromPrompt(text,defaultValue) {
    //return parseInt(prompt(text, defaultValue))
    var toAssign = Math.floor(Math.random()*100)
    console.log(text,toAssign)
    return toAssign
}
