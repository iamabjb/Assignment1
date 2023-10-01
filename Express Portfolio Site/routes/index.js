const express = require('express');
const router = express.Router();

// GET home page.
router.get('/', home);

function home(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Express',
      userName: 'iamabjb'
    }
  );
}

// GET About page.
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', userName: 'iamabjb' });
});

// GET Projects page.
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', userName: 'iamabjb' });
});

module.exports = router;
