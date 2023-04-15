const Project = require("../models/projectCreation");
const projectdetail = require("../models/projectDetail");
const GSProject = require("../models/gsProject")
const { getGsDraftProjects } = require("./gsDraftCreation");
const { newgsdetail } = require("./gsProjectController");
exports.createproject = async (req, res) => {
    try {
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
        // console.log(req);
        const user = req.headers.user
        //console.log(user)
        //console.log(req.body.Status)
        if(req.body.Status=="Draft"){
            GSProject.find({GSID:`${user}`,Status:"Draft"}).then((data) => {
              // console.log(data)
              data.map(item=>{
                //console.log(item.ProjectID,item.id)
                Project.deleteOne({ _id:{ "$gte": item.ProjectID} })
                //.then(e=>console.log(e))
                GSProject.deleteOne({ _id:{ "$gte": item.id }})
                //.then(e=>console.log(e))
              })
          });

        }
        new Project({
        name: req.body.name,
        board: req.body.board,
        Status: req.body.Status,
        ClubId: req.body.ClubId,
        Goal_Amt: req.body.Goal_Amt,
        tags: req.body.tags,
        Subtitle: req.body.Subtitle,
        PaymentLink: req.body.PaymentLink,
        Video: req.body.Video,
        img: req.body.img 
      }).save().then((result) => {
          //console.log(user)
          newgsdetail(result,user);
          if((result.Status.toLowerCase())=== "approved"){
                      new projectdetail({
                        ProjectId: result._id
                    }).save();}
      });
                    
      console.log("good");
      return res.status(200).json({
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
      });
    }
  };

exports.getProjects = (req, res) => {
    Project.find().then((data) => {
      res.json(data);
    });
  };

exports.getOngoingProjects = (req, res) => {
    Project.find({Status:"Ongoing"}).then((data) => {
      res.json(data);
    });
  };