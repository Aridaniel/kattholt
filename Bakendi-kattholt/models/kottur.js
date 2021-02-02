const mongoose = require('mongoose');

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
    type: Number
  },
  litur: {
    type: String
  },
  heitiEigandi: {
    type: String
  },
  ktEigandi: {
    type: Number
  },
  heimilisfangEigandi: {
    type: String
  },
  simiEigandi: {
    type: Number
  },
  athugasemdir: {
    type: String
  },
});

module.exports = mongoose.model('kisurtable', kottur);
