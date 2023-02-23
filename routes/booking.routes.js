const express = require("express");
const app = express.Router();
const Booking = require("../model/booking.model");

// -------------- add booing --------
app.post("/booking", async (req, res) => {
  try {
    await Booking.create(req.body);
    res.status(201).send("Flight Booked successfully");
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// -------------- add booing --------
app.get("/dashboard", async (req, res) => {
  try {
    let allBooking = await Booking.find({}).populate(["user", "flight"]);
    res.status(201).send(allBooking);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

module.exports = app;
