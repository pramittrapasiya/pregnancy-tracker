const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "registration"
  },
  name: { type: String, required: true },
  profession: { type: String, required: true },
  date: { type: Date, required: true },
  weight: { type: Number, default: 0 , required: true },
  addNote: { type: String},
}, {
  timestamps: true,
});


module.exports = model('Appointment', appointmentSchema);