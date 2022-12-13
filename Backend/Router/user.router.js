const express = require("express");
const User = require("../Schema/user.schema");

const app = express.Router();

// --------------- (SignUp) ------------------
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      res.send({ message: "user already exist!", status: false });
    } else {
      const NewUser = await User.create({ name, email, password });
      res.send({ message: "user are signup", status: true });
    }
  } catch (e) {
    res.status(404).send("something is wrong!");
  }
});

// --------------- (Login) ------------------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.send({
        name: user.name,
        email: user.email,
        message: "you are loggedIn successfully",
        status: true,
      });
    } else {
      res.send({ message: "Wrong Credential!", status: false });
    }
  } catch (e) {
    res.status(404).send("something is wrong!");
  }
});
module.exports = app;
