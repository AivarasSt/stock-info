const { MongoClient } = require('mongodb');
require('dotenv').config()

const { DB_CONNECTION } = process.env;
const client = new MongoClient(DB_CONNECTION);

const insertNewLog = async (title, content, timestamp) => {
  try {
    const database = client.db("logger");
    const collection = database.collection("logs");
    const doc = {
      timestamp: timestamp,
      title: title,
      content: content,
    }
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.log(error)
  }
}

module.exports = insertNewLog;
