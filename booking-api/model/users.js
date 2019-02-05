const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type: String },
    address: { type: String }

});

let Users = mongoose.model('User', userSchema);

let admin = Users({
    name: 'Punya',
    address: '30 eleanor drive glenfield'
})

//admin.save();

module.exports = Users;
