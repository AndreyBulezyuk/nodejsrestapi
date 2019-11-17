const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const product = require('./routes/product')

app.get('/', (req, res) => res.send('Hello from German IT Academy!'))
app.use(bodyParser.json())
app.use('/product', product)
app.listen(3000, () => console.log(`Example app listening on port 3000!`))