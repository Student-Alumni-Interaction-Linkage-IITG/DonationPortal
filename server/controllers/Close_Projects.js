const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devjyoti598:54KOMu51DRKd5KAS@donationdata.y1cbqqs.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const Project = require("../models/projectCreation")

const close_project = async (req, res) =>  {
    const { id } = req.params;

    try {
        const project = await Project.findByIdAndUpdate(id, { status: "closed" }, { new: true });
        if (!project) {
          return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports = {
    close_project
}
