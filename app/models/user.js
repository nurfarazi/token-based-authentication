var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bCrypt = require('bcrypt-nodejs');

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    email: String,
    phone: String,
    address: String,
    conpanyname: String,
    admin: Boolean
}));

var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}