const Blog = require("../models/blog.model.js");
const catchAsync = require("../utils/CathAsync.js");

const getBlogs =catchAsync( async (req, res) => {
      const blogs = await Blog.find({});
      res.send(blogs);
    })
const createBlog = catchAsync(async (req, res) => {
  await Blog.createe(req.body);
  res.send({ success: true, message: "Blog created successfully" });
});

module.exports = { getBlogs, createBlog };




