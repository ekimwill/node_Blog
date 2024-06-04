const Blog = require("../models/blog.model.js");

const createBlog = async (blog) => {
  await Blog.create(blog);
}

const getBlogs = async () => {
    const blogs = await Blog.find();
  return blogs
}