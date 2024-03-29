var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  price: Number,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var Product = mongoose.model('products', productSchema);
module.exports = Product