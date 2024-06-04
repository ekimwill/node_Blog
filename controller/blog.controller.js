const catchAsync = require("../utils/CathAsync.js");
const blogService = require("../services/blog.service.js");
const httpStatus = require("http-status");
const { message } = require("../validations/env.validation.js");
const { http } = require("winston");

const createBlog = catchAsync(async (req, res) => {
  await blogService.createBlog(req.body);
  res
    .status(httpStatus.CREATED)
    .send({ success: true, message: "Blog created successfully" });
});

const getBlogs = catchAsync(async (req, res) => {
  const blogs = await blogService.getBlogs();
  res.status(httpStatus.OK).send(blogs);
});

module.exports = { getBlogs, createBlog };
