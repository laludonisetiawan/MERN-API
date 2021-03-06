const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/blog');


// [POST] : /v1/post/blog
router.post('/post', [
    body('title').isLength({min: 5}).withMessage('Input title minimum 5 karakter'), 
    body('body').isLength({min: 5}).withMessage('Input title minimum 5 karakter')], 
    blogController.createBlogPost);


module.exports = router;

