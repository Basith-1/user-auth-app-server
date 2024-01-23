const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

// register

exports.register = async(req,res) => {
    const { username, email, password } = req.body
    // console.log(`${username}, ${email}, ${password}`);

    try{
        const existingUser = await users.findOne({ email })
        if(existingUser){
            res.status(406).json("Accouont already exist!!!")
        }else{
            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    }catch(err){
        res.status(401).json(`Register API failed, Error ${err}`)
    }
}

// login

exports.login = async(req,res) => {
    const {email, password} = req.body
    try{
        const existingUser = await users.findOne({ email,password })
        if(existingUser){
            const token = jwt.sign({userId : existingUser._id},process.env.JWT_SECRET_KEY)
            res.status(200).json({
                existingUser, token
            }) 
        }
        else{
            res.status(406).json("Incorrect Email/Password") 
        }
    }
    catch(err) {
        res.status(401).json(`Register API Failed, Error: ${err}`)
    }
}