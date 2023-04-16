const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

//login
const loginUser = async (req,res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email,password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({user, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//signup
const signupUser = async (req,res) => {
    const {name, email, password, designation} = req.body

    try{
        const user = await User.signup(name,email,password,designation)

        //create token
        const token = createToken(user._id)

        res.status(200).json({user, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const googleLogin = async (req,res) => {
    const {email, name} = req.body;
    try{
        const user = await User.findOne({ email })

        if(!user){

            const newUser = await User.create({
                name: name,
                email: email,
                password: process.env.DEFAULT_GOOGLE_PSW,
                designation: "Alumni"
            })
            
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {signupUser, loginUser, googleLogin}