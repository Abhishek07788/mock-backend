const express = require("express");
const app = express.Router();
const Flights = require("../model/flight.model");

// -------------- post flights --------
app.post("/", async (req, res) => {
  try {
    await Flights.create(req.body);
    res.status(201).send("Flights added successfully");
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// -------------- get flights --------
app.get("/", async (req, res) => {
  try {
    const flights = await Flights.find({});
    res.status(200).send(flights);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// -------------- get by id --------
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const flight = await Flights.findOne({ _id: id });
    res.status(200).send(flight);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// -------------- delete flight --------
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Flights.deleteOne({ _id: id });
    res.status(202).send("flight delete!!");
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// ------------ update flight --------
app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // ------------  update Flights --------
    if (id) {
      await Flights.updateOne({ _id: id }, { $set: req.body });
      return res.status(204).send("Flights update successfully!!");
    }
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

module.exports = app;
