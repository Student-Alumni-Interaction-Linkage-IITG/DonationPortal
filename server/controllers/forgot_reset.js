const User = require('../models/userModel');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring'); 
const res = require("express/lib/response");
const validator = require('validator');
const sendResetPasswordMail = async(name ,email , token) =>{
    try{
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:"",
                pass:""
            }
        });
        const mailOptions = {
            from: "",
            to:email,
            subject:'For Reset Password',
            html:'<p> Hii ' +name+',Please copy the link and <a href="http://127.0.0.1:8000/api/user/reset-password?token='+token+'">reset your password </a>'

        }
        transporter.sendMail(mailOptions,function(error,info){
            if(error)
            {console.log(error);}
            else
            {
                console.log("Mail has been sent-",info.response);
            }

        })
    }
    catch(error){
        res.status(400).send({success:false,msg:"nahi gaya"});
    }
}

const forget_password = async(req,res)=>{
    console.log("fsjhd");
    try{
        const email = req.body.email;
        console.log(email);
       
       const userData = await User.findOne({email : email});
       console.log(userData);
       if(userData)
       {
            
            const randomString = randomstring.generate();
            await User.updateOne({email: email} , {$set:{token:randomString}});
           
            sendResetPasswordMail(userData.name,email,randomString);
            res.status(200).send({success:true , msg:"Please check your inbox of mail and reset your password"})
       }
       else
       {
        if(!validator.isEmail(email))
       {
            res.status(200).send({success:true , msg:"Please write a valid email"});
       }
       else
       {
        res.status(200).send({success:true,msg:"This Email does not exist"});
       }
        
       }
    }catch(error){
        res.status(400).send({success:false , msg:error.message});
    }
}

const reset_password = async(req,res) =>{
    try{
        const token = req.query.token;
        const tokenData = await User.findOne({token : token});
        if(tokenData){
            const password = req.body.password;
            const newPassword = await securePassword(password);
            User.findByIdAndUpdate({ _id:tokenData._id },{$set:{password:newPassword,token:''}},{new:true}); //update hone ke baad joh data milta h voh old vaala hota h
            res.status(200).send({success:true,msg:"User Password has been reset",data:userData});
        }
        else{
            res.status(200).send({success:false , msg:"This link has expired"});
        }
    }catch(error)
    {
        res.status(400).send({success:false , msg:error.message});
    }
}

module.exports = {forget_password , reset_password};