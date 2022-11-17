const express = require('express')
const router = express.Router();
const {add,edit} = require('../services/tasks')
// const service = require('../services/tasks')
// service.add()

const db = require('../models/index')

//Definimos la ruta get que devuelve las tareas
router.get('/',async (req,res,next)=>{
  
    res.send(await db.task.findAll())
  
})
//Definimos la ruta delete que elimina una tarea
router.delete('/:id',async (req,res)=>{
    await db.task.destroy({
      where: {
        id: req.params.id
      }
    })
    res.send({message: 'deleted'})
})

//Definimos la ruta put que actualiza una tarea
router.put('/:id',async (req,res)=>{
    let body = req.body;
    res.send(await db.task.update({description: body.description, priority: body.priority},
      {
        where: {
          id: req.params.id
        }
      }))
})

//Definimos la ruta post que registra una tarea
router.post('/',async (req,res,next)=>{
    let task = req.body;
    try{
      res.send(await db.task.create(add(task)))
    }catch(err){
      if(err.status == undefined) next(err)
      res.status(err.status).send(err.error)
    }
})

module.exports = router


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