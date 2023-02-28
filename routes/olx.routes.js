const express = require("express");
const app = express.Router();
const Olx = require("../model/olx.schema");

// ------------ post date -------
app.post("/", async (req, res) => {
  try {
    await Olx.create(req.body);
    res.status(200).send("Data Added");
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

// ----------- get data ---------
app.get("/", async (req, res) => {
  try {
    const oldData = await Olx.find({});
    res.send(oldData);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

// ----------- delete data ---------
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Olx.deleteOne({ _id: id });
    res.status(200).send("Data Deleted");
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

// ----------- Search by name ---------
app.get("/search/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const searchedData = await Olx.find({ name: name });
    res.status(200).send(searchedData);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

// ----------- Filter by category ---------
app.get("/filter/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const filteredData = await Olx.find({ category: category });
    res.status(200).send(filteredData);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

// ----------- sort by date  ---------
app.get("/", async (req, res) => {
  const { page, limit = 4, sort = "asc" } = req.query;
  try {
    const searchedData = await Olx.find({})
      .sort({
        date: sort == "asc" ? 1 : -1,
      })
      .limit((page - 1) * limit)
      .limit(limit);
    res.status(200).send(searchedData);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

module.exports = app;
