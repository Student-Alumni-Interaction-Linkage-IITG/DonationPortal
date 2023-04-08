const express = require('express');

const ongoingProjectRouter = express.Router();

const ongoingProjectController = require('../controllers/projectCreationController');

ongoingProjectRouter.get('/allOngoingProject',ongoingProjectController.getOngoingProjects);

module.exports = ongoingProjectRouter;