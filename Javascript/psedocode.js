// ej 1

let userInput = prompt("Ingrese un número",5); //Esto es siempre un string
let numberOfUserInput = parseInt(userInput); // convierte el string en un número

let multipleOf5 = false;
let multipleOf3 = false;

if(numberOfUserInput%3 == 0 && numberOfUserInput%5 == 0){
    multipleOf3 = true;
    multipleOf5 = true;
}else if(numberOfUserInput%3 == 0){
    multipleOf3 = true;
}else if(numberOfUserInput%5 == 0){
    multipleOf5 = true;
}
