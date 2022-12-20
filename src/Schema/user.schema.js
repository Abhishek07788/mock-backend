const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, require: true },
  score: { type: Number, required: true },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;


