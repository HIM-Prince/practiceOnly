const mongoose = require('mongoose');

const config = mongoose.connect('mongodb://prince:qJ5DCekheWq8HVr8@ac-bmxnyzj-shard-00-00.erdgtso.mongodb.net:27017,ac-bmxnyzj-shard-00-01.erdgtso.mongodb.net:27017,ac-bmxnyzj-shard-00-02.erdgtso.mongodb.net:27017/?ssl=true&replicaSet=atlas-4nc9p5-shard-0&authSource=admin&appName=Cluster0').then(()=>{console.log('connection sucessful')}).catch((err)=>{console.log(`error encountered ${err}`)});


// const uri = "mongodb+srv://prince:<OSEy1omon>@cluster0.erdgtso.mongodb.net/?appName=Cluster0";

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);


// module.exports = config;