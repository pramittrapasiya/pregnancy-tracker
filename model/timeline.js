const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimelineSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});


module.exports = model('Timeline', TimelineSchema);