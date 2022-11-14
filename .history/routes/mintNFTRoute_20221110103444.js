const express = require('express');
const route = express.Router();

const { mintNFT } = require('../controllers/mintNFT');

route.post('/mintnft', mintNFT);

module.exports = route;
