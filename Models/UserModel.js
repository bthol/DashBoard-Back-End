const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema ({
    username: String,
    password: String,
    log: {type: Boolean, default: false}
}, {timestamps = true});

const Recipe = mongoose.model('UserModel', UserModel);

module.exports = UserModel