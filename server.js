const express = require("express");
const app = express()
const { blogRouter } = require("./routes/blog.route");
const { errorHandler, errorConverter } = require("./middlewares/errors.js");
const ApiError = require("./utils/ApiError.js");
const httpStatus = require("http-status");


;

app.use(express.json());

app.use(blogRouter);

app.use(errorConverter);
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});
app.use(errorHandler);

module.exports = app;
