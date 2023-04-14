const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
  },
  subtitle:{
    type:String,
  },
  board: {
    type: String,
  },
  status: {
    type: String,
  },
  clubID: {
    type: Number,
    unique: true
  },
  description: {
    type: String,
  },
  profilepic: {
    type: String,
  },
  GoalAmount:{
    type:Number,
  },
});

module.exports = mongoose.model("project", projectSchema);