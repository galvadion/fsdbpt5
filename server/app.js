const express = require('express');

const app = express();

//Lo que este con :{name} es path params
app.get('/:name',(req,res) => {
    // Lo que este en ?{query} es query param
    let fecha = req.query.date;
    console.log(fecha);
    // La ruta http://localhost:8080/Diego?date=06-11-1991
    // muestra Hola Diego y en console.log muestra la fecha
    res.send('Hola '+ req.params.name)
})

app.listen(8080,()=>{
    console.log('I\'m working')
})