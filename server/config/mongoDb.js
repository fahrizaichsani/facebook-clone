require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const database = client.db('facebook-clone');
    const users = database.collection('users');
    const user = await users.find().toArray();
    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

const database = client.db('facebook-clone')

module.exports = { run, database }
