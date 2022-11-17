const {sub} = require('./services/operations')

test('Restar 1  a 2 da 1',()=>{
    expect(sub(2,1)).toBe(1)
})