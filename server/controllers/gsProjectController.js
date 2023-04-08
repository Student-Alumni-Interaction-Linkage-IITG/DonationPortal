const GSProject = require("../models/gsProject");

exports.getGsProjects = (req,res)=>{
    GSProject.find().then((data) => {
        res.json(data);
      });
}
exports.newgsdetail = async (req, res) =>{
          new GSProject({
          GSID:req.ClubId,
          Project:{
            ProjectID: req._id,
            Status: req.Status,
          }
      }).save();
}