require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/authRoutes');
const sendMail = require('./controllers/sendemail');

const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json())

//db connection
const dbURI = 'mongodb://localhost:27017/donation_portal';
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(8000);
        console.log('connected and listening at 8000')
    })
    .catch((err) => console.log(err));

//routes
app.use('/api/user', userRoutes);

//send email
app.get('/sendmail',sendMail);