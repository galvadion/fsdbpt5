console.log("Ejercicio 0 ----------")

let name = "Diego Becco"
let salary = 4000
const age = 30

console.log("Ejercicio 1 ----------")
let year = getNumberFromPrompt("Ingrese el año",2022)
let month = getNumberFromPrompt("Ingrese el mes",8)
let day = getNumberFromPrompt("Ingrese el día",10)
if(isChristmass(day,month)){
    console.log("It's christmass")
}

function isChristmass(day,month) {
    return day == 25 && month == 12
}

console.log("Ejercicio 3 ----------")

let valueA = getNumberFromPrompt("Valor 1",1)
let valueB = getNumberFromPrompt("Valor 2",1)
let valueC = getNumberFromPrompt("Valor 3",1)

if(valueA == valueB && valueB == valueC){
    console.log((valueA+valueB) *valueC)
}else{
    console.log("Los 3 tristes tigres no son iguales")
}

console.log("%cEjercicio 4 ----------","color:blue")

let x = getNumberFromPrompt("Valor x",1)
let y = getNumberFromPrompt("Valor y",1)

if(x>0 && y>0){
    console.log("Esta en cuadrante 1")
}else if(x>0 && y<0) console.log("Esta en el cuadrante 4")
else if(x<0 && y>0) console.log("Cuadrante 2")
else console.log("Cuadrante 3")


function getNumberFromPrompt(text,defaultValue) {
    return parseInt(prompt(text, defaultValue))
}