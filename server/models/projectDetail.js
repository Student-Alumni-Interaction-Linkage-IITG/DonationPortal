const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProjectDetailSchema = new Schema({
    Transaction_list:{type:[{
        transactionId:String,
        Transaction_amt:Number,
        Transaction_date: Date
    }],default:null},
    ProjectId: String,
    Collected_Amt: {type:Number, default:0}
   
});

const projectdetail = mongoose.model('project_detail', ProjectDetailSchema);

module.exports = projectdetail;