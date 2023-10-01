const express = require('express');
const router = express.Router();

/* GET services listing. */
router.get('/', function(req, res, next) {
  res.render('services', { 
    title: 'My Services',
    userName: 'iamabjb' 
  });
});

module.exports = router;
