
const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        require: true
    }

});

let Login = mongoose.model('Login', userSchema);

module.exports = Login;