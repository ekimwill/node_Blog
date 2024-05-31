const express=require('express');
const router=express.Router();
const {createBlogSchema}=require('../validations/blog.validation.js');
const validate=require('../middlewares/validate.js');
const{getBlogs, createBlog}=require('../controller/blog.controller.js');


router.use(express.json());
router.get('/blogs',getBlogs);
router.post('/blog',validate(createBlogSchema),createBlog)

module.exports = { blogRouter: router };