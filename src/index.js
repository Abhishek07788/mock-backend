const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const ShoppingRoute = require("./Routes/shopping.routes");
const BookmarkRoute = require("./Routes/bookmark.routes");
dotenv.config();
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/shopping", ShoppingRoute);
app.use("/bookmark", BookmarkRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});

