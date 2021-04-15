const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));