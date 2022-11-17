const { add } = require('./tasks')

test('Can\'t add a new task when priority is empty',()=>{
    const givenATask = { 
        description: "sarasa",
        priority: ''
    }
    expect(()=>add(givenATask)).toThrow(Error({status:516,error:"La prioridad no puede ser vacia"}))
})

test('Can\'t add a new task when description is empty',()=>{
    const givenATask = { 
        description: "",
        priority: 'fafafafa'
    }
    expect(()=>add(givenATask)).toThrow(Error({status:515,error:"El texto de la descripción no puede ser vacio"}))
})

test('Can\'t add a new task when priority  is not a valid option',()=>{
    const givenATask = { 
        description: "fafafafa",
        priority: 'fafafafa'
    }
    expect(()=>add(givenATask)).toThrow(Error({status:517,error:"La prioridad no puede ser elegida al azar"}))
})


