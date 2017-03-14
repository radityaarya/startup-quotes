const Quote = require('../models/quote_model');

module.exports = {
  createQuote: (req, res) =>{
    var newQuote = new Quote({
      quote : req.body.quote,
      author: req.body.author,
      status: req.body.status
    })
    newQuote.save( err => {
      if(err) throw error
      res.send(newQuote)
    })
  },

  showQuote: (req, res) => {
    Quote.find({}, (err, data) => {
      if(err) res.send(err)
      res.render('index', data[Math.floor(Math.random() * data.length)]);
    })
  },


}
