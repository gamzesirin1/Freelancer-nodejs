const express = require('express')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const esj = require('ejs')
const app = express()
const dotenv = require('dotenv');
const db = require('./config/db');
dotenv.config();
// Middleware
const myLogger = (req, res, next) => {
	console.log('Middleware Log 1')
	next()
}
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.status(200).render('index')
})
app.get('/add', (req, res) => {
	res.status(200).render('add')
})
app.get('/edit', (req, res) => {
	res.status(200).render('edit')
})
const PORT = process.env.PORT || 5000;

db();

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
