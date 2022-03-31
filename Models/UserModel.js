const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: String,
    password: String,
    log: {in: Boolean, default: false}
}, {timestamps: true});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel