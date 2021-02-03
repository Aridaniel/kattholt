const express = require('express');
const router = express.Router();
// importing the Schema to each route
const kisi = require('../models/kottur');
const mongoose = require('mongoose');

router.delete('/kittyprofile/:idKottur', (req, res) => {
  const { idKottur } = req.params;
  kisi.find({ _id: idKottur }).remove(function (err) {
    if (err) console.log(err);
  });
  res.send(`Cat with the ormerking ${idKottur} was deleted from the database`);
});

// Add a new cat to the DB
router.post('/kittyprofile', (request, response) => {
  kisi.create(request.body);
});

// Get data Cats from DB and display on the client side
router.get('/api', async (req, res) => {
  // Turns the MongoDB data in to an array
  const data = await kisi.find({}, (err, kisur) => {
    // sends out JSON data to the /api
    res.send(JSON.stringify(kisur));
  });
});

<<<<<<< HEAD



// Update Cat


=======
// Update Cat info in the DB
>>>>>>> 6e3d0a26b1e7a8f54b4a20a5a5c27de32a746e35
router.put('/kittyprofile/:idKottur', (req, res) => {
  const { idKottur } = req.params;
  kisi.updateOne({ _id: idKottur }, req.body).then(() => {
    res.send('Changing data');
  });
});

module.exports = router;
