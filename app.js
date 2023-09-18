const express = require('express')
const esj = require('ejs')
const app = express()
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
const port = 3000
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
