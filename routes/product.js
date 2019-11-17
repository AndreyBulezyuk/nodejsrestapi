var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const product = require('../schema/product')
mongoose.connect('mongodb://localhost/nodejsrestapiboostrap', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


router.get('/', async function (req, res) {
    const products = await product.find().exec()
    res.send(products)
})

router.post('/', function (req, res) {
    product.create({
        title: 'Product A',
        price: 99,
        body: "This is a Product Description."
    })
    res.send('Product Created')
})

router.patch('/:id', async function (req, res) {
    const result = await product.updateMany({
        "_id": String(req.params.id)
    }, { $set: req.body })
    res.send(result)
})

router.delete('/:id', async function (req, res) {
    const result = await product.deleteMany({
        "_id": String(req.params.id)
    })
    res.send(result)
})

module.exports = router