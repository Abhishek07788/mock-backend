const express = require("express");
const Shopping = require("../Schema/shopping.schema");

const app = express.Router();

// --------------- post ----------
app.post("/", async (req, res) => {
  try {
    const shop = await Shopping.create(req.body);
    res.send(shop);
  } catch (e) {
    res.status(404).send("Error");
    // console.log(e);
  }
});

// --------------- get ----------
app.get("/", async (req, res) => {
  try {
    const data = await Shopping.find();
    res.send(data);
  } catch (e) {
    res.status(404).send("Error");
    // console.log(e);
  }
});

// --------------- delete ----------
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Shopping.deleteOne({ _id: id });
    res.send("Deleted");
  } catch (e) {
    res.status(404).send("Error");
    // console.log(e);
  }
});

module.exports = app;
