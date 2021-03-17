var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coming Soon!' });
});

router.get('/images', function(req, res, next) {
  res.send('Whatcha Doin?');
});

router.get('/github', function(req, res, next) {
  res.redirect('https://github.com/wheeless');
});

router.get('/instagram', function(req, res, next) {
  res.redirect('https://www.instagram.com/kwheel_s/');
});

module.exports = router;
