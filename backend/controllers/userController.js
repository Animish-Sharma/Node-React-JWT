const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()
const secret = process.env.secret

exports.login = async(req,res)=>{
    let { email,password } = req.body;

    try{

        const user = await User.findOne({ email: email})
        if(!user) return res.status(404).json({"error":"User does not exist"});

        if(!bcrypt.compareSync(password,user.password)) return res.status(401).json({"error":"Invalid password"});

        const userWithToken = await generateToken(user);
        return res.json(userWithToken)
    }catch(e){
        console.log(e)
    }
}

exports.register = async(req,res)=>{
    try{
        
        const user = await User.create(req.body);
        const userWithToken = await generateToken(user);
        return res.status(200).json(userWithToken);
    }catch(e){
        return res.status(500).json({ "error":e.message })
    }
}

exports.update = async(req,res)=>{
    try {
        const { params: { id }} = req;

        const user = await User.findById({_id:id});
        req.body.firstName ? user.firstName = req.body.firstName : null;
        req.body.lastName ? user.lastName = req.body.lastName : null;
        req.body.email ? user.email = req.body.email : null;
        req.body.password ? user.password = req.body.password : null;
        await user.save();
        user.password = null
        return res.json(user)
    } catch (e) {
        return res.status(500).json({ "error":e.message})
    }
}

const generateToken = (user) =>{
    user.password = null;
    const token = jwt.sign({user},secret,{
        expiresIn:846000000
    });

    return {...{user},...{token}}
}