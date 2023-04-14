require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userProjectRoutes = require('./routes/userProjectRoutes');
const indexRoutes = require('./routes/index');

const sendMail = require('./controllers/sendemail');
const {close_project} = require('./controllers/Close_Projects.js');

// mongoose.connect('mongodb+srv://devjyoti598:54KOMu51DRKd5KAS@donationdata.y1cbqqs.mongodb.net/?retryWrites=true&w=majority');

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

    const dbName = 'myproject';

//routes
app.use('/api/user', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/projects', profileRoutes);

app.use('',indexRoutes.ProjectCreationRoute);
app.use('',indexRoutes.allProjectsRouter);
app.use('',indexRoutes.gsProjectRoute);
app.use('',indexRoutes.ongoingProjectsRoute);

//send email
//send email
app.get('/sendmail',sendMail);

//close_project
app.put('/projects/:id/closed',close_project);