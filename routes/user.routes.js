const express = require("express");
const app = express.Router();
const User = require("../model/user.model");

// -------------- Register --------
app.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    const oneUser = await User.findOne({ email });

    if (oneUser) {
      return res.status(404).send("User already exist!!");
    }
    await User.create(req.body);
    res.status(201).send("You are successfully registered");
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// -------------- login --------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const oneUser = await User.findOne({ email, password });
    if (!oneUser) {
      return res.status(404).send("Wrong Credential!!");
    }
    return res.status(201).send("You are successfully log in");
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

// -------------- get users --------
app.get("/users", async (req, res) => {
  try {
    const Users = await User.find({});
    res.status(200).send(Users);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

module.exports = app;
