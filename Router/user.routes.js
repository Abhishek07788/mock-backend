const express = require("express");
const User = require("../Schema/user.schema");
const app = express.Router();

// ---------------- (user Details) -----------
app.post("/", async (req, res) => {
  const { name, level, score } = req.body;
  try {
    const UserDetails = await User.create({ name, level, score });
    res.send(UserDetails);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------------- (get user) -----------
app.get("/", async (req, res) => {
  // const { name, level } = req.body;
  try {
    const user = await User.find();
    res.send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

// -------------(Random word)----------------
app.get("/randomword", (req, res) => {
  try {
    let randomWord = "";
    let words = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < Math.floor(1 + Math.random() * 10); i++) {
      randomWord += words[Math.floor(Math.random() * 26)];
    }
    res.send(randomWord);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = app;
