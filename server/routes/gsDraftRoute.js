const express = require('express');

const DraftRouter = express.Router();

const gsprojDraftcontroller = require('../controllers/gsDraftCreation');

DraftRouter.get('/Draft',gsprojDraftcontroller.getGsDraftProjects);
module.exports = DraftRouter;