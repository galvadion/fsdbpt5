const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors');
require('dotenv').config();
// importamos las rutas definidas en el archivo task de controllers
const taskRoutes = require('./controllers/task');
const userRoutes = require('./controllers/user')
// inicializamos nuestro app con express
const app = express();

// Indicador de que queremos que reconozca las requests como si fuesen json
app.use(express.json())

app.use(cors())

app.get('/healthcheck',(req,res)=> {
    console.log(users)
    res.sendStatus(204)
})

// Agregamos las rutas de taskRoutes dentro de la ruta base /tasks
app.use('/tasks',taskRoutes)
app.use('/users',userRoutes)

app.use((err,req,res,next)=>{
    res.status(500)
    console.error(err)
    res.send({error:'Ha ocurrido un error'})
})

app.listen(8080,()=>{
    console.log('I\'m working')
})