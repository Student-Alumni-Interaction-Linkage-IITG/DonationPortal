const { MongoClient, ObjectId } = require('mongodb');
const dbName = 'myproject';

// Connection URL
const url = 'mongodb://localhost:27017';


const close_project = async (req, res) => {

    console.log("Updating project status to closed")

    const projectId = req.params.id;

    const client = new MongoClient(url);

    client.connect(function(err) {
        if (err) {
            console.log(err);
            res.status(500).send('Error connecting to database');
            alert("Error");
        }

        console.log('Connected successfully to server');

        const db = client.db(dbName);

        // Update the status of the project to "closed"
        const collection = db.collection('projects');
        collection.updateOne(
            { _id: new ObjectId(projectId) },
            { $set: { status: 'closed' } },
            function(err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error updating project status');
                }

                console.log(`Updated ${result.modifiedCount} project(s)`);
                res.send(`Project ${projectId} status updated to "closed"`);
                client.close();
            }
        );
    });
}

module.exports = {close_project};