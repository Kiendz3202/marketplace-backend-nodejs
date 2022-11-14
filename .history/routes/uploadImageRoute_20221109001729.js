const express = require('express');
const route = express.Router();

const { uploadImage } = require('../controllers/uploadImageController');

route.post('/upload/image', uploadImage);

module.exports = route;
