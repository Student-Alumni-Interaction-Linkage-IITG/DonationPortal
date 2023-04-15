const express = require('express');

const projectCreationRouter = express.Router();

const gsprojdetailcontroller = require('../controllers/gsProjectController');

projectCreationRouter.get('/gsProject',gsprojdetailcontroller.getGsProjects);

module.exports = projectCreationRouter;