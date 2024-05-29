require("dotenv").config();
const express = require("express");
const model = require("./models/blog.model.js");
const mongoose = require("mongoose");
const os = require("os");
const { blogRouter } = require("./routes/blog.route");
const config =require('./config/config.js');
const {errorHandler,errorConverter}=require('./middlewares/errors.js');

process.env.UV_THREADPOOL_SIZE = os.cpus().length;
mongoose
  .connect(config.dbConnection)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const app = express();

app.use(express.json());
app.use("/", blogRouter);
app.use(errorHandler);
app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}...`);
});
