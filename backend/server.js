const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection with database is established!");
});

app.use("/exercise", exerciseRouter);
app.use("/users", userRouter);

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port port!`);
});
