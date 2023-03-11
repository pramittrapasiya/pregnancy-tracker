const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  __id: { type: String },
  name: { type: String, required: true },
  profession: { type: String, required: true },
  date: { type: Date, required: true },
  weight: { type: Number, default: 0 , required: true },
  addNote: { type: String},
}, {
  timestamps: true,
});


module.exports = model('Appointment', appointmentSchema);