const Project = require("../models/projectCreation");
const projectdetail = require("../models/projectDetail");
const GSProject = require("../models/projectDetail");
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
          console.log(result)
          newgsdetail(result);
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