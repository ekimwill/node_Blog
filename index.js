require("dotenv").config();
const config = require("./config/config.js");
const model = require("./models/blog.model.js");
const mongoose = require("mongoose");
const os = require("os");
const http = require("http");
const app = require("./server.js");
const { error } = require("console");
process.env.UV_THREADPOOL_SIZE = os.cpus().length;


mongoose
  .connect(config.dbConnection)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const httpServer = http.createServer(app);
const server = httpServer.listen(config.port, () => {
  console.log(`Listening on port ${config.port}...`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unExpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};
process.on("uncaughtException", unExpectedErrorHandler);
process.on("unhandledRejection", unExpectedErrorHandler);
