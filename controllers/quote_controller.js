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

  seed: (req, res) => {
    Quote.insertMany([
      {
        quote : "Waiting for perfect is never as smart as making progress.",
        author: "Seth Godin",
        status: "founder, Squindo"
      },{
        quote : "Don't worry about failure; you only have to be right once.",
        author: "Drew Houston",
        status: "co-founder Dropbox"
      },
      {
        quote : "It's not about ideas. It's about making ideas happen.",
        author: "Scott Belsky",
        status: "founder, Behance"
      },
      {
        quote : "Global vision, local win.",
        author: "Jack Ma",
        status: "founder, Alibaba"
      },
      {
        quote : "The lean startup method is not about cost, it is about speed.",
        author: "Eric Ries",
        status: "author of The Lean Startup"
      },
    ]).then(res.send('seeds success!'))
  },

  showQuote: (req, res) => {
    Quote.find({}, (err, data) => {
      if(err) res.send(err)
      res.render('index', data[Math.floor(Math.random() * data.length)]);
    })
  },


}
