require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/index');
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

//close_project
app.put('/projects/:id/closed',close_project);
