const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  airline: { type: String },
  flightNo: { type: String },
  departure: { type: String },
  arrival: { type: String },
  departureTime: { type: String },
  arrivalTime: { type: String },
  seats: { type: Number },
  price: { type: Number },
});

const Flight = mongoose.model("flight", flightSchema);
module.exports = Flight;
