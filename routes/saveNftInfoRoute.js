const express = require('express');
const route = express.Router();

const { saveNftInfo, updatePurchase } = require('../controllers/saveNftInfo');

route.post('/savenftinfo', saveNftInfo);
route.post('/updatepurchase', updatePurchase);

module.exports = route;
