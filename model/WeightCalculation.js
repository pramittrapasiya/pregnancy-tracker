// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema, model } = require("mongoose");

const weightSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "registration"
  },
  date: { type: Date, required: true },
  weight: { type: Number ,required: true},
  // monthNumber : {type : [ Number]}
  monthNumber : [{type:Number}]
  //  calculation : {
  //   weight: [],
  // monthNumber : [],
// }


}, {
  timestamps: true,
});

module.exports = model('weight', weightSchema);



// weight : [
//   {
//   monthNumber : Number,
//   weight : Number}
// ] 