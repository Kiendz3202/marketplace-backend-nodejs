const express = require('express');
const route = express.Router();

const { mintNFT } = require('../c../controllers/mintNFT.js');

route.post('/mintnft', mintNFT);

module.exports = route;
