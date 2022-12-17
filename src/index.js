const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const JobRouter = require("./Router/job.router");

dotenv.config();
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/job", JobRouter);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
