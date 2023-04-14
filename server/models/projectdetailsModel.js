const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const projectdetailsSchema=new Schema({
    projectId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project' },
    transactions:{
        transaction: {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            transactionId: { type: String, required: true },
          },
    },
    collectedamount:{
        type:Number,
    },
    mailingList: [{ type: String}],
    pdfDocument: {
        type:String,
      },
    video:{
        type:String,
    },
    

})

module.exports=mongoose.model("projectdetails",projectdetailsSchema);