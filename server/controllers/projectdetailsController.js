// const Project = require('../models/projectModel');
// const ProjectDetails = require('../models/projectdetailsModel');

// // Get project by ID with project details
// exports.getProjectByIdWithDetails = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project) {
//       console.log("not found project");
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     const projectDetails = await ProjectDetails.findOne({ projectId: project._id });
//     if (!projectDetails) {
//       return res.status(404).json({ message: 'Project details not found' });
//     }

//     res.json({ project, projectDetails });
//     console.log(res);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
