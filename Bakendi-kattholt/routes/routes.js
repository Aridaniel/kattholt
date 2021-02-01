const express = require('express');
const router = express.Router();
const kisi = require('../models/kottur');
const mongosse = require('mongoose');
// const ObjectId = require('mongoose').Types.ObjectId;

router.delete('/ormerking', (req, res) => {
  const deletekisi = new kisi();
  const { ormerking } = req.params;
  console.log(ormerking);
  deletekisi.find({ ormerking }).remove(function (err) {
    if (err) console.log(err);
  });

  res.send(`Cat with the Örmerking ${ormerking} was deleted from the database`);
});






router.post('/kittyprofile', (request, response) => {
  const nyrKisi = new kisi({
    heitiKattar: request.body.heitiKattar,
    kyn: request.body.kyn,
    aldur: request.body.aldur,
    ormerking: request.body.ormerking,
    nr: request.body.nr,
    litur: request.body.litur,
    heitiEigandi: request.body.heitiEigandi,
    ktEigandi: request.body.ktEigandi,
    heimilisfangEigandi: request.body.heimilisfangEigandi,
    simiEigandi: request.body.simiEigandi,
    athugasemdir: request.body.athugasemdir,
  });
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
