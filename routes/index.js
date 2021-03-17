var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coming Soon!' });
});

router.get('/images', function(req, res, next) {
  res.send({ title: 'Whatcha Doin?' });
});

module.exports = router;
