const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config();
// importamos las rutas definidas en el archivo task de controllers
const taskRoutes = require('./controllers/task');
const { TOKEN_SECRET, verifyToken } = require('./infrastructure/middleware/validate-jwt');

const users = [];

// inicializamos nuestro app con express
const app = express();

// Indicador de que queremos que reconozca las requests como si fuesen json
app.use(express.json())

//Lo que este con :{name} es path params
app.get('/',verifyToken,async (req,res,next) => {
    // Lo que este en ?{query} es query param
    let fecha = req.query.date;
    console.log(req.user)
    try{
        //objNotDefined.y = 100;
        console.log(fecha);
        // La ruta http://localhost:8080/Diego?date=06-11-1991
        // muestra Hola Diego y en console.log muestra la fecha
        res.send('Hola '+ req.params.name)
    }catch(err){
        console.log("Ha ocurrido un error cabeza")
        next(err)
    }  
})


app.post('/register', async (req,res) =>{
    console.log(req.body)
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password,salt)

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: password
    }

    users.push(newUser)
    res.send({message:'Usuario creado exitosamente'})
})

app.post('/login',async(req,res)=>{
    const user = users.find((u) => u.email == req.body.email);
    const validPassword = await bcrypt.compare(req.body.password,user.password)
    if(!validPassword){
        res.status(401).send({message: 'El usuario no es valido'})
    }else{
        const token = jwt.sign({
            name: user.name,
            id: user.email
        }, TOKEN_SECRET)

        res.send({message:'Login exitoso',token})
    }

})



app.get('/healthcheck',(req,res)=> {
    console.log(users)
    res.sendStatus(204)
})

// Agregamos las rutas de taskRoutes dentro de la ruta base /tasks
app.use('/tasks',taskRoutes)

app.use((err,req,res,next)=>{
    res.status(500)
    console.error(err)
    res.send({error:'Ha ocurrido un error'})
})

app.listen(8080,()=>{
    console.log('I\'m working')
})