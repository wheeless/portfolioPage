var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('comingsoon', { title: 'Coming Soon!' });
});
/* GET Utilities page. */
router.get('/utilities', function(req, res, next) {
  res.render('utility', { title: 'Our Utilities' });
});
/* GET Image page. */
router.get('/images', function(req, res, next) {
  res.send('Whatcha Doin?');
});
/* GET Github page. */
router.get('/github', function(req, res, next) {
  res.redirect('https://github.com/wheeless');
});
/* GET Instagram page. */
router.get('/instagram', function(req, res, next) {
  res.redirect('https://www.instagram.com/kwheel_s/');
});
/* GET Linkedin page. */
router.get('/linkedin', function(req, res, next) {
  res.redirect('https://www.linkedin.com/in/kylewheeless/');
});

module.exports = router;
