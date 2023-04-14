const express = require('express');
const router = express.Router();
const Project = require('../models/projectModel.js');
const ProjectDetails = require('../models/projectdetailsModel.js');
const Transaction=require('../models/transactionModel.js');
const ObjectId = require('mongodb').ObjectId; 

router.get('/details/:id', async (req, res) => {
  try {
    const projectId = req.params.id;    
    console.log(projectId);
    const o_id= new ObjectId(projectId.toString());
    const project = await Project.findById(o_id);
    const projectDetails = await ProjectDetails.findOne({ projectId: projectId });
    const transaction=await Transaction.findOne({projectId:o_id});
    console.log(projectDetails);
    console.log(transaction);
    console.log(project);
    if (!project) {
      console.log("none");
      return res.status(404).json({ message: `Project not found/${projectId}` });
    }

   // return res.json({ project, projectDetails });
   const data = { ...project._doc, ...projectDetails._doc,...transaction._doc };
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    console.log(projectId);
    const project = await Project.find({_id:projectId});
    if (!project) {
      return res.status(404).json({ message: `Project not found/${projectId}` });
    }
   // return res.json({ project, projectDetails });
   const data = { ...project._doc};
   console.log(data);
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
