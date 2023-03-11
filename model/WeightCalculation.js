// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema, model } = require("mongoose");

const weightSchema = new Schema({
  user_id: { type: String},
  date: { type: Date, required: true },
  weight: { type: Number ,required: true},
  monthNumber : {type : [ Number]},
  //  calculation : {
  //   weight: [],
  // monthNumber : [],
// }


}, {
  timestamps: true,
});

module.exports = model('weight', weightSchema);