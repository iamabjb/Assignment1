const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'My Contact info',
    userName: 'iamabjb' 
  });
});

module.exports = router;
