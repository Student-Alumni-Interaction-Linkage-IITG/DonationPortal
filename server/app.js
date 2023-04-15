require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/index');
const Razorpay = require('razorpay');
const sendMail = require('./controllers/sendemail');

const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json())

//db connection
const dbURI = 'mongodb+srv://devjyoti598:54KOMu51DRKd5KAS@donationdata.y1cbqqs.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(8000);
        console.log('connected and listening at 8000')
    })
    .catch((err) => console.log(err));

//routes
app.use('/api/user', userRoutes);

app.use('',indexRoutes.ProjectCreationRoute);
app.use('',indexRoutes.allProjectsRouter);
app.use('',indexRoutes.gsProjectRoute);
app.use('',indexRoutes.ongoingProjectsRoute);

//send email
//send email
app.get('/sendmail',sendMail);

//payment
var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })
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
         var expectedSignature = crypto.createHmac('sha256', '<YOUR_API_SECRET>')
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