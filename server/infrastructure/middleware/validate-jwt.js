const jwt = require('jsonwebtoken')

const TOKEN_SECRET = 'ClaveParaFirma'

const verifyToken = (req,res,next)=>{
    const token = req.header('Authorization');
    console.log(token)
    try{
        const verified = jwt.verify(token.split(' ')[1],TOKEN_SECRET)
        req.user = verified
        next()
    }catch(err){
        res.status(400).send({error:'El token no es valido'})
    }
}

module.exports = {
    verifyToken,
    TOKEN_SECRET
}