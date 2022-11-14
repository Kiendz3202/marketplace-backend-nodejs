const express = require('express');
const route = express.Router();

const { uploadImage } = require('../controllers/uploadImageController');

route.get('/upload/image', uploadImage);

module.exports = route;
