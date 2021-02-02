// NodeJs framework
const express = require('express');
const app = express();
// Library for the MONGO DB
const mongoose = require('mongoose');
// This is for the CRUD to work
const dotenv = require('dotenv');
dotenv.config();
// Importing routes for the API data
const routesUrls = require('./routes/routes');
//import routesUrls from "routes"
const cors = require('cors');
// connecting the database
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Database is connected')
);

app.use(express.json());
app.use(cors());

// API that gets the data from the MongoDB
// const MongoClient = require('mongodb').MongoClient;
// const { GrUserSettings } = require('react-icons/gr');
// const uri = process.env.DATABASE_ACCESS;
// const client = new MongoClient(uri, { useNewUrlParser: true });

app.use('/', routesUrls);
app.listen(4000, () => console.log('Server is up and running'));
