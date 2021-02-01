const mongoose = require('mongoose');

const kottur = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
  },
  heitiKattar: {
    type: String,
    required: true,
  },
  kyn: {
    type: String,
    required: false,
  },
  aldur: {
    type: Number,
    required: false,
  },
  ormerking: {
    type: Number,
    required: false,
  },

  litur: {
    type: String,
    required: false,
  },
  heitiEigandi: {
    type: String,
  },
  ktEigandi: {
    type: Number,
  },
  heimilisfangEigandi: {
    type: String,
  },
  simiEigandi: {
    type: Number,
  },
  athugasemdir: {
    type: String,
  },
});

module.exports = mongoose.model('kisurtable', kottur);
