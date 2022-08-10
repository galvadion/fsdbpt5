const qualifications = [4,8,5,10,11,8,4,5,9,12] 

let exceedsExpectations = 0
let pass = 0
let failed = 0
let counter = 0

const qualificationsExceedsExpectations = (qualification) => 
    qualification >= 8

    /*
        El while me obliga a declarar el contador 
        por fuera del bucle
    */
while(counter < qualifications.length){
    /* los parentesis rectos (corchetes),
        nos indican que valor del arreglo a evaluar
    */  
    getResults(counter)
    counter++
}

// El for me permite iterar manejando el contador desde dentro
// de la estructura de bucle
for(let i = 0; i<qualifications.length;i++){
    getResults(i)
}

console.log(exceedsExpectations)
console.log(pass)
console.log(failed)

function getResults(counter) {
    //abstracción de función para abstraer lógica de implementación
    if (qualificationsExceedsExpectations(qualifications[counter])) {
        exceedsExpectations++
    } else if (qualificationIsEnough(qualifications[counter])) {
        pass += 1
    } else {
        failed = failed + 1
    }
}

function qualificationIsEnough(qualification) {
    return qualification >= 4
}



