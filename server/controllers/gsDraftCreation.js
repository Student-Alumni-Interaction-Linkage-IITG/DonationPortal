const GSProject = require("../models/gsProject");

exports.getGsDraftProjects = (req,res)=>{
    console.log(user)
    GSProject.find({GSID:`${user}`,Status:"Draft"}).then((data) => {
        res.json(data);
      });
}
