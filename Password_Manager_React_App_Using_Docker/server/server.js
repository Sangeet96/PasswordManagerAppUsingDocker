const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors');

dotenv.config()

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'cyberkey';

console.log(url);

const app = express()
app.use(bodyparser.json());
app.use(cors());

const connectToMongo = async () => {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
connectToMongo();

// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
    // res.send('hello')
})

// save passwords
app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success:true, result: findResult})
    // res.send('hello')
})

// delete passwords
app.delete('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success:true, result: findResult})
    // res.send('hello')
})

app.listen(process.env.PORT,() => {
  console.log(`app listening on port ${process.env.PORT}`)
})