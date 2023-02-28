const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const olxRouter = require("./routes/olx.routes");

dotenv.config();
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/olx", olxRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Mock-12 B23</h1>");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Started at: http://localhost:${PORT}`);
});
