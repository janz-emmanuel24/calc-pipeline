const mongoose = require('mongoose');

const calcSchema = new mongoose.Schema({
  calResult: Number,
  firstNumber: Number,
  secondNumber: Number,
  operator: String,
});

module.exports = mongoose.model('CalculatedResults', calcSchema);
