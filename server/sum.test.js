const {sum} = require('./services/operations')
const { add } = require('./services/tasks')

test('Sumar 1 +2 da 3',()=>{
    expect(sum(1,2)).toBe(3)
})

test('Sumar 1 +4 da 5',()=>{
    expect(sum(1,4)).toBe(5)
})

test('Can add a new task to my task list',()=>{
    const givenATask = { 
        description: "sarasa",
        priority: 'prioridad-baja'
    }
    const addedTask = add(givenATask)

    expect(addedTask).not.toBe(null)
})
/*
test('Can\'t add a new task to my task list when task already exists',()=>{
    const givenATask = { 
        description: "Hacer preguntas en Slack",
        priority: 'priority-low'
    }
    const addedTask = add(givenATask)
    expect(addedTask).toBe(null)
})*/