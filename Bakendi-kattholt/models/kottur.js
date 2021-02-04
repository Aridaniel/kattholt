const mongoose = require('mongoose');

// The Schema for each item in the API

const kottur = new mongoose.Schema({
  heitiKattar: {
    type: String
  },
  kyn: {
    type: String
  },
  aldur: {
    type: Number
  },
  ormerking: {
    type: String
  },
  litur: {
    type: String
  },
  heitiEigandi: {
    type: String
  },
  ktEigandi: {
    type: String
  },
  heimilisfangEigandi: {
    type: String
  },
  simiEigandi: {
    type: String
  },
  athugasemdir: {
    type: String
  },
});

module.exports = mongoose.model('kisurtable', kottur);
