var express = require('express');
var router = express.Router();
var controller = require('../controllers/quote_controller.js')

router.get('/', controller.showQuote)
router.post('/', controller.createQuote)

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
