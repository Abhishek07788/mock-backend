const express = require("express");
const UserRouter = require("../Router/user.router");
const emiRouter = require("../Router/emi.router");
const DbConnect = require("../config/db");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const mongo_url = process.env.mongo_url || "";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.use("/emi", emiRouter);

app.get("/", (req, res) => {
  res.send("<h2>Hello</h2>");
});

app.listen(PORT, async () => {
  await mongoose.connect(mongo_url);
  console.log("started at: http://localhost:8080");
});
