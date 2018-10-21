var mongoose = require( 'mongoose' );

var receivedMsgSchema = new mongoose.Schema({
  ReceivedFrom_id: {
    type: String,
    unique: false,
    required: true
  },
  ReceivedFrom_Alias: {
    type: String,
    unique: true,
    required: true
  },
  DecryptedMsg: {
    type: String,
    unique: false,
    required: true
  },
  EncryptedMsg: {
    type: String,
    unique: false,
    required: true
  },
  EncryptionKey: {
    type: Number,
    unique: false,
    required: true
  },
  AttemptsAllowed: {
    type: Number,
    unique: false,
    required: true,
  },
  AttemptsRemaining: {
    type: Number,
    unique: false,
    required: true
  },
  Solved: {
    type: Boolean,
    unique: false,
    default: false
  },
  MessageScore: {
    type: Number,
    unique: false,
    required: false
  }
},
{
  timestamps: true,
  collection: 'ReceivedMessages'
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

mongoose.model('ReceivedMessages', receivedMsgSchema);
