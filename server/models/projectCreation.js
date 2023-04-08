
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProjectCreationSchema = new Schema({
    name: String,
    board: String,
    Status: String,
    ClubId: String,
    Goal_Amt: Number,
    tags: [String],
    Subtitle: String,
    PaymentLink: String,
    Video: String,
    imgs: [String],
    CreationDate: { type:Date, default: Date.now}
});

const project = mongoose.model('project', ProjectCreationSchema);

module.exports = project;