const mongoose = require('mongoose');

const tyndurKisi = new mongoose.Schema({
  heitiKattar: {
    type: String,
    required: true,
  },
  kyn: {
    type: String,
    required: true,
  },
  Aldur: {
    type: String,
    required: true,
  },
  Örmerking: {
    type: String,
    required: false,
  },
  Nr: {
    type: String,
    required: true,
  },
  Litur: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('kisurtable', tyndurKisi);
