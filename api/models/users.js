var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var jwtKey = require("../../keys");

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: false
  },
  alias: {
    type: String,
    unique: true,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  lastLogin: {
    type: Date,
    defaut: Date.now,
    unique: false,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
},
{
  timestamps: true,
  collection: 'Users'
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    email: this.email,
    name: this.name,
    alias: this.alias,
    lastLogin: this.lastLogin,
    exp: parseInt(expiry.getTime() / 1000),
  }, Object(jwtKey.jwtKeys.secretKey).toString()); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('User', userSchema);
