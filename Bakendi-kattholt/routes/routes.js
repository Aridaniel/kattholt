const express = require('express');
const router = express.Router();
const kisi = require('../models/kottur');
const mongoose = require('mongoose');
// const ObjectId = require('mongoose').Types.ObjectId;







router.delete('/kittyprofile/:idKottur', (req, res) => {
  
  // const deletekisi = new kisi();
  
  const { idKottur } = req.params;
  console.log(JSON.stringify(idKottur));

  kisi.find({ _id: idKottur }).remove(function (err) {
    if (err) console.log(err);
  });
  res.send(`Cat with the ormerking ${idKottur} was deleted from the database`);
});





// Add a new cat to the DB

router.post('/kittyprofile', (request, response) => {
  kisi.create(request.body);
});






// Get data Cats from DAtabase

router.get('/api', async (req, res) => {
  // Turns the MongoDB data in to an array
  const data = await kisi.find({}, (err, kisur) => {
    // sends out JSON data to the /api
    res.send(JSON.stringify(kisur));
  });
});




// Update Cat


router.put('/kittyprofile/:idKottur', (req, res) => {


  const { idKottur } = req.params;
  console.log(JSON.stringify(idKottur));
  kisi.updateOne({ _id: idKottur }, req.body)
  .then(()=>{
    res.send('Changing data')
    console.log(req.body)

  })
  
});


module.exports = router;
