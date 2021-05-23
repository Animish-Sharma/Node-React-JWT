require('dotenv').config()
const secret = process.env.secret
const jwt = require('jsonwebtoken');


exports.auth = (req,res,next) => {
    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];
    if(!token){
        return res.status(500).json({ 'error':"Token Not Found" })
    };
    jwt.verify(token,secret,(err,user)=>{
        if(err){
            if(err)return res.status(401).json({ "error":"Invailid Token" })
            req.user = user
        }
    });

    next()
}