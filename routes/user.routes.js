const express = require("express");
const User = require("../model/user.model");
const CryptoJS = require("crypto-js");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    return res.send({ message: "user already exist!!", status: false });
  }
});

// ------------- register ---------
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(201)
        .send({ message: "user already exist!!", status: false });
    } else {
      await User.create({
        email: email,
        // Encrypt
        password: CryptoJS.AES.encrypt(password, "!@#$%").toString(),
      });
      return res
        .status(200)
        .send({ message: "register successfully", status: true });
    }
  } catch (e) {
    res.status(404).send({ Error: e.message, status: false });
  }
});

// ------------ login ------------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(201)
        .send({ message: "Wrong Credential!!", status: false });
    }

    // Decrypt
    const decryptPass = CryptoJS.AES.decrypt(user.password, "!@#$%");
    const originalPass = decryptPass.toString(CryptoJS.enc.Utf8);

    if (originalPass === password) {
      return res
        .status(200)
        .send({ message: "login successfully", status: true });
    } else {
      return res
        .status(201)
        .send({ message: "Wrong Credential!!", status: false });
    }
  } catch (e) {
    res.status(404).send({ Error: e.massage, status: false });
  }
});

module.exports = app;
