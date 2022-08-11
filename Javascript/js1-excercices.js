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



console.log("%cEjercicio 4-2 ----------","color:blue")

const salary_ex5 = getNumberFromPrompt("Ingrese le salarie",500) 
const antiquety = getNumberFromPrompt("Ingrese la angigueded",10)
let newSalary = salary_ex5

if(hasEnoughAntiquetityAndIsCurrentlyPoor(salary_ex5,antiquety)){
    newSalary = salary_ex5*1.2;
}else if(hasNotEnoughAntiquetyAndIsCurrentlyPoor(salary_ex5,antiquety)){
    newSalary = salary_ex5*1.05;
}
console.log(newSalary)

function hasNotEnoughAntiquetyAndIsCurrentlyPoor(salary,yearsOfWork) {
    return isCurrentlyPoor(salary) && yearsOfWork < 10
}
function hasEnoughAntiquetityAndIsCurrentlyPoor(salary,yearsOfWork) {
    return isCurrentlyPoor(salary) < 500 && yearsOfWork >= 10
}
function isCurrentlyPoor(salary) {
    return salary < 500
}

console.log("%cEjercicio 5 ----------","color:blue")

let gradeA = getNumberFromPrompt("Nota 1",1)
let gradeB = getNumberFromPrompt("Nota 2",1)
let gradeC = getNumberFromPrompt("Nota 3",1)

const thresholdForPromotion = 7

var result = getAverage(gradeA, gradeB, gradeC)

if(result>=thresholdForPromotion) console.log("%cPROMOTED!!","color:yellow")

function getAverage(gradeA, gradeB, gradeC) {
    return getTotal(gradeA, gradeB, gradeC) / 3
}

function getTotal(gradeA,gradeB,gradeC){
    return gradeA+gradeB+gradeC
}


function getNumberFromPrompt(text,defaultValue) {
    return parseInt(prompt(text, defaultValue))
}