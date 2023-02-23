const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  //   _id: mongoose.Schema.Types.ObjectId,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: "flight" },
});

const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;
