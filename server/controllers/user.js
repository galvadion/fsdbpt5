const express = require('express')
const router = express.Router();
const { TOKEN_SECRET, verifyToken } = require('../infrastructure/middleware/validate-jwt');

const users = [];



//Lo que este con :{name} es path params
router.get('/',verifyToken,async (req,res,next) => {
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


router.post('/register', async (req,res) =>{
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

router.post('/login',async(req,res)=>{
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


module.exports = router