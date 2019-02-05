const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    cardNo: { type: String },
    address: { type: String }

});

let Users = mongoose.model('User', userSchema);

// seeding database -----

// Users.create(
//     {
//         cardNo: '4596',
//         address: '30 eleanor drive glenfield'
//     },
//     {
//         cardNo: '4096',
//         address: '28 eleanor drive glenfield'

//     }

// )

// let admin = Users(
//     {
//         cardNo: '4596',
//         address: '30 eleanor drive glenfield'
//     },
//     // {
//     //     cardNo: '4096',
//     //     address: '28 eleanor drive glenfield'
//     // }
// )

// admin.save();

module.exports = Users;
