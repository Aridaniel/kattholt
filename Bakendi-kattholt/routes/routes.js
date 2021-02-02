const express = require('express');
const router = express.Router();
const kisi = require('../models/kottur');
const mongoose = require('mongoose');
// const ObjectId = require('mongoose').Types.ObjectId;

// delete the cat from the DB
router.delete('/kittyprofile/:idKottur', (req, res) => {
  // const deletekisi = new kisi();

  const { idKottur } = req.params;
  console.log(JSON.stringify(idKottur));

  kisi.find({ _id: idKottur }).remove(function (err) {
    if (err) console.log(err);
  });

  res.send(`Cat with the ormerking ${idKottur} was deleted from the database`);
});

// add a new cat to the DB

router.post('/kittyprofile', (request, response) => {
  console.log(request.body);
  // const nyrKisi = new kisi(request.body);
  // nyrKisi.markModified('heitiKattar');
  // nyrKisi
  //   .save()
  //   .then((data) => {
  //     response.json(data);
  //   })
  //   .catch((error) => {
  //     response.json(error);
  //   });
  kisi.create(request.body);
});

router.get('/api', async (req, res) => {
  // Turns the MongoDB data in to an array
  const data = await kisi.find({}, (err, kisur) => {
    // sends out JSON data to the /api
    res.send(JSON.stringify(kisur));
  });
});

router.put('/kittyprofile/:idKottur', async (req, res) => {
  const updateData = await kisi.findOneAndUpdate({id:req.body.idKottur}, (err, kisur) => {
    res.json(idKottur);
  })
  console.log(updateData);
});

module.exports = router;
