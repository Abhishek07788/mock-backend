const express = require("express");
const UserRouter = require("../Router/user.router");
const emiRouter = require("../Router/emi.router");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./config/db");
dotenv.config();
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/user", UserRouter);
app.use("/emi", emiRouter);

app.get("/", (req, res) => {
  res.send("<h2>Hello</h2>");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
