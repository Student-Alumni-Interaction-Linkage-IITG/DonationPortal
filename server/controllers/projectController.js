// const Project = require('../models/projectModel.js');


// // GET a single project by ID
// exports.getProjectById = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     console.log(req.params.id);
//     if (!project) throw Error('Project not found');
//     res.json(project);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };