// NodeJs framework
const express = require('express');
const app = express();
// Library for the MONGO DB
const mongoose = require('mongoose');
// This is for the CRUD to work and hide the DB username and password
const dotenv = require('dotenv');
dotenv.config();
// Importing routes for the API data
const routesUrls = require('./routes/routes');
// Cors is for security
const cors = require('cors');
// connecting the database through mongoose
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Database is connected')
);

// Connectiong Cors for security
app.use(express.json());
app.use(cors());

// importing routes
app.use('/', routesUrls);
app.listen(4000, () => console.log('Server is up and running'));
