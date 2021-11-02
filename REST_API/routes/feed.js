const express = require('express');

const router = express.Router()

const feedController = require('../controller/feedController');

router.get('/posts', feedController.getPosts)

router.post('/createPost', feedController.createPosts)


module.exports = router;