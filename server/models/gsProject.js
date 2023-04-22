const mongoose = require('mongoose');

const { Schema } = mongoose;

const GsProjectSchema = new Schema ({
    GSID: String,
    ProjectID: String,
    Status: String,
})

const GSProject = mongoose.model('GSproject', GsProjectSchema);

module.exports = GSProject;