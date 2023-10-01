const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/show', showUser);

function showUser(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Profile',
      userName: 'iamabjb'
    }
  );
}

module.exports = router;
