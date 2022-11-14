const express = require('express');
const route = express.Router();

const { getAllItems } = require('../controllers/getallitems');

route.get('/allitems', getAllItems);

module.exports = route;
