var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var jwtKey = require('../../keys');

var auth = jwt({
  secret: Object(jwtKey.jwtKeys.secretKey).toString(),
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// leaderboard display
router.get('/leaderboard', function (req, res) {
  console.log('I received a GET request');
  user.find({ "user":"score" }, function(err, users) {
    if(!err){
      res.send(users);
    }
    else{
        res.send('could not retrived data');
  }
  });

});

// get user messages
router.get('/messages', function (req, res) {
  console.log('I received a GET request');
  user.find({ "user":"messages" }, function(err, users) {
    if(!err){
      res.send(users);
    }
    else{
        res.send('could not retrived data');
  }
  });

});


module.exports = router;
