const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const userRoute = require("./routes/user.routes");
const flightRoute = require("./routes/flight.routes");
const bookingRoute = require("./routes/booking.routes");

dotenv.config();
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/flights", flightRoute);
app.use("/", userRoute);
app.use("/", bookingRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Mock-10 B23</h1>");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Started at: http://localhost:${PORT}`);
});
