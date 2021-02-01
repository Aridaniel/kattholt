const express = require('express');
const router = express.Router();
const kisi = require('../models/kottur');
const mongosse = require('mongoose');
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
  const nyrKisi = new kisi(request.body);
  nyrKisi.markModified('heitiKattar');
  nyrKisi
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
