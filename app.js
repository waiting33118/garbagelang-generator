const express = require('express')
const app = express()
const exphdbs = require('express-handlebars')
const bodyParser = require('body-parser')
const garbagelangGenerator = require('./garbagelang-generator')

const hostname = '127.0.0.1'
const port = 3000

app.engine('handlebars', exphdbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('home')
})

app.post('/', (req, res) => {
	const sentence = garbagelangGenerator(req.body)
	res.render('home', { sentence })
})

app.listen(port, hostname, () => {
	console.log(`The server is running on http://${hostname}:${port}`)
})
