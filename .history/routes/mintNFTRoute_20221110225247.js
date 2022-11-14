const express = require('express');
const route = express.Router();

const { saveNftInfo } = require('../controllers/saveNftInfo');

route.post('/savenftinfo', saveNftInfo);

module.exports = route;
