//-----import external libraries---
const express = require('express');
const createError = require('http-errors');
const axios = require('axios');
const cors = require('cors');

//import connect DB
const connectDB = require('./config/db');

const app = express();
env.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//-----------------ERROR HANDLE---------------------

//handle routes that dont exist
app.use((req, res, next) => {
	next(createError.NotFound('this route doesnt exist'));
});

app.use((err, req, res, next) => {
	res.json({
		status: err.status || 500,
		message: err.message,
	});
});
//-------------------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('connect successfully');
});
