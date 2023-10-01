const express = require('express');
const router = express.Router();

/* GET projects listing. */
router.get('/', function(req, res, next) {
  res.render('projects', { 
    title: 'My Projects',
    userName: 'iamabjb' 
  });
});

module.exports = router;
