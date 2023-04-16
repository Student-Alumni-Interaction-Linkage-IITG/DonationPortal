const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  UserId: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  projectId:{
    type:{ type: mongoose.Schema.Types.ObjectId, ref: 'project', required: true },
  },
  transactionId:{
    type:String,
    unique:true
  },
  amount:{
    type:Number,
  },
});

module.exports = mongoose.model("transaction", transactionSchema);