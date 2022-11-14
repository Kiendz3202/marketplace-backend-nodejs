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
