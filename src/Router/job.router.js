const express = require("express");
const Job = require("../Schema/job.schema");

const app = express.Router();



// --------------- POst ---------------
app.post("/", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.send("Data Added");
  } catch (e) {
    res.status(404).send(e);
  }
});


// -------------- Get All -------------------
app.get("/", async (req, res) => {
  try {
    const job = await Job.find();
    res.send(job);
  } catch (e) {
    res.status(404).send("Error");
  }
});


// ----------------- Search -----------------

app.get("/:language", async (req, res) => {
  const { language } = req.params;
  try {
    const job = await Job.find({ language: language });
    res.send(job);
  } catch (e) {
    res.status(404).send("Error");
  }
});


// ------------- Filter ----------------
app.get("/filter/:role", async (req, res) => {
  const { role } = req.params;
  try {
    const job = await Job.find({ role: role });
    res.send(job);
  } catch (e) {
    res.status(404).send("Error");
  }
});
module.exports = app;
