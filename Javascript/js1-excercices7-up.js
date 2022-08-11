
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


function getNumberFromPrompt(text,defaultValue) {
    //return parseInt(prompt(text, defaultValue))
    var toAssign = Math.floor(Math.random()*100)
    console.log(text,toAssign)
    return toAssign
}
