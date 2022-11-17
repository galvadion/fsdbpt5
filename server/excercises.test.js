describe('Excercies', ()=>{
    test('Given a number return the largest with its digit',()=>{
        let aNumber = 213;
        let result = solutionB(aNumber);
        expect(result).toBe(321)
    })

    test('Given a another number return the largest with its digit',()=>{
        let aNumber = 553;
        let result = solutionB(aNumber);
        expect(result).toBe(553)
    })
})

const solutionB = (candidate)=>{
    let arrayOfNumbs= Array.from(String(candidate),num => Number(num))
    return Number(arrayOfNumbs.sort((a,b)=>b-a).join().replaceAll(',',''))
}


describe('Excercies B', ()=>{
    test('Given an array 14-132',()=>{
        let aNumber = [1,4,-1,3,2];
        let result = solutionA(aNumber);
        expect(result).toBe(4)
    })

    test('Given a another number return the largest with its digit',()=>{
        let aNumber = [1,-1,-1,3,2];
        let result = solutionA(aNumber);
        expect(result).toBe(2)
    })
})

const solutionA = (source) => {
    let centinel = 0;
    let lenght = 1;
    while(source[centinel] != -1){
        centinel = source[centinel]
        lenght ++;
    }
    return lenght
}