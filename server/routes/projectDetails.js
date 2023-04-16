const express = require('express');
const router = express.Router();
const {getProjectDetails,getProject}=require('../controllers/projectDetails');

router.get('/details/:id', getProjectDetails);
router.get('/:id', getProject);

module.exports = router;
