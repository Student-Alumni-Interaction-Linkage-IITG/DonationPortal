const express = require('express');

const allProjectRouter = express.Router();

const projcreationcontroller = require('../controllers/projectCreationController');

allProjectRouter.get('/allProject',projcreationcontroller.getProjects);

module.exports = allProjectRouter;