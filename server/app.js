require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/authRoutes');
const projectDetailsRoutes = require('./routes/projects.js');

const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json())

//db connection
const dbURI = `mongodb+srv://admin:Enterpassword@crude-app.mpvvulz.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(8000);
        console.log('connected and listening at 8000')
    })
    .catch((err) => console.log(err));

//routes
app.use('/api/user', userRoutes);
app.use('/api/project',projectDetailsRoutes);