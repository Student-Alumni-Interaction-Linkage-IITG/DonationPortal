const Project = require('../models/projectCreation.js');
const ProjectDetails = require('../models/projectDetail.js');
const Transaction=require('../models/transactionModel.js');
const ObjectId = require('mongodb').ObjectId; 

const getProjectDetails=async (req, res) => {
try {
    const projectId = req.params.id;    
    const o_id= new ObjectId(projectId);
    const project = await Project.findOne({ _id: o_id });
    const projectDetails = await ProjectDetails.findOne({ projectId: projectId });
    const transaction=await Transaction.findOne({projectId:o_id});
    if (!project) {
      return res.status(404).json({ message: `Project not found/${projectId}` });
    }

   // return res.json({ project, projectDetails });
   const data = { ...project._doc, ...projectDetails._doc,...transaction._doc };
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getProject=async (req, res) => {
    try {
      const projectId = req.params.id;
      const project = await Project.findOne({_id:projectId});
      if (!project) {
        return res.status(404).json({ message: `Project not found/${projectId}` });
      }
     // return res.json({ project, projectDetails });
     const data = { ...project._doc};
      res.json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

module.exports={getProjectDetails,getProject}