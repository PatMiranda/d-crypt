var mongoose = require( 'mongoose' );

var gamestatsSchema = new mongoose.Schema({
  User_id: {
    type: String,
    unique: false,
    required: true
  },
  UserScore: {
    type: Number,
    unique: false,
    required: false
  }
},
{
  timestamps: true,
  collection: 'GameStats'
});

// userSchema.methods.setPassword = function(password){
//   this.salt = crypto.randomBytes(16).toString('hex');
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
// };

// userSchema.methods.validPassword = function(password) {
//   var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
//   return this.hash === hash;
// };

// userSchema.methods.generateJwt = function() {
//   var expiry = new Date();
//   expiry.setDate(expiry.getDate() + 7);

//   return jwt.sign({
//     _id: this._id,
//     username: this.username,
//     email: this.email,
//     name: this.name,
//     exp: parseInt(expiry.getTime() / 1000),
//   }, Object(jwtKey.jwtKeys.secretKey).toString()); // DO NOT KEEP YOUR SECRET IN THE CODE!
// };

mongoose.model('GameStats', gamestatsSchema);
