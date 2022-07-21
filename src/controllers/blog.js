const {validationResult} = require('express-validator');

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

    //validasi
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const err = new Error('Iput value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const result = {
        message: "Create Blog Post Succes",
        data: {
            post_id: 1,
            title: "title blog",
           // image: "image.png",
            body: "lorem ipsum dolor",
            created_at: "21/07/2022",
            author: {
                uid: 1,
                name: "testing"
            }
        }
    }
    res.status(201).json(result);
}