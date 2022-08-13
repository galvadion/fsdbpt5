/*
PRECONDICIÓN: 
La máquina cuenta con 30 monedas de 10 y 50 monedas de 5.
El precio de todos los productos es múltiplo de 5
La máquina soporta solo billetes uruguayos (50, 100, 200, 500, 1.000, 2.000)

Se ingresa el valor del producto (múltiplo de 5).
Se ingresa el dinero entregado en la máquina.
Se debe imprimir cuantas monedas de 10 y cuántas de 5 hay que entregar.
En caso que el cambio no alcance se imprime “no hay cambio suficiente”
*/

//Givens
let givenAProductCost = 30
let givenHowMuchIPay = 50

//When
let change = calculateCoins(givenHowMuchIPay,givenAProductCost)

// Expected
let expectedCoinsOfTen = 2

console.log(change.coinsOfTen == expectedCoinsOfTen)

//Given
givenAProductCost = 35
givenHowMuchIPay = 50

//When
change = calculateCoins(givenHowMuchIPay,givenAProductCost)
//Expected
expectedCoinsOfTen = 1
let expectedCoinsOfFive = 1

console.log(change.coinsOfTen == expectedCoinsOfTen)
console.log(change.coinsOfFive == expectedCoinsOfFive)


// TEST -3 When the product cost 10 and i pay 320, receive 30 coins of 10 and 2 of 5
//Given
givenAProductCost = 10
givenHowMuchIPay = 320

change = calculateCoins(givenHowMuchIPay,givenAProductCost)

//Expected
expectedCoinsOfTen = 30
expectedCoinsOfFive = 2
//Assert
console.log(change.coinsOfTen == expectedCoinsOfTen)
console.log(change.coinsOfFive == expectedCoinsOfFive)

function calculateCoins(money,value) {
    let change = money - value
    let coinsOfTen = Math.min(Math.floor(change / 10),30)
    return {
        coinsOfTen : coinsOfTen,
        coinsOfFive : (change-(coinsOfTen*10))/5
    }
}

