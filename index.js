const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const UserRouter = require("./Routes/user.routes");
const sprintRouter = require("./Routes/sprint.routes");
const taskRouter = require("./Routes/tasks.routes");


dotenv.config();
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.use("/sprint", sprintRouter);
app.use("/task", taskRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to PayPal</h1>");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Started at: http://localhost:${PORT}`);
});
