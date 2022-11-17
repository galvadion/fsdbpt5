
const add = (task)=>{
    if(task.description == "") {
        throw {status:515,error:"El texto de la descripción no puede ser vacio"}
    }
    if(task.priority == "") {
        throw {status:516,error:"La prioridad no puede ser vacia"}
    }
    if(task.description.length> 255) {
        throw {status:516,error:"El texto no puede ser tan largo"}
    }
    if(task.priority != 'prioridad-baja' && task.priority != 'prioridad-alta' && task.priority != 'prioridad-media'){
        throw {status:517,error:"La prioridad no puede ser elegida al azar"}
    }
    return task    
}
const edit = (task) => {
    return task
}


let tasks = [
    {
        "task": "Hacer preguntas en Slack",
        "priority": "priority-low",
        "id": 1
      },
      {
        "task": "Limpiar el cuarto",
        "priority": "priority-medium",
        "id": 2
      },
      {
        "task": "asdsada",
        "priority": "priority-low",
        "id": 3
      }
]

module.exports = {add,edit }