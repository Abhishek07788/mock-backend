const mongoose = require("mongoose");

const olxSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  category: { type: String },
  image: { type: String },
  location: { type: String },
  postedAt: { type: String },
  price: { type: Number },
});

const Olx = mongoose.model("olx", olxSchema);
module.exports = Olx;
