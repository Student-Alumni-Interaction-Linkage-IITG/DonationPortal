const express = require('express');

const projectCreationRouter = express.Router();

const projcreationcontroller = require('../controllers/projectCreationController');

projectCreationRouter.post('/newProject',projcreationcontroller.createproject);

module.exports = projectCreationRouter;