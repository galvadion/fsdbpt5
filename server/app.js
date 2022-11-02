const express = require('express');
require('dotenv').config();
// importamos las rutas definidas en el archivo task de controllers
const taskRoutes = require('./controllers/task')

// inicializamos nuestro app con express
const app = express();

// Indicador de que queremos que reconozca las requests como si fuesen json
app.use(express.json())

//Lo que este con :{name} es path params
app.get('/',(req,res) => {
    // Lo que este en ?{query} es query param
    let fecha = req.query.date;
    console.log(fecha);
    // La ruta http://localhost:8080/Diego?date=06-11-1991
    // muestra Hola Diego y en console.log muestra la fecha
    res.send('Hola '+ req.params.name)
})

// Agregamos las rutas de taskRoutes dentro de la ruta base /tasks
app.use('/tasks',taskRoutes)

app.listen(8080,()=>{
    console.log('I\'m working')
})