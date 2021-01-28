const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
//import routesUrls from "routes"
const cors = require('cors');

dotenv.config();

mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('DAtabase is connected')
);

app.use(express.json());
app.use(cors());



const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DATABASE_ACCESS;
const client = new MongoClient(uri, { useNewUrlParser: true });



app.get('/api', (req, res) => {
  client.connect(async (err) => {
    const collection = client.db('kisurtable').collection('kisurtables');
    
    const data = await collection.find().toArray();

    res.send(JSON.stringify(data));
  });
});

app.use('/', routesUrls);
app.listen(4000, () => console.log('Server is up and running'));
