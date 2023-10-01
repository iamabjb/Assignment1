const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', { 
    title: 'About',
    userName: 'iamabjb' 
  });
});

module.exports = router;
