const qualifications = [4,8,5,10,11,8,4,5,9,2] 

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

function getResultsByValue(value) {
    //abstracción de función para abstraer lógica de implementación
    if (qualificationsExceedsExpectations(value)) {
        exceedsExpectations++
    } else if (qualificationIsEnough(value)) {
        pass += 1
    } else {
        failed = failed + 1
    }
}

function qualificationIsEnough(qualification) {
    return qualification >= 4
}


let values = ["dsada","flemenflemen","pepe le piu","censurado"]

let result = qualifications.concat(values)

console.log('Resultado del concat',result)
// [4,8,5,10,11,8,4,5,9,12]
// qualificationIsEnough(4)=> 4>=4? si
console.log(qualifications.every(qualificationIsEnough))
console.log(qualifications.every((value)=>{
    console.log(value)
    return value>=4
}))

console.log(qualifications.every((value,index)=>{
    console.log(index)
    return qualificationIsEnough(value)
}))

let allPass = true;
for(let i = 0; i<qualifications.length;i++){
    if(!qualificationIsEnough(qualifications[i])){
        allPass = false;
        break;
    }
}
console.log(allPass)

console.log(qualifications.filter(qualificationsExceedsExpectations))
let newArray = []
for(let i = 0; i<qualifications.length;i++){
    if(qualificationsExceedsExpectations(qualifications[i])){
        newArray.push(qualifications[i]);
    }
}
console.log(newArray)

console.log(qualifications.find((qualification)=> qualification==13))

console.log(qualifications.findIndex((qualification)=> qualification==8))

// El for me permite iterar manejando el contador desde dentro
// de la estructura de bucle
for(let i = 0; i<qualifications.length;i++){
    getResults(i)
}

qualifications.forEach(value =>
    getResults(value)
)
console.log(exceedsExpectations)
console.log(pass)
console.log(failed)

console.log(qualifications.includes(8))
console.log(qualifications.indexOf(8))

console.log(values.join(', sarasa,'))
console.log(qualifications.join(''))

console.log(qualifications.push(10))
console.log(qualifications)
console.log(qualifications.pop())
console.log(qualifications)

console.log(qualifications.sort((a,b)=> b-a))
