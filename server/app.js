require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/index');
const Razorpay = require('razorpay');
const sendMail = require('./controllers/sendemail');
const protectedRoutes = require('./routes/protectedRoutes')


const {close_project} = require('./controllers/Close_Projects.js');

// mongoose.connect('mongodb+srv://devjyoti598:54KOMu51DRKd5KAS@donationdata.y1cbqqs.mongodb.net/?retryWrites=true&w=majority');

const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())

//db connection
const dbURI = process.env.DB;
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(8000);
        console.log('connected and listening at 8000')
    })
    .catch((err) => console.log(err));

    const dbName = 'myproject';

//routes
app.use('/api/user', userRoutes);
app.use('',indexRoutes.allProjectsRouter);
app.use('/api/protected', protectedRoutes);
app.use('/donate',(req,res)=>{
    res.sendFile('standard.html',{ root: __dirname})
})
//send email
//send email
app.get('/sendmail',sendMail);

//payment
var instance = new Razorpay({ key_id: 'rzp_test_hS39rzOAkoUXur', key_secret: 'YOUR_SECRET' })
app.post('/create/orderId',(req,res)=>{
    console.log("create orderId requeested",req.body);
    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function(err, order) {
        console.log(order);
        req.send({orderId: order.id})
      });

app.post("/api/payment/verify",(req,res)=>{

        let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
         var crypto = require("crypto");
         var expectedSignature = crypto.createHmac('sha256', 'XMEatNw15E8WJEKl6WnbnFs3')
                                         .update(body.toString())
                                         .digest('hex');
                                         console.log("sig received " ,req.body.response.razorpay_signature);
                                         console.log("sig generated " ,expectedSignature);
         var response = {"signatureIsValid":"false"}
         if(expectedSignature === req.body.response.razorpay_signature)
          response={"signatureIsValid":"true"}
             res.send(response);
         });
       
      //front end integration needed
})
//close_project
app.put('/projects/:id/closed',close_project);
