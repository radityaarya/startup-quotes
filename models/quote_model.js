var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var quotesSchema = new Schema({
  quote: String,
  author: String,
  status: String
},
{ timestamps: true }
)

module.exports = mongoose.model('Quotes', quotesSchema)
