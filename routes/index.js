var express = require('express');
var router = express.Router();
const Url = require('../models/Url');
/* GET Home page. */
router.get('/', function (req, res, next) {
  res.render('comingsoon', { title: 'Coming Soon!' });
});
/* GET Utilities page. */
router.get('/utilities', function (req, res, next) {
  res.render('utility', { title: 'Our Utilities' });
});
/* Shrek page */
router.get('/shrek', function (req, res, next) {
  res.render('shrek', { title: 'DONKEY!' });
});
/* GET Image page. */
router.get('/images', function (req, res, next) {
  res.redirect('/shrek');
});
/* GET Github page. */
router.get('/github', function (req, res, next) {
  res.redirect('https://github.com/wheeless');
});
/* GET Instagram page. */
router.get('/instagram', function (req, res, next) {
  res.redirect('https://www.instagram.com/kwheel_s/');
});
/* GET Linkedin page. */
router.get('/linkedin', function (req, res, next) {
  res.redirect('https://www.linkedin.com/in/kylewheeless/');
});
/* GET Meeting page. */
router.get('/meeting', function (req, res, next) {
  res.redirect('https://calendly.com/kyle-wheeless/');
});
/* GET Zoom page. */
router.get('/zoom', function (req, res, next) {
  res.redirect('https://exeterlms.zoom.us/my/kyle.w');
});

router.get('/:shortUrl', async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
