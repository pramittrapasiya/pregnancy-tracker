const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    // data: Buffer,
    // contentType: String
    type : String
},
  date: { type: Date, required: true }, 
}, {
  timestamps: true,
});


module.exports = model("blog" , blogSchema)