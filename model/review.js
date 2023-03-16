const { Schema, model } = require("mongoose");


const reviewSchema = new Schema({
  __id: { type: String },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

module.exports = model('Review', reviewSchema);