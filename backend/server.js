const express = require('express');
const app = express();
// for connecting to mongoDB
const mongoose = require('mongoose');
// used to hide passwords
const dotenv = require('dotenv');
dotenv.config();
// For security
const cors = require('cors');
app.use(cors());
// Importing routes from directory
const routesUrls = require('.routes/routes');

app.use(express.json());

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log('Database is connected')
);

app.use('/kettir', routesUrls);

app.listen(4000, () => console.log('Server is up and running'));
