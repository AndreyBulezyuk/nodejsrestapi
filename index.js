const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const router = express.Router()
const product = require('./product')

app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json())
app.use('/product', product)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))