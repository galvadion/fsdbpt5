test('Given a revenue of 50, should show a comission of 10',()=>{
    let given = 50
    let result = calculatedComission(given)
    expect(result).toBe(10)
})

test('Given a reveneu of 500.000, should show a comission of 4.57',()=>{
    let given = 500000
    let result = calculatedComission(given)
    expect(result).toBe(4.57)
})

test('Given a reveneu of 470.000, should show a comission of 4.57',()=>{
    let given = 470000
    let result = calculatedComission(given)
    expect(result).toBe(4.68)
})

test('Given a reveneu of 35000, should show a comission of 9.29',()=>{
    let given = 35000
    let result = calculatedComission(given)
    expect(result).toBe(9.29)
})

test('Given a reveneu of 39000, should show a comission of 9.26',()=>{
    let given = 39000
    let result = calculatedComission(given)
    expect(result).toBe(9.26)
})

test('Given a reveneu of 510.000, should show a comission of 4.57',()=>{
    let given = 510000
    let result = calculatedComission(given)
    expect(result).toBe(4.54)
})

class Tier{
    constructor(topRange,baseFee,xsFee,highRange){
        this.topRange = topRange;
        this.baseFee = baseFee;
        this.xsFee = xsFee;
        this.highRange = highRange;
    }

    getXS(revenue){
        return revenue - this.highRange
    }

    getComissionFromXS(revenue){
        return this.xsFee * this.getXS(revenue)
    }

    getMoneyToPay(revenue){
        return this.getComissionFromXS(revenue) + this.baseFee
    }
}

const tiers = [
    new Tier(10000,0,.10,0),
    new Tier(40000,1000,.09,10000),
    new Tier(85000,3700,.08,40000),
    new Tier(100000,7300,.07,85000),
    new Tier(125000,8350,.06,100000),
    new Tier(150000,9850,.05,125000),
    new Tier(250000,11100,.041,150000),
    new Tier(400000,15200,.0325,250000),
    new Tier(500000,20075,.0275,400000),
    new Tier(-1,22825,.035,500000)
]

const calculatedComission = (revenue) =>{
    let tier = tiers.find(withinRange(revenue))
    if(tier == null){
        tier = tiers[tiers.length-1]
    }
    return getCommision(tier.getMoneyToPay(revenue),revenue)
}

const withinRange = (revenue) => (tier) => revenue <= tier.topRange

//const getMoneyToPay = (tier, revenue)=> tier.getComissionFromXS(revenue) + tier.baseFee

//const getComissionFromXS = (tier, revenue) => tier.xsFee * tier.getXS(revenue)

const getCommision = (howMuchToPay, revenue) => Math.round(((howMuchToPay/revenue)*100)*100)/100

/*
const calculatedComission = (revenue) =>{
    let tier = tiers.find((tier)=>tier.highRange <= revenue && revenue <= tier.topRange)
    if(tier == null){
        let xs = revenue-500000
        let xsFeeAsMoney = 0.035*xs
        let moneyToPay = xsFeeAsMoney+22825;
        return Math.round(((moneyToPay/revenue)*100)*100)/100
    } 
    let xs = revenue-tier.highRange
    let xsFeeAsMoney = tier.xsFee*xs
    let moneyToPay = xsFeeAsMoney+tier.baseFee;
    return Math.round(((moneyToPay/revenue)*100)*100)/100
}
*/
