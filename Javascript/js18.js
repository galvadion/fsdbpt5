let value = 30
let money = 50

let expectedCoinsOfTen = 2

let coinsOfTen = 0
let coinsOfFive = 0

calculateCoins(money,value)

console.log(coinsOfTen == expectedCoinsOfTen)

value = 35
money = 50
coinsOfTen = 0
coinsOfFive = 0

expectedCoinsOfTen = 1
let expectedCoinsOfFive = 1

calculateCoins(money,value)

console.log(coinsOfTen == expectedCoinsOfTen)
console.log(coinsOfFive == expectedCoinsOfFive)



function calculateCoins(money,value) {
    let difference = money - value
    coinsOfTen = Math.floor(difference / 10)
}

