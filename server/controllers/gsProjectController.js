const GSProject = require("../models/gsProject");

exports.getGsProjects = (req,res)=>{
    GSProject.find().then((data) => {
        res.json(data);
      });
}
exports.newgsdetail = async (req,user) =>{
          new GSProject({
          GSID:user,
          ProjectID: req._id,
          Status: req.Status,
      }).save();
}