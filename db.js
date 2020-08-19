// const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://root:16826@cluster0-7kwmc.gcp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology:true }, (err) => { if (!err) { console.log("DB CONNECTION SUCCESS") } else { console.log("ERROR" + err) } });

// // const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://root:16826@cluster0-7kwmc.gcp.mongodb.net/test?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, { useNewUrlParser: true });
// // client.connect(err => {
// //     const collection = client.db("test").collection("devices");
// //     // perform actions on the collection object
// //     console.log(err);
// //     client.close();
// // });


const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongodb + srv://root:16826@cluster0-7kwmc.gcp.mongodb.net/campsite?retryWrites=true&w=majority
// Connecting to the database
mongoose.connect("mongodb://localhost:27017/tea_slasscom", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});