const { Schema, model } = require("mongoose");


const reviewSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "registration"
  },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

module.exports = model('Review', reviewSchema);