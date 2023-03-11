const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  // __id: { type: String, required: true },
  user_id: [{
    type: Schema.Types.ObjectId,
    ref: "registration"
}],
  title: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: Number, default : 0 },
}, {
  timestamps: true,
});

module.exports = model('Todolist', todoSchema);